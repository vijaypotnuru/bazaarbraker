import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IslandNav } from "@/components/landing/island-nav";
import { PartnersStrip } from "@/components/landing/partners-strip";
import { SiteFooter } from "@/components/landing/site-footer";
import { ProductQuoteForm } from "@/components/product/product-quote-form";
import { brandIcons, productIcons, productPhotos } from "@/lib/brand-assets";

const checks = [
  {
    title: "IDV that matches reality",
    body: "Insured Declared Value should track your car's market value, not an inflated sticker price.",
    icon: productIcons.motorIdv,
  },
  {
    title: "Add-ons with intent",
    body: "Zero depreciation, engine protect, and consumables help when the claim is larger than the premium.",
    icon: productIcons.motorAddon,
  },
  {
    title: "Garage network",
    body: "Cashless workshops near you matter as much as the premium on renewal day.",
    icon: brandIcons.cover,
  },
];

const paths = [
  {
    label: "Car Insurance",
    href: "/car-insurance",
    detail: "Comprehensive and third-party for private cars",
  },
  {
    label: "Bike Insurance",
    href: "/two-wheeler-insurance",
    detail: "Two-wheeler cover with fast online renewals",
  },
  {
    label: "Commercial Vehicle",
    href: "/commercial-vehicle-insurance",
    detail: "Goods and passenger vehicles for business use",
  },
];

export function MotorInsurancePage() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <IslandNav />
      <main>
        <section className="relative min-h-[min(88vh,780px)] overflow-hidden">
          <Image
            src={productPhotos.motorHero}
            alt="Modern car on a quiet street at soft morning light"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bb-canvas)] via-[var(--bb-canvas)]/90 to-[var(--bb-canvas)]/20 md:via-[var(--bb-canvas)]/85 md:to-transparent" />

          <div className="bb-container relative grid items-center gap-10 py-28 md:py-32 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-[var(--bb-muted)]">
                <Link href="/" className="hover:text-[var(--bb-primary)]">
                  Home
                </Link>
                <span>/</span>
                <span className="font-medium text-[var(--bb-ink)]">
                  Motor Insurance
                </span>
              </nav>
              <p className="text-sm font-semibold text-[var(--bb-primary)]">
                Motor
              </p>
              <h1 className="bb-display mt-3 max-w-[13ch] text-[clamp(2.25rem,5vw,3.75rem)] text-[var(--bb-ink)]">
                Road cover without the maze
              </h1>
              <p className="mt-4 max-w-[40ch] text-[var(--bb-body)] md:text-lg">
                Compare car, bike, and commercial policies by IDV, add-ons, and
                cashless garages in one calm view.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#quote" className="bb-btn">
                  Get motor quotes
                  <span className="bb-btn__icon" aria-hidden>
                    <ArrowUpRight className="size-4" strokeWidth={2} />
                  </span>
                </Link>
                <Link
                  href="/car-insurance"
                  className="inline-flex h-[52px] items-center rounded-full px-6 text-sm font-semibold text-[var(--bb-ink)] ring-1 ring-[var(--bb-hairline)] transition-colors hover:bg-white"
                >
                  Car plans
                </Link>
              </div>
            </div>

            <div id="quote" className="lg:col-span-5 lg:col-start-8">
              <ProductQuoteForm productLabel="motor cover" />
            </div>
          </div>
        </section>

        <section className="bb-section bg-[var(--bb-ink)] text-white">
          <div className="bb-container">
            <h2 className="bb-display max-w-[16ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-white">
              Pick the vehicle path
            </h2>
            <ul className="mt-10 border-t border-white/15">
              {paths.map((item) => (
                <li key={item.href} className="border-b border-white/15">
                  <Link
                    href={item.href}
                    className="group grid gap-2 py-7 transition-colors sm:grid-cols-[minmax(10rem,auto)_1fr_auto] sm:items-center sm:gap-8"
                  >
                    <p className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-white group-hover:text-[var(--bb-primary-soft)]">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/65">{item.detail}</p>
                    <ArrowUpRight
                      className="size-5 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                      strokeWidth={1.75}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bb-section bg-[var(--bb-canvas)]">
          <div className="bb-container">
            <h2 className="bb-display max-w-[14ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-[var(--bb-ink)]">
              What to check before you renew
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

        <PartnersStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
