"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Armchair,
  Baby,
  Bike,
  Car,
  Coins,
  HandCoins,
  HeartPulse,
  Home,
  ListChecks,
  Plane,
  Shield,
  TrendingUp,
  Users,
  UserRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { productIconMap } from "@/lib/theme-assets";
import { ThemeAssetImage } from "@/components/landing/theme-asset-image";
import { HeroBannerCarousel } from "@/components/landing/hero-banner-carousel";

type BadgeVariant = "green" | "pink" | "none";

type ServiceId =
  | "all"
  | "term"
  | "health"
  | "motor"
  | "investment"
  | "travel"
  | "home";

type Product = {
  label: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  badge?: string;
  badgeVariant?: BadgeVariant;
  href: string;
  service: Exclude<ServiceId, "all">;
};

const serviceTabs: { id: ServiceId; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "term", label: "Term Life" },
  { id: "health", label: "Health" },
  { id: "motor", label: "Motor" },
  { id: "investment", label: "Investment" },
  { id: "travel", label: "Travel" },
  { id: "home", label: "Home" },
];

const products: Product[] = [
  {
    label: "Term Life Insurance",
    icon: Shield,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badge: "Upto 15% Discount",
    badgeVariant: "green",
    href: "/term-insurance",
    service: "term",
  },
  {
    label: "Health Insurance",
    icon: HeartPulse,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    badge: "Lowest Price Guarantee",
    badgeVariant: "green",
    href: "/health-insurance",
    service: "health",
  },
  {
    label: "Investment Plans",
    icon: TrendingUp,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    badge: "In-Built Life Cover",
    badgeVariant: "green",
    href: "/investment-plans",
    service: "investment",
  },
  {
    label: "Car Insurance",
    icon: Car,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    badge: "Lowest Price Guarantee",
    badgeVariant: "green",
    href: "/car-insurance",
    service: "motor",
  },
  {
    label: "2 Wheeler Insurance",
    icon: Bike,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    badge: "Upto 85% Discount",
    badgeVariant: "green",
    href: "/two-wheeler-insurance",
    service: "motor",
  },
  {
    label: "Family Health Insurance",
    icon: Users,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    badge: "Upto 25% Discount",
    badgeVariant: "green",
    href: "/health-insurance/family",
    service: "health",
  },
  {
    label: "Travel Insurance",
    icon: Plane,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    href: "/travel-insurance",
    service: "travel",
  },
  {
    label: "Term Insurance (Women)",
    icon: UserRound,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    badge: "Upto 25% Cheaper",
    badgeVariant: "green",
    href: "/term-insurance",
    service: "term",
  },
  {
    label: "Term Plans with Return of Premium",
    icon: HandCoins,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    href: "/term-insurance",
    service: "term",
  },
  {
    label: "Guaranteed Return Plans",
    icon: Coins,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-700",
    badge: "Upto 7.4% Returns",
    badgeVariant: "green",
    href: "/investment-plans",
    service: "investment",
  },
  {
    label: "Child Savings Plans",
    icon: Baby,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    badge: "Premium Waiver",
    badgeVariant: "pink",
    href: "/investment-plans/child-plans",
    service: "investment",
  },
  {
    label: "Retirement Plans",
    icon: Armchair,
    iconBg: "bg-stone-100",
    iconColor: "text-stone-600",
    href: "/investment-plans/pension-plans",
    service: "investment",
  },
  {
    label: "Employee Group Health Insurance",
    icon: Users,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    badge: "Upto 65% Discount",
    badgeVariant: "green",
    href: "/health-insurance",
    service: "health",
  },
  {
    label: "Home Insurance",
    icon: Home,
    iconBg: "bg-lime-100",
    iconColor: "text-lime-700",
    badge: "Upto 25% Discount",
    badgeVariant: "green",
    href: "/home-insurance",
    service: "home",
  },
];

const alsoBuyItems = [
  { category: "Investment", label: "LIC Plans", color: "#7c5ce7" },
  { category: "Term Life", label: "Return of Premium", color: "#4a7fd4" },
  { category: "Term Life", label: "Life Insurance for Housewives", color: "#4a7fd4" },
  { category: "Health Insurance", label: "Day 1 Coverage", color: "#e05a8a" },
  { category: "Health Insurance", label: "1 Cr Health Insurance", color: "#e05a8a" },
  { category: "Health Insurance", label: "Personal Accident", color: "#e05a8a" },
  { category: "Motor Insurance", label: "Commercial Vehicles", color: "#e8870a" },
  { category: "Business Insurance", label: "Marine Insurance", color: "#0d9488" },
  { category: "Business Insurance", label: "Professional Indemnity for Doctors", color: "#0d9488" },
  { category: "Business Insurance", label: "Directors & Officers Liability", color: "#0d9488" },
  { category: "Business Insurance", label: "Workmen Compensation", color: "#0d9488" },
  { category: "Other Insurance", label: "Pet Insurance", color: "#6a8099" },
  { category: "Other Insurance", label: "Personal Cyber Insurance", color: "#6a8099" },
];

