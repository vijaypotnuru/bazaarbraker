"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--bb-hairline)] p-8 shadow-[var(--bb-shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--bb-shadow-md)]",
  {
    variants: {
      gradient: {
        orange: "bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100",
        gray: "bg-gradient-to-br from-slate-50 via-slate-100/80 to-[#e8efff]",
        purple: "bg-gradient-to-br from-violet-50 via-indigo-50 to-violet-100",
        green: "bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100",
      },
    },
    defaultVariants: {
      gradient: "gray",
    },
  }
);

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badgeText: string;
  badgeColor: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl: string;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    {
      className,
      gradient,
      badgeText,
      badgeColor,
      title,
      description,
      ctaText,
      ctaHref,
      imageUrl,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="h-full"
        ref={ref}
      >
        <div className={cn(cardVariants({ gradient }), className)} {...props}>
          {/* Soft veil keeps copy readable; right side stays open for art */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[55%] bg-gradient-to-r from-white/90 via-white/45 to-transparent"
            aria-hidden
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt=""
            width={320}
            height={320}
            decoding="async"
            className="pointer-events-none absolute right-[-8px] bottom-[-4px] z-0 size-[190px] object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-2 sm:right-1 sm:bottom-1 sm:size-[220px] lg:size-[240px]"
          />

          <div className="relative z-10 flex h-full min-h-[240px] flex-col">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-[var(--bb-ink)] shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              {badgeText}
            </div>

            <div className="max-w-[15.5rem] flex-grow sm:max-w-[17rem]">
              <h3 className="mb-2 font-[family-name:var(--font-outfit)] text-2xl font-semibold tracking-tight text-[var(--bb-ink)]">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--bb-body)]">
                {description}
              </p>
            </div>

            <a
              href={ctaHref}
              className="group/cta mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--bb-ink)]"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
