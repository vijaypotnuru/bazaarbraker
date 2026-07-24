import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IslandNav } from "@/components/landing/island-nav";
import { PartnersStrip } from "@/components/landing/partners-strip";
import { SiteFooter } from "@/components/landing/site-footer";
import { ProductQuoteForm } from "@/components/product/product-quote-form";
import { productIcons, productPhotos } from "@/lib/brand-assets";

const covers = [
  {
    title: "Medical abroad",
    body: "Emergency treatment and hospitalization limits that match your destination risk.",
    icon: productIcons.travelMedical,
  },
  {
    title: "Baggage & delays",
    body: "Trip delay, missed connection, and baggage loss spelled out without fine-print fog.",
    icon: productIcons.travelBaggage,
  },
];

const related = [
  {
    label: "International Travel",
    href: "/travel-insurance/international",
    detail: "Schengen-ready and multi-trip options",
  },
  {
    label: "Marine Insurance",
    href: "/marine-insurance",
    detail: "Cargo and marine liability when travel turns commercial",
  },
];

export function TravelInsurancePage() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <IslandNav />
      <main>
        <section className="relative overflow-hidden">
          <div className="relative min-h-[min(70vh,640px)]">
            <Image
              src={productPhotos.travelHero}
              alt="Carry-on and passport by a bright airport window"
              fill
              priority
              className="object-cover object-[center_35%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bb-canvas)] via-[var(--bb-canvas)]/55 to-[var(--bb-canvas)]/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bb-canvas)]/90 via-[var(--bb-canvas)]/40 to-transparent md:from-[var(--bb-canvas)]/95" />

            <div className="bb-container relative flex min-h-[min(70vh,640px)] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32">
              <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-[var(--bb-muted)]">
                <Link href="/" className="hover:text-[var(--bb-primary)]">
                  Home
                </Link>
                <span>/</span>
                <span className="font-medium text-[var(--bb-ink)]">
                  Travel Insurance
                </span>
              </nav>
              <p className="text-sm font-semibold text-[var(--bb-primary)]">
                Travel
              </p>
              <h1 className="bb-display mt-3 max-w-[14ch] text-[clamp(2.25rem,5vw,3.75rem)] text-[var(--bb-ink)]">
                Leave with cover that travels
              </h1>
              <p className="mt-4 max-w-[40ch] text-[var(--bb-body)] md:text-lg">
                Domestic and international plans for medical emergencies,
                baggage, and trip disruption.
              </p>
            </div>
          </div>

          <div className="bb-container relative -mt-4 pb-16 md:-mt-8 md:pb-20">
            <div
              id="quote"
              className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12"
            >
              <div className="lg:col-span-5">
                <ProductQuoteForm productLabel="travel cover" />
              </div>
              <div className="flex flex-col justify-center gap-6 lg:col-span-6 lg:col-start-7 lg:pt-4">
                {covers.map((item) => (
                  <div key={item.title} className="flex gap-5">
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
                      <h2 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-[var(--bb-ink)]">
                        {item.title}
                      </h2>
                      <p className="mt-1.5 max-w-[36ch] text-sm leading-relaxed text-[var(--bb-body)]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
                <Link href="#paths" className="bb-btn w-fit">
                  See travel paths
                  <span className="bb-btn__icon" aria-hidden>
                    <ArrowUpRight className="size-4" strokeWidth={2} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="paths"
          className="bb-section border-t border-[var(--bb-hairline)] bg-[var(--bb-surface)]"
        >
          <div className="bb-container">
            <h2 className="bb-display max-w-[14ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-[var(--bb-ink)]">
              Where are you headed
            </h2>
            <ul className="mt-10 border-t border-[var(--bb-hairline)]">
              {related.map((item) => (
                <li key={item.href} className="border-b border-[var(--bb-hairline)]">
                  <Link
                    href={item.href}
                    className="group flex flex-col gap-1 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  >
                    <div>
                      <p className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-[var(--bb-ink)] group-hover:text-[var(--bb-primary)]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-[var(--bb-body)]">
                        {item.detail}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="size-5 text-[var(--bb-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--bb-primary)]"
                      strokeWidth={1.75}
                    />
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
