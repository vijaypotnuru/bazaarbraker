"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a family floater?",
    a: "A single policy with a shared sum insured for listed family members. It often costs less than separate individual plans, depending on ages and cover.",
  },
  {
    q: "What should I compare besides premium?",
    a: "Waiting periods, room rent limits, exclusions, hospital network, restore benefits, and claim process - not price alone.",
  },
  {
    q: "Can I cover my parents?",
    a: "Yes. Look at entry age, pre-existing waiting periods, and senior-friendly benefits. Start with Parents or Senior Citizen paths.",
  },
];

export function HealthFaq() {
  return (
    <Accordion className="mt-6 border-t border-[var(--bb-hairline)]">
      {faqs.map((item, i) => (
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
