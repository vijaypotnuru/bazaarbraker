"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is BazaarBraker an insurance company?",
    a: "No. We are a licensed web aggregator. We help you compare plans from IRDAI-registered insurers and buy online. The policy is issued by the insurer you choose.",
  },
  {
    q: "How do you stay free for customers?",
    a: "Insurers pay us a commission when you buy through us. That does not change the premium you see. We show claim ratios and cover details so you can choose on clarity, not pressure.",
  },
  {
    q: "Can I renew or claim through BazaarBraker?",
    a: "Yes. Renewals can be completed online for supported plans. For claims, we guide documents and status - the insurer settles the claim.",
  },
  {
    q: "Which products can I compare today?",
    a: "Term life, health, motor, investment, and travel. More lines will open as partner coverage expands.",
  },
  {
    q: "How do I verify you are regulated?",
    a: "Look for our IRDAI web aggregator licence details in the footer and on Legal. You can cross-check licence status on the IRDAI site.",
  },
];

/** Disclosure FAQ - single-column accordion, distinct from every other section. */
export function FaqSection() {
  return (
    <section id="faq" className="bb-section bg-[var(--bb-surface)]">
      <div className="bb-container">
        <div className="mx-auto max-w-2xl">
          <h2 className="bb-display text-[clamp(1.85rem,3.8vw,3rem)] text-[var(--bb-ink)]">
            Questions, answered plainly
          </h2>
          <p className="mt-4 max-w-[40ch] text-[var(--bb-body)] md:text-lg">
            Regulation, renewals, and how compare works - without the maze.
          </p>

          <Accordion className="mt-10 border-t border-[var(--bb-hairline)]">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                className="border-[var(--bb-hairline)]"
              >
                <AccordionTrigger className="rounded-none py-5 font-[family-name:var(--font-outfit)] text-base font-semibold tracking-tight text-[var(--bb-ink)] hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-[var(--bb-body)]">
                  <p>{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
