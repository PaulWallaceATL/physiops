import { notFound } from "next/navigation";
import HeroSection from "@/app/components/HeroSection";
import ConditionsAccordion from "@/app/components/ConditionsAccordion";
import { specialties } from "@/app/lib/data";

export async function generateStaticParams() {
  return specialties.map((specialty) => ({
    slug: specialty.slug,
  }));
}

function getSpecialtyBySlug(slug: string) {
  return specialties.find((s) => s.slug === slug) ?? null;
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) notFound();

  const subtitle = "P&S monitoring and therapy insights for clinical practice.";

  return (
    <div>
      <HeroSection title={specialty.title} subtitle={subtitle} />

      <div className="relative z-10 mx-auto max-w-3xl bg-white px-6 py-12 dark:bg-neutral-950">
        <section>
          <ConditionsAccordion conditions={specialty.conditions} />
        </section>
      </div>
    </div>
  );
}
