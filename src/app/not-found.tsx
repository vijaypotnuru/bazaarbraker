import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export default function NotFound() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <SiteHeader />
      <main className="bb-container flex flex-col items-center py-24 text-center">
        <p className="text-sm font-semibold tracking-widest text-[#0052ff]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#1a3a6b]">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-sm text-[#6a8099]">
          This insurance page is not available yet. Browse products from the
          homepage or header menu.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#0052ff] px-6 text-sm font-semibold text-white hover:bg-[#003ecc]"
        >
          Back to home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
