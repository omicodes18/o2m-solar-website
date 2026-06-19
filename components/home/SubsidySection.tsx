"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SEO_COPY } from "@/lib/seo";

export function SubsidySection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="subsidy"
      ref={ref}
      className={`section section--subsidy scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
      aria-labelledby="subsidy-title"
    >
      <div className="section-inner">
        <h2 id="subsidy-title" className="section-title">
          Government Solar Subsidy Benefits
        </h2>
        <p className="section-subtitle seo-intro">{SEO_COPY.subsidy}</p>

        <div className="subsidy-grid">
          <div className="subsidy-card glass-card">
            <p className="subsidy-amount">₹78,000</p>
            <p className="subsidy-label">Central Subsidy</p>
            <p className="subsidy-note">
              Under PM Surya Ghar Muft Bijli Yojana for eligible residential capacities (as per
              current central guidelines).
            </p>
          </div>
          <div className="subsidy-card glass-card">
            <p className="subsidy-amount">Up to ₹30,000</p>
            <p className="subsidy-label">State Benefits</p>
            <p className="subsidy-note">
              Additional Uttar Pradesh benefits where applicable, subject to scheme rules and
              verification.
            </p>
          </div>
          <div className="subsidy-card glass-card subsidy-card--highlight">
            <p className="subsidy-amount">Up to ₹1.08 Lakh</p>
            <p className="subsidy-label">Combined Potential</p>
            <p className="subsidy-note">
              Total benefits can reach up to ₹1.08 Lakh depending on scheme eligibility and current
              government guidelines—not a guaranteed amount for every site.
            </p>
          </div>
        </div>

        <p className="subsidy-disclaimer">
          Eligible homeowners may receive central and state-linked benefits when criteria are met.
          Subsidy amounts, UPNEDA vendor requirements, and solar panel price with subsidy in UP
          change with policy updates—confirm at application time.
        </p>
      </div>
    </section>
  );
}
