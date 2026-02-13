import PageHero from "@/app/components/PageHero";
import IntegrationPageSections from "@/app/components/sections/IntegrationPageSections";
import { homepageContent } from "@/app/lib/data";

export default function IntegrationPage() {
  const { integrationPage } = homepageContent;

  return (
    <div>
      <PageHero
        title="ANS Monitoring Integration"
        subtitle="Integrate Physio PS autonomic function testing into your practice or organization."
      />
      <IntegrationPageSections content={integrationPage} />
    </div>
  );
}
