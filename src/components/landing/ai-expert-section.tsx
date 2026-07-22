import Link from "next/link";
import { Check, Send } from "lucide-react";

const features = [
  "Helps you find the right insurance 24/7.",
  "Decodes complex policy terms in seconds.",
  "Instantly answers all your insurance queries.",
  "Live now for term, health, motor & travel insurance.",
];

function AiLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <span className="flex size-9 items-center justify-center rounded-full bg-[#1a3a6b] text-xs font-bold text-white">
          bb
        </span>
        <span className="absolute -right-0.5 -top-0.5 flex size-3.5 items-center justify-center rounded-full bg-[#00a8e1] text-[9px] font-bold text-white">
          +
        </span>
      </div>
      <span className="text-lg font-semibold text-[#1a3a6b]">BazaarBraker.ai</span>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      <div className="absolute -left-4 top-1/3 z-10 max-w-[200px] rounded-2xl rounded-bl-sm bg-[#6b5ce7] px-4 py-3 text-sm font-medium leading-snug text-white shadow-lg sm:-left-8">
        Instantly answers all your insurance queries.
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#e8edf5] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 bg-[#2d3748] px-4 py-3">
          <span className="flex size-7 items-center justify-center rounded-full bg-[#6b5ce7] text-[10px] font-bold text-white">
            bb
          </span>
          <span className="text-sm font-medium text-white">BazaarBraker AI</span>
        </div>

        <div className="min-h-[220px] space-y-3 bg-[#f8f9fc] p-4">
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-[#6b5ce7] px-3.5 py-2.5 text-sm text-white">
              Helps you find the right insurance 24/7.
            </div>
          </div>
          <div className="flex justify-center">
            <span className="rounded-full bg-[#ede9fe] px-3 py-1 text-xs font-medium text-[#6b5ce7]">
              Insurance
            </span>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-sm text-[#4a5568] shadow-sm">
              Decodes complex policy terms in seconds.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-[#e8edf5] bg-white px-4 py-3">
          <span className="flex-1 text-sm text-[#a8acb3]">
            Type your message here...
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-[#6b5ce7] text-white">
            <Send className="size-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function AiExpertSection() {
  return (
    <section className="bg-gradient-to-b from-[#f3f0fa] via-white to-[#f3f0fa] py-16 md:py-24">
      <div className="bb-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <AiLogo />
            <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-snug tracking-tight text-[#1a3a6b]">
              Finding the right insurance just got smarter with BazaarBraker.
            </h2>
            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#6b5ce7]/15">
                    <Check className="size-3 text-[#6b5ce7]" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-[#4a5568] sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="#compare"
              className="mt-8 inline-flex h-11 items-center rounded-lg bg-[#1a3a6b] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0f2847]"
            >
              Explore BazaarBraker.ai
            </Link>
          </div>
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}
