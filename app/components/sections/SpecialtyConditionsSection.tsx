"use client";

import { motion } from "motion/react";
import ConditionsAccordion from "@/app/components/ConditionsAccordion";
import StaggeredText from "@/app/components/StaggeredText";
import type { Condition } from "@/app/components/ConditionsAccordion";

export default function SpecialtyConditionsSection({
  conditions,
  specialtyTitle,
}: {
  conditions: Condition[];
  specialtyTitle: string;
}) {
  return (
    <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
      <div className="mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-8 w-full"
        >
          <StaggeredText
            as="h2"
            text={`Conditions we address in ${specialtyTitle}`}
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl"
            segmentBy="words"
            delay={60}
            direction="top"
          />
          <div className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/30 sm:p-6">
            <ConditionsAccordion conditions={conditions} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
