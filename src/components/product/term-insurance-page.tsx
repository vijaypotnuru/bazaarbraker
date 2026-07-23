import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IslandNav } from "@/components/landing/island-nav";
import { PartnersStrip } from "@/components/landing/partners-strip";
import { SiteFooter } from "@/components/landing/site-footer";
import { ProductQuoteForm } from "@/components/product/product-quote-form";
import {
  brandIcons,
  productIcons,
  productPhotos,
} from "@/lib/brand-assets";

const proofs = [
  { value: "₹1 Cr+", label: "Typical cover", detail: "Scale cover to your income and liabilities" },
  { value: "98%+", label: "Claim ratios", detail: "Compare settlement strength before you buy" },
  { value: "80C", label: "Tax lens", detail: "Premiums and payouts under common sections" },
];

const checks = [
  {
    title: "Cover amount",
    body: "Aim for income replacement that protects dependents through key years.",
    icon: productIcons.termShield,
  },
  {
    title: "Claim strength",
    body: "Read claim settlement ratios and exclusions side by side, not just price.",
    icon: brandIcons.compare,
  },
  {
    title: "Riders & tax",
    body: "Critical illness, waiver, and tax treatment - pick only what you need.",
    icon: productIcons.termTax,
  },
];

const related = [
  { label: "1 Crore Term", href: "/term-insurance/1-crore-term-insurance" },
  { label: "Term Calculator", href: "/term-insurance/calculator" },
  { label: "Term for NRI", href: "/term-insurance/nri" },
  { label: "What is Term", href: "/term-insurance/what-is-term-insurance" },
];

export function TermInsurancePage() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <IslandNav />
      <main>
        {/* Full-bleed hero */}
        <section className="relative min-h-[min(88vh,780px)] overflow-hidden">
          <Image
            src={productPhotos.termHero}
            alt="Family at home considering long-term protection"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bb-canvas)] via-[var(--bb-canvas)]/92 to-[var(--bb-canvas)]/25 md:via-[var(--bb-canvas)]/88 md:to-transparent" />

          <div className="bb-container relative grid items-center gap-10 py-28 md:py-32 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-[var(--bb-muted)]">
                <Link href="/" className="hover:text-[var(--bb-primary)]">
                  Home
                </Link>
                <span>/</span>
                <span className="font-medium text-[var(--bb-ink)]">
                  Term Insurance
                </span>
              </nav>
              <p className="text-sm font-semibold text-[var(--bb-primary)]">
                Term Life
              </p>
              <h1 className="bb-display mt-3 max-w-[14ch] text-[clamp(2.25rem,5vw,3.75rem)] text-[var(--bb-ink)]">
                High cover. Clear premiums.
              </h1>
              <p className="mt-4 max-w-[40ch] text-[var(--bb-body)] md:text-lg">
                Compare pure protection plans from IRDAI partners - claim ratios,
                riders, and tenure in one calm view.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#quote" className="bb-btn">
                  Compare term plans
                  <span className="bb-btn__icon" aria-hidden>
                    <ArrowUpRight className="size-4" strokeWidth={2} />
                  </span>
                </Link>
                <Link
                  href="/#advisor"
                  className="inline-flex h-[52px] items-center rounded-full px-6 text-sm font-semibold text-[var(--bb-ink)] ring-1 ring-[var(--bb-hairline)] transition-colors hover:bg-white"
                >
                  Ask the advisor
                </Link>
              </div>
            </div>

            <div id="quote" className="lg:col-span-5 lg:col-start-8">
              <ProductQuoteForm productLabel="term life" />
            </div>
          </div>
        </section>

        {/* Proof ledger */}
        <section className="bb-section bg-[var(--bb-surface)]">
          <div className="bb-container">
            <h2 className="bb-display max-w-[16ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-[var(--bb-ink)]">
              Built for clarity, not pressure
            </h2>
            <ul className="mt-10 border-t border-[var(--bb-hairline)] md:mt-12">
              {proofs.map((item) => (
                <li
                  key={item.label}
                  className="grid grid-cols-[minmax(5.5rem,auto)_1fr] items-baseline gap-x-6 border-b border-[var(--bb-hairline)] py-6 md:grid-cols-[minmax(7rem,auto)_1fr] md:gap-x-8 md:py-7"
                >
                  <p className="bb-number text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-none text-[var(--bb-primary)]">
                    {item.value}
                  </p>
                  <div>
                    <p className="font-[family-name:var(--font-outfit)] text-base font-semibold text-[var(--bb-ink)] md:text-lg">
                      {item.label}
                    </p>
                    <p className="mt-1 max-w-[36ch] text-sm text-[var(--bb-body)]">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What to check */}
        <section className="bb-section bg-[var(--bb-canvas)]">
          <div className="bb-container">
            <h2 className="bb-display max-w-[14ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-[var(--bb-ink)]">
              What to check before you buy
            </h2>
            <ol className="mt-12 border-t border-[var(--bb-hairline)]">
              {checks.map((item, i) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] items-center gap-x-5 border-b border-[var(--bb-hairline)] py-8 sm:grid-cols-[4rem_1fr_auto] sm:gap-x-8"
                >
                  <p className="bb-number text-2xl font-medium text-[var(--bb-primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-[var(--bb-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-[var(--bb-body)] md:text-base">
                      {item.body}
                    </p>
                  </div>
                  <div className="col-start-2 mt-3 flex size-14 items-center justify-center rounded-[16px] bg-[var(--bb-primary-soft)] sm:col-start-3 sm:mt-0 sm:size-16">
                    <Image
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="size-10 object-contain sm:size-12"
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-[var(--bb-hairline)] bg-[var(--bb-surface)] py-12">
          <div className="bb-container">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--bb-ink)]">
              Explore term paths
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bb-surface-soft)] px-4 py-2 text-sm font-medium text-[var(--bb-body)] ring-1 ring-[var(--bb-hairline)] transition-colors hover:text-[var(--bb-primary)] hover:ring-[var(--bb-primary)]/30"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5" strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PartnersStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
