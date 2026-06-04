"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { SEO_COPY } from "@/lib/seo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ServicesSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className={`section section--services scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
    >
      <div className="section-inner">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle seo-intro">{SEO_COPY.services}</p>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="service-card glass-card">
              <div className="service-card-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
