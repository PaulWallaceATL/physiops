"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { homepageContent } from "@/app/lib/data";

export default function ValuePropositionSection() {
  const { valueProposition } = homepageContent;

  return (
    <section className="relative z-10 w-full border-y border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {valueProposition.paragraph}
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {valueProposition.supportingParagraph}
          </p>
          <div>
            <Button asChild size="lg">
              <Link href="/contact-us">{valueProposition.ctaPrimary}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
