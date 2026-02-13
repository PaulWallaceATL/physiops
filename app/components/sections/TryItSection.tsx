"use client";

import { motion } from "motion/react";
import ContactForm from "@/app/components/ContactForm";
import { homepageContent } from "@/app/lib/data";

export default function TryItSection() {
  const { tryIt } = homepageContent;

  return (
    <section className="relative z-10 w-full border-y border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
              {tryIt.headline}
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              {tryIt.description}
            </p>
          </div>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
