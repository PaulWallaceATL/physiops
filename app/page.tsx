import HomeHero from "@/app/components/HomeHero";
import IntroSection from "@/app/components/sections/IntroSection";
import MonitoringSection from "@/app/components/sections/MonitoringSection";
import ValuePropositionSection from "@/app/components/sections/ValuePropositionSection";
import ConvenienceSection from "@/app/components/sections/ConvenienceSection";
import ImprovedOutcomesSection from "@/app/components/sections/ImprovedOutcomesSection";
import ApplicationsSection from "@/app/components/sections/ApplicationsSection";
import SolutionsSection from "@/app/components/sections/SolutionsSection";
import ReportSection from "@/app/components/sections/ReportSection";
import ProviderPatientSection from "@/app/components/sections/ProviderPatientSection";
import WorkWithUsSection from "@/app/components/sections/WorkWithUsSection";
import TryItSection from "@/app/components/sections/TryItSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <IntroSection />
      <MonitoringSection />
      <ValuePropositionSection />
      <ConvenienceSection />
      <ImprovedOutcomesSection />
      <ApplicationsSection />
      <SolutionsSection />
      <ReportSection />
      <ProviderPatientSection />
      <WorkWithUsSection />
      <TryItSection />
      <TestimonialsSection />
    </div>
  );
}
