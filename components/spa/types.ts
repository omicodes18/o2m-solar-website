export type PanelView = "landing" | "flow" | "projects" | "services" | "contact";

export const BUBBLE_NAV: { id: PanelView; label: string }[] = [
  { id: "flow", label: "How Solar Works" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
];
