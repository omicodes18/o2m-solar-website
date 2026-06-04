"use client";

import Image from "next/image";
import { BUBBLE_NAV, COMPANY } from "@/lib/constants";
import { HERO_IMAGES, LOGO } from "@/lib/assets";
import { SEO_COPY } from "@/lib/seo";

const HERO_ALTS = [
  "Rooftop solar installation in Lucknow — residential project",
  "Commercial solar installation Uttar Pradesh",
  "Industrial solar EPC rooftop array",
  "Solar company in Lucknow — completed EPC project",
] as const;
import { useImageSlideshow } from "@/hooks/useImageSlideshow";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function HeroSection() {
  const { index } = useImageSlideshow(HERO_IMAGES.length, 4500);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-slideshow" aria-hidden>
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === index ? "hero-slide--active" : ""}`}
          >
            <Image
              src={src}
              alt={HERO_ALTS[i]}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay" aria-hidden />

      <div className="hero-inner">
        <div className="hero-brand">
          <div className="hero-logo-wrap">
            <Image
              src={LOGO}
              alt={`${COMPANY.name} logo`}
              width={120}
              height={120}
              className="hero-logo"
              priority
            />
          </div>
          <h1 className="hero-title">{COMPANY.name}</h1>
          <p className="hero-tagline">{COMPANY.tagline}</p>
          <p className="hero-seo">{SEO_COPY.hero}</p>
        </div>

        <nav className="bubble-nav" aria-label="Main navigation">
          {BUBBLE_NAV.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`nav-bubble nav-bubble--${i + 1}`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="nav-bubble-ring" aria-hidden />
              <span className="nav-bubble-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="hero-scroll-hint"
          onClick={() => scrollToSection("projects")}
          aria-label="Scroll to projects"
        >
          <span>Our Projects</span>
          <svg className="h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
