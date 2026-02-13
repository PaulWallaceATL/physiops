"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import { homepageContent } from "@/app/lib/data";
import CenterFlow, { type NodeItem } from "@/app/components/CenterFlow";
import StaggeredText from "@/app/components/StaggeredText";

export default function MonitoringSection() {
  const { monitoring } = homepageContent;

  const nodeItems: NodeItem[] = useMemo(
    () =>
      monitoring.conditionsList.map((label) => ({
        content: (
          <span className="whitespace-nowrap text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {label}
          </span>
        ),
      })),
    [monitoring.conditionsList],
  );

  return (
    <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <StaggeredText
            as="h2"
            text={monitoring.title}
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl"
            segmentBy="words"
            delay={60}
            direction="top"
          />
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {monitoring.subtitle}
          </p>
          <div className="h-[380px] w-full min-[480px]:h-[440px] sm:h-[520px] md:h-[600px] lg:h-[640px]">
            <div className="h-full w-full scale-[0.7] origin-center min-[480px]:scale-90 sm:scale-100">
              <CenterFlow
                nodeItems={nodeItems}
                centerContent="PS"
                centerSize={80}
                nodeSize={44}
                variableNodeWidth
                nodeDistance={0.86}
                pulseDuration={4}
                pulseInterval={8}
                className="rounded-2xl h-full min-h-[380px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
