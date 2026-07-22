"use client";

import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
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

function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <div className="flex items-center gap-0.5">
        <span className="text-xl font-bold tracking-tight">
          <span className="text-[#00a8e1]">bazaar</span>
          <span className="text-[#1a3a6b]">braker</span>
        </span>
        <span className="flex size-5 items-center justify-center rounded-full bg-[#00a8e1] text-[8px] font-bold text-white">
          .com
        </span>
        <sup className="ml-0.5 text-[8px] text-[#6a8099]">®</sup>
      </div>
      <span className="mt-1 inline-block rounded-full bg-[#1a3a6b] px-2 py-0.5 text-[8px] font-semibold italic tracking-wide text-white">
        HAR FAMILY HOGI INSURED
      </span>
    </Link>
  );
}

function InsuranceMegaMenu() {
  return (
    <div className="bb-container py-6">
      <div className="grid gap-8 lg:grid-cols-4">
        {insuranceColumns.map((col) => {
          const Icon = col.icon;
          return (
            <div key={col.title}>
              <div className="mb-3 flex items-center gap-2">
                <Icon className={cn("size-4", col.iconColor)} />
                <h3 className="text-sm font-bold text-[#1a3a6b]">{col.title}</h3>
              </div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#4a5568] transition-colors hover:text-[#00a8e1]"
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

      <div className="mt-6 border-t border-[#e8edf5] pt-5">
        <div className="flex items-center gap-2 mb-3">
          <LayoutGrid className="size-4 text-[#4a7fd4]" />
          <h3 className="text-sm font-bold text-[#1a3a6b]">Other Insurance</h3>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {otherInsuranceLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[13px] text-[#4a5568] transition-colors hover:text-[#00a8e1]"
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

function RenewDropdown() {
  return (
    <div className="w-72 py-2">
      {renewItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-[#f8faff]"
          >
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-lg",
                item.iconBg
              )}
            >
              <Icon className={cn("size-4", item.iconColor)} />
            </span>
            <span className="text-sm text-[#4a5568]">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

function ClaimDropdown() {
  return (
    <div className="w-80 py-2">
      {claimLinks.map((link, i) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            "block px-4 py-2.5 text-sm text-[#4a5568] transition-colors hover:bg-[#f8faff] hover:text-[#00a8e1]",
            i < claimLinks.length - 1 && "border-b border-[#f0f3f8]"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function SupportMegaMenu() {
  return (
    <div className="w-[min(100vw-2rem,560px)]">
      <div className="flex items-start justify-between gap-4 border-b border-[#e8edf5] px-5 py-4">
        <div>
          <h3 className="text-sm font-bold text-[#1a3a6b]">
            Account &amp; Service Help
          </h3>
          <p className="mt-0.5 text-xs text-[#6a8099]">
            Log in to your account to get personalised support.
          </p>
        </div>
        <Link
          href="#"
          className="shrink-0 text-xs font-semibold text-[#00a8e1] hover:underline"
        >
          Login with mobile number
        </Link>
      </div>

      <div className="grid sm:grid-cols-2">
        <ul className="py-2">
          {supportPrimary.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-[#4a5568] transition-colors hover:bg-[#f8faff]"
              >
                {item.label}
                <ChevronRight className="size-4 text-[#c5d5ea]" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="border-t border-[#e8edf5] bg-[#f3f0fa] py-2 sm:border-t-0 sm:border-l sm:border-[#e8edf5]">
          {supportSecondary.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-[#4a5568] transition-colors hover:bg-[#ebe6f5]"
              >
                {item.label}
                <ChevronRight className="size-4 text-[#c5b8e8]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MegaMenuPanel({
  menuId,
  align = "left",
}: {
  menuId: NavMenuId;
  align?: "left" | "right";
}) {
  if (!menuId) return null;

  if (menuId === "insurance") {
    return (
      <div className="absolute inset-x-0 top-full border-b border-[#e8edf5] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <InsuranceMegaMenu />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute top-full z-50 min-w-[16rem] overflow-hidden rounded-b-lg border border-[#e8edf5] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
        align === "right" ? "right-0" : "left-0",
        menuId === "support" && "min-w-[min(100vw-2rem,560px)]"
      )}
    >
      {menuId === "renew" && <RenewDropdown />}
      {menuId === "claim" && <ClaimDropdown />}
      {menuId === "support" && <SupportMegaMenu />}
    </div>
  );
}

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<NavMenuId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<NavMenuId>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleMenu(id: NavMenuId) {
    setActiveMenu((current) => (current === id ? null : id));
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white">
      {/* Top navy bar */}
      <div className="h-1 bg-[#1a3a6b]" />

      <div className="relative border-b border-[#e8edf5]">
        <div className="bb-container flex h-[72px] items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu(item.id)}
                  className={cn(
                    "relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#4a5568] transition-colors hover:text-[#1a3a6b]",
                    activeMenu === item.id && "text-[#1a3a6b]"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform",
                      activeMenu === item.id && "rotate-180"
                    )}
                  />
                  {activeMenu === item.id && (
                    <span className="absolute inset-x-2 -bottom-[13px] h-0.5 bg-[#00a8e1]" />
                  )}
                </button>
                {activeMenu === item.id && item.id !== "insurance" && (
                  <MegaMenuPanel
                    menuId={item.id}
                    align={item.id === "support" ? "right" : "left"}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 xl:flex">
            <Link
              href="#"
              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-[#00a8e1] bg-white px-3 text-sm font-semibold text-[#00a8e1] transition-colors hover:bg-[#f0faff]"
            >
              <Phone className="size-3.5" />
              Talk to Expert
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center rounded-md border border-[#00a8e1] bg-white px-4 text-sm font-semibold text-[#00a8e1] transition-colors hover:bg-[#f0faff]"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-md text-[#1a3a6b] hover:bg-[#f8faff] xl:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Insurance full-width mega menu */}
        {activeMenu === "insurance" && (
          <MegaMenuPanel menuId="insurance" />
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-[#e8edf5] bg-white xl:hidden">
          <nav className="bb-container py-3">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-[#f0f3f8] last:border-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-sm font-semibold text-[#1a3a6b]"
                  onClick={() =>
                    setMobileExpanded((c) =>
                      c === item.id ? null : item.id
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform",
                      mobileExpanded === item.id && "rotate-180"
                    )}
                  />
                </button>
                {mobileExpanded === item.id && (
                  <div className="pb-3 pl-2">
                    {item.id === "insurance" &&
                      insuranceColumns.map((col) => (
                        <div key={col.title} className="mb-3">
                          <p className="mb-1 text-xs font-bold text-[#00a8e1]">
                            {col.title}
                          </p>
                          {col.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block py-1 text-sm text-[#4a5568]"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    {item.id === "renew" &&
                      renewItems.map((r) => (
                        <Link
                          key={r.label}
                          href={r.href}
                          className="block py-1.5 text-sm text-[#4a5568]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {r.label}
                        </Link>
                      ))}
                    {item.id === "claim" &&
                      claimLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block py-1.5 text-sm text-[#4a5568]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    {item.id === "support" && (
                      <>
                        {[...supportPrimary, ...supportSecondary].map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            className="block py-1.5 text-sm text-[#4a5568]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-[#00a8e1] text-sm font-semibold text-[#00a8e1]"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="size-3.5" />
                Talk to Expert
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#00a8e1] text-sm font-semibold text-[#00a8e1]"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
