import Link from "next/link";
import { ArrowUpRight, Check, Send } from "lucide-react";

const features = [
  "Answers cover questions any time of day",
  "Plain-language decode of policy terms",
  "Live for term, health, motor, and travel",
];

export function AiExpertSection() {
  return (
    <section id="advisor" className="bb-section bg-[var(--bb-surface)]">
      <div className="bb-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-[var(--bb-primary)]">
              BazaarBraker.ai
            </p>
            <h2 className="bb-display mt-3 max-w-[16ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-[var(--bb-ink)]">
              Finding the right plan got clearer
            </h2>
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--bb-primary-soft)]">
                    <Check className="size-3 text-[var(--bb-primary)]" strokeWidth={3} />
                  </span>
                  <span className="text-[var(--bb-body)]">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/term-insurance" className="bb-btn mt-10">
              Try the advisor
              <span className="bb-btn__icon" aria-hidden>
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </span>
            </Link>
          </div>

          <div className="bb-shell mx-auto w-full max-w-sm">
            <div className="bb-shell__inner shadow-[var(--bb-shadow-md)]">
              <div className="flex items-center gap-2 bg-[var(--bb-ink-soft)] px-4 py-3.5">
                <span className="flex size-7 items-center justify-center rounded-full bg-[var(--bb-primary)] text-[10px] font-bold text-white">
                  bb
                </span>
                <span className="text-sm font-medium text-white">Advisor</span>
              </div>
              <div className="min-h-[240px] space-y-3 bg-[var(--bb-surface-soft)] p-4">
                <div className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-md bg-[var(--bb-primary)] px-3.5 py-2.5 text-sm text-white">
                    Which term plan fits a 32-year-old with one child?
                  </p>
                </div>
                <div className="flex justify-start">
                  <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-sm text-[var(--bb-body)] shadow-[var(--bb-shadow-sm)]">
                    Start with ₹1 Cr cover to age 60. Compare claim ratios next —
                    I can walk you through.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-[var(--bb-hairline-soft)] bg-white px-4 py-3">
                <span className="flex-1 text-sm text-[var(--bb-muted-soft)]">
                  Ask about cover...
                </span>
                <span className="flex size-8 items-center justify-center rounded-full bg-[var(--bb-primary)] text-white">
                  <Send className="size-3.5" strokeWidth={1.75} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
