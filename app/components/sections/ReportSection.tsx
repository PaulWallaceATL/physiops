"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";

const StarBurst = dynamic(() => import("@/app/components/StarBurst"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-white dark:bg-neutral-950" />,
});

export default function ReportSection() {
  const { report, learnMoreCta } = homepageContent;

  return (
    <section className="relative z-10 w-full min-h-screen bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <StarBurst
          color="#dc2626"
          density={0.5}
          starCount={100}
          opacity={0.5}
          brightness={1}
          flowerIntensity={0.4}
        />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-neutral-900 dark:text-white text-center mb-6 sm:mb-8 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {report.headline}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 text-center mb-8 sm:mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {report.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/ans-monitoring-integration"
            className="inline-block px-8 sm:px-10 py-4 rounded-md bg-red-600 text-white font-medium text-base sm:text-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors"
          >
            {learnMoreCta}
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto flex items-center justify-center gap-4 sm:gap-6 bg-white dark:bg-neutral-950 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <span className="text-base sm:text-lg font-medium text-neutral-900 dark:text-white">
          Physio PS
        </span>
        <Link
          href="/ans-monitoring-integration"
          className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors"
        >
          {learnMoreCta}
        </Link>
      </motion.div>
    </section>
  );
}
