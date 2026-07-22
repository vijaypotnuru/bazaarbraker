import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "partners");

const partners = [
  { slug: "aditya-birla-health", domain: "adityabirlacapital.com" },
  { slug: "axis-max-life", domain: "axismaxlife.com" },
  { slug: "bajaj-allianz", domain: "bajajallianz.com" },
  { slug: "hdfc-ergo", domain: "hdfcergo.com" },
  { slug: "hdfc-life", domain: "hdfclife.com" },
  { slug: "icici-lombard", domain: "icicilombard.com" },
  { slug: "icici-prudential", domain: "iciciprulife.com" },
  { slug: "kotak-life", domain: "kotaklife.com" },
  { slug: "lic-of-india", domain: "lic.in" },
  { slug: "manipal-cigna", domain: "manipalcigna.com" },
  { slug: "niva-bupa", domain: "nivabupa.com" },
  { slug: "pnb-metlife", domain: "pnbmetlife.com" },
  { slug: "reliance-general", domain: "reliancegeneral.co.in" },
  { slug: "sbi-general", domain: "sbigeneral.in" },
  { slug: "sbi-life", domain: "sbilife.co.in" },
  { slug: "star-health", domain: "starhealth.in" },
  { slug: "tata-aia", domain: "tataaia.com" },
  { slug: "tata-aig", domain: "tataaig.com" },
  { slug: "new-india-assurance", domain: "newindia.co.in" },
  { slug: "united-india", domain: "uiic.co.in" },
  { slug: "digit-general", domain: "godigit.com" },
  { slug: "future-generali", domain: "futuregenerali.in" },
  { slug: "chola-ms", domain: "cholams.com" },
  { slug: "royal-sundaram", domain: "royalsundaram.in" },
  { slug: "oriental-insurance", domain: "orientalinsurance.org.in" },
  { slug: "liberty-general", domain: "libertyinsurance.in" },
  { slug: "iffco-tokio", domain: "iffco-tokio.co.in" },
  { slug: "edelweiss-life", domain: "edelweisslife.in" },
  { slug: "aviva-life", domain: "avivaindia.com" },
  { slug: "canara-hsbc", domain: "canarahsbclife.com" },
];

const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

async function downloadLogo(partner) {
  const sources = [
    `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`,
    `https://icons.duckduckgo.com/ip3/${partner.domain}.ico`,
    `https://${partner.domain}/favicon.ico`,
    `https://www.${partner.domain}/apple-touch-icon.png`,
  ];

  for (const url of sources) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": userAgent },
        redirect: "follow",
      });

      if (!response.ok) continue;

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("image") && !url.includes("favicon")) continue;

      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.length < 200) continue;

      const ext = contentType.includes("png") ? "png" : "ico";
      const filePath = path.join(outDir, `${partner.slug}.${ext}`);
      await writeFile(filePath, buffer);
      return { slug: partner.slug, file: `${partner.slug}.${ext}`, bytes: buffer.length };
    } catch {
      // try next source
    }
  }

  return { slug: partner.slug, file: null };
}

await mkdir(outDir, { recursive: true });

const results = [];
for (const partner of partners) {
  const result = await downloadLogo(partner);
  results.push(result);
  console.log(result.file ? `✓ ${result.slug} (${result.bytes} bytes)` : `✗ ${result.slug}`);
}

const ok = results.filter((r) => r.file).length;
console.log(`\nDownloaded ${ok}/${partners.length} partner logos to public/partners/`);
