"use client";

import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";

export default function MonitoringSection() {
  const { monitoring } = homepageContent;

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
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl">
            {monitoring.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {monitoring.subtitle}
          </p>
          <ul className="flex flex-wrap gap-2">
            {monitoring.conditionsList.map((item) => (
              <li
                key={item}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
