"use client";

import Link from "next/link";
import {
  Calculator,
  HeartPulse,
  HelpCircle,
  Home,
  PiggyBank,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCard = {
  gradient: string;
  href: string;
  badge?: string;
  badgeIcon?: LucideIcon;
  badgePill?: string;
  title: string;
  copy: React.ReactNode;
  cta?: string;
  decorIcon?: LucideIcon;
};

const featureCards: FeatureCard[] = [
  {
    gradient: "from-[#1a1a2e] via-[#2d2d5e] to-[#4a3f8c]",
    href: "#compare",
    badgePill: "✦ Introducing BazaarBraker.ai ✦",
    title: "BazaarBraker.ai",
    copy: (
      <>
        Always find the right policy{" "}
        <strong className="font-bold">with our AI expert</strong>
      </>
    ),
    cta: "Explore BazaarBraker.ai",
    decorIcon: Bot,
  },
  {
    gradient: "from-[#2ecc71] via-[#27ae60] to-[#1e9e58]",
    href: "#compare",
    badge: "Investment Plans",
    badgeIcon: PiggyBank,
    title: "Investment Plans",
    copy: (
      <>
        Invest ₹10K and Get{" "}
        <strong className="text-xl font-bold">₹1 Crore</strong> return*
      </>
    ),
    decorIcon: PiggyBank,
  },
  {
    gradient: "from-[#2aabbf] via-[#3a9fd4] to-[#4a8fd4]",
    href: "#compare",
    badge: "Health Insurance",
    badgeIcon: HeartPulse,
    title: "Health Insurance",
    copy: (
      <>
        Book <strong className="font-bold">Free Health Insurance</strong>{" "}
        Consultation at home
      </>
    ),
    cta: "Book home visit",
    decorIcon: HeartPulse,
  },
  {
    gradient: "from-[#6b5ce7] via-[#8b6fd4] to-[#e8a598]",
    href: "#compare",
    badge: "SIP Calculator",
    badgeIcon: Calculator,
    title: "SIP Calculator",
    copy: (
      <>
        Make investment simple with our{" "}
        <strong className="font-bold">SIP calculator</strong>
      </>
    ),
    cta: "Calculate now",
    decorIcon: Calculator,
  },
  {
    gradient: "from-[#2db8a8] via-[#3aabbf] to-[#4a9fd4]",
    href: "#compare",
    badge: "Home Insurance",
    badgeIcon: Home,
    title: "Home Insurance",
    copy: (
      <>
        <strong className="font-bold">₹50 Lakh Cover</strong> for Your Home
        Insurance starting at Just <strong className="font-bold">₹80/month*</strong>
      </>
    ),
    decorIcon: Home,
  },
  {
    gradient: "from-[#e05a6a] via-[#e87878] to-[#f0a090]",
    href: "#compare",
    badge: "Ask Expert",
    badgeIcon: HelpCircle,
    title: "Ask Expert",
    copy: (
      <>
        Got a <strong className="font-bold">question about insurance?</strong>{" "}
        Write to us
      </>
    ),
    decorIcon: HelpCircle,
  },
];

function FeatureCardBlock({ card }: { card: FeatureCard }) {
  const BadgeIcon = card.badgeIcon;
  const DecorIcon = card.decorIcon;

  return (
    <Link
      href={card.href}
      className={cn(
        "relative flex min-h-[200px] flex-col overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white sm:p-6",
        card.gradient
      )}
    >
      <div className="relative z-10 flex flex-1 flex-col">
        {card.badgePill ? (
          <span className="mb-4 inline-block w-fit rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-medium sm:text-[11px]">
            {card.badgePill}
          </span>
        ) : (
          BadgeIcon &&
          card.badge && (
            <div className="mb-3 flex items-center gap-1.5">
              <BadgeIcon className="size-3.5 opacity-90" />
              <span className="text-[11px] font-medium opacity-90 sm:text-xs">
                {card.badge}
              </span>
            </div>
          )
        )}

        {!card.badgePill && (
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
            {card.title}
          </p>
        )}

        <p className="mt-2 flex-1 text-sm font-medium leading-snug sm:text-base">
          {card.copy}
        </p>

        {card.cta && (
          <span className="mt-4 inline-flex w-fit rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[#1a3a6b] sm:text-sm">
            {card.cta}
          </span>
        )}

        {DecorIcon && (
          <DecorIcon
            className="absolute bottom-4 right-4 size-10 opacity-20"
            strokeWidth={1.5}
          />
        )}
      </div>
    </Link>
  );
}

export function PromoCardsSection() {
  return (
    <section className="bg-[#f0f4fa] py-8 md:py-10">
      <div className="bb-container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCardBlock key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
