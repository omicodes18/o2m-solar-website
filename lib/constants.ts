export const COMPANY = {
  name: "o2m Technical Solutions",
  tagline: "Engineering-Grade Solar Solutions",
  description:
    "End-to-end solar EPC for residential, commercial, and industrial installations. Design, procurement, installation, and commissioning with professional engineering standards.",
  phone: "+91 87078 43089",
  email: "munishbharadwaj7@gmail.com",
  whatsapp: "919876543210",
  address:
    "G8, Prateek Plaza, Sector 8, Ishwar Puri, Indira Nagar, Lucknow, Uttar Pradesh 226016",
  streetAddress: "G8, Prateek Plaza, Sector 8, Ishwar Puri, Indira Nagar",
  city: "Lucknow",
  state: "Uttar Pradesh",
  postalCode: "226016",
  hours: "Mon–Sat, 9:00 AM – 6:00 PM",
  geo: { latitude: 26.883301, longitude: 80.983299 },
  serviceAreas: [
    "Lucknow",
    "Gomti Nagar",
    "Indira Nagar",
    "Hazratganj",
    "Aliganj",
    "Kanpur",
    "Varanasi",
    "Prayagraj",
    "Ayodhya",
    "Barabanki",
  ],
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=G8%2C+Prateek+Plaza%2C+Sector+8%2C+Ishwar+Puri%2C+Indira+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226016&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=G8%2C+Prateek+Plaza%2C+Sector+8%2C+Ishwar+Puri%2C+Indira+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226016",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

import { SERVICE_IMAGES, SOLAR_FLOW_IMAGES, UNIQUE_IMAGES } from "./assets";

export const SECTION_IDS = {
  hero: "hero",
  projects: "projects",
  subsidy: "subsidy",
  flow: "how-solar-works",
  services: "services",
  unique: "unique",
  calculator: "calculator",
  faq: "faq",
  reviews: "reviews",
  contact: "contact",
} as const;

export const BUBBLE_NAV = [
  { id: SECTION_IDS.flow, label: "How Solar Works" },
  { id: SECTION_IDS.services, label: "Services" },
  { id: SECTION_IDS.calculator, label: "Solar Calculator" },
] as const;

export const SERVICES = [
  {
    id: "residential",
    title: "Residential Rooftop Solar",
    description:
      "House and housing-society rooftop systems with optimized layouts and net-metering support.",
    image: SERVICE_IMAGES.residential,
    icon: "home" as const,
  },
  {
    id: "commercial",
    title: "Commercial Solar",
    description:
      "Office buildings, retail, and institutions with demand-based sizing and peak-load management.",
    image: SERVICE_IMAGES.commercial,
    icon: "building" as const,
  },
  {
    id: "industrial",
    title: "Industrial Solar",
    description:
      "Factory and warehouse rooftop plants with structural and electrical engineering.",
    image: SERVICE_IMAGES.industrial,
    icon: "factory" as const,
  },
  {
    id: "epc",
    title: "Solar EPC Turnkey Projects",
    description:
      "Full engineering, procurement, and construction—from site survey to commissioning.",
    image: SERVICE_IMAGES.epc,
    icon: "wrench" as const,
  },
  {
    id: "dg-sync",
    title: "Solar + DG Synchronization",
    description:
      "Integrated solar with diesel generator systems for seamless backup and load sharing.",
    image: SERVICE_IMAGES.dgSync,
    icon: "wrench" as const,
  },
];

export const SOLAR_FLOW = [
  {
    id: "sunlight",
    title: "Sunlight",
    image: SOLAR_FLOW_IMAGES.sunlight,
    icon: "sun" as const,
    description: "Solar irradiance reaches your rooftop or ground-mount site.",
  },
  {
    id: "panels",
    title: "Solar Panels",
    image: SOLAR_FLOW_IMAGES.panels,
    icon: "panel" as const,
    description: "PV cells absorb photons and convert sunlight into direct current (DC).",
  },
  {
    id: "inverter",
    title: "Inverter",
    image: SOLAR_FLOW_IMAGES.inverter,
    icon: "inverter" as const,
    description: "Inverters transform DC into grid-ready alternating current (AC).",
  },
  {
    id: "electricity",
    title: "Electricity",
    image: SOLAR_FLOW_IMAGES.electricity,
    icon: "zap" as const,
    description: "Clean power flows to your distribution board and on-site loads.",
  },
  {
    id: "building",
    title: "Building",
    image: SOLAR_FLOW_IMAGES.building,
    icon: "building-power" as const,
    description: "Your facility runs on solar; surplus can export via net metering.",
  },
];

export const UNIQUE_FEATURES = [
  {
    id: "rcc",
    title: "3-Foot RCC Mounting Structure",
    image: UNIQUE_IMAGES.rcc,
    description:
      "Many conventional installations use shorter RCC mounting structures. We use taller 3-foot RCC structures designed to improve panel clearance, improve airflow, reduce heat accumulation, increase sunlight exposure, and provide greater long-term structural stability.",
  },
  {
    id: "clamps",
    title: "Advanced Stainless Steel Mounting Hardware",
    image: UNIQUE_IMAGES.clamps,
    description:
      "We use hot-dip galvanized and corrosion-resistant hardware along with specialized clamping systems designed for long service life. This helps reduce rusting, improve durability, and maintain structural integrity in outdoor environments.",
  },
  {
    id: "crisscross",
    title: "Cross-Braced Structural Design",
    image: UNIQUE_IMAGES.crisscross,
    description:
      "Our installations use additional cross-bracing reinforcement to improve rigidity, reduce structural movement, and provide enhanced resistance against wind loads and environmental stresses.",
  },
  {
    id: "thunderstorm",
    title: "Multi-Layer Storm Protection System",
    image: UNIQUE_IMAGES.thunderstorm,
    description:
      "Our installations include enhanced locking and mounting mechanisms designed to improve panel retention and structural reliability during extreme weather conditions and high wind events.",
  },
];

/** @deprecated Legacy shape for old components */
export const HOW_SOLAR_WORKS = SOLAR_FLOW.map((step) => ({
  title: step.title,
  description: step.description,
  icon: step.id === "panels" ? "panel" : step.id === "building" ? "building-power" : step.id === "electricity" ? "zap" : step.id,
}));

export const SOLAR_COMPONENTS = [
  {
    title: "Solar Modules",
    content:
      "Tier-1 PV modules rated for long outdoor life. We specify wattage, efficiency, and warranty based on site conditions and load profile.",
  },
  {
    title: "Inverters",
    content:
      "String or central inverters matched to array size. MPPT tracking maximizes harvest; grid-tied models meet local utility standards.",
  },
  {
    title: "Battery Bank",
    content:
      "Optional lithium or tubular storage for backup and peak shaving. Sized for critical loads or full off-grid applications.",
  },
  {
    title: "Charge Controller",
    content:
      "Regulates charging for battery-backed systems, preventing overcharge and extending battery life in hybrid setups.",
  },
  {
    title: "Grounding Equipment",
    content:
      "Lightning protection, earthing pits, and bonding per electrical codes—essential for safety and equipment longevity.",
  },
];

export const ADVANTAGES = [
  {
    title: "25+ Year Lifespan",
    description:
      "Quality modules are engineered for decades of outdoor operation with manufacturer performance warranties.",
  },
  {
    title: "Green Energy",
    description:
      "Reduce carbon footprint by generating clean electricity on-site instead of grid fossil mix.",
  },
  {
    title: "Reduced Energy Cost",
    description:
      "Lower monthly bills through self-consumption and net-metering where utilities allow export credits.",
  },
  {
    title: "Reduced Rooftop Heat",
    description:
      "Panels shade the roof surface, which can lower attic temperatures and cooling load in warm climates.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How much do solar panels save on electricity bills?",
    answer:
      "Most homes and businesses in Uttar Pradesh offset 50–90% of daytime consumption with rooftop solar, depending on system size, tariff, and usage. A 3–5 kW residential rooftop solar system in Lucknow often saves ₹3,000–₹8,000+ per month at typical DISCOM rates. Savings grow as grid tariffs rise, while your solar generation stays predictable after installation.",
  },
  {
    question: "What is the ROI on solar panels?",
    answer:
      "Residential rooftop solar in UP commonly achieves payback in 4–6 years, with 20+ years of useful life after that. Commercial solar installation ROI can be faster (3–5 years) due to higher daytime loads and demand charges. ROI depends on subsidy eligibility, system size, shading, and net-metering export rules—your actual payback is confirmed after a site survey.",
  },
  {
    question: "How many solar panels do I need to power a house?",
    answer:
      "Divide your average monthly units (kWh) by 120–150 to estimate system kW in UP. Example: 300 units/month ≈ 2–2.5 kW, roughly 5–8 panels (550 W class). A detailed load study accounts for AC use, appliances, and future expansion. For rooftop solar installation in Lucknow, we size for your bill and roof area.",
  },
  {
    question: "Difference between on-grid and off-grid solar systems?",
    answer:
      "On-grid (grid-tied) systems connect to the utility and use net metering—no batteries required for most homes. Off-grid systems use batteries and are fully independent, common where grid supply is unreliable. Hybrid systems combine grid + battery backup. PM Surya Ghar Muft Bijli Yojana typically applies to grid-connected rooftop solar.",
  },
  {
    question: "How to apply for PM Surya Ghar Muft Bijli Yojana?",
    answer:
      "Register on the official PM Surya Ghar portal, submit electricity bill and identity documents, and complete DISCOM feasibility approval. Choose a vendor familiar with scheme requirements, complete installation, inspection, and net-metering. o2m Technical Solutions guides homeowners in Lucknow and UP through documentation and commissioning.",
  },
  {
    question: "How much is the UPNEDA and PM Surya Ghar subsidy in UP?",
    answer:
      "Under PM Surya Ghar, eligible residential systems may receive up to ₹78,000 central subsidy (varies by capacity band). Uttar Pradesh may offer additional state-linked benefits up to ~₹30,000 where applicable—total benefits can reach up to ₹1.08 lakh subject to current government guidelines and eligibility. Final amounts depend on system size, category, and approved vendor processes.",
  },
  {
    question: "How many solar panels do I need for a 3 BHK in Lucknow?",
    answer:
      "A typical 3 BHK in Lucknow with AC and standard appliances often needs 3–5 kW (8–12 panels of 550 W), based on monthly units of 250–450 kWh. Exact count depends on roof area, orientation, and shading. Book a free site survey for a precise layout and solar panel price with subsidy in UP.",
  },
  {
    question: "What is the ROI on commercial solar plants in Uttar Pradesh?",
    answer:
      "Commercial solar installation in UP often delivers 3–5 year payback when daytime consumption is high. Industrial solar EPC projects benefit from scale, accelerated depreciation (where applicable), and lower per-kW costs. ROI improves with demand-charge reduction and stable generation over 25+ years.",
  },
  {
    question: "Are you an UPNEDA registered vendor?",
    answer:
      "o2m Technical Solutions follows UPNEDA-aligned quality and documentation standards for rooftop solar in Uttar Pradesh. Registration status and DISCOM empanelment should be verified at the time of your project—we provide transparent credentials, BOM, and warranty documents during quotation.",
  },
  {
    question: "Do solar panels work during rainy and cloudy weather?",
    answer:
      "Yes—at reduced output. Diffuse light still generates electricity; production may drop 30–70% on heavy monsoon days. Annual yield estimates for Lucknow already include seasonal weather. Grid-tied systems draw from the utility when solar output is low.",
  },
  {
    question: "What happens at night?",
    answer:
      "Solar panels do not produce at night. Grid-tied systems automatically use utility power; battery-backed or hybrid systems discharge stored energy for critical loads. With net metering, excess daytime units exported to the grid offset nighttime consumption on your bill.",
  },
];

export const HERO_STATS = [
  { label: "Panel Warranty", value: 25, suffix: "+ yrs" },
  { label: "Service Lines", value: 4, suffix: "" },
  { label: "EPC Phases", value: 5, suffix: "" },
  { label: "Clean Energy", value: 100, suffix: "%" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Clear engineering documentation and a smooth installation timeline. Our factory roof system was commissioned on schedule.",
    author: "Operations Manager",
    company: "Industrial Client (Placeholder)",
  },
  {
    quote:
      "The team explained net metering and system sizing in plain language. Professional from survey to handover.",
    author: "Homeowner",
    company: "Residential Client (Placeholder)",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Engineering-First Design",
    description: "Structural load checks, cable sizing, and single-line diagrams before procurement.",
  },
  {
    title: "Transparent EPC Process",
    description: "Defined milestones from survey through commissioning with documented handover.",
  },
  {
    title: "Quality Components",
    description: "Specified tier-1 modules and inverters matched to your load and site conditions.",
  },
  {
    title: "After-Sales Support",
    description: "O&M guidance, monitoring setup, and warranty coordination with manufacturers.",
  },
];
