import Link from "next/link";
import { Headphones } from "lucide-react";

export function HelpSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="bb-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex justify-center lg:order-first">
            <div className="flex size-48 items-center justify-center rounded-full bg-[#eef3fb] sm:size-56">
              <Headphones className="size-24 text-[#4a7fd4] sm:size-28" strokeWidth={1.25} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold leading-snug text-[#1a3a6b] md:text-3xl">
              Have a question?
              <br />
              Here to help.
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#00a8e1]" />
            <p className="mt-5 text-sm leading-relaxed text-[#6a8099] md:text-base">
              Our friendly customer support team is your extended family. Speak
              your heart out. They listen with undivided attention to resolve
              your concerns. Give us a call, request a callback or drop us an
              email — we&apos;re here to help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="mailto:support@bazaarbraker.com"
                className="inline-flex flex-col rounded-xl border border-[#e2e8f0] bg-[#f8faff] px-5 py-4 transition-colors hover:border-[#c5d5ea]"
              >
                <span className="text-xs font-semibold text-[#6a8099]">
                  General Enquiries
                </span>
                <span className="mt-1 text-sm font-bold text-[#1a3a6b]">
                  support@bazaarbraker.com
                </span>
              </Link>
              <Link
                href="tel:18002088787"
                className="inline-flex flex-col rounded-xl border border-[#e2e8f0] bg-[#f8faff] px-5 py-4 transition-colors hover:border-[#c5d5ea]"
              >
                <span className="text-xs font-semibold text-[#6a8099]">
                  Customer Sales Enquiries
                </span>
                <span className="mt-1 text-sm font-bold text-[#1a3a6b]">
                  1800 - 208 - 8787
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
