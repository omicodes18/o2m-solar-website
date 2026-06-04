"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { IconChevron } from "@/components/ui/Icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FAQSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref}
      className={`section section--faq scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
      aria-labelledby="faq-title"
    >
      <div className="section-inner">
        <h2 id="faq-title" className="section-title">
          Solar FAQ — Lucknow &amp; Uttar Pradesh
        </h2>
        <p className="section-subtitle">
          Answers on rooftop solar, PM Surya Ghar, subsidies, and UPNEDA-approved installation
        </p>

        <div className="faq-list" role="list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question} className="faq-item glass-card" role="listitem">
                <h3 className="faq-item-heading">
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-trigger"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.question}</span>
                    <IconChevron open={isOpen} className="faq-chevron" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq-panel ${isOpen ? "faq-panel--open" : ""}`}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
