import { Search } from "lucide-react";

const features = [
  {
    emoji: "🎉",
    title: "Over 9 million",
    titleColor: "text-[#4a5fd4]",
    borderColor: "border-l-[#4a5fd4]",
    description:
      "customers trust us & have bought their insurance on BazaarBraker",
    offset: "",
  },
  {
    emoji: "🔍",
    icon: Search,
    title: "51 insurers",
    titleColor: "text-[#2aabbf]",
    borderColor: "border-l-[#2aabbf]",
    description:
      "partnered with us so that you can compare easily & transparently",
    offset: "md:mt-10",
  },
  {
    emoji: "🤩",
    title: "Great Price",
    titleColor: "text-[#2ecc71]",
    borderColor: "border-l-[#2ecc71]",
    description: "for all kinds of insurance plans available online",
    offset: "md:-mt-2",
  },
  {
    emoji: "👩‍💼",
    title: "Claims",
    titleColor: "text-[#f5a623]",
    borderColor: "border-l-[#f5a623]",
    description:
      "support built in with every policy for help, when you need it the most",
    offset: "md:mt-8",
  },
];

function BackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-16 top-8 size-48 rounded-full bg-[#fff8e1]/60" />
      <div className="absolute left-8 top-32 size-32 rounded-full bg-[#e8f0fe]/50" />
      <div className="absolute right-12 top-16 size-24 rounded-full bg-[#fce4ec]/40" />
      <div className="absolute bottom-12 left-1/4 grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="size-1 rounded-full bg-[#c5d5ea]" />
        ))}
      </div>
      <span className="absolute right-24 top-1/3 text-lg text-[#ffcdd2]/60">×</span>
      <span className="absolute right-16 bottom-1/4 text-sm text-[#bbdefb]/70">×</span>
      <span className="absolute left-1/3 bottom-20 text-xs text-[#c5d5ea]/50">○</span>
    </div>
  );
}

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <BackgroundDecorations />

      <div className="bb-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Headline */}
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-snug tracking-tight">
              <span className="font-normal text-[#6a8099]">What makes </span>
              <span className="font-bold text-[#1a3a6b]">
                BazaarBraker one of India&apos;s favourite places
              </span>
              <span className="font-normal text-[#6a8099]">
                {" "}
                to buy insurance?
              </span>
            </h2>
          </div>

          {/* Staggered feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`rounded-xl border border-[#eef2f7] border-l-4 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${feature.borderColor} ${feature.offset}`}
                >
                  <div className="mb-2 text-xl">
                    {Icon ? (
                      <Icon className={`size-5 ${feature.titleColor}`} />
                    ) : (
                      feature.emoji
                    )}
                  </div>
                  <h3
                    className={`mb-1.5 text-lg font-bold ${feature.titleColor}`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6a8099]">
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
