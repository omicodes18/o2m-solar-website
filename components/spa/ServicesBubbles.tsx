"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import {
  IconHome,
  IconBuilding,
  IconFactory,
  IconWrench,
} from "@/components/ui/Icons";

const ICONS = {
  home: IconHome,
  building: IconBuilding,
  factory: IconFactory,
  wrench: IconWrench,
} as const;

export function ServicesBubbles() {
  const [openId, setOpenId] = useState<string | null>(SERVICES[0].id);

  return (
    <div className="services-root">
      <div className="services-bubbles">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.icon as keyof typeof ICONS];
          const isOpen = openId === service.id;
          return (
            <button
              key={service.id}
              type="button"
              className={`service-bubble ${isOpen ? "service-bubble--active" : ""}`}
              onClick={() => setOpenId(isOpen ? null : service.id)}
              aria-expanded={isOpen}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              <span>{service.title}</span>
            </button>
          );
        })}
      </div>
      {openId && (
        <div className="service-detail glass-card animate-fade-up">
          {SERVICES.filter((s) => s.id === openId).map((s) => (
            <div key={s.id}>
              <h3 className="service-detail-title">{s.title}</h3>
              <p className="service-detail-desc">{s.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
