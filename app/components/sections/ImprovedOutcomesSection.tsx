"use client";

import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";

export default function ImprovedOutcomesSection() {
  const { improvedOutcomes } = homepageContent;

  return (
    <section className="relative z-10 w-full border-y border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <StaggeredText
            as="h2"
            text={improvedOutcomes.headline}
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl"
            segmentBy="words"
            delay={60}
            direction="top"
          />
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            {improvedOutcomes.subheadline}
          </p>
          <div className="space-y-4">
            {improvedOutcomes.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
