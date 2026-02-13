"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import PageHero from "@/app/components/PageHero";
import { specialties } from "@/app/lib/data";

const ParallaxCards = dynamic(
  () => import("@/app/components/parallax-cards").then((m) => m.default),
  { ssr: false, loading: () => <div className="min-h-[70vh] flex items-center justify-center bg-neutral-100 dark:bg-neutral-900" /> }
);

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80";

export default function SpecialtiesPage() {
  const router = useRouter();
  const images = specialties.map((s) => s.image ?? DEFAULT_IMAGE);

  const handleCardClick = (index: number) => {
    const specialty = specialties[index];
    if (specialty) router.push(`/specialties/${specialty.slug}`);
  };

  return (
    <div>
      <PageHero
        title="Specialties"
        subtitle="P&S monitoring and therapy insights for clinical practice across medical specialties."
      />
      <section className="relative z-10 w-full min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <ParallaxCards
          images={images}
          enableDepthFog={true}
          fogIntensity={1.2}
          enableMagneticAttraction={true}
          magneticStrength={50}
          onCardClick={handleCardClick}
          className="w-full min-h-[70vh] sm:min-h-[80vh]"
        />
      </section>
    </div>
  );
}
