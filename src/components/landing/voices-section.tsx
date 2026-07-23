import Image from "next/image";
import { brandPhotos } from "@/lib/brand-assets";

const stories = [
  {
    quote:
      "We compared claim ratios before we bought. The premiums made sense once we could see them side by side.",
    name: "Ananya R.",
    place: "Bengaluru",
    cover: "Term Life",
  },
  {
    quote:
      "No one pushed a plan on a call. We picked health cover for our parents in one calm evening.",
    name: "Karthik M.",
    place: "Pune",
    cover: "Health",
  },
  {
    quote:
      "Renewal took minutes. Same plan, clearer numbers, and we knew what changed year over year.",
    name: "Neha S.",
    place: "Mumbai",
    cover: "Motor",
  },
];

/** Editorial voices - one large quote + scroll strip. Not a 3-card grid. */
export function VoicesSection() {
  return (
    <section id="stories" className="bb-section bg-[var(--bb-surface)]">
      <div className="bb-container">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="bb-display max-w-[12ch] text-[clamp(1.85rem,3.8vw,3rem)] text-[var(--bb-ink)]">
              Families who compared first
            </h2>
            <p className="mt-4 max-w-[36ch] text-[var(--bb-body)] md:text-lg">
              Real decisions, quieter process. Cover chosen with clarity - not
              pressure.
            </p>
          </div>

          <figure className="lg:col-span-7">
            <div className="bb-shell">
              <div className="bb-shell__inner relative aspect-[16/10] min-h-[220px]">
                <Image
                  src={brandPhotos.voices}
                  alt="Couple reviewing cover options together at home"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>
            </div>
          </figure>
        </div>

        {/* Horizontal story strip */}
        <div className="mt-12 -mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:thin] [scrollbar-color:var(--bb-hairline)_transparent] md:mx-0 md:overflow-visible md:px-0">
          <ul className="flex min-w-max gap-6 md:min-w-0 md:grid md:grid-cols-3 md:gap-8">
            {stories.map((story) => (
              <li
                key={story.name}
                className="w-[min(78vw,320px)] border-t border-[var(--bb-hairline)] pt-6 md:w-auto"
              >
                <p className="text-[15px] leading-relaxed text-[var(--bb-ink)] md:text-base">
                  “{story.quote}”
                </p>
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <div>
                    <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--bb-ink)]">
                      {story.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[var(--bb-muted)]">
                      {story.place}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-[var(--bb-primary)]">
                    {story.cover}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
