"use client";

import { WHY_CHOOSE_US } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhyChooseUs() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className={`section section--why-choose-us scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
    >
      <div className="section-inner">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Professional standards, quality materials, and transparent execution
        </p>

        <div className="why-choose-us-grid">
          {WHY_CHOOSE_US.map((item, index) => (
            <div key={item.title} className="why-card glass-card">
              <span className="why-card-number">0{index + 1}</span>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
