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
  surface: string;
  href: string;
  badge?: string;
  badgeIcon?: LucideIcon;
  badgePill?: string;
  title: string;
  copy: React.ReactNode;
  cta?: string;
  decorIcon?: LucideIcon;
  light?: boolean;
};

const featureCards: FeatureCard[] = [
  {
    surface: "bg-[var(--bb-ink)]",
    href: "/term-insurance",
    badgePill: "Introducing BazaarBraker.ai",
    title: "BazaarBraker.ai",
    copy: (
      <>
        Always find the right policy{" "}
        <strong className="font-semibold">with our AI expert</strong>
      </>
    ),
    cta: "Explore BazaarBraker.ai",
    decorIcon: Bot,
  },
  {
    surface: "bg-[var(--bb-semantic-up)]",
    href: "/investment-plans",
    badge: "Investment Plans",
    badgeIcon: PiggyBank,
    title: "Investment Plans",
    copy: (
      <>
        Invest ₹10K and Get{" "}
        <strong className="text-xl font-semibold">₹1 Crore</strong> return*
      </>
    ),
    decorIcon: PiggyBank,
  },
  {
    surface: "bg-[var(--bb-primary)]",
    href: "/health-insurance",
    badge: "Health Insurance",
    badgeIcon: HeartPulse,
    title: "Health Insurance",
    copy: (
      <>
        Book <strong className="font-semibold">Free Health Insurance</strong>{" "}
        Consultation at home
      </>
    ),
    cta: "Book home visit",
    decorIcon: HeartPulse,
  },
  {
    surface: "bg-[var(--bb-ink-soft)]",
    href: "#calculators",
    badge: "SIP Calculator",
    badgeIcon: Calculator,
    title: "SIP Calculator",
    copy: (
      <>
        Make investment simple with our{" "}
        <strong className="font-semibold">SIP calculator</strong>
      </>
    ),
    cta: "Calculate now",
    decorIcon: Calculator,
  },
  {
    surface: "bg-[#0d6e6e]",
    href: "/home-insurance",
    badge: "Home Insurance",
    badgeIcon: Home,
    title: "Home Insurance",
    copy: (
      <>
        <strong className="font-semibold">₹50 Lakh Cover</strong> for Your Home
        Insurance starting at Just <strong className="font-semibold">₹80/month*</strong>
      </>
    ),
    decorIcon: Home,
  },
  {
    surface: "bg-[var(--bb-surface-tint)] text-[var(--bb-ink)]",
    href: "#help",
    badge: "Ask Expert",
    badgeIcon: HelpCircle,
    title: "Ask Expert",
    copy: (
      <>
        Got a <strong className="font-semibold">question about insurance?</strong>{" "}
        Write to us
      </>
    ),
    decorIcon: HelpCircle,
    light: true,
  },
];

function FeatureCardBlock({ card }: { card: FeatureCard }) {
  const BadgeIcon = card.badgeIcon;
  const DecorIcon = card.decorIcon;

  return (
    <Link
      href={card.href}
      className={cn(
        "group relative flex min-h-[200px] flex-col overflow-hidden rounded-[var(--bb-radius-xl)] p-5 transition-transform duration-200 sm:p-6",
        "hover:-translate-y-0.5 active:scale-[0.99]",
        card.light ? "text-[var(--bb-ink)] ring-1 ring-[var(--bb-hairline)]" : "text-white",
        card.surface
      )}
    >
      <div className="relative z-10 flex flex-1 flex-col">
        {card.badgePill ? (
          <span
            className={cn(
              "mb-4 inline-block w-fit rounded-md px-2.5 py-1 text-[10px] font-medium tracking-wide sm:text-[11px]",
              card.light ? "bg-[var(--bb-hairline-soft)]" : "bg-white/15"
            )}
          >
            {card.badgePill}
          </span>
        ) : (
          BadgeIcon &&
          card.badge && (
            <div className="mb-3 flex items-center gap-1.5">
              <BadgeIcon className="size-3.5 opacity-90" strokeWidth={1.75} />
              <span className="text-[11px] font-medium opacity-90 sm:text-xs">
                {card.badge}
              </span>
            </div>
          )
        )}

        {!card.badgePill && (
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-wide",
              card.light ? "text-[var(--bb-muted)]" : "opacity-80"
            )}
          >
            {card.title}
          </p>
        )}

        <p className="mt-2 flex-1 text-sm font-medium leading-snug sm:text-base">
          {card.copy}
        </p>

        {card.cta && (
          <span
            className={cn(
              "mt-4 inline-flex w-fit rounded-lg px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
              card.light
                ? "bg-[var(--bb-ink)] text-white group-hover:bg-[var(--bb-primary)]"
                : "bg-white text-[var(--bb-ink)]"
            )}
          >
            {card.cta}
          </span>
        )}

        {DecorIcon && (
          <DecorIcon
            className={cn(
              "absolute bottom-4 right-4 size-10 opacity-15 transition-opacity group-hover:opacity-25",
              card.light && "text-[var(--bb-primary)]"
            )}
            strokeWidth={1.5}
          />
        )}
      </div>
    </Link>
  );
}

export function PromoCardsSection() {
  return (
    <section className="bg-[var(--bb-surface-tint)] py-10 md:py-14">
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
