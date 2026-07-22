import Link from "next/link";
import { Headphones, HelpCircle, MessageCircle, ShieldAlert } from "lucide-react";

function ClaimsCard() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5">
      <div className="relative shrink-0">
        <div className="flex size-20 items-end justify-center rounded-xl bg-[#eef3fb] pb-2">
          <div className="flex flex-col items-center">
            <div className="mb-1 flex size-10 items-center justify-center rounded-full bg-[#f5c842]">
              <Headphones className="size-5 text-[#1a3a6b]" />
            </div>
            <div className="h-6 w-14 rounded-t-md bg-[#4a7fd4]" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold leading-snug text-[#2ecc71] sm:text-base">
          Our claims assistance experts are available{" "}
          <span className="inline-block skew-x-[-8deg] rounded bg-[#2ecc71] px-2 py-0.5 text-white">
            24x7*
          </span>
        </p>
        <p className="mt-1.5 text-[11px] text-[#6a8099]">
          *Assistance available for Health &amp; Motor insurance
        </p>
      </div>
    </div>
  );
}

function AskExpertCard() {
  return (
    <div className="flex overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
      <div className="flex w-[38%] shrink-0 flex-col items-center justify-center bg-[#fdeee4] px-3 py-5">
        <div className="mb-3 flex items-center gap-1">
          <MessageCircle className="size-4 fill-[#00a8e1] text-[#00a8e1]" />
          <span className="text-sm font-bold text-[#1a3a6b]">
            ask <span className="text-[#00a8e1]">expert</span>
          </span>
        </div>
        <HelpCircle className="size-14 text-[#f5a623]" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col justify-center px-4 py-5">
        <p className="text-base font-bold leading-snug text-[#1a3a6b]">
          Got a question about insurance?
        </p>
        <p className="mt-1.5 text-sm text-[#6a8099]">
          Drop a message and we will help you quickly.
        </p>
        <Link
          href="#compare"
          className="mt-3 text-sm font-semibold text-[#00a8e1] hover:underline"
        >
          Write to us →
        </Link>
      </div>
    </div>
  );
}

function FraudCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5">
      <div>
        <p className="text-xs text-[#6a8099]">Beware of</p>
        <p className="mt-0.5 text-base font-bold leading-snug text-[#1a3a6b] sm:text-lg">
          Insurance
          <br />
          Fraudsters
        </p>
      </div>
      <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#fff3cd]">
        <div className="flex flex-col items-center">
          <ShieldAlert className="size-8 text-[#4a5568]" />
          <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wide text-[#4a5568]">
            Fraud
          </span>
        </div>
      </div>
    </div>
  );
}

export function SupportBannerSection() {
  return (
    <section className="bg-[#f5f7fa] py-8 md:py-10">
      <div className="bb-container">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          <ClaimsCard />
          <AskExpertCard />
          <FraudCard />
        </div>
      </div>
    </section>
  );
}
