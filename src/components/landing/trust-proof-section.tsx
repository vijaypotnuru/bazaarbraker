import Image from "next/image";
import { brandPhotos } from "@/lib/brand-assets";

const proofs = [
  {
    value: "9.2M",
    label: "Customers",
    detail: "Families who compared and bought cover with us",
  },
  {
    value: "51",
    label: "Insurers",
    detail: "Side-by-side quotes, claim ratios, and riders",
  },
  {
    value: "IRDAI",
    label: "Regulated",
    detail: "Licensed web aggregator you can verify",
  },
];

export function TrustProofSection() {
  return (
    <section id="trust" className="bb-section bg-[var(--bb-canvas)]">
      <div className="bb-container">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Proof ledger — first in DOM for mobile + a11y */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-center">
            <h2 className="bb-display max-w-[12ch] text-[clamp(2rem,4vw,3.25rem)] text-[var(--bb-ink)]">
              Why families choose us
            </h2>
            <p className="mt-4 max-w-[40ch] text-[var(--bb-body)] md:text-lg">
              Clear comparisons, real partners, and regulation you can check —
              built for trust, not pressure.
            </p>

            <ul className="mt-10 border-t border-[var(--bb-hairline)] md:mt-12">
              {proofs.map((item) => (
                <li
                  key={item.label}
                  className="grid grid-cols-[minmax(5.5rem,auto)_1fr] items-baseline gap-x-5 gap-y-1 border-b border-[var(--bb-hairline)] py-6 md:grid-cols-[minmax(6.5rem,auto)_1fr] md:gap-x-7 md:py-7"
                >
                  <p className="bb-number text-[clamp(2rem,4.5vw,2.75rem)] font-medium leading-none text-[var(--bb-primary)]">
                    {item.value}
                  </p>
                  <div>
                    <p className="font-[family-name:var(--font-outfit)] text-base font-semibold tracking-tight text-[var(--bb-ink)] md:text-lg">
                      {item.label}
                    </p>
                    <p className="mt-1 max-w-[32ch] text-sm leading-relaxed text-[var(--bb-body)]">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Atmosphere — visual lead on desktop */}
          <figure className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <div className="bb-shell">
              <div className="bb-shell__inner relative aspect-[4/5] min-h-[280px] sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[520px]">
                <Image
                  src={brandPhotos.trust}
                  alt="Quiet morning light on a home balcony overlooking the city"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
            <figcaption className="mt-3 font-[family-name:var(--font-outfit)] text-sm text-[var(--bb-muted)]">
              Cover that fits real family life
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
