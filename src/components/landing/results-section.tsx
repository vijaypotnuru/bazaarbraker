"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Opaque shopping patterns vs finishing a clear BazaarBraker compare */
const bars = [
  { value: 28, height: "34%", highlight: false, hint: "sales calls" },
  { value: 41, height: "48%", highlight: false, hint: "phone chase" },
  { value: 22, height: "28%", highlight: false, hint: "opaque terms" },
  {
    value: 98,
    height: "92%",
    highlight: true,
    label: "clear compares",
    hint: "side by side",
  },
  { value: 35, height: "42%", highlight: false, hint: "discount maze" },
  { value: 19, height: "24%", highlight: false, hint: "guesswork" },
  { value: 37, height: "45%", highlight: false, hint: "hidden riders" },
];

/**
 * Dark results chart - Soft Structuralism / cobalt.
 * After advisor, before stories.
 */
export function ResultsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="results"
      className="relative overflow-hidden bg-[var(--bb-surface-dark)] py-20 text-center md:py-28"
    >
      <div
        className="pointer-events-none absolute top-[42%] left-1/2 size-[min(640px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--bb-primary)]/[0.12] blur-3xl"
        aria-hidden
      />

      <div className="bb-container relative">
        <p className="text-sm font-semibold tracking-wide text-[var(--bb-primary)]">
          BazaarBraker
        </p>
        <h2 className="bb-display mx-auto mt-3 max-w-[18ch] text-[clamp(1.85rem,4.5vw,3.25rem)] text-white">
          We don&apos;t believe in talk.
          <br />
          We deliver clarity.
        </h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-sm leading-relaxed text-[var(--bb-on-dark-soft)] md:text-base">
          Side-by-side quotes with claim strength you can check - not pressure,
          not a discount maze.
        </p>

        <div
          className="mx-auto mt-14 flex h-[300px] max-w-3xl items-end justify-center gap-2.5 sm:h-[360px] sm:gap-3.5 md:mt-16 md:h-[400px] md:gap-4"
          role="img"
          aria-label="Illustrative chart: opaque insurance shopping patterns versus 98 percent clear compares on BazaarBraker"
        >
          {bars.map((bar, i) => (
            <div
              key={`${bar.hint}-${i}`}
              className="relative flex h-full min-w-0 flex-1 flex-col items-center justify-end"
            >
              {bar.highlight && bar.label ? (
                <div
                  className={cn(
                    "absolute -top-1 z-10 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    visible
                      ? "translate-y-0 opacity-100 delay-500"
                      : "translate-y-3 opacity-0"
                  )}
                >
                  <span className="whitespace-nowrap rounded-[var(--bb-radius-md)] bg-[var(--bb-primary)] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white lowercase shadow-[0_8px_24px_rgba(0,82,255,0.4)] sm:text-[11px]">
                    {bar.label}
                  </span>
                  <span className="mt-1 h-2.5 w-px bg-white/35" aria-hidden />
                  <span className="size-2 rounded-full border-2 border-[var(--bb-primary)] bg-white sm:size-2.5" />
                </div>
              ) : null}

              <div
                className={cn(
                  "relative w-full max-w-[72px] overflow-hidden rounded-full sm:max-w-[84px] md:max-w-[92px]",
                  "transition-[height] duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
                  bar.highlight
                    ? "bg-[var(--bb-primary)] shadow-[0_0_48px_rgba(0,82,255,0.4)]"
                    : "bg-[var(--bb-surface-dark-elevated)] ring-1 ring-white/[0.06]"
                )}
                style={{
                  height: visible ? bar.height : "10%",
                  transitionDelay: visible ? `${i * 70}ms` : "0ms",
                }}
              >
                {!bar.highlight ? (
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 6px)",
                    }}
                    aria-hidden
                  />
                ) : (
                  <div
                    className="pointer-events-none absolute inset-x-1.5 top-1.5 bottom-1.5 rounded-full border border-dashed border-white/30 sm:inset-x-2 sm:top-2 sm:bottom-2"
                    aria-hidden
                  />
                )}

                <span
                  className={cn(
                    "bb-number absolute left-1/2 z-[1] -translate-x-1/2 rounded-full px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-xs",
                    bar.highlight
                      ? "top-9 bg-[var(--bb-ink)]/40 sm:top-11"
                      : "bottom-5 bg-white/10 sm:bottom-6"
                  )}
                >
                  {bar.value}%
                </span>
              </div>

              <p className="mt-3 max-w-[4.5rem] truncate text-[9px] font-medium tracking-wide text-white/30 lowercase sm:text-[10px]">
                {bar.hint}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[52ch] text-[11px] leading-relaxed text-white/30">
          Illustrative view of opaque shopping patterns versus finishing a clear
          side-by-side compare on BazaarBraker.
        </p>
      </div>
    </section>
  );
}
