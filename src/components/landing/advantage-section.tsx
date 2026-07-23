import Link from "next/link";
import {
  BadgeCheck,
  FileCheck,
  Headphones,
  Layers,
  Shield,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const advantages: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}[] = [
  {
    icon: Layers,
    title: "Strong prices",
    subtitle: "Competitive quotes, compared",
  },
  {
    icon: Smartphone,
    title: "Unbiased advice",
    subtitle: "Keeping customers first",
  },
  {
    icon: BadgeCheck,
    title: "IRDAI regulated",
    subtitle: "Licensed web aggregator",
  },
  {
    icon: FileCheck,
    title: "Claims support",
    subtitle: "Made less stressful",
  },
  {
    icon: Headphones,
    title: "Happy to help",
    subtitle: "Every day of the week",
  },
];

function AdvantageCard({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="group flex flex-col items-center rounded-[var(--bb-radius-lg)] border border-[var(--bb-hairline-soft)] bg-[var(--bb-canvas)] px-4 py-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--bb-hairline)] hover:shadow-[var(--bb-shadow-md)]">
      <span className="mb-4 flex size-14 items-center justify-center rounded-[14px] bg-[var(--bb-primary-soft)] text-[var(--bb-primary)] transition-colors group-hover:bg-[var(--bb-primary)] group-hover:text-white">
        <Icon className="size-7" strokeWidth={1.75} />
      </span>
      <h3 className="text-sm font-semibold leading-snug text-[var(--bb-ink)]">
        {title}
      </h3>
      <p className="mt-1 text-xs text-[var(--bb-body)]">{subtitle}</p>
    </div>
  );
}

export function AdvantageSection() {
  return (
    <section className="bg-[var(--bb-canvas)] py-12 md:py-16">
      <div className="bb-container">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-[10px] bg-[var(--bb-primary-soft)]">
              <Shield className="size-5 text-[var(--bb-primary)]" strokeWidth={1.75} />
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--bb-ink)] md:text-3xl">
              BazaarBraker Advantage
            </h2>
          </div>
          <div className="mt-2 h-1 w-12 rounded-full bg-[var(--bb-primary)]" />
          <p className="mt-4 text-sm leading-relaxed text-[var(--bb-body)] md:text-base">
            When you buy insurance from us, you get more than financial safety:
            plain-language policy terms, quicker claims help, instant quotes from
            top insurers, and support when things get hard.
          </p>
          <Link
            href="/term-insurance"
            className="mt-3 inline-block text-sm font-semibold text-[var(--bb-primary)] transition-colors hover:text-[var(--bb-primary-active)]"
          >
            Know more
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {advantages.map((item) => (
            <AdvantageCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
