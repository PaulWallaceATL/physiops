"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";

export default function ConvenienceSection() {
  const { convenience } = homepageContent;

  return (
    <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <StaggeredText
            as="h2"
            text={convenience.headline}
            className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-2xl md:text-3xl"
            segmentBy="words"
            delay={60}
            direction="top"
          />
          <p>
            <Link
              href="/ans-monitoring-integration"
              className="font-medium text-neutral-700 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              {convenience.ctaLink}
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
