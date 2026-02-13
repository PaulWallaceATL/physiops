import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import { homepageContent } from "@/app/lib/data";

export default function IntegrationPage() {
  const { integrationPage } = homepageContent;

  return (
    <div>
      <HeroSection
        title="ANS Monitoring Integration"
        subtitle="Integrate Physio PS autonomic function testing into your practice or organization."
      />

      <div className="relative z-10 mx-auto max-w-3xl bg-white px-6 py-12 dark:bg-neutral-950">
        <section className="mb-12">
          <p>{integrationPage.intro}</p>
        </section>

        <section className="mb-12">
          <h2>{integrationPage.whyIntegrate.headline}</h2>
          <div>
            {integrationPage.whyIntegrate.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2>{integrationPage.whoItsFor.headline}</h2>
          <div>
            {integrationPage.whoItsFor.items.map((item, i) => (
              <div key={i} className="mb-4">
                <h3>{item.category}</h3>
                <p>{item.examples}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2>{integrationPage.solutions.headline}</h2>
          <h3>{integrationPage.solutions.subheadline}</h3>
          <div>
            {integrationPage.solutions.productCards.map((card, i) => (
              <div key={i} className="mb-8">
                <h4>{card.title}</h4>
                <ul>
                  {card.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
                <p>
                  <Link href="/contact-us">{card.cta}</Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2>{integrationPage.providerFocus.title}</h2>
          <p>{integrationPage.providerFocus.description}</p>
        </section>

        <section>
          <p>{integrationPage.cta}</p>
          <p>
            <Link href="/contact-us">Request A Demo</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
