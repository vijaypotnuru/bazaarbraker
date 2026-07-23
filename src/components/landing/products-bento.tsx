import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brandIcons, brandPhotos } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

/** Asymmetric bento — every cell is image-led */
const cells = [
  {
    id: "term",
    label: "Term Life",
    href: "/term-insurance",
    photo: brandPhotos.term,
    icon: brandIcons.term,
    blurb: "High cover. Clear premiums.",
    className: "sm:col-span-2 sm:row-span-2 min-h-[300px]",
  },
  {
    id: "health",
    label: "Health",
    href: "/health-insurance",
    photo: brandPhotos.health,
    icon: brandIcons.health,
    blurb: "Family cover that feels human",
    className: "min-h-[200px]",
  },
  {
    id: "motor",
    label: "Motor",
    href: "/car-insurance",
    photo: brandPhotos.motor,
    icon: brandIcons.motor,
    blurb: "Drive with clear protection",
    className: "min-h-[200px]",
  },
  {
    id: "investment",
    label: "Investment",
    href: "/investment-plans",
    photo: brandPhotos.invest,
    icon: brandIcons.invest,
    blurb: "Plans that grow with you",
    className: "sm:col-span-2 min-h-[200px]",
  },
  {
    id: "travel",
    label: "Travel",
    href: "/travel-insurance",
    photo: brandPhotos.travel,
    icon: brandIcons.travel,
    blurb: "Cover for every trip",
    className: "sm:col-span-2 lg:col-span-4 min-h-[220px]",
  },
];

export function ProductsBento() {
  return (
    <section id="cover" className="bb-section bg-[var(--bb-canvas)]">
      <div className="bb-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="bb-display max-w-[14ch] text-[clamp(1.85rem,3.8vw,3rem)] text-[var(--bb-ink)]">
              Cover for every stage
            </h2>
            <p className="mt-3 max-w-[40ch] text-[var(--bb-body)]">
              Five clear paths — from family protection to the next trip.
            </p>
          </div>
          <Link
            href="/term-insurance"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-[var(--bb-primary)] transition-colors hover:text-[var(--bb-primary-active)] sm:self-auto"
          >
            Browse all cover
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-[210px_210px_auto_auto] sm:gap-4 lg:grid-cols-4 lg:grid-rows-[230px_230px_240px]">
          {cells.map((cell) => (
            <Link
              key={cell.id}
              href={cell.href}
              className={cn(
                "group relative overflow-hidden rounded-[var(--bb-radius-xl)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1",
                cell.className
              )}
            >
              <Image
                src={cell.photo}
                alt=""
                fill
                className={cn(
                  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105",
                  cell.id === "travel" && "object-[center_40%]"
                )}
                sizes={
                  cell.id === "term" || cell.id === "travel"
                    ? "(max-width: 640px) 100vw, 60vw"
                    : "(max-width: 640px) 100vw, 25vw"
                }
              />
              <div
                className={cn(
                  "absolute inset-0",
                  cell.id === "term"
                    ? "bg-gradient-to-t from-[var(--bb-ink)]/85 via-[var(--bb-ink)]/30 to-transparent"
                    : "bg-gradient-to-t from-[var(--bb-ink)]/80 via-[var(--bb-ink)]/25 to-[var(--bb-ink)]/5"
                )}
              />

              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                <span className="flex size-11 items-center justify-center overflow-hidden rounded-[12px] bg-white/95 shadow-[var(--bb-shadow-sm)] md:size-12">
                  <Image
                    src={cell.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="size-full object-contain p-1"
                  />
                </span>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={cn(
                        "font-[family-name:var(--font-outfit)] font-semibold tracking-tight text-white",
                        cell.id === "term" || cell.id === "travel"
                          ? "text-2xl md:text-3xl"
                          : "text-xl"
                      )}
                    >
                      {cell.label}
                    </h3>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-white/85 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                  </div>
                  <p className="mt-1 text-sm text-white/75">{cell.blurb}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
