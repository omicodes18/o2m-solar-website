"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECT_IMAGES } from "@/lib/projects";

const CATEGORY_LABEL: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
};

export function ProjectsGallery() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="projects-root">
      <p className="flow-hint">Tap a project to preview</p>
      <div className="projects-grid">
        {PROJECT_IMAGES.map((project, index) => {
          const open = expanded === index;
          return (
            <button
              key={project.src}
              type="button"
              className={`project-card glass-card ${open ? "project-card--open" : ""}`}
              onClick={() => setExpanded(open ? null : index)}
              aria-expanded={open}
            >
              <div className="project-card-image">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, 180px"
                  className="object-cover"
                />
              </div>
              <span className="project-card-badge">
                {CATEGORY_LABEL[project.category]}
              </span>
              {open && (
                <span className="project-card-caption animate-fade-up">{project.alt}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
