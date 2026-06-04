/** Central image paths for uploaded assets */

export const LOGO = "/logo/logo.png";

export const HERO_IMAGES = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
] as const;

export const PROJECT_IMAGES = Array.from({ length: 22 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/projects/project${n}.jpg`;
});

export const SOLAR_FLOW_IMAGES = {
  sunlight: "/solar-flow/sunlight.jpg",
  panels: "/solar-flow/panels.jpg",
  inverter: "/solar-flow/inverter.jpg",
  electricity: "/solar-flow/electricity.jpg",
  building: "/solar-flow/building.jpg",
} as const;

/** Services folder empty — mapped from projects until dedicated assets added */
export const SERVICE_IMAGES = {
  residential: "/projects/project01.jpg",
  commercial: "/projects/project09.jpg",
  industrial: "/projects/project07.jpg",
  epc: "/projects/project02.jpg",
  dgSync: "/projects/project17.jpg",
} as const;

export const UNIQUE_IMAGES = {
  rcc: "/unique/rcc.JPG",
  clamps: "/unique/clamps.JPG",
  crisscross: "/unique/crisscross.JPG",
  thunderstorm: "/unique/thunderstorm.JPG",
} as const;
