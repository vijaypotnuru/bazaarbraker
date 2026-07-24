"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaqs } from "@/lib/faqs";

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
            {homeFaqs.map((item, i) => (
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
