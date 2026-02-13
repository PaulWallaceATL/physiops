import PageHero from "@/app/components/PageHero";
import ContactPageSection from "@/app/components/sections/ContactPageSection";
import { homepageContent } from "@/app/lib/data";

export default function ContactPage() {
  const { tryIt } = homepageContent;

  return (
    <div>
      <PageHero title="Contact Us" subtitle={tryIt.description} />
      <ContactPageSection />
    </div>
  );
}
