"use client";

import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";
import GradientText from "@/app/components/GradientText";

const RED_GRADIENT_COLORS = ["#dc2626", "#ef4444", "#b91c1c", "#991b1b"];

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
          <GradientText
            colors={RED_GRADIENT_COLORS}
            block
            className="max-w-none text-lg sm:text-xl"
            innerClassName="text-lg sm:text-xl leading-relaxed"
          >
            <p className="mb-4">{improvedOutcomes.subheadline}</p>
            {improvedOutcomes.body.map((paragraph, i) => (
              <p key={i} className={i < improvedOutcomes.body.length - 1 ? "mb-4" : ""}>
                {paragraph}
              </p>
            ))}
          </GradientText>
        </motion.div>
      </div>
    </section>
  );
}
