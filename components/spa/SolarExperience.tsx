"use client";

import { useCallback, useEffect, useState } from "react";
import { LandingFrame } from "./LandingFrame";
import { ContentPanel } from "./ContentPanel";
import { HowSolarFlow } from "./HowSolarFlow";
import { ProjectsGallery } from "./ProjectsGallery";
import { ServicesBubbles } from "./ServicesBubbles";
import { ContactSection } from "./ContactSection";
import type { PanelView } from "./types";

const PANEL_TITLES: Record<Exclude<PanelView, "landing">, string> = {
  flow: "How Solar Works",
  projects: "Projects",
  services: "Services",
  contact: "Contact",
};

export function SolarExperience() {
  const [view, setView] = useState<PanelView>("landing");

  const goHome = useCallback(() => setView("landing"), []);

  useEffect(() => {
    document.body.classList.toggle("spa-panel-open", view !== "landing");
    return () => document.body.classList.remove("spa-panel-open");
  }, [view]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && view !== "landing") goHome();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view, goHome]);

  return (
    <div className="spa-root">
      <LandingFrame onNavigate={setView} activeView={view} />

      <ContentPanel
        title={PANEL_TITLES.flow}
        onBack={goHome}
        visible={view === "flow"}
      >
        <HowSolarFlow />
      </ContentPanel>

      <ContentPanel
        title={PANEL_TITLES.projects}
        onBack={goHome}
        visible={view === "projects"}
      >
        <ProjectsGallery />
      </ContentPanel>

      <ContentPanel
        title={PANEL_TITLES.services}
        onBack={goHome}
        visible={view === "services"}
      >
        <ServicesBubbles />
      </ContentPanel>

      <ContentPanel
        title={PANEL_TITLES.contact}
        onBack={goHome}
        visible={view === "contact"}
      >
        <ContactSection />
      </ContentPanel>
    </div>
  );
}
