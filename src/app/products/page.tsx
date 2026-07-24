import type { Metadata } from "next";
import Link from "next/link";
import { IslandNav } from "@/components/landing/island-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { productPages, type ProductPage } from "@/lib/product-catalog";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "All Insurance Products",
  description:
    "Browse every insurance category on BazaarBraker — term, health, motor, investment, travel, home, and more.",
  path: "/products",
});

const categoryOrder: ProductPage["category"][] = [
  "term",
  "health",
  "motor",
  "investment",
  "travel",
  "home",
  "other",
];

const categoryLabels: Record<ProductPage["category"], string> = {
  term: "Term & Life",
  health: "Health",
  motor: "Motor",
  investment: "Investment",
  travel: "Travel",
  home: "Home",
  other: "Business & Other",
};

function groupByCategory() {
  const groups = new Map<ProductPage["category"], ProductPage[]>();
  for (const cat of categoryOrder) {
    groups.set(cat, []);
  }
  for (const page of productPages) {
    groups.get(page.category)?.push(page);
  }
  return categoryOrder
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat],
      pages: groups.get(cat) ?? [],
    }))
    .filter((g) => g.pages.length > 0);
}

export default function ProductsIndexPage() {
  const groups = groupByCategory();

  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <JsonLd
        data={webPageJsonLd({
          name: "All Insurance Products",
          description:
            "Full index of insurance products and calculators on BazaarBraker.",
          path: "/products",
        })}
      />
      <IslandNav />
      <main className="bb-container py-28 md:py-32">
        <p className="text-sm font-medium text-[var(--bb-primary)]">Products</p>
        <h1 className="bb-display mt-3 max-w-[16ch] text-[clamp(2rem,4vw,3.25rem)] text-[var(--bb-ink)]">
          Every cover we help you compare
        </h1>
        <p className="mt-5 max-w-[48ch] text-[var(--bb-body)] md:text-lg">
          A complete index of categories, plans, and calculators — built for
          people and for search.
        </p>

        <div className="mt-16 space-y-14">
          {groups.map((group) => (
            <section key={group.category} aria-labelledby={`cat-${group.category}`}>
              <h2
                id={`cat-${group.category}`}
                className="bb-display text-xl text-[var(--bb-ink)] md:text-2xl"
              >
                {group.label}
              </h2>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/${page.slug}`}
                      className="text-[var(--bb-body)] underline-offset-2 transition-colors hover:text-[var(--bb-primary)] hover:underline"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
