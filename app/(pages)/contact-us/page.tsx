import PageHero from "@/app/components/PageHero";
import ContactTryItSection from "@/app/components/sections/ContactTryItSection";
import { homepageContent } from "@/app/lib/data";

export default function ContactPage() {
  const { tryIt } = homepageContent;

  return (
    <div>
      <PageHero title="Contact Us" subtitle={tryIt.description} />
      <ContactTryItSection />
    </div>
  );
}
