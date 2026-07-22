"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronRight as CtaArrow } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Invest ₹18k per month & get ₹2 Crore in return",
    discount: "ULIP Investment Plans",
    highlight: "7.4%",
    sub: "guaranteed returns",
    cta: "Explore plans",
    href: "#compare",
  },
  {
    title: "Get ₹2 Crore Term cover starting @802/month*",
    discount: "Exclusive plans for NRI",
    highlight: "₹2Cr",
    sub: "term life protection",
    cta: "View plans",
    href: "#compare",
  },
  {
    title: "Best time to buy Health Insurance is now",
    discount: "Additional discount up to 25%*",
    highlight: "0% GST",
    sub: "on health insurance plans",
    cta: "View plans",
    href: "#compare",
  },
];

export function HeroBannerCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a3a6b] via-[#1e4080] to-[#0f2847] p-5 text-white sm:p-6">
        <p className="mb-3 max-w-[220px] text-sm font-medium leading-snug sm:text-base">
          {slide.title}
        </p>
        <span className="mb-4 inline-block rounded-md bg-gradient-to-r from-[#f5a623] to-[#f7c948] px-2.5 py-1 text-[11px] font-bold text-[#1a1a1a]">
          {slide.discount}
        </span>
        <div className="flex items-end justify-between gap-3">
          <div>
            <span className="text-5xl font-bold leading-none text-[#f4b000] sm:text-6xl">
              {slide.highlight}
            </span>
            <p className="mt-1 text-xs text-white/80">{slide.sub}</p>
            <span className="mt-2 inline-block rounded bg-[#cf202f] px-2 py-0.5 text-[10px] font-semibold">
              Limited period offer
            </span>
          </div>
        </div>
        <Link
          href={slide.href}
          className="mt-4 inline-flex items-center gap-1 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#1a3a6b] shadow-sm transition-colors hover:bg-white/90"
        >
          {slide.cta}
          <CtaArrow className="size-4" />
        </Link>
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous banner"
          onClick={() => setActive((c) => (c === 0 ? slides.length - 1 : c - 1))}
          className="flex size-7 items-center justify-center rounded-full border border-[#c5d5ea] text-[#4a7fd4] hover:bg-white"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to banner ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "size-2 rounded-full transition-colors",
                i === active ? "bg-[#0052ff]" : "bg-[#c5d5ea]"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next banner"
          onClick={() => setActive((c) => (c === slides.length - 1 ? 0 : c + 1))}
          className="flex size-7 items-center justify-center rounded-full border border-[#c5d5ea] text-[#4a7fd4] hover:bg-white"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
