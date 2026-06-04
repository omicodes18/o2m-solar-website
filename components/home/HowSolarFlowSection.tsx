"use client";

import { useState } from "react";
import Image from "next/image";
import { SOLAR_FLOW } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HowSolarFlowSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [active, setActive] = useState(0);

  return (
    <section
      id="how-solar-works"
      ref={ref}
      className={`section section--flow scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
    >
      <div className="section-inner">
        <h2 className="section-title">How Solar Works</h2>
        <p className="section-subtitle">Sunlight → Solar Panels → Inverter → Electricity → Building</p>

        <div className="flow-cards">
          {SOLAR_FLOW.map((step, i) => (
            <button
              key={step.id}
              type="button"
              className={`flow-card glass-card ${i === active ? "flow-card--active" : ""}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <div className="flow-card-image">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover"
                />
              </div>
              <div className="flow-card-body">
                <span className="flow-card-step">Step {i + 1}</span>
                <h3 className="flow-card-title">{step.title}</h3>
                <p className="flow-card-desc">{step.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flow-featured glass-card">
          <div className="flow-featured-image">
            <Image
              src={SOLAR_FLOW[active].image}
              alt={SOLAR_FLOW[active].title}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="flow-featured-body">
            <h3>{SOLAR_FLOW[active].title}</h3>
            <p>{SOLAR_FLOW[active].description}</p>
            <div className="flow-progress">
              {SOLAR_FLOW.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`flow-progress-dot ${i <= active ? "flow-progress-dot--on" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
