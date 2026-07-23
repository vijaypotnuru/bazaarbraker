"use client";

import Image from "next/image";
import { useState } from "react";
import { partners, type Partner } from "@/lib/partners";
import { cn } from "@/lib/utils";

function monogram(name: string) {
  const parts = name.replace(/of India/i, "").trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function PartnerTile({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "group flex h-[72px] w-[148px] shrink-0 items-center justify-center rounded-[var(--bb-radius-md)]",
        "bg-[var(--bb-surface)] ring-1 ring-[var(--bb-hairline-soft)]",
        "shadow-[var(--bb-shadow-sm)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
        "hover:-translate-y-0.5 hover:shadow-[var(--bb-shadow-md)] hover:ring-[var(--bb-primary)]/20"
      )}
      title={partner.name}
    >
      {failed ? (
        <span className="flex flex-col items-center gap-1 px-2 text-center">
          <span className="flex size-8 items-center justify-center rounded-full bg-[var(--bb-primary-soft)] text-[10px] font-bold tracking-wide text-[var(--bb-primary)]">
            {monogram(partner.name)}
          </span>
          <span className="max-w-[120px] truncate text-[10px] font-semibold text-[var(--bb-muted)]">
            {partner.name}
          </span>
        </span>
      ) : (
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={112}
          height={40}
          unoptimized
          onError={() => setFailed(true)}
          className="max-h-9 w-auto max-w-[112px] object-contain opacity-85 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:scale-105"
        />
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 48,
}: {
  items: Partner[];
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bb-canvas)] to-transparent md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bb-canvas)] to-transparent md:w-24"
        aria-hidden
      />
      <div
        className={cn(
          "flex w-max gap-3 md:gap-4",
          reverse ? "bb-marquee-reverse" : "bb-marquee"
        )}
        style={{ ["--bb-marquee-duration" as string]: `${duration}s` }}
      >
        {loop.map((partner, i) => (
          <PartnerTile key={`${partner.slug}-${i}`} partner={partner} />
        ))}
      </div>
    </div>
  );
}

export function PartnersStrip() {
  const rowA = partners.slice(0, 15);
  const rowB = partners.slice(15);

  return (
    <section
      id="partners"
      className="overflow-hidden bg-[var(--bb-canvas)] py-14 md:py-20"
      aria-label="Insurance partners"
    >
      <div className="bb-container mb-10 text-center md:mb-12">
        <h2 className="bb-display text-[clamp(1.5rem,3vw,2.25rem)] text-[var(--bb-ink)]">
          Insurers you already know
        </h2>
        <p className="mx-auto mt-3 max-w-[42ch] text-sm text-[var(--bb-body)] md:text-base">
          Compare real quotes from 50+ IRDAI-registered partners — side by side,
          without the sales maze.
        </p>
      </div>

      <div className="space-y-3 md:space-y-4 [&:hover_.bb-marquee]:[animation-play-state:paused] [&:hover_.bb-marquee-reverse]:[animation-play-state:paused]">
        <MarqueeRow items={rowA} duration={52} />
        {rowB.length > 0 && (
          <MarqueeRow items={rowB} reverse duration={58} />
        )}
      </div>
    </section>
  );
}
