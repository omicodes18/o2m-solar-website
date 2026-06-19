"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Testimonials() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`section section--testimonials scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
    >
      <div className="section-inner">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What our commercial and residential clients say</p>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="testimonial-card glass-card">
              <span className="testimonial-quote-mark" aria-hidden>“</span>
              <blockquote className="testimonial-quote">
                <p>{t.quote}</p>
              </blockquote>
              <div className="testimonial-author-meta">
                <p className="testimonial-author">{t.author}</p>
                <p className="testimonial-company">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
