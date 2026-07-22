#!/usr/bin/env node
/**
 * Fetch PolicyBazaar sitemap index, child sitemaps, and page HTML.
 *
 * Usage:
 *   node scripts/fetch-policybazaar-sitemap-pages.mjs
 *   node scripts/fetch-policybazaar-sitemap-pages.mjs --sitemaps-only
 *   node scripts/fetch-policybazaar-sitemap-pages.mjs --pages-only
 *   node scripts/fetch-policybazaar-sitemap-pages.mjs --limit 50
 */

import { mkdir, readFile, writeFile, access, appendFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "data", "policybazaar-sitemap");
const SITEMAP_INDEX_URL = "https://www.policybazaar.com/sitemap.xml";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const args = process.argv.slice(2);
const sitemapsOnly = args.includes("--sitemaps-only");
const pagesOnly = args.includes("--pages-only");
const limitIdx = args.indexOf("--limit");
const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : Infinity;
const delayMs = 400;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      Accept: "application/xml,text/xml,text/html,*/*",
    },
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }

  return response.text();
}

function slugFromSitemapUrl(url) {
  const name = url.split("/").pop() || "sitemap.xml";
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}

function htmlPathForUrl(url) {
  const parsed = new URL(url);
  let pathname = parsed.pathname;
  if (pathname.endsWith("/")) pathname += "index";
  if (!pathname.endsWith(".html")) pathname += ".html";

  const relative = path.join(parsed.hostname, pathname.replace(/^\//, ""));
  return path.join(OUT_DIR, "html", relative);
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function ensureDirs() {
  await mkdir(path.join(OUT_DIR, "child-sitemaps"), { recursive: true });
  await mkdir(path.join(OUT_DIR, "html"), { recursive: true });
}

async function collectSitemapsAndUrls() {
  console.log(`Fetching sitemap index: ${SITEMAP_INDEX_URL}`);
  const indexXml = await fetchText(SITEMAP_INDEX_URL);
  await writeFile(path.join(OUT_DIR, "sitemap-index.xml"), indexXml, "utf8");

  const childSitemapUrls = extractLocs(indexXml);
  console.log(`Found ${childSitemapUrls.length} child sitemaps`);

  const allPageUrls = new Set();
  const childMeta = [];

  for (let i = 0; i < childSitemapUrls.length; i++) {
    const sitemapUrl = childSitemapUrls[i];
    const slug = slugFromSitemapUrl(sitemapUrl);
    const outFile = path.join(OUT_DIR, "child-sitemaps", slug);

    let childXml;
    if (await fileExists(outFile)) {
      childXml = await readFile(outFile, "utf8");
      process.stdout.write(`[${i + 1}/${childSitemapUrls.length}] cached ${slug}\n`);
    } else {
      process.stdout.write(`[${i + 1}/${childSitemapUrls.length}] fetching ${slug}... `);
      childXml = await fetchText(sitemapUrl);
      await writeFile(outFile, childXml, "utf8");
      console.log("done");
      await sleep(delayMs);
    }

    const locs = extractLocs(childXml);
    const pageUrls = locs.filter((loc) => !loc.endsWith(".xml"));
    for (const pageUrl of pageUrls) allPageUrls.add(pageUrl);

    childMeta.push({
      sitemapUrl,
      file: `child-sitemaps/${slug}`,
      urlCount: pageUrls.length,
    });
  }

  const urls = [...allPageUrls].sort();
  await writeFile(
    path.join(OUT_DIR, "manifest.json"),
    JSON.stringify(
      {
        fetchedAt: new Date().toISOString(),
        sitemapIndex: SITEMAP_INDEX_URL,
        childSitemapCount: childSitemapUrls.length,
        pageUrlCount: urls.length,
        childSitemaps: childMeta,
      },
      null,
      2
    ),
    "utf8"
  );
  await writeFile(path.join(OUT_DIR, "urls.json"), JSON.stringify(urls, null, 2), "utf8");

  console.log(`\nCollected ${urls.length} unique page URLs`);
  return urls;
}

async function fetchPages(urls) {
  const targetUrls = Number.isFinite(limit) ? urls.slice(0, limit) : urls;
  console.log(`Fetching HTML for ${targetUrls.length} pages...`);

  let ok = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < targetUrls.length; i++) {
    const url = targetUrls[i];
    const outPath = htmlPathForUrl(url);
    await mkdir(path.dirname(outPath), { recursive: true });

    if (await fileExists(outPath)) {
      skipped++;
      continue;
    }

    try {
      const html = await fetchText(url);
      if (html.includes("Access Denied") && html.length < 2000) {
        throw new Error("Access Denied");
      }
      await writeFile(outPath, html, "utf8");
      ok++;
      process.stdout.write(
        `[${i + 1}/${targetUrls.length}] ok ${url} (${Math.round(html.length / 1024)} KB)\n`
      );
    } catch (error) {
      failed++;
      const message = error instanceof Error ? error.message : String(error);
      process.stdout.write(`[${i + 1}/${targetUrls.length}] FAIL ${url} — ${message}\n`);
      await appendFile(
        path.join(OUT_DIR, "errors.jsonl"),
        JSON.stringify({ url, error: message, at: new Date().toISOString() }) + "\n",
        "utf8"
      );
    }

    await sleep(delayMs);
  }

  console.log(`\nHTML fetch complete: ${ok} saved, ${skipped} skipped, ${failed} failed`);
}

async function main() {
  await ensureDirs();

  let urls;
  const urlsFile = path.join(OUT_DIR, "urls.json");

  if (pagesOnly && (await fileExists(urlsFile))) {
    urls = JSON.parse(await readFile(urlsFile, "utf8"));
    console.log(`Loaded ${urls.length} URLs from urls.json`);
  } else {
    urls = await collectSitemapsAndUrls();
  }

  if (!sitemapsOnly) {
    await fetchPages(urls);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
