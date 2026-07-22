import { Bot, Headphones, Scale } from "lucide-react";

const features = [
  {
    icon: Bot,
    badge: "AI powered",
    title: "Smarter insurance discovery",
    description:
      "Our AI assistant helps you find the right plan 24/7, decodes complex policy terms in seconds, and answers queries for term, health, motor, and travel.",
  },
  {
    icon: Headphones,
    badge: "Human support",
    title: "Expert advisors on call",
    description:
      "Highly trained advisors help you choose a plan, handle changes, and get refunds from insurers. Dedicated claims team speeds up payouts.",
  },
  {
    icon: Scale,
    badge: "Transparent",
    title: "Compare before you commit",
    description:
      "Side-by-side plan comparison with clear pricing. No hidden fees — buy, store, and share all your policies in one digital wallet.",
  },
];

export function FeaturesSection() {
  return (
    <section id="trust" className="bb-section bg-[var(--bb-surface-soft)]">
      <div className="bb-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="bb-badge-pill bb-caption-strong mb-4 inline-flex">
            Why BazaarBraker
          </span>
          <h2 className="bb-display-lg mb-4 text-[var(--bb-ink)]">
            More than a price comparison
          </h2>
          <p className="bb-body-md">
            When you buy from us, you get financial safety plus a team that
            simplifies terms, handles claims, and stays with you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bb-card-light flex flex-col gap-4 bg-[var(--bb-canvas)]"
            >
              <span className="bb-badge-pill bb-caption-strong w-fit">
                {feature.badge}
              </span>
              <span className="flex size-12 items-center justify-center rounded-full bg-[var(--bb-surface-strong)]">
                <feature.icon className="size-6 text-[var(--bb-primary)]" />
              </span>
              <h3 className="bb-title-md text-[var(--bb-ink)]">
                {feature.title}
              </h3>
              <p className="bb-body-sm">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
