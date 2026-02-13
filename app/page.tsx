import Link from "next/link";
import HomeHero from "@/app/components/HomeHero";
import IntroSection from "@/app/components/sections/IntroSection";
import { homepageContent } from "@/app/lib/data";

export default function Home() {
  const {
    monitoring,
    valueProposition,
    convenience,
    improvedOutcomes,
    applications,
    solutions,
    report,
    providerFocus,
    patientFocus,
    learnMoreCta,
    workWithUs,
    tryIt,
    testimonials,
  } = homepageContent;

  return (
    <div>
      <HomeHero />

      <IntroSection />

      <div className="relative z-10 mx-auto max-w-3xl bg-white px-6 py-12 dark:bg-neutral-950">
        <section className="mb-12">
          <h2>{monitoring.title}</h2>
          <p>{monitoring.subtitle}</p>
          <div>
            <ul>
              {monitoring.conditionsList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <p>{valueProposition.paragraph}</p>
          <p>{valueProposition.supportingParagraph}</p>
          <div>
            <p>{valueProposition.ctaPrimary}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2>{convenience.headline}</h2>
          <div>
            <p>{convenience.ctaLink}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2>{improvedOutcomes.headline}</h2>
          <p>{improvedOutcomes.subheadline}</p>
          <div>
            {improvedOutcomes.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2>{applications.headline}</h2>
          <div>
            {applications.items.map((item, i) => (
              <div key={i}>
                <h3>{item.category}</h3>
                <p>{item.examples}</p>
              </div>
            ))}
          </div>
          <p>{applications.cta}</p>
        </section>

        <section className="mb-12">
          <h2>{solutions.headline}</h2>
          <h3>{solutions.subheadline}</h3>
          <div>
            {solutions.productCards.map((card, i) => (
              <div key={i}>
                <h4>{card.title}</h4>
                <ul>
                  {card.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
                <p>{card.cta}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2>{report.headline}</h2>
          <p>{report.description}</p>
        </section>

        <section className="mb-12">
          <h2>{providerFocus.title}</h2>
          <p>{providerFocus.description}</p>
        </section>

        <section className="mb-12">
          <h2>{patientFocus.title}</h2>
          <p>{patientFocus.description}</p>
        </section>

        <section className="mb-12">
          <p>{learnMoreCta}</p>
        </section>

        <section className="mb-12">
          <p>{workWithUs.tagline}</p>
          <h2>{workWithUs.headline}</h2>
          <div>
            {workWithUs.items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2>{tryIt.headline}</h2>
          <p>{tryIt.description}</p>
          <div>
            <p>{tryIt.formLabels.firstName}</p>
            <p>{tryIt.formLabels.phone}</p>
            <p>{tryIt.formLabels.email}</p>
            <p>{tryIt.formLabels.submit}</p>
            <p>{tryIt.formLabels.consent}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2>{testimonials.headline}</h2>
          <div>
            {testimonials.items.map((item, i) => (
              <div key={i}>
                <p>{item.quote}</p>
                <p>{item.author}</p>
                <p>{item.credentials}</p>
              </div>
            ))}
          </div>
          <p>{testimonials.cta}</p>
        </section>
      </div>
    </div>
  );
}
