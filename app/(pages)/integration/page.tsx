import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import IntegrationPageSections from "@/app/components/sections/IntegrationPageSections";
import { homepageContent } from "@/app/lib/data";
import { SITE_URL } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "ANS Monitoring Integration",
  description:
    "Integrate Physio PS autonomic function testing into your practice or organization. Learn how our ANS monitoring solutions fit your workflow.",
  openGraph: {
    title: "ANS Monitoring Integration | Physio PS",
    description:
      "Integrate Physio PS autonomic function testing into your practice or organization.",
    url: `${SITE_URL}/integration`,
  },
  alternates: { canonical: `${SITE_URL}/integration` },
};

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
