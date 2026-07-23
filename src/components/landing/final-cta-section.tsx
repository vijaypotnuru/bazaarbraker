import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brandPhotos } from "@/lib/brand-assets";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src={brandPhotos.travel}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[var(--bb-ink)]/78" />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 size-[420px] -translate-y-1/2 rounded-full bg-[var(--bb-primary)]/30 blur-3xl"
        aria-hidden
      />
      <div className="bb-container relative text-center">
        <p className="text-sm font-semibold tracking-wide text-[var(--bb-primary)]">
          BazaarBraker
        </p>
        <h2 className="bb-display mx-auto mt-4 max-w-[14ch] text-[clamp(2rem,5vw,3.5rem)] text-white">
          Start with a clear quote
        </h2>
        <p className="mx-auto mt-4 max-w-[40ch] text-white/70">
          No discount maze. Compare cover, pick a plan, and buy with confidence.
        </p>
        <Link href="/term-insurance" className="bb-btn mx-auto mt-10">
          Compare now
          <span className="bb-btn__icon" aria-hidden>
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </span>
        </Link>
      </div>
    </section>
  );
}