function badgeClasses(variant: BadgeVariant): string {
  switch (variant) {
    case "green":
      return "bg-[#e8f5e9] text-[#2e7d32] border-[#c8e6c9]";
    case "pink":
      return "bg-[#ffebee] text-[#c62828] border-[#ffcdd2]";
    case "none":
      return "";
    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
}

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const themeIcon = productIconMap[product.label];

  return (
    <Link
      href={product.href}
      className="group relative flex flex-col items-center rounded-2xl border border-[#e8edf5] bg-[#f8faff] px-2 pb-4 pt-3 transition-all hover:border-[#c5d5ea] hover:bg-[#eef3fb] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
    >
      {product.badge && product.badgeVariant && product.badgeVariant !== "none" && (
        <span
          className={cn(
            "mb-3 w-full rounded border px-1 py-0.5 text-center text-[9px] font-semibold leading-tight sm:text-[10px]",
            badgeClasses(product.badgeVariant)
          )}
        >
          {product.badge}
        </span>
      )}
      {!product.badge && <span className="mb-3 h-[18px]" />}

      <span
        className={cn(
          "mb-3 flex size-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 sm:size-16",
          !themeIcon && product.iconBg
        )}
      >
        {themeIcon ? (
          <ThemeAssetImage
            asset={themeIcon}
            alt=""
            width={56}
            height={56}
            className="size-12 sm:size-14"
          />
        ) : (
          <Icon className={cn("size-7 sm:size-8", product.iconColor)} strokeWidth={1.75} />
        )}
      </span>

      <p className="text-center text-[11px] font-semibold leading-snug text-[#1a3a6b] sm:text-xs">
        {product.label}
      </p>
    </Link>
  );
}

function ServiceToggle({
  active,
  onChange,
}: {
  active: ServiceId;
  onChange: (id: ServiceId) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter products by service"
      className="mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {serviceTabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              isActive
                ? "border-[#0052ff] bg-[#0052ff] text-white"
                : "border-[#e8edf5] bg-[#f8faff] text-[#4a5568] hover:border-[#c5d5ea] hover:text-[#1a3a6b]"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function AlsoBuySection() {
  return (
    <div className="mt-10 border-t border-[#e8edf5] pt-8">
      <h2 className="mb-5 text-xs font-bold tracking-widest text-[#0052ff]">
        ALSO BUY
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {alsoBuyItems.map((item) => (
          <Link
            key={item.label}
            href="#also-buy"
            className="rounded-xl border border-[#e8edf5] bg-white px-4 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all hover:border-[#c5d5ea] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
          >
            <p
              className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold"
              style={{ color: item.color }}
            >
              <span
                className="size-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.category}
            </p>
            <p className="text-sm font-semibold leading-snug text-[#1a3a6b]">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const [activeService, setActiveService] = useState<ServiceId>("all");

  const filteredProducts =
    activeService === "all"
      ? products
      : products.filter((product) => product.service === activeService);

  return (
    <section className="bg-white">
      <div className="bb-container py-8 md:py-10">
        {/* Headline + Promo */}
        <div className="mb-8 grid items-start gap-8 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]">
          <div className="pt-2">
            <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight tracking-tight text-[#6a8099]">
              Let&apos;s find you
              <br />
              <span className="text-[clamp(2rem,5vw,3.25rem)] font-bold text-[#1a3a6b]">
                the Best Insurance
              </span>
            </h1>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <span className="flex items-center gap-2 text-sm font-medium text-[#5b6fd4]">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#eef0fb]">
                  <ListChecks className="size-3.5" />
                </span>
                51 insurers offering lowest prices
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-[#e8870a]">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#fff4e5]">
                  <Zap className="size-3.5" />
                </span>
                Quick, easy &amp; hassle free
              </span>
            </div>
          </div>

          <HeroBannerCarousel />
        </div>

        <ServiceToggle active={activeService} onChange={setActiveService} />

        {/* Product grid */}
        <div
          id="products"
          role="tabpanel"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.label} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-6 text-center text-sm text-[#6a8099]">
            No products in this service yet. Try another tab.
          </p>
        )}

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setActiveService("all")}
            className="inline-flex h-11 items-center justify-center rounded-full border-2 border-[#0052ff] bg-white px-8 text-sm font-semibold text-[#0052ff] transition-colors hover:bg-[#0052ff]/5"
          >
            {activeService === "all" ? "View all products" : "Show all services"}
          </button>
        </div>

        <div id="also-buy">
          <AlsoBuySection />
        </div>
      </div>
    </section>
  );
}
