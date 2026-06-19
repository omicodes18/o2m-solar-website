import { PROJECT_IMAGES } from "./assets";

export type ProjectImage = {
  src: string;
  alt: string;
  category: "residential" | "commercial" | "industrial";
};

const CATEGORY_BY_INDEX = (i: number): ProjectImage["category"] => {
  if (i % 3 === 0) return "residential";
  if (i % 3 === 1) return "commercial";
  return "industrial";
};

export const PROJECT_GALLERY: ProjectImage[] = PROJECT_IMAGES.map((src, i) => ({
  src,
  alt: `Solar installation project ${i + 1} — Uttar Pradesh`,
  category: CATEGORY_BY_INDEX(i),
}));

/** @deprecated Use PROJECT_GALLERY */
export const PROJECT_IMAGES_LEGACY = PROJECT_GALLERY;
export { PROJECT_GALLERY as PROJECT_IMAGES };
