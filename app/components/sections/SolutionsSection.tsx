"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Monitor, Smartphone, Activity, type LucideIcon } from "lucide-react";
import { homepageContent } from "@/app/lib/data";
import { Button } from "@/components/ui/button";

const PRODUCT_ICONS: LucideIcon[] = [Monitor, Smartphone, Activity];

export default function SolutionsSection() {
  const { solutions } = homepageContent;
  const [activeTab, setActiveTab] = useState(0);

  const tabs = solutions.productCards.map((card, i) => ({
    icon: PRODUCT_ICONS[i] ?? Activity,
    title: card.title,
    description:
      card.features[0] ?? "Physio PS autonomic function testing solutions.",
    features: card.features,
    slug: card.slug,
    cta: card.cta,
  }));

  const setTab = (index: number) => setActiveTab(index);

  return (
    <section className="relative z-10 w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 dark:text-white mb-4"
          >
            {solutions.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            {solutions.subheadline}
          </motion.p>
        </div>

        {/* Tabbed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Tab Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <motion.button
                  key={tab.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setTab(index)}
                  onClick={() => setTab(index)}
                  className={`w-full text-left p-4 md:p-6 rounded-2xl transition-[border-color,background-color] duration-200 flex-1 flex items-start border ${
                    isActive
                      ? "bg-red-50/80 dark:bg-red-950/30 border-red-200 dark:border-red-800/50"
                      : "bg-neutral-50 dark:bg-neutral-900 border-transparent hover:border-red-200 dark:hover:border-red-900/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? "bg-red-600 text-white"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-base md:text-lg font-semibold mb-1 ${
                          isActive
                            ? "text-neutral-900 dark:text-white"
                            : "text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        {tab.title}
                      </h3>
                      <p
                        className={`text-sm line-clamp-2 ${
                          isActive
                            ? "text-neutral-600 dark:text-neutral-400"
                            : "text-neutral-500 dark:text-neutral-500"
                        }`}
                      >
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-6 md:p-8 lg:p-10 flex-1 flex flex-col"
              >
                {/* Content Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600 mb-6">
                    {(() => {
                      const Icon = tabs[activeTab].icon;
                      return (
                        <Icon className="w-8 h-8 text-white" />
                      );
                    })()}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3">
                    {tabs[activeTab].title}
                  </h3>

                  <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {tabs[activeTab].description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-4 flex-1">
                  {tabs[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg shadow-red-900/20">
                    <Link href="/contact-us">{tabs[activeTab].cta}</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
