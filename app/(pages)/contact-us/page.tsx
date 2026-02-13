import HeroSection from "@/app/components/HeroSection";
import ContactPageSection from "@/app/components/sections/ContactPageSection";
import { homepageContent } from "@/app/lib/data";

export default function ContactPage() {
  const { tryIt } = homepageContent;

  return (
    <div>
      <HeroSection title="Contact Us" subtitle={tryIt.description} />
      <ContactPageSection />
    </div>
  );
}
