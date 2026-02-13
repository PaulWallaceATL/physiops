import HeroSection from "@/app/components/HeroSection";

export default function IntegrationPage() {
  return (
    <div>
      <HeroSection
        title="ANS Monitoring Integration"
        subtitle="Integrate Physio PS autonomic function testing into your practice or organization."
      />
      <div className="relative z-10 mx-auto max-w-3xl bg-white px-6 py-12 dark:bg-neutral-950">
        <p>
          Contact us to learn how Physio PS technology can be integrated with
          your existing systems and workflows.
        </p>
      </div>
    </div>
  );
}
