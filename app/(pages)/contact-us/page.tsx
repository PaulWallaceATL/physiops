import HeroSection from "@/app/components/HeroSection";
import ContactForm from "@/app/components/ContactForm";
import { homepageContent } from "@/app/lib/data";

export default function ContactPage() {
  const { tryIt } = homepageContent;

  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle={tryIt.description}
      />
      <div className="relative z-10 mx-auto max-w-3xl bg-white px-6 py-12 dark:bg-neutral-950">
        <section>
          <h2 className="mb-6 text-xl font-semibold">{tryIt.headline}</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
