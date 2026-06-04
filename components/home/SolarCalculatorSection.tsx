"use client";

import { useState } from "react";
import {
  calculateSolarEstimate,
  formatCurrency,
  formatNumber,
  type Segment,
} from "@/lib/calculator";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SEGMENTS: { value: Segment; label: string }[] = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
];

const CITY_SUGGESTIONS = [
  "Lucknow",
  "Kanpur",
  "Noida",
  "Ghaziabad",
  "Varanasi",
  "Agra",
  "Meerut",
  "Prayagraj",
];

export function SolarCalculatorSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [monthlyBill, setMonthlyBill] = useState("");
  const [segment, setSegment] = useState<Segment>("residential");
  const [city, setCity] = useState("Lucknow");

  const bill = parseFloat(monthlyBill) || 0;
  const result = calculateSolarEstimate({ monthlyBill: bill, segment, city });

  return (
    <section
      id="calculator"
      ref={ref}
      className={`section section--calculator scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
    >
      <div className="section-inner">
        <h2 className="section-title">Solar Savings Estimator</h2>
        <p className="section-subtitle">Indicative sizing and savings — not a final quotation</p>

        <div className="calculator-grid">
          <form
            className="calculator-form glass-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="calc-label">
              Monthly electricity bill (₹)
              <input
                type="number"
                min="0"
                placeholder="e.g. 5000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="calc-input"
              />
            </label>

            <fieldset className="calc-fieldset">
              <legend className="calc-label">Property type</legend>
              <div className="calc-segments">
                {SEGMENTS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    className={`calc-segment-btn ${segment === value ? "calc-segment-btn--on" : ""}`}
                    onClick={() => setSegment(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="calc-label">
              City
              <input
                type="text"
                list="city-list"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="calc-input"
                placeholder="Enter your city"
              />
              <datalist id="city-list">
                {CITY_SUGGESTIONS.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </label>
          </form>

          <div className="calculator-results glass-card">
            <h3 className="calculator-results-title">Your estimate</h3>
            {!result ? (
              <p className="calculator-empty">Enter your monthly bill to see indicative results.</p>
            ) : (
              <dl className="calculator-dl">
                <div>
                  <dt>Suggested system size</dt>
                  <dd>{result.estimatedSizeKw} kW</dd>
                </div>
                <div>
                  <dt>Est. annual generation</dt>
                  <dd>{formatNumber(result.estimatedAnnualGenerationKwh)} kWh</dd>
                </div>
                <div>
                  <dt>Est. yearly savings</dt>
                  <dd>{formatCurrency(result.estimatedAnnualSavings)}</dd>
                </div>
                <div>
                  <dt>Est. installation range</dt>
                  <dd>
                    {formatCurrency(result.installationMin)} –{" "}
                    {formatCurrency(result.installationMax)}
                  </dd>
                </div>
              </dl>
            )}
            <p className="calculator-disclaimer">
              {result?.disclaimer ??
                "These estimates are for informational purposes only and do not represent final project quotations. Actual pricing, subsidy eligibility, savings, and generation depend on site conditions, technical survey, location, and system design."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
