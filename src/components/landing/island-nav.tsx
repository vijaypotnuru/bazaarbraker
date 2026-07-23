"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { brandIcons } from "@/lib/brand-assets";
import {
  claimLinks,
  insuranceColumns,
  LayoutGrid,
  navItems,
  otherInsuranceLinks,
  renewItems,
  supportPrimary,
  supportSecondary,
  type NavMenuId,
} from "@/components/landing/header/nav-data";

const shortLabels: Record<Exclude<NavMenuId, null>, string> = {
  insurance: "Insurance",
  renew: "Renew",
  claim: "Claim",
  support: "Support",
};

const columnIconSrc: Record<string, string> = {
  "Term Insurance": brandIcons.term,
  "Investment Plans": brandIcons.invest,
  "Health Insurance": brandIcons.health,
  "Car Insurance": brandIcons.motor,
};

function InsuranceMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="p-6 md:p-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {insuranceColumns.map((col) => {
          const iconSrc = columnIconSrc[col.title];
          return (
            <div key={col.title}>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-white ring-1 ring-[var(--bb-hairline-soft)]">
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt=""
                      width={40}
                      height={40}
                      className="size-full object-contain p-1"
                    />
                  ) : (
                    <col.icon
                      className="size-4 text-[var(--bb-primary)]"
                      strokeWidth={1.5}
                    />
                  )}
                </span>
                <h3 className="text-sm font-semibold text-[var(--bb-ink)]">
                  {col.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="text-[13px] text-[var(--bb-body)] transition-colors hover:text-[var(--bb-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-6 border-t border-[var(--bb-hairline-soft)] pt-5">
        <div className="mb-3 flex items-center gap-2">
          <LayoutGrid className="size-4 text-[var(--bb-primary)]" strokeWidth={1.5} />
          <h3 className="text-sm font-semibold text-[var(--bb-ink)]">
            Other insurance
          </h3>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {otherInsuranceLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="text-[13px] text-[var(--bb-body)] transition-colors hover:text-[var(--bb-primary)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RenewDropdown({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="w-72 py-2">
      {renewItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-[var(--bb-surface-tint)]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[var(--bb-primary-soft)] text-[var(--bb-primary)]">
              <Icon className="size-4" strokeWidth={1.5} />
            </span>
            <span className="text-sm text-[var(--bb-body)]">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

function ClaimDropdown({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="w-80 py-2">
      {claimLinks.map((link, i) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onNavigate}
          className={cn(
            "block px-4 py-2.5 text-sm text-[var(--bb-body)] transition-colors hover:bg-[var(--bb-surface-tint)] hover:text-[var(--bb-primary)]",
            i < claimLinks.length - 1 && "border-b border-[var(--bb-hairline-soft)]"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function SupportMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="w-[min(100vw-2rem,560px)]">
      <div className="flex items-start justify-between gap-4 border-b border-[var(--bb-hairline-soft)] px-5 py-4">
        <div>
          <h3 className="text-sm font-semibold text-[var(--bb-ink)]">
            Account &amp; service help
          </h3>
          <p className="mt-0.5 text-xs text-[var(--bb-muted)]">
            Log in for personalised support on policies and claims.
          </p>
        </div>
        <Link
          href="#"
          onClick={onNavigate}
          className="shrink-0 text-xs font-semibold text-[var(--bb-primary)] hover:underline"
        >
          Login
        </Link>
      </div>

      <div className="grid sm:grid-cols-2">
        <ul className="py-2">
          {supportPrimary.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--bb-body)] transition-colors hover:bg-[var(--bb-surface-tint)]"
              >
                {item.label}
                <ChevronRight className="size-4 text-[var(--bb-muted-soft)]" strokeWidth={1.5} />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="border-t border-[var(--bb-hairline-soft)] bg-[var(--bb-surface-soft)] py-2 sm:border-t-0 sm:border-l">
          {supportSecondary.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--bb-body)] transition-colors hover:bg-[var(--bb-hairline-soft)]"
              >
                {item.label}
                <ChevronRight className="size-4 text-[var(--bb-muted-soft)]" strokeWidth={1.5} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function IslandNav() {
  const [activeMenu, setActiveMenu] = useState<NavMenuId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<NavMenuId>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeAll() {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  function toggleMenu(id: Exclude<NavMenuId, null>) {
    setActiveMenu((current) => (current === id ? null : id));
  }

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="flex justify-center px-4 pt-5 md:pt-6">
        <nav
          className={cn(
            "pointer-events-auto relative flex h-14 items-center gap-0.5 rounded-full border border-white/60 bg-white/80 px-2 shadow-[var(--bb-shadow-float)] backdrop-blur-xl",
            "max-w-[calc(100vw-2rem)]"
          )}
          aria-label="Primary"
        >
          <Link
            href="/"
            className="mr-1 shrink-0 rounded-full px-3 py-2 text-sm font-semibold tracking-tight text-[var(--bb-ink)] sm:px-4"
            onClick={closeAll}
          >
            bazaar<span className="text-[var(--bb-primary)]">braker</span>
          </Link>

          <div className="hidden items-center lg:flex">
            {navItems.map((item) => {
              const isOpen = activeMenu === item.id;
              return (
                <div key={item.id} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => toggleMenu(item.id)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                      isOpen
                        ? "bg-[var(--bb-primary-soft)] text-[var(--bb-primary)]"
                        : "text-[var(--bb-body)] hover:text-[var(--bb-ink)]"
                    )}
                  >
                    {shortLabels[item.id]}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                      strokeWidth={1.75}
                    />
                  </button>

                  {isOpen && item.id !== "insurance" && (
                    <div
                      className={cn(
                        "absolute top-[calc(100%+12px)] z-50 overflow-hidden rounded-[var(--bb-radius-lg)] border border-[var(--bb-hairline-soft)] bg-white shadow-[var(--bb-shadow-md)]",
                        item.id === "support" ? "right-0" : "left-0"
                      )}
                    >
                      {item.id === "renew" && <RenewDropdown onNavigate={closeAll} />}
                      {item.id === "claim" && <ClaimDropdown onNavigate={closeAll} />}
                      {item.id === "support" && <SupportMegaMenu onNavigate={closeAll} />}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="/term-insurance"
            onClick={closeAll}
            className="ml-1 hidden h-10 shrink-0 items-center rounded-full bg-[var(--bb-ink)] px-4 text-sm font-semibold text-white transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--bb-primary)] active:scale-[0.98] lg:inline-flex"
          >
            Compare
          </Link>

          <button
            type="button"
            className="ml-auto flex size-10 items-center justify-center rounded-full text-[var(--bb-ink)] lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMobileOpen((v) => !v);
              setActiveMenu(null);
            }}
          >
            {mobileOpen ? (
              <X className="size-5" strokeWidth={1.5} />
            ) : (
              <Menu className="size-5" strokeWidth={1.5} />
            )}
          </button>
        </nav>
      </div>

      {/* Desktop insurance mega panel — full width under island */}
      {activeMenu === "insurance" && (
        <div className="pointer-events-auto mx-auto mt-3 hidden max-w-[1100px] px-4 lg:block">
          <div className="overflow-hidden rounded-[var(--bb-radius-xl)] border border-[var(--bb-hairline-soft)] bg-white shadow-[var(--bb-shadow-md)]">
            <InsuranceMegaMenu onNavigate={closeAll} />
          </div>
        </div>
      )}

      {/* Mobile overlay with accordion mega content */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-0 z-40 overflow-y-auto bg-[var(--bb-ink)]/80 backdrop-blur-2xl lg:hidden">
          <div className="flex min-h-full flex-col px-5 pb-12 pt-24">
            <button
              type="button"
              className="absolute right-5 top-6 flex size-10 items-center justify-center rounded-full bg-white/10 text-white"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>

            {navItems.map((item) => {
              const expanded = mobileExpanded === item.id;
              return (
                <div key={item.id} className="border-b border-white/10">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-5 text-left text-xl font-semibold text-white"
                    aria-expanded={expanded}
                    onClick={() =>
                      setMobileExpanded((current) =>
                        current === item.id ? null : item.id
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-5 transition-transform",
                        expanded && "rotate-180"
                      )}
                      strokeWidth={1.5}
                    />
                  </button>
                  {expanded && (
                    <div className="mb-4 overflow-hidden rounded-[var(--bb-radius-lg)] bg-white text-[var(--bb-ink)]">
                      {item.id === "insurance" && (
                        <InsuranceMegaMenu onNavigate={closeAll} />
                      )}
                      {item.id === "renew" && (
                        <RenewDropdown onNavigate={closeAll} />
                      )}
                      {item.id === "claim" && (
                        <ClaimDropdown onNavigate={closeAll} />
                      )}
                      {item.id === "support" && (
                        <SupportMegaMenu onNavigate={closeAll} />
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/term-insurance"
              onClick={closeAll}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--bb-primary)] text-base font-semibold text-white"
            >
              Compare plans
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
