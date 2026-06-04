"use client";

import Image from "next/image";
import { UNIQUE_FEATURES } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function UniqueSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="unique"
      ref={ref}
      className={`section section--unique scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
    >
      <div className="section-inner">
        <h2 className="section-title">What Makes Us Unique</h2>
        <p className="section-subtitle">Engineering advantages built into every installation</p>

        <div className="unique-grid">
          {UNIQUE_FEATURES.map((feature) => (
            <article key={feature.id} className="unique-card glass-card">
              <div className="unique-card-image">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="unique-card-body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
