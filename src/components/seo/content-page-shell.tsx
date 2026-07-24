import type { ReactNode } from "react";
import { IslandNav } from "@/components/landing/island-nav";
import { SiteFooter } from "@/components/landing/site-footer";

type ContentPageShellProps = {
  children: ReactNode;
  /** Optional schema / head extras rendered inside main. */
  jsonLd?: ReactNode;
};

/** Shared chrome for legal, about, contact, and other content pages. */
export function ContentPageShell({ children, jsonLd }: ContentPageShellProps) {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      {jsonLd}
      <IslandNav />
      <main className="bb-container max-w-3xl py-28 md:py-32">{children}</main>
      <SiteFooter />
    </div>
  );
}
