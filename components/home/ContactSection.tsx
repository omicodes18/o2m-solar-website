"use client";

import { COMPANY } from "@/lib/constants";
import { IconWhatsApp } from "@/components/ui/Icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function ContactSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const message = encodeURIComponent(
    `Hello ${COMPANY.name}, I would like to inquire about rooftop solar installation in Lucknow.`
  );
  const whatsappHref = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  return (
    <section
      id="contact"
      ref={ref}
      className={`section section--contact scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
      aria-labelledby="contact-title"
    >
      <div className="section-inner">
        <h2 id="contact-title" className="section-title">
          Contact Us
        </h2>
        <p className="section-subtitle">
          Speak with our solar company in Lucknow for site surveys, quotes, and PM Surya Ghar
          guidance
        </p>

        <div className="contact-layout">
          <div className="contact-details glass-card">
            <ul className="contact-list">
              <li>
                <span className="contact-label">Phone</span>
                <a href={telHref(COMPANY.phone)} className="contact-link">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <span className="contact-label">WhatsApp</span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link contact-link--wa"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <span className="contact-label">Email</span>
                <a href={`mailto:${COMPANY.email}`} className="contact-link">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="contact-label">Address</span>
                <address className="contact-address not-italic">{COMPANY.address}</address>
              </li>
              <li>
                <span className="contact-label">Hours</span>
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
            <a
              href={COMPANY.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-maps-link"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="contact-map glass-card">
            <iframe
              title="o2m Technical Solutions — G8, Prateek Plaza, Indira Nagar, Lucknow"
              src={COMPANY.mapsEmbedUrl}
              className="contact-map-frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
