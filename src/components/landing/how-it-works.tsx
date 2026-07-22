import { FileSearch, MousePointerClick, Wallet } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Compare quotes",
    description:
      "Enter your details once. We fetch competitive prices from 50+ insurers instantly.",
  },
  {
    icon: MousePointerClick,
    step: "02",
    title: "Choose your plan",
    description:
      "Expert advisors decode policy terms. Every call is recorded for transparency.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Buy & manage online",
    description:
      "Purchase, store, and share policies digitally. Track claims status on the go.",
  },
];

export function HowItWorks() {
  return (
    <section className="bb-section bg-[var(--bb-canvas)]">
      <div className="bb-container">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="bb-badge-pill bb-caption-strong mb-4 inline-flex">
              How it works
            </span>
            <h2 className="bb-display-lg text-[var(--bb-ink)]">
              Three steps to the right plan
            </h2>
          </div>
          <p className="bb-body-md max-w-md">
            Insurance is complicated. BazaarBraker simplifies it — compare,
            choose, and buy with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="bb-card-light flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-full bg-[var(--bb-surface-strong)]">
                  <item.icon className="size-6 text-[var(--bb-ink)]" />
                </span>
                <span className="bb-number text-[var(--bb-muted-soft)]">
                  {item.step}
                </span>
              </div>
              <h3 className="bb-title-md text-[var(--bb-ink)]">{item.title}</h3>
              <p className="bb-body-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
