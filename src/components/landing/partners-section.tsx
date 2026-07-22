"use client";

import { Building2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { partners } from "@/lib/partners";
import { cn } from "@/lib/utils";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="flex size-10 items-center justify-center rounded-lg bg-[#eef3fb] text-[#4a7fd4]"
        aria-hidden
      >
        <Building2 className="size-5" strokeWidth={1.75} />
      </span>
    );
  }

  return (
    <Image
      src={logo}
      alt={`${name} logo`}
      width={80}
      height={40}
      unoptimized
      onError={() => setFailed(true)}
      className="max-h-10 w-auto max-w-[80px] object-contain"
    />
  );
}

export function PartnersSection() {
  return (
    <section id="partners" className="bg-white py-12 md:py-16">
      <div className="bb-container text-center">
        <h2 className="text-2xl font-bold text-[#1a3a6b] md:text-3xl">
          Our Partners
        </h2>
        <p className="mt-2 text-sm text-[#6a8099] md:text-base">
          Leading insurers for your financial freedom
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.slug}
              className={cn(
                "flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border border-[#e8edf5] bg-[#f8faff] px-2 py-3"
              )}
            >
              <div className="flex h-10 w-full items-center justify-center">
                <PartnerLogo name={partner.name} logo={partner.logo} />
              </div>
              <span className="text-center text-[11px] font-semibold leading-tight text-[#4a5568]">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
