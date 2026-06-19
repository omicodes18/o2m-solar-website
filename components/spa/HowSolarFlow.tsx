"use client";

import { useState } from "react";
import { SOLAR_FLOW } from "@/lib/constants";
import {
  IconSun,
  IconPanel,
  IconInverter,
  IconZap,
  IconBuilding,
} from "@/components/ui/Icons";

const ICONS = {
  sun: IconSun,
  panel: IconPanel,
  inverter: IconInverter,
  zap: IconZap,
  "building-power": IconBuilding,
} as const;

export function HowSolarFlow() {
  const [active, setActive] = useState(0);

  return (
    <div className="flow-root">
      <p className="flow-hint">Tap a step to follow the energy path</p>
      <div className="flow-track">
        {SOLAR_FLOW.map((step, index) => {
          const Icon = ICONS[step.icon];
          const isActive = index === active;
          const isPast = index < active;

          return (
            <div key={step.id} className="flow-step-wrap">
              {index > 0 && (
                <div
                  className={`flow-connector ${isPast || isActive ? "flow-connector--live" : ""}`}
                  aria-hidden
                >
                  <span className="flow-connector-dot" />
                  <span className="flow-connector-line" />
                  <span className="flow-connector-dot" />
                </div>
              )}
              <button
                type="button"
                className={`flow-node ${isActive ? "flow-node--active" : ""} ${isPast ? "flow-node--past" : ""}`}
                onClick={() => setActive(index)}
                aria-pressed={isActive}
              >
                <span className="flow-node-icon">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                <span className="flow-node-title">{step.title}</span>
              </button>
            </div>
          );
        })}
      </div>
      <div className="flow-detail glass-card">
        <p className="flow-detail-label">Step {active + 1} of {SOLAR_FLOW.length}</p>
        <p className="flow-detail-title">{SOLAR_FLOW[active].title}</p>
        <p className="flow-detail-desc">
          {active === 0 && "Sunlight hits your array — the starting point of every kilowatt-hour."}
          {active === 1 && "PV cells convert photons into direct current (DC)."}
          {active === 2 && "The inverter transforms DC into grid-ready alternating current (AC)."}
          {active === 3 && "Clean electricity flows to your distribution board."}
          {active === 4 && "Power runs your building; surplus can export via net metering."}
        </p>
        <div className="flow-progress">
          {SOLAR_FLOW.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`flow-progress-dot ${i <= active ? "flow-progress-dot--on" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
