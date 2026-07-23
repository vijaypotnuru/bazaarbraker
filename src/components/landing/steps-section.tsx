import Image from "next/image";
import { brandIcons } from "@/lib/brand-assets";

const steps = [
  {
    n: "01",
    title: "Compare",
    body: "See premiums, cover, and claim strength across insurers in one view.",
    icon: brandIcons.compare,
  },
  {
    n: "02",
    title: "Choose",
    body: "Pick the plan that fits your family — without sales pressure.",
    icon: brandIcons.choose,
  },
  {
    n: "03",
    title: "Cover",
    body: "Buy online, store policies, and get claims help when it matters.",
    icon: brandIcons.cover,
  },
];

export function StepsSection() {
  return (
    <section id="steps" className="bb-section bg-[var(--bb-surface)]">
      <div className="bb-container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="bb-display max-w-[14ch] text-[clamp(1.85rem,3.8vw,3rem)] text-[var(--bb-ink)]">
            Three steps. Clear cover.
          </h2>
          <p className="max-w-[34ch] text-[var(--bb-body)] lg:pb-1 lg:text-right md:text-lg">
            From first quote to covered — without the sales maze.
          </p>
        </div>

        <ol className="mt-12 border-t border-[var(--bb-hairline)] md:mt-16">
          {steps.map((step) => (
            <li
              key={step.n}
              className="grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-4 border-b border-[var(--bb-hairline)] py-8 sm:grid-cols-[5.5rem_1fr_auto] sm:items-center sm:gap-x-8 md:py-10"
            >
              <p className="bb-number text-[clamp(2rem,4vw,2.75rem)] font-medium leading-none text-[var(--bb-primary)]">
                {step.n}
              </p>

              <div className="min-w-0 sm:col-start-2">
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-tight text-[var(--bb-ink)] md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-[var(--bb-body)] md:text-base">
                  {step.body}
                </p>
              </div>

              <div className="col-start-2 flex size-16 shrink-0 items-center justify-center rounded-[18px] bg-[var(--bb-primary-soft)] sm:col-start-3 sm:size-[4.5rem]">
                <Image
                  src={step.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-10 object-contain sm:size-12"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
