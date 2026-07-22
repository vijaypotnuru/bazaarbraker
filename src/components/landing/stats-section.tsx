const stats = [
  { value: "50+", label: "Insurance partners" },
  { value: "10Cr+", label: "Policies sold" },
  { value: "₹2Cr", label: "Max term cover from" },
  { value: "24/7", label: "Claims assistance" },
];

export function StatsSection() {
  return (
    <section className="border-y border-[var(--bb-hairline)] bg-[var(--bb-surface-soft)] py-16">
      <div className="bb-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="bb-number mb-1 text-3xl text-[var(--bb-ink)] md:text-4xl">
                {stat.value}
              </p>
              <p className="bb-body-sm text-[var(--bb-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
