"use client";

import PageHero from "@/app/components/PageHero";
import DepthCard from "@/app/components/depth-card";
import { specialties } from "@/app/lib/data";

export default function SpecialtiesPage() {
  return (
    <div>
      <PageHero
        title="Specialties"
        subtitle="P&S monitoring and therapy insights for clinical practice across medical specialties."
      />
      <section className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-neutral-100 dark:bg-neutral-900">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
            {specialties.map((specialty) => (
              <DepthCard
                key={specialty.slug}
                title={specialty.title}
                description={
                  specialty.conditions.length > 0
                    ? `${specialty.conditions.length} conditions — ${specialty.conditions[0].title} and more.`
                    : "P&S monitoring and therapy insights for clinical practice."
                }
                buttonText="View specialty"
                href={`/specialties/${specialty.slug}`}
                width={340}
                height={380}
                maxRotation={12}
                maxTranslation={14}
                disableOnMobile={true}
                spotlight={false}
                className="w-full max-w-[340px]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
