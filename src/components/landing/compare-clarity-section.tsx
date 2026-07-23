import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const rows = [
  {
    label: "Monthly premium",
    a: "₹892",
    b: "₹1,180",
    c: "₹756",
    note: "Same cover amount",
  },
  {
    label: "Claim ratio",
    a: "98.2%",
    b: "97.1%",
    c: "96.4%",
    note: "Last reported year",
  },
  {
    label: "Waiting period",
    a: "30 days",
    b: "60 days",
    c: "90 days",
    note: "Pre-existing",
  },
  {
    label: "Key rider",
    a: "Critical illness",
    b: "Hospital cash",
    c: "Waiver of premium",
    note: "Optional add-on",
  },
];

/** Instrument-style compare peek - hairline matrix, not product cards. */
export function CompareClaritySection() {
  return (
    <section id="compare" className="bb-section bg-[var(--bb-canvas)]">
      <div className="bb-container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="bb-display max-w-[16ch] text-[clamp(1.85rem,3.8vw,3rem)] text-[var(--bb-ink)]">
            See what side by side actually means
          </h2>
          <p className="max-w-[34ch] text-[var(--bb-body)] lg:pb-1 lg:text-right md:text-lg">
            Premiums, claim strength, and riders in one calm view - sample term
            compare below.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-[var(--bb-radius-xl)] bg-[var(--bb-surface)] ring-1 ring-[var(--bb-hairline)] [scrollbar-width:thin]">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--bb-hairline)]">
                <th className="px-5 py-4 text-xs font-medium tracking-wide text-[var(--bb-muted)] uppercase sm:px-6">
                  Factor
                </th>
                <th className="px-5 py-4 font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--bb-ink)] sm:px-6">
                  Plan A
                </th>
                <th className="bg-[var(--bb-primary-soft)]/50 px-5 py-4 font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--bb-primary)] sm:px-6">
                  Plan B
                </th>
                <th className="px-5 py-4 font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--bb-ink)] sm:px-6">
                  Plan C
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-[var(--bb-hairline-soft)] last:border-b-0"
                >
                  <th className="px-5 py-4 align-top sm:px-6">
                    <span className="block text-sm font-medium text-[var(--bb-ink)]">
                      {row.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-[var(--bb-muted)]">
                      {row.note}
                    </span>
                  </th>
                  <td className="bb-number px-5 py-4 text-sm text-[var(--bb-body)] sm:px-6 sm:text-base">
                    {row.a}
                  </td>
                  <td className="bb-number bg-[var(--bb-primary-soft)]/40 px-5 py-4 text-sm font-medium text-[var(--bb-ink)] sm:px-6 sm:text-base">
                    {row.b}
                  </td>
                  <td className="bb-number px-5 py-4 text-sm text-[var(--bb-body)] sm:px-6 sm:text-base">
                    {row.c}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--bb-muted)]">
            Illustrative sample for layout only. Live quotes vary by age, city,
            and underwriting.
          </p>
          <Link
            href="/term-insurance"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-[var(--bb-primary)] transition-colors hover:text-[var(--bb-primary-active)]"
          >
            Run a real compare
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
