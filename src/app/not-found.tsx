import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/landing/site-footer";
import { IslandNav } from "@/components/landing/island-nav";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Page not found",
  description: "This page is not available. Return home to compare insurance plans.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <IslandNav />
      <main className="bb-container flex min-h-[70dvh] flex-col items-start justify-center py-28 md:py-32">
        <p className="bb-number text-sm font-medium text-[var(--bb-primary)]">
          404
        </p>
        <h1 className="bb-display mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--bb-ink)]">
          Page not found
        </h1>
        <p className="mt-4 max-w-[42ch] text-[var(--bb-body)]">
          This page isn&apos;t available. Head home to compare cover, or open a
          product from the menu.
        </p>
        <Link href="/" className="bb-btn mt-8">
          Back home
          <span className="bb-btn__icon" aria-hidden>
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </span>
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
