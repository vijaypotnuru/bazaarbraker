"use client";

import { GradientCard } from "@/components/ui/gradient-card";

/**
 * Action paths — sits between steps and AI advisor.
 * Custom 3D graphics live in /public/brand/paths/
 */
const cardData = [
  {
    badgeText: "Under 2 minutes",
    badgeColor: "#F59E0B",
    title: "Renew a policy",
    description:
      "Pull up last year’s plan, see fresh premiums, and renew without the phone maze.",
    ctaText: "Start renewal",
    ctaHref: "#",
    imageUrl: "/brand/paths/path-renew.png?v=2",
    gradient: "orange" as const,
  },
  {
    badgeText: "Guided help",
    badgeColor: "#0052FF",
    title: "File a claim",
    description:
      "Clear steps, document checklist, and status you can follow — when it matters most.",
    ctaText: "Claim support",
    ctaHref: "#",
    imageUrl: "/brand/paths/path-claim.png?v=2",
    gradient: "gray" as const,
  },
  {
    badgeText: "Always on",
    badgeColor: "#7C3AED",
    title: "Ask the advisor",
    description:
      "Plain-language answers on cover, riders, and claim ratios — any time of day.",
    ctaText: "Try the advisor",
    ctaHref: "#advisor",
    imageUrl: "/brand/paths/path-advisor.png?v=2",
    gradient: "purple" as const,
  },
  {
    badgeText: "Side by side",
    badgeColor: "#10B981",
    title: "Compare fresh",
    description:
      "Term, health, motor, or travel — quotes from IRDAI partners in one calm view.",
    ctaText: "Compare now",
    ctaHref: "/term-insurance",
    imageUrl: "/brand/paths/path-compare.png?v=2",
    gradient: "green" as const,
  },
];

export function GradientPathsSection() {
  return (
    <section id="paths" className="bb-section bg-[var(--bb-canvas)]">
      <div className="bb-container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="bb-display max-w-[16ch] text-[clamp(1.85rem,3.8vw,3rem)] text-[var(--bb-ink)]">
            What do you need next?
          </h2>
          <p className="max-w-[36ch] text-[var(--bb-body)] lg:pb-1 lg:text-right md:text-lg">
            Renew, claim, ask, or compare — four clear doors, no sales maze.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {cardData.map((card) => (
            <GradientCard
              key={card.title}
              badgeText={card.badgeText}
              badgeColor={card.badgeColor}
              title={card.title}
              description={card.description}
              ctaText={card.ctaText}
              ctaHref={card.ctaHref}
              imageUrl={card.imageUrl}
              gradient={card.gradient}
              className="min-h-[300px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
