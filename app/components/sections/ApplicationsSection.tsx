"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Stethoscope,
  Building2,
  Briefcase,
  Home,
  Medal,
  Activity,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { homepageContent } from "@/app/lib/data";
import { Button } from "@/components/ui/button";

const APPLICATION_ICONS: LucideIcon[] = [
  Stethoscope,   // Medical Doctors
  Building2,     // Urgent Care Clinics
  Briefcase,     // Insurance Companies/Corporate Organizations
  Home,          // Assisted Living, Nurse Care, Independent Living
  Medal,         // Veterans Administration
  Activity,      // Fitness Centers
  Trophy,        // Sports Medicine
];

export default function ApplicationsSection() {
  const { applications } = homepageContent;

  return (
    <section className="relative z-10 w-full py-16 px-4 md:px-32 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 dark:text-white mb-6"
          >
            {applications.headline}
          </motion.h2>
        </div>

        {/* Features Grid - 2 rows x 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12">
          {applications.items.map((item, index) => {
            const Icon = APPLICATION_ICONS[index] ?? Activity;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col cursor-default"
              >
                {/* Icon and Title on same line */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg shrink-0 transition-all duration-200 group-hover:border-red-600/60 dark:group-hover:border-red-500/50 group-hover:shadow-md group-hover:shadow-red-950/10">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-900 dark:text-white transition-colors duration-200 group-hover:text-red-600 dark:group-hover:text-red-400" />
                  </div>
                  <h3 className="text-base tracking-tight font-light text-neutral-900 dark:text-white transition-colors duration-200 group-hover:text-red-800 dark:group-hover:text-red-300">
                    {item.category}
                  </h3>
                </div>

                {/* Description - max 2 lines */}
                <p className="text-xs tracking-tight font-light max-w-[20ch] sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                  {item.examples}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg shadow-red-900/20">
            <Link href="/contact-us">{applications.cta}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
