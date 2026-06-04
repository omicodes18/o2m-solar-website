import { HeroSection } from "./HeroSection";
import { ProjectsShowcase } from "./ProjectsShowcase";
import { SubsidySection } from "./SubsidySection";
import { HowSolarFlowSection } from "./HowSolarFlowSection";
import { ServicesSection } from "./ServicesSection";
import { UniqueSection } from "./UniqueSection";
import { SolarCalculatorSection } from "./SolarCalculatorSection";
import { FAQSection } from "./FAQSection";
import { ReviewsSection } from "./ReviewsSection";
import { ContactSection } from "./ContactSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function SolarHome() {
  return (
    <>
      <HeroSection />
      <ProjectsShowcase />
      <SubsidySection />
      <HowSolarFlowSection />
      <ServicesSection />
      <UniqueSection />
      <SolarCalculatorSection />
      <FAQSection />
      <ReviewsSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
