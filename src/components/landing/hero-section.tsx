import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brandPhotos } from "@/lib/brand-assets";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bb-canvas)] md:min-h-[100dvh]">
      {/* Desktop full-bleed photo — hidden on mobile so it never washes the copy */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        <Image
          src={brandPhotos.hero}
          alt=""
          fill
          priority
          className="object-cover object-[72%_32%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bb-canvas)] from-0% via-[var(--bb-canvas)]/80 via-35% to-transparent to-70%" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--bb-canvas)]/40 to-transparent" />
      </div>

      <div className="bb-container relative flex flex-col pt-28 pb-6 md:min-h-[100dvh] md:justify-center md:pb-24 md:pt-32">
        <div className="bb-reveal max-w-xl">
          <p className="bb-display text-[clamp(2rem,9vw,4.5rem)] uppercase leading-[0.95] text-[var(--bb-ink)]">
            BazaarBraker
          </p>
          <h1 className="bb-display mt-3 max-w-[14ch] text-[clamp(1.65rem,5.5vw,2.75rem)] text-[var(--bb-ink)] md:mt-4">
            Find cover you can trust.
          </h1>
          <p className="mt-3 max-w-[34ch] text-[0.9375rem] leading-relaxed text-[var(--bb-body)] md:mt-4 md:max-w-[36ch] md:text-lg">
            Compare plans from India&apos;s leading insurers and choose with
            confidence.
          </p>
          <Link href="/term-insurance" className="bb-btn mt-6 md:mt-8">
            Compare plans
            <span className="bb-btn__icon" aria-hidden>
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </span>
          </Link>
        </div>

        {/* Mobile-only photo card — clear, no gradient fog */}
        <div className="relative mt-8 aspect-[5/4] w-full overflow-hidden rounded-[var(--bb-radius-xl)] shadow-[var(--bb-shadow-md)] md:hidden">
          <Image
            src={brandPhotos.hero}
            alt="Indian family together at home in morning light"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 768px) 100vw, 0px"
          />
        </div>
      </div>
    </section>
  );
}
