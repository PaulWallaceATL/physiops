"use client";

import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";
import ThreeDTextReveal from "@/app/components/ThreeDTextReveal";

export default function ReportSection() {
  const { report } = homepageContent;

  const headlineWords = ["Multi-Parameter", "Graph", "Report"];

  return (
    <section className="relative z-10 w-full bg-white dark:bg-neutral-950">
      <ThreeDTextReveal
        items={headlineWords}
        scrollDistance="150vh"
        fontSize="clamp(2rem, 8vw, 5rem)"
        fontWeight={800}
        gap={14}
        textClassName="normal-case text-neutral-900 dark:text-white"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8"
      >
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {report.description}
        </p>
      </motion.div>
    </section>
  );
}
