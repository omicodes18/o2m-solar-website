import dynamic from "next/dynamic";
import { HeroSection } from "./HeroSection";
import { ProjectsShowcase } from "./ProjectsShowcase";
import { SubsidySection } from "./SubsidySection";
import { HowSolarFlowSection } from "./HowSolarFlowSection";
import { ServicesSection } from "./ServicesSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { UniqueSection } from "./UniqueSection";
import { Testimonials } from "./Testimonials";
import { ContactCTA } from "./ContactCTA";
import { SiteFooter } from "@/components/layout/SiteFooter";

// Code-split heavy interactive sections into separate JS chunks
// SSR still runs (good for SEO), but the JS is loaded lazily on the client
const SolarCalculatorSection = dynamic(() =>
  import("./SolarCalculatorSection").then((m) => m.SolarCalculatorSection)
);
const FAQSection = dynamic(() =>
  import("./FAQSection").then((m) => m.FAQSection)
);
const ReviewsSection = dynamic(() =>
  import("./ReviewsSection").then((m) => m.ReviewsSection)
);
const ContactSection = dynamic(() =>
  import("./ContactSection").then((m) => m.ContactSection)
);

export function SolarHome() {
  return (
    <>
      <HeroSection />
      <ProjectsShowcase />
      <SubsidySection />
      <HowSolarFlowSection />
      <ServicesSection />
      <WhyChooseUs />
      <UniqueSection />
      <SolarCalculatorSection />
      <FAQSection />
      <Testimonials />
      <ContactCTA />
      <ReviewsSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
