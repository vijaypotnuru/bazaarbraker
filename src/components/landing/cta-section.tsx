import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bb-section bg-[var(--bb-surface-dark)] text-[var(--bb-on-dark)]">
      <div className="bb-container text-center">
        <h2 className="bb-display-lg mx-auto mb-4 max-w-3xl text-[var(--bb-on-dark)]">
          Take control of your insurance today
        </h2>
        <p className="bb-body-md mx-auto mb-8 max-w-xl text-[var(--bb-on-dark-soft)]">
          Compare plans, talk to advisors, and manage every policy from one
          calm, transparent platform.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="#compare" className="bb-btn-primary bb-btn-primary-lg">
            Get started free
          </Link>
          <Link href="#products" className="bb-btn-secondary-dark">
            Explore categories
          </Link>
        </div>
      </div>
    </section>
  );
}
