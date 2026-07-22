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

const advantages = [
  {
    icon: Layers,
    iconBg: "bg-gradient-to-br from-[#f4b000] via-[#e05a8a] to-[#7c5ce7]",
    title: "One of the best Prices",
    subtitle: "Guaranteed",
  },
  {
    icon: Smartphone,
    iconBg: "bg-gradient-to-br from-[#4a7fd4] to-[#6b5ce7]",
    title: "Unbiased Advice",
    subtitle: "Keeping customers first",
  },
  {
    icon: BadgeCheck,
    iconBg: "bg-gradient-to-br from-[#2ecc71] to-[#2aabbf]",
    title: "100% Reliable",
    subtitle: "Regulated by IRDAI",
  },
  {
    icon: FileCheck,
    iconBg: "bg-gradient-to-br from-[#f5a623] to-[#e8870a]",
    title: "Claims Support",
    subtitle: "Made stress-free",
  },
  {
    icon: Headphones,
    iconBg: "bg-gradient-to-br from-[#00a8e1] to-[#4a7fd4]",
    title: "Happy to Help",
    subtitle: "Every day of the week",
  },
];

function AdvantageCard({
  icon: Icon,
  iconBg,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-[#e2e8f0] bg-white px-4 py-6 text-center">
      <span
        className={`mb-4 flex size-16 items-center justify-center rounded-2xl ${iconBg}`}
      >
        <Icon className="size-8 text-white" strokeWidth={1.75} />
      </span>
      <h3 className="text-sm font-bold leading-snug text-[#1a3a6b]">{title}</h3>
      <p className="mt-1 text-xs text-[#6a8099]">{subtitle}</p>
    </div>
  );
}

export function AdvantageSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="bb-container">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-[#00a8e1]/10">
              <Shield className="size-5 text-[#00a8e1]" />
            </span>
            <h2 className="text-2xl font-bold text-[#1a3a6b] md:text-3xl">
              BazaarBraker Advantage
            </h2>
          </div>
          <div className="mt-2 h-1 w-12 rounded-full bg-[#00a8e1]" />
          <p className="mt-4 text-sm leading-relaxed text-[#6a8099] md:text-base">
            When you buy insurance from us, you get more than just financial
            safety. You also get: our promise of simplifying complex insurance
            terms and conditions, quick stress-free claims, instant quotes from
            top insurers and being present for you in the toughest of times.
          </p>
          <Link
            href="#compare"
            className="mt-3 inline-block text-sm font-semibold text-[#00a8e1] hover:underline"
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
