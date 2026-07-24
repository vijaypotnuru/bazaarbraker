import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const coverLinks = [
  { label: "Term Life", href: "/term-insurance" },
  { label: "Health", href: "/health-insurance" },
  { label: "Motor", href: "/car-insurance" },
  { label: "Investment", href: "/investment-plans" },
  { label: "Travel", href: "/travel-insurance" },
  { label: "All products", href: "/products" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Legal", href: "/legal" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer
      id="help"
      className="relative overflow-hidden bg-[var(--bb-surface-dark)] pt-20 pb-10 text-[var(--bb-on-dark)]"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 size-[420px] rounded-full bg-[var(--bb-primary)]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-[320px] rounded-full bg-[var(--bb-primary)]/10 blur-3xl"
        aria-hidden
      />

      <div className="bb-container relative">
        <div className="max-w-3xl">
          <p className="bb-display text-[clamp(2.5rem,8vw,5.5rem)] text-white">
            bazaar<span className="text-[var(--bb-primary)]">braker</span>
          </p>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/60 md:text-lg">
            India&apos;s calm insurance marketplace. Compare clearly. Buy with
            confidence.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-y border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <a
            href="mailto:support@bazaarbraker.com"
            className="group inline-flex items-center gap-3 text-base font-medium text-white transition-colors hover:text-[var(--bb-primary)]"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-[var(--bb-primary)]/15 group-hover:ring-[var(--bb-primary)]/40">
              <Mail className="size-4" strokeWidth={1.5} />
            </span>
            support@bazaarbraker.com
          </a>
          <a
            href="tel:18002088787"
            className="group inline-flex items-center gap-3 font-[family-name:var(--font-geist-mono)] text-base tabular-nums text-white/70 transition-colors hover:text-white sm:text-lg"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-[var(--bb-primary)]/15 group-hover:ring-[var(--bb-primary)]/40">
              <Phone className="size-4" strokeWidth={1.5} />
            </span>
            1800 208 8787
          </a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <nav aria-label="Cover">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-white">
              Cover
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
              {coverLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-white">
              Company
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40 md:flex-row md:items-start md:justify-between">
          <p>© 2026 BazaarBraker. All rights reserved.</p>
          <p className="max-w-[52ch] md:text-right">
            IRDAI Web Aggregator · See{" "}
            <Link href="/legal" className="underline underline-offset-2 hover:text-white/70">
              Legal
            </Link>{" "}
            for licence details · Insurance is the subject matter of
            solicitation.
          </p>
        </div>
      </div>
    </footer>
  );
}
