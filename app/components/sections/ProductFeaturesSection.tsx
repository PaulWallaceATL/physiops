"use client";

import { motion } from "motion/react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  AlertTriangle,
  FileCheck,
  Fingerprint,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/app/lib/data";

const FEATURE_ICONS: LucideIcon[] = [
  Shield,
  Lock,
  Eye,
  Database,
  AlertTriangle,
  FileCheck,
  Fingerprint,
  ShieldCheck,
];

function shortTitle(text: string, maxWords = 4): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
}

export default function ProductFeaturesSection({ product }: { product: Product }) {
  return (
    <section className="relative z-10 w-full py-16 px-4 md:px-32 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4"
          >
            {product.title}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 dark:text-white mb-6"
          >
            Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl"
          >
            What {product.title} offers for your practice.
          </motion.p>
        </div>

        {/* Features Grid - 2 rows x 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12">
          {product.features.map((feature, index) => {
            const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length];
            const title = shortTitle(feature);
            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col cursor-default"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg shrink-0 transition-all duration-200 group-hover:border-red-600/60 dark:group-hover:border-red-500/50 group-hover:shadow-md group-hover:shadow-red-950/10">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-900 dark:text-white transition-colors duration-200 group-hover:text-red-600 dark:group-hover:text-red-400" />
                  </div>
                  <h3 className="text-base tracking-tight font-light text-neutral-900 dark:text-white transition-colors duration-200 group-hover:text-red-800 dark:group-hover:text-red-300">
                    {title}
                  </h3>
                </div>
                <p className="text-xs tracking-tight font-light max-w-[20ch] sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                  {feature}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
