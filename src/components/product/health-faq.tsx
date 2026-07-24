"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { healthFaqs } from "@/lib/faqs";

export function HealthFaq() {
  return (
    <Accordion className="mt-6 border-t border-[var(--bb-hairline)]">
      {healthFaqs.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`h-faq-${i}`}
          className="border-[var(--bb-hairline)]"
        >
          <AccordionTrigger className="rounded-none py-4 font-[family-name:var(--font-outfit)] text-base font-semibold text-[var(--bb-ink)] hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-sm leading-relaxed text-[var(--bb-body)]">
            <p>{item.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
