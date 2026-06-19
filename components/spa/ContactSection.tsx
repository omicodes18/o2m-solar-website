"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";
import { IconWhatsApp } from "@/components/ui/Icons";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const message = encodeURIComponent(
    `Hello ${COMPANY.name}, I would like to inquire about solar installation.`
  );
  const whatsappHref = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="contact-root">
      {sent ? (
        <div className="glass-card contact-success">
          <p className="contact-success-title">Message received</p>
          <p className="contact-success-text">We&apos;ll reach out soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form glass-card">
          <input
            name="name"
            required
            placeholder="Name"
            className="contact-input"
            aria-label="Name"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone"
            className="contact-input"
            aria-label="Phone"
          />
          <textarea
            name="message"
            rows={2}
            placeholder="Brief message"
            className="contact-input contact-textarea"
            aria-label="Message"
          />
          <button type="submit" className="contact-submit">
            Send Inquiry
          </button>
        </form>
      )}

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-cta"
      >
        <IconWhatsApp className="h-6 w-6" />
        <span>Chat on WhatsApp</span>
        <span className="whatsapp-cta-sub">{COMPANY.phone}</span>
      </a>
    </div>
  );
}
