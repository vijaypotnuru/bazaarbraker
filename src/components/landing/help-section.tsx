import Link from "next/link";
import { Headphones } from "lucide-react";

export function HelpSection() {
  return (
    <section id="help" className="bg-[var(--bb-canvas)] py-12 md:py-16">
      <div className="bb-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex justify-center lg:order-first">
            <div className="flex size-48 items-center justify-center rounded-full bg-[var(--bb-primary-soft)] sm:size-56">
              <Headphones
                className="size-24 text-[var(--bb-primary)] sm:size-28"
                strokeWidth={1.25}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold leading-snug tracking-tight text-[var(--bb-ink)] md:text-3xl">
              Have a question?
              <br />
              Here to help.
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[var(--bb-primary)]" />
            <p className="mt-5 max-w-[55ch] text-sm leading-relaxed text-[var(--bb-body)] md:text-base">
              Call, request a callback, or email — our support team listens and
              helps resolve policy and claim questions without the runaround.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="mailto:support@bazaarbraker.com"
                className="inline-flex flex-col rounded-[var(--bb-radius-md)] border border-[var(--bb-hairline)] bg-[var(--bb-surface-tint)] px-5 py-4 transition-all duration-200 hover:border-[var(--bb-primary)]/30 hover:shadow-[var(--bb-shadow-sm)]"
              >
                <span className="text-xs font-semibold text-[var(--bb-muted)]">
                  General enquiries
                </span>
                <span className="mt-1 text-sm font-semibold text-[var(--bb-ink)]">
                  support@bazaarbraker.com
                </span>
              </Link>
              <Link
                href="tel:18002088787"
                className="inline-flex flex-col rounded-[var(--bb-radius-md)] border border-[var(--bb-hairline)] bg-[var(--bb-surface-tint)] px-5 py-4 transition-all duration-200 hover:border-[var(--bb-primary)]/30 hover:shadow-[var(--bb-shadow-sm)]"
              >
                <span className="text-xs font-semibold text-[var(--bb-muted)]">
                  Customer sales
                </span>
                <span className="mt-1 font-mono text-sm font-semibold tabular-nums text-[var(--bb-ink)]">
                  1800 - 208 - 8787
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
