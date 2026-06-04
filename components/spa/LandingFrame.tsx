"use client";

import { COMPANY } from "@/lib/constants";
import { CompanyLogo } from "./CompanyLogo";
import { BUBBLE_NAV } from "./types";
import type { PanelView } from "./types";

type LandingFrameProps = {
  onNavigate: (view: PanelView) => void;
  activeView: PanelView;
};

export function LandingFrame({ onNavigate, activeView }: LandingFrameProps) {
  const hidden = activeView !== "landing";

  return (
    <section
      className={`landing-frame ${hidden ? "landing-frame--hidden" : ""}`}
      aria-label="Home"
    >
      <div
        className="landing-bg"
        style={{ backgroundImage: "url(/hero-solar-bg.svg)" }}
        aria-hidden
      />
      <div className="landing-vignette" aria-hidden />

      <div className="landing-content">
        <div className="landing-brand">
          <CompanyLogo size="lg" />
          <div>
            <h1 className="landing-title">{COMPANY.name}</h1>
            <p className="landing-tagline">{COMPANY.tagline}</p>
          </div>
        </div>

        <nav className="bubble-nav" aria-label="Explore">
          {BUBBLE_NAV.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`nav-bubble nav-bubble--${i + 1}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="nav-bubble-ring" aria-hidden />
              <span className="nav-bubble-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="contact-cta"
          onClick={() => onNavigate("contact")}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
