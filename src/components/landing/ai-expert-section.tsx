"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import {
  ChatMessages,
  type ChatMessage,
} from "@/components/ui/chat-messages";

const features = [
  "Answers cover questions any time of day",
  "Plain-language decode of policy terms",
  "Live for term, health, motor, and travel",
];

const advisorMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "assistant",
    content:
      "Hi — I'm the BazaarBraker advisor. What cover are you looking at today?",
  },
  {
    id: "2",
    sender: "user",
    content: "Which term plan fits a 32-year-old with one child?",
  },
  {
    id: "3",
    sender: "assistant",
    content:
      "Start with ₹1 Cr cover to age 60. Next, compare claim ratios and riders — I can walk you through.",
  },
  {
    id: "4",
    sender: "user",
    content: "What should I check before I buy?",
  },
  {
    id: "5",
    sender: "assistant",
    content:
      "Claim settlement ratio, waiting periods, and exclusions — in plain language, not just the premium.",
  },
  {
    id: "6",
    sender: "user",
    content: "Can you do the same for health?",
  },
  {
    id: "7",
    sender: "assistant",
    content:
      "Yes. Term, health, motor, and travel are live — ask a situation and I'll decode the options clearly.",
  },
];

export function AiExpertSection() {
  return (
    <section id="advisor" className="bb-section bg-[var(--bb-surface)]">
      <div className="bb-container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-wide text-[var(--bb-primary)]">
              BazaarBraker.ai
            </p>
            <h2 className="bb-display mt-3 max-w-[14ch] text-[clamp(1.85rem,3.8vw,3rem)] text-[var(--bb-ink)]">
              Finding the right plan got clearer
            </h2>
            <p className="mt-4 max-w-[38ch] text-[var(--bb-body)] md:text-lg">
              An advisor that explains cover in plain language — then points you
              to a calm compare.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--bb-primary-soft)]">
                    <Check
                      className="size-3 text-[var(--bb-primary)]"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-[var(--bb-body)]">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/term-insurance" className="bb-btn mt-10">
              Try the advisor
              <span className="bb-btn__icon" aria-hidden>
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <ChatMessages
              messages={advisorMessages}
              autoPlay
              showReplay
              interactive={false}
              className="mx-auto h-[540px] w-full max-w-xl lg:ml-auto lg:mr-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
