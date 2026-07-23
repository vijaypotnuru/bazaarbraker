import Link from "next/link";

const columns = [
  {
    title: "Cover",
    links: [
      { label: "Term Life", href: "/term-insurance" },
      { label: "Health", href: "/health-insurance" },
      { label: "Motor", href: "/car-insurance" },
      { label: "Investment", href: "/investment-plans" },
      { label: "Travel", href: "/travel-insurance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#help" },
      { label: "Legal", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="help" className="bg-[var(--bb-surface)] pt-16 pb-10">
      <div className="bb-container">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold tracking-tight text-[var(--bb-ink)]">
              bazaar<span className="text-[var(--bb-primary)]">braker</span>
            </p>
            <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-[var(--bb-body)]">
              India&apos;s calm insurance marketplace. Compare clearly. Buy with
              confidence.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <a
                href="mailto:support@bazaarbraker.com"
                className="block font-medium text-[var(--bb-ink)] hover:text-[var(--bb-primary)]"
              >
                support@bazaarbraker.com
              </a>
              <a
                href="tel:18002088787"
                className="block font-mono tabular-nums text-[var(--bb-body)] hover:text-[var(--bb-ink)]"
              >
                1800 208 8787
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-[var(--bb-ink)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--bb-body)] transition-colors hover:text-[var(--bb-ink)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--bb-hairline)] pt-6 text-xs text-[var(--bb-muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 BazaarBraker. All rights reserved.</p>
          <p>
            IRDAI Web Aggregator · Licence subject to verification · Insurance is
            the subject matter of solicitation.
          </p>
        </div>
      </div>
    </footer>
  );
}
