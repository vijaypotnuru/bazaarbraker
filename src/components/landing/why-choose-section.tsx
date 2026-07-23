import { Headphones, IndianRupee, Search, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  offset: string;
}[] = [
  {
    icon: Users,
    title: "9.2 million customers",
    description:
      "People across India have compared and bought insurance on BazaarBraker",
    offset: "",
  },
  {
    icon: Search,
    title: "51 insurers",
    description:
      "Partnered so you can compare cover, premiums, and claim ratios side by side",
    offset: "md:mt-10",
  },
  {
    icon: IndianRupee,
    title: "Clear pricing",
    description: "Transparent quotes across term, health, motor, and more",
    offset: "md:-mt-2",
  },
  {
    icon: Headphones,
    title: "Claims help",
    description:
      "Support built into every policy when you need it most",
    offset: "md:mt-8",
  },
];

function BackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-20 top-0 size-72 rounded-full bg-[var(--bb-primary-soft)]/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 size-80 rounded-full bg-[var(--bb-surface-tint)] blur-3xl" />
    </div>
  );
}

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bb-canvas)] py-16 md:py-24">
      <BackgroundDecorations />

      <div className="bb-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div>
            <h2 className="bb-display-lg max-w-[18ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-[var(--bb-ink)]">
              <span className="font-normal text-[var(--bb-muted)]">What makes </span>
              BazaarBraker
              <span className="font-normal text-[var(--bb-muted)]">
                {" "}
                a trusted place to buy insurance?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`rounded-[var(--bb-radius-lg)] border border-[var(--bb-hairline-soft)] border-l-[3px] border-l-[var(--bb-primary)] bg-[var(--bb-canvas)] p-5 shadow-[var(--bb-shadow-sm)] transition-shadow duration-200 hover:shadow-[var(--bb-shadow-md)] ${feature.offset}`}
                >
                  <span className="mb-3 flex size-9 items-center justify-center rounded-[10px] bg-[var(--bb-primary-soft)] text-[var(--bb-primary)]">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-[var(--bb-ink)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--bb-body)]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
