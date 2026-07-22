import {
  Briefcase,
  Car,
  Heart,
  Home,
  Plane,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: Shield,
    title: "Term Life Insurance",
    description: "Pure life cover from ₹802/month. Protect your family with ₹2 Cr plans.",
    tag: "Most popular",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Family floater, senior citizen, and critical illness coverage.",
    tag: null,
  },
  {
    icon: Car,
    title: "Motor Insurance",
    description: "Car, bike, and commercial vehicle — third party and comprehensive.",
    tag: null,
  },
  {
    icon: TrendingUp,
    title: "Investment Plans",
    description: "ULIP, child plans, pension, and tax-saving instruments.",
    tag: null,
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Trip cancellation, medical emergencies, and baggage cover abroad.",
    tag: null,
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Protect structure and contents from fire, theft, and disasters.",
    tag: null,
  },
  {
    icon: Briefcase,
    title: "Corporate Insurance",
    description: "Group health, marine, liability, and business continuity.",
    tag: null,
  },
  {
    icon: Users,
    title: "Family Plans",
    description: "Bundled health and life coverage for the whole household.",
    tag: "New",
  },
];

export function CategoryGrid() {
  return (
    <section id="products" className="bb-section bg-[var(--bb-canvas)]">
      <div className="bb-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="bb-badge-pill bb-caption-strong mb-4 inline-flex">
            Insurance categories
          </span>
          <h2 className="bb-display-lg mb-4 text-[var(--bb-ink)]">
            Find the right cover
          </h2>
          <p className="bb-body-md">
            From term life to travel — compare plans across every category,
            Browse every major insurance category in one place, with a clearer and calmer experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href="#compare"
              className="bb-card-light group flex flex-col gap-4 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-10 items-center justify-center rounded-full bg-[var(--bb-surface-strong)] text-[var(--bb-ink)] transition-colors group-hover:bg-[var(--bb-primary)] group-hover:text-white">
                  <cat.icon className="size-5" />
                </span>
                {cat.tag && (
                  <span className="bb-caption-strong rounded-full bg-[var(--bb-primary)]/10 px-2 py-0.5 text-[var(--bb-primary)]">
                    {cat.tag}
                  </span>
                )}
              </div>
              <div>
                <h3 className="bb-title-md mb-2 text-[var(--bb-ink)]">
                  {cat.title}
                </h3>
                <p className="bb-body-sm">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
