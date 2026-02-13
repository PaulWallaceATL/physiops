import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import SpecialtyConditionsSection from "@/app/components/sections/SpecialtyConditionsSection";
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
      <PageHero title={specialty.title} subtitle={subtitle} />
      <SpecialtyConditionsSection
        conditions={specialty.conditions}
        specialtyTitle={specialty.title}
      />
    </div>
  );
}
