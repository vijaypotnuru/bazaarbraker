"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const tabs = ["Term Life", "Health", "Motor", "Travel", "Investment"];

export function ComparePreview() {
  const [activeTab, setActiveTab] = useState("Health");

  return (
    <section id="compare" className="bb-section bg-[var(--bb-surface-dark)] text-[var(--bb-on-dark)]">
      <div className="bb-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bb-card-dark relative z-10">
                <p className="mb-4 text-sm text-[var(--bb-on-dark-soft)]">
                  Quick quote — {activeTab}
                </p>
                <div className="bb-search-pill mb-6 bg-white/10 text-[var(--bb-on-dark-soft)]">
                  <Search className="size-4 shrink-0" />
                  <span>Enter age, city, or vehicle number…</span>
                </div>

                <div className="space-y-3">
                  {[
                    { insurer: "HDFC Life", plan: "Click 2 Protect", premium: "₹892/mo", save: "Save ₹1,200" },
                    { insurer: "ICICI Lombard", plan: "Elevate Health", premium: "₹1,180/mo", save: "Save ₹800" },
                    { insurer: "Bajaj Allianz", plan: "Smart Protect", premium: "₹756/mo", save: "Best price" },
                  ].map((row, i) => (
                    <div
                      key={row.insurer}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 ${
                        i === 0 ? "bg-[var(--bb-primary)]/20 ring-1 ring-[var(--bb-primary)]/40" : "bg-white/5"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-semibold">{row.insurer}</p>
                        <p className="text-xs text-[var(--bb-on-dark-soft)]">{row.plan}</p>
                      </div>
                      <div className="text-right">
                        <p className="bb-number text-sm">{row.premium}</p>
                        <p className="text-xs text-[var(--bb-semantic-up)]">{row.save}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button type="button" className="bb-btn-primary mt-6 w-full">
                  Get personalized quotes
                </button>
              </div>

              <div className="bb-card-dark absolute -right-4 -top-4 z-0 hidden w-40 rotate-[3deg] p-4 md:block">
                <p className="text-xs text-[var(--bb-on-dark-soft)]">Avg. savings</p>
                <p className="bb-number text-xl text-[var(--bb-accent-yellow)]">₹14,500</p>
                <p className="text-xs text-[var(--bb-on-dark-soft)]">per year</p>
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <span className="bb-badge-pill bb-caption-strong w-fit bg-white/10 text-[var(--bb-on-dark-soft)]">
              Live comparison
            </span>
            <h2 className="bb-display-lg text-[var(--bb-on-dark)]">
              Compare 50+ insurers in one place
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-[var(--bb-on-dark-soft)]">
              Quick, easy, and hassle-free. Enter your details once and see
              side-by-side quotes — compare plans clearly and pick the best fit
              with institutional clarity.
            </p>

            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-[var(--bb-primary)] text-white"
                      : "bg-white/10 text-[var(--bb-on-dark-soft)] hover:bg-white/15"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
