import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IslandNav } from "@/components/landing/island-nav";
import { PartnersStrip } from "@/components/landing/partners-strip";
import { SiteFooter } from "@/components/landing/site-footer";
import { ProductQuoteForm } from "@/components/product/product-quote-form";
import { productIcons, productPhotos } from "@/lib/brand-assets";

const goals = [
  {
    value: "ULIP",
    label: "Market-linked",
    detail: "Equity and debt funds with life cover and a clear lock-in lens",
    href: "/investment-plans/ulip",
  },
  {
    value: "Child",
    label: "Education goals",
    detail: "Save for milestones with premium waiver options if life changes",
    href: "/investment-plans/child-plans",
  },
  {
    value: "Pension",
    label: "Retirement income",
    detail: "Deferred and immediate annuity structures you can compare calmly",
    href: "/investment-plans/pension-plans",
  },
];

const lenses = [
  {
    title: "Growth path",
    body: "See expected fund mix and charges before you chase a projected return.",
    icon: productIcons.investGrowth,
  },
  {
    title: "Lock-in & liquidity",
    body: "Know when money can move and what stays committed for the term.",
    icon: productIcons.investLock,
  },
];

const related = [
  { label: "ULIP Plans", href: "/investment-plans/ulip" },
  { label: "Best SIP Plans", href: "/investment-plans/sip" },
  { label: "Child Plans", href: "/investment-plans/child-plans" },
  { label: "Pension Plans", href: "/investment-plans/pension-plans" },
  { label: "SIP Calculator", href: "/calculators/sip" },
  { label: "LIC Plans", href: "/lic" },
];

export function InvestmentPlansPage() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <IslandNav />
      <main>
        <section className="bb-section pt-28 md:pt-32">
          <div className="bb-container">
            <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-[var(--bb-muted)]">
              <Link href="/" className="hover:text-[var(--bb-primary)]">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium text-[var(--bb-ink)]">
                Investment Plans
              </span>
            </nav>

            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-1 lg:row-start-1">
                <p className="text-sm font-semibold text-[var(--bb-primary)]">
                  Investment
                </p>
                <h1 className="bb-display mt-3 max-w-[12ch] text-[clamp(2.1rem,4.5vw,3.5rem)] text-[var(--bb-ink)]">
                  Grow with cover built in
                </h1>
                <p className="mt-4 max-w-[38ch] text-[var(--bb-body)] md:text-lg">
                  Compare ULIPs, child plans, and pensions by goal, lock-in, and
                  life cover, not sales scripts.
                </p>
                <div id="quote" className="mt-8">
                  <ProductQuoteForm productLabel="investment plans" />
                </div>
              </div>

              <figure className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
                <div className="bb-shell">
                  <div className="bb-shell__inner relative aspect-[5/4] min-h-[280px] lg:min-h-[480px]">
                    <Image
                      src={productPhotos.investHero}
                      alt="Quiet desk scene suggesting long-term wealth planning"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 font-[family-name:var(--font-outfit)] text-sm text-[var(--bb-muted)]">
                  Goal-first, not product-first
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bb-section bg-[var(--bb-surface)]">
          <div className="bb-container">
            <h2 className="bb-display max-w-[14ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-[var(--bb-ink)]">
              Start from the goal
            </h2>
            <ul className="mt-10 border-t border-[var(--bb-hairline)]">
              {goals.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group grid grid-cols-[minmax(5.5rem,auto)_1fr] items-baseline gap-x-6 border-b border-[var(--bb-hairline)] py-6 md:grid-cols-[minmax(7rem,auto)_1fr_auto] md:gap-x-8 md:py-7"
                  >
                    <p className="bb-number text-[clamp(1.5rem,3.5vw,2.25rem)] font-medium leading-none text-[var(--bb-primary)]">
                      {item.value}
                    </p>
                    <div>
                      <p className="font-[family-name:var(--font-outfit)] text-base font-semibold text-[var(--bb-ink)] group-hover:text-[var(--bb-primary)] md:text-lg">
                        {item.label}
                      </p>
                      <p className="mt-1 max-w-[40ch] text-sm text-[var(--bb-body)]">
                        {item.detail}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-2 size-4 text-[var(--bb-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--bb-primary)] md:mt-0"
                      strokeWidth={2}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bb-section bg-[var(--bb-canvas)]">
          <div className="bb-container grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="bb-display max-w-[12ch] text-[clamp(1.75rem,3.5vw,2.5rem)] text-[var(--bb-ink)]">
                Two lenses before you commit
              </h2>
              <ul className="mt-8 space-y-8">
                {lenses.map((item) => (
                  <li key={item.title} className="flex gap-5">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-[16px] bg-[var(--bb-primary-soft)]">
                      <Image
                        src={item.icon}
                        alt=""
                        width={48}
                        height={48}
                        className="size-11 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-[var(--bb-ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 max-w-[32ch] text-sm leading-relaxed text-[var(--bb-body)]">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--bb-ink)]">
                Explore investment paths
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bb-surface)] px-4 py-2 text-sm font-medium text-[var(--bb-body)] ring-1 ring-[var(--bb-hairline)] transition-colors hover:text-[var(--bb-primary)] hover:ring-[var(--bb-primary)]/30"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5" strokeWidth={2} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PartnersStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
