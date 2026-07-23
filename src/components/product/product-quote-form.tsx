"use client";

type QuoteFormProps = {
  productLabel: string;
};

export function ProductQuoteForm({ productLabel }: QuoteFormProps) {
  return (
    <div className="bb-shell">
      <div className="bb-shell__inner bg-[var(--bb-surface)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-7">
        <p className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-[var(--bb-ink)]">
          Get a clear quote
        </p>
        <p className="mt-1 text-sm text-[var(--bb-body)]">
          A few details for {productLabel}. Compare without the sales maze.
        </p>
        <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-[var(--bb-muted)]">
              Full name
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              className="h-11 w-full rounded-[var(--bb-radius-md)] border border-[var(--bb-hairline)] bg-[var(--bb-surface-soft)] px-3 text-sm text-[var(--bb-ink)] outline-none transition-shadow focus:border-[var(--bb-primary)]/40 focus:ring-2 focus:ring-[var(--bb-primary)]/15"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-[var(--bb-muted)]">
              Mobile number
            </span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              className="h-11 w-full rounded-[var(--bb-radius-md)] border border-[var(--bb-hairline)] bg-[var(--bb-surface-soft)] px-3 text-sm text-[var(--bb-ink)] outline-none transition-shadow focus:border-[var(--bb-primary)]/40 focus:ring-2 focus:ring-[var(--bb-primary)]/15"
            />
          </label>
          <button type="submit" className="bb-btn mt-2 w-full justify-center">
            Continue
          </button>
        </form>
        <p className="mt-3 text-[11px] leading-relaxed text-[var(--bb-muted)]">
          By continuing, you agree to be contacted by BazaarBraker for insurance
          assistance.
        </p>
      </div>
    </div>
  );
}
