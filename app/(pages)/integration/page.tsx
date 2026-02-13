import HeroSection from "@/app/components/HeroSection";
import IntegrationPageSections from "@/app/components/sections/IntegrationPageSections";
import { homepageContent } from "@/app/lib/data";

export default function IntegrationPage() {
  const { integrationPage } = homepageContent;

  return (
    <div>
      <HeroSection
        title="ANS Monitoring Integration"
        subtitle="Integrate Physio PS autonomic function testing into your practice or organization."
      />
      <IntegrationPageSections content={integrationPage} />
    </div>
  );
}
