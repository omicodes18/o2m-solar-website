"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { PROJECT_GALLERY } from "@/lib/projects";
import { useImageSlideshow } from "@/hooks/useImageSlideshow";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ProjectsShowcase() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const { index, setIndex } = useImageSlideshow(PROJECT_GALLERY.length, 4000);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setModalIndex(null), []);

  useEffect(() => {
    if (modalIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalIndex, closeModal]);

  return (
    <section
      id="projects"
      ref={ref}
      className={`section section--projects scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
    >
      <div className="section-inner">
        <h2 className="section-title">
          Our Solar Projects Across Uttar Pradesh
        </h2>

        <div className="projects-showcase">
          <div className="projects-main-slideshow">
            {PROJECT_GALLERY.map((project, i) => (
              <button
                key={project.src}
                type="button"
                className={`projects-main-slide ${i === index ? "projects-main-slide--active" : ""}`}
                onClick={() => setModalIndex(i)}
                aria-label={`View project ${i + 1}`}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                  priority={i < 2}
                />
              </button>
            ))}
            <div className="projects-slide-counter">
              {index + 1} / {PROJECT_GALLERY.length}
            </div>
          </div>

          <div className="projects-carousel" role="list" aria-label="Project thumbnails">
            {PROJECT_GALLERY.map((project, i) => (
              <button
                key={project.src}
                type="button"
                role="listitem"
                className={`projects-thumb ${i === index ? "projects-thumb--active" : ""}`}
                onClick={() => setIndex(i)}
                onDoubleClick={() => setModalIndex(i)}
                aria-label={`Project ${i + 1}`}
                aria-current={i === index}
              >
                <Image
                  src={project.src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {modalIndex !== null && (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged project image"
        >
          <button
            type="button"
            className="image-modal-backdrop"
            onClick={closeModal}
            aria-label="Close"
          />
          <div className="image-modal-content">
            <button
              type="button"
              className="image-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <button
              type="button"
              className="image-modal-nav image-modal-nav--prev"
              onClick={() =>
                setModalIndex(
                  (modalIndex - 1 + PROJECT_GALLERY.length) % PROJECT_GALLERY.length
                )
              }
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="image-modal-image">
              <Image
                src={PROJECT_GALLERY[modalIndex].src}
                alt={PROJECT_GALLERY[modalIndex].alt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
            <button
              type="button"
              className="image-modal-nav image-modal-nav--next"
              onClick={() =>
                setModalIndex((modalIndex + 1) % PROJECT_GALLERY.length)
              }
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
