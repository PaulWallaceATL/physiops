import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import SpecialtyConditionsSection from "@/app/components/sections/SpecialtyConditionsSection";
import { specialties } from "@/app/lib/data";
import { SITE_URL } from "@/app/lib/site";

export async function generateStaticParams() {
  return specialties.map((specialty) => ({
    slug: specialty.slug,
  }));
}

function getSpecialtyBySlug(slug: string) {
  return specialties.find((s) => s.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty)
    return { title: "Specialty" };
  const title = specialty.title;
  const description = `P&S monitoring and therapy insights for ${title}. Physio PS autonomic function testing for clinical practice.`;
  const url = `${SITE_URL}/specialties/${slug}`;
  return {
    title,
    description,
    openGraph: { title: `${title} | Physio PS`, description, url },
    alternates: { canonical: url },
  };
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
