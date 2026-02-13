"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";

const CHART_COLORS = [
  "bg-red-400 dark:bg-red-500",
  "bg-red-300 dark:bg-red-400",
  "bg-red-200 dark:bg-red-300",
  "bg-red-100 dark:bg-red-200",
];

export default function WorkWithUsSection() {
  const { workWithUs } = homepageContent;

  // Chart segments: use varied percentages for 4 items, else equal split
  const percentages =
    workWithUs.items.length === 4 ? [30, 28, 24, 18] : workWithUs.items.map(() => Math.floor(100 / workWithUs.items.length));
  const chartData = workWithUs.items.map((label, i) => ({
    label,
    percentage: percentages[i] ?? Math.floor(100 / workWithUs.items.length),
    color: CHART_COLORS[i] ?? CHART_COLORS[0],
  }));

  return (
    <section className="relative z-10 w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Title and CTA */}
          <div className="flex flex-col gap-8 sm:gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
            >
              {workWithUs.tagline}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-medium text-neutral-900 dark:text-white leading-tight"
            >
              {workWithUs.headline}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/contact-us"
                className="inline-block px-8 py-4 rounded-2xl bg-red-600 text-white font-semibold text-base sm:text-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors duration-200 w-fit shadow-lg shadow-red-900/20"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Stacked Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shadow-lg flex flex-col p-6 rounded-3xl gap-6 border border-neutral-200 dark:border-neutral-800"
          >
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">
              Why work with us
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col rounded-md overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]"
            >
              {chartData.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} flex items-start justify-between px-6 sm:px-8 md:px-10 py-6`}
                  style={{ flexGrow: item.percentage }}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-900">
                    {item.label}
                  </span>
                  <span className="tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-900 shrink-0 ml-2">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
