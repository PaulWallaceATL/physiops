import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ContactTryItSection from "@/app/components/sections/ContactTryItSection";
import { homepageContent } from "@/app/lib/data";
import { SITE_URL } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Physio PS. Request a demo or ask about our autonomic function testing products and integration for your practice.",
  openGraph: {
    title: "Contact Us | Physio PS",
    description:
      "Get in touch with Physio PS. Request a demo or ask about our autonomic function testing products.",
    url: `${SITE_URL}/contact`,
  },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  const { tryIt } = homepageContent;

  return (
    <div>
      <PageHero title="Contact Us" subtitle={tryIt.description} />
      <ContactTryItSection />
    </div>
  );
}
