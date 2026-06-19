import type { Metadata } from "next";
import { COMPANY, FAQ_ITEMS } from "./constants";
import { LOGO } from "./assets";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.o2mtechnicalsolutions.com";

export const SEO_KEYWORDS = [
  "rooftop solar installation in Lucknow",
  "PM Surya Ghar Muft Bijli Yojana",
  "best solar EPC company in Uttar Pradesh",
  "UPNEDA approved solar vendors",
  "solar panel price with subsidy in UP",
  "solar company in Lucknow",
  "commercial solar installation",
  "industrial solar EPC",
  "residential rooftop solar",
  "solar EPC contractor",
] as const;

export const SEO_COPY = {
  hero:
    "o2m Technical Solutions is a solar company in Lucknow delivering rooftop solar installation in Lucknow, commercial solar installation, and industrial solar EPC across Uttar Pradesh. As an engineering-led solar EPC contractor, we help homeowners and businesses navigate PM Surya Ghar Muft Bijli Yojana benefits, UPNEDA-approved processes, and transparent solar panel price with subsidy in UP.",
  subsidy:
    "Under PM Surya Ghar Muft Bijli Yojana and state-linked programmes, eligible homeowners may reduce upfront solar panel price with subsidy in UP when installed through compliant vendors. We guide documentation, net metering, and system design so you can claim benefits you qualify for.",
  services:
    "From residential rooftop solar in Lucknow to commercial solar installation and industrial solar EPC, our team is among the best solar EPC company in Uttar Pradesh options for turnkey design, procurement, and commissioning—aligned with UPNEDA approved solar vendor requirements where applicable.",
  footer:
    "Trusted solar EPC contractor for rooftop solar installation in Lucknow, Kanpur, Varanasi, Prayagraj, and surrounding districts. Ask about PM Surya Ghar Muft Bijli Yojana, UPNEDA registration support, and site-specific solar panel price with subsidy in UP.",
} as const;

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} | Rooftop Solar Lucknow & Solar EPC Uttar Pradesh`,
    template: `%s | ${COMPANY.name}`,
  },
  description: SEO_COPY.hero.slice(0, 160),
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Best Solar EPC Company in Uttar Pradesh`,
    description: SEO_COPY.hero.slice(0, 200),
    images: [
      {
        url: `${SITE_URL}${LOGO}`,
        width: 512,
        height: 512,
        alt: `${COMPANY.name} — Solar EPC Lucknow`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Rooftop Solar Installation Lucknow`,
    description: SEO_COPY.hero.slice(0, 200),
    images: [`${SITE_URL}${LOGO}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Solar Energy",
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO}`,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.postalCode,
      addressCountry: "IN",
    },
    areaServed: COMPANY.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY.name,
    image: `${SITE_URL}${LOGO}`,
    url: SITE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: COMPANY.serviceAreas,
    description: SEO_COPY.hero,
    sameAs: [] as string[],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: COMPANY.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function getFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getLocalBusinessSchema(),
      getWebSiteSchema(),
      getFAQPageSchema(),
    ],
  };
}
