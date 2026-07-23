import Link from "next/link";
import {
  Car,
  Check,
  Coins,
  HeartPulse,
  Home,
  Plane,
  Shield,
  Umbrella,
  type LucideIcon,
} from "lucide-react";
import type { ProductPage } from "@/lib/product-catalog";
import { SiteFooter } from "@/components/landing/site-footer";
import { IslandNav } from "@/components/landing/island-nav";
import { PartnersStrip } from "@/components/landing/partners-strip";

const categoryIcon: Record<ProductPage["category"], LucideIcon> = {
  term: Umbrella,
  health: HeartPulse,
  motor: Car,
  investment: Coins,
  travel: Plane,
  home: Home,
  other: Shield,
};

const categoryAccent: Record<ProductPage["category"], string> = {
  term: "from-[var(--bb-primary)] to-[var(--bb-ink-soft)]",
  health: "from-[var(--bb-primary)] to-[#003ecc]",
  motor: "from-[var(--bb-ink-soft)] to-[var(--bb-primary)]",
  investment: "from-[#0d6e6e] to-[var(--bb-primary)]",
  travel: "from-[var(--bb-ink)] to-[var(--bb-primary)]",
  home: "from-[#0d6e6e] to-[var(--bb-ink-soft)]",
  other: "from-[var(--bb-ink)] to-[var(--bb-primary)]",
};

type ProductLandingProps = {
  page: ProductPage;
};

export function ProductLanding({ page }: ProductLandingProps) {
  const Icon = categoryIcon[page.category];
  const crumbs = page.slug.split("/");

  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <IslandNav />
      <main>
        <section className="border-b border-[#e8edf5] bg-gradient-to-b from-[#f8faff] to-white">
          <div className="bb-container py-10 md:py-14">
            <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-[#6a8099]">
              <Link href="/" className="hover:text-[#0052ff]">
                Home
              </Link>
              {crumbs.map((part, index) => {
                const href = "/" + crumbs.slice(0, index + 1).join("/");
                const isLast = index === crumbs.length - 1;
                return (
                  <span key={href} className="flex items-center gap-1.5">
                    <span>/</span>
                    {isLast ? (
                      <span className="font-medium text-[#1a3a6b]">{page.title}</span>
                    ) : (
                      <Link href={href} className="hover:text-[#0052ff]">
                        {part.replace(/-/g, " ")}
                      </Link>
                    )}
                  </span>
                );
              })}
            </nav>

            <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                {page.badge && (
                  <span className="mb-4 inline-flex rounded-full border border-[#c8e6c9] bg-[#e8f5e9] px-3 py-1 text-xs font-semibold text-[#2e7d32]">
                    {page.badge}
                  </span>
                )}
                <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-[#1a3a6b]">
                  {page.title}
                </h1>
                <p className="mt-3 max-w-2xl text-base text-[#6a8099] md:text-lg">
                  {page.headline}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4a5568] md:text-[15px]">
                  {page.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#quote"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#0052ff] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#003ecc]"
                  >
                    View plans
                  </Link>
                  <Link
                    href="/#also-buy"
                    className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#0052ff] bg-white px-7 text-sm font-semibold text-[#0052ff] transition-colors hover:bg-[#0052ff]/5"
                  >
                    Talk to expert
                  </Link>
                </div>
              </div>

              <div
                id="quote"
                className="rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-[0_8px_30px_rgba(26,58,107,0.06)]"
              >
                <div
                  className={`mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${categoryAccent[page.category]}`}
                >
                  <Icon className="size-7" strokeWidth={1.75} />
                </div>
                <h2 className="text-lg font-bold text-[#1a3a6b]">
                  Get a free quote
                </h2>
                <p className="mt-1 text-sm text-[#6a8099]">
                  Share a few details and compare plans from leading insurers.
                </p>
                <form className="mt-5 space-y-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="h-11 w-full rounded-xl border border-[#e8edf5] bg-[#f8faff] px-3 text-sm outline-none ring-[#0052ff] focus:ring-2"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="h-11 w-full rounded-xl border border-[#e8edf5] bg-[#f8faff] px-3 text-sm outline-none ring-[#0052ff] focus:ring-2"
                  />
                  <button
                    type="button"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#0052ff] text-sm font-semibold text-white transition-colors hover:bg-[#003ecc]"
                  >
                    Continue
                  </button>
                </form>
                <p className="mt-3 text-[11px] leading-relaxed text-[#8fa3c4]">
                  By continuing, you agree to be contacted by BazaarBraker for
                  insurance assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="bb-container">
            <h2 className="text-2xl font-bold text-[#1a3a6b]">
              Why choose {page.title} on BazaarBraker
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-[#e8edf5] bg-[#f8faff] p-4"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff] text-[#0052ff]">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium leading-snug text-[#1a3a6b]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {page.related.length > 0 && (
          <section className="border-t border-[#e8edf5] bg-[#f8faff] py-12">
            <div className="bb-container">
              <h2 className="text-xl font-bold text-[#1a3a6b]">Related pages</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {page.related.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-[#e8edf5] bg-white px-4 py-2 text-sm font-semibold text-[#4a5568] transition-colors hover:border-[#c5d5ea] hover:text-[#0052ff]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <PartnersStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
