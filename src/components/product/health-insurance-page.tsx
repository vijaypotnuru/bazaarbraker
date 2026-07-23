import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IslandNav } from "@/components/landing/island-nav";
import { PartnersStrip } from "@/components/landing/partners-strip";
import { SiteFooter } from "@/components/landing/site-footer";
import { HealthFaq } from "@/components/product/health-faq";
import { ProductQuoteForm } from "@/components/product/product-quote-form";
import { productIcons, productPhotos } from "@/lib/brand-assets";

const benefits = [
  {
    title: "Family floater",
    body: "One policy for spouse, kids, and often parents - shared or separate sum insured.",
    icon: productIcons.healthCross,
  },
  {
    title: "Cashless network",
    body: "Wide hospital lists so treatment starts with less paperwork at admission.",
    icon: productIcons.healthHospital,
  },
  {
    title: "Restore & NCB",
    body: "See restore benefits and no-claim bonuses clearly before you commit.",
    icon: productIcons.healthCross,
  },
];

const related = [
  { label: "Family Health", href: "/health-insurance/family" },
  { label: "Parents Cover", href: "/health-insurance/parents" },
  { label: "Senior Citizen", href: "/health-insurance/senior-citizen" },
  { label: "Critical Illness", href: "/health-insurance/critical-illness" },
  { label: "Health Calculator", href: "/health-insurance/calculator" },
];

export function HealthInsurancePage() {
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
                Health Insurance
              </span>
            </nav>

            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <figure className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
                <div className="bb-shell">
                  <div className="bb-shell__inner relative aspect-[4/5] min-h-[300px] sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[520px]">
                    <Image
                      src={productPhotos.healthHero}
                      alt="Family together at home, reflecting care and wellbeing"
                      fill
                      priority
                      className="object-cover object-[center_25%]"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 font-[family-name:var(--font-outfit)] text-sm text-[var(--bb-muted)]">
                  Cover that stays with your family
                </figcaption>
              </figure>

              <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8 lg:row-start-1">
                <p className="text-sm font-semibold text-[var(--bb-primary)]">
                  Health
                </p>
                <h1 className="bb-display mt-3 max-w-[12ch] text-[clamp(2.1rem,4.5vw,3.5rem)] text-[var(--bb-ink)]">
                  Family cover that feels human
                </h1>
                <p className="mt-4 max-w-[38ch] text-[var(--bb-body)] md:text-lg">
                  Compare floater and individual plans - networks, waiting
                  periods, and riders in plain language.
                </p>
                <div id="quote" className="mt-8">
                  <ProductQuoteForm productLabel="health cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bb-section bg-[var(--bb-surface)]">
          <div className="bb-container">
            <h2 className="bb-display max-w-[16ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-[var(--bb-ink)]">
              What good health cover looks like
            </h2>
            <ul className="mt-12 grid gap-0 border-y border-[var(--bb-hairline)] md:grid-cols-3">
              {benefits.map((item, i) => (
                <li
                  key={item.title}
                  className={
                    i < benefits.length - 1
                      ? "border-b border-[var(--bb-hairline)] py-8 md:border-r md:border-b-0 md:px-8 md:py-10 first:md:pl-0"
                      : "py-8 md:px-8 md:py-10 last:md:pr-0"
                  }
                >
                  <div className="mb-5 flex size-14 items-center justify-center rounded-[16px] bg-[var(--bb-primary-soft)]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="size-11 object-contain"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-[var(--bb-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-[var(--bb-body)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bb-section bg-[var(--bb-canvas)]">
          <div className="bb-container grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="bb-display max-w-[12ch] text-[clamp(1.75rem,3.5vw,2.5rem)] text-[var(--bb-ink)]">
                Health paths
              </h2>
              <ul className="mt-6 space-y-2">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between border-b border-[var(--bb-hairline)] py-3.5 text-sm font-medium text-[var(--bb-ink)] transition-colors hover:text-[var(--bb-primary)]"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="size-4 text-[var(--bb-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--bb-primary)]"
                        strokeWidth={2}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="bb-display max-w-[14ch] text-[clamp(1.75rem,3.5vw,2.5rem)] text-[var(--bb-ink)]">
                Common questions
              </h2>
              <HealthFaq />
            </div>
          </div>
        </section>

        <PartnersStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
