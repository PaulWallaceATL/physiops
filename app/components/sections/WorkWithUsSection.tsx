"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { homepageContent } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";

export default function WorkWithUsSection() {
  const { workWithUs } = homepageContent;

  return (
    <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {workWithUs.tagline}
          </p>
          <StaggeredText
            as="h2"
            text={workWithUs.headline}
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl"
            segmentBy="words"
            delay={60}
            direction="top"
          />
          <ul className="space-y-3 text-left">
            {workWithUs.items.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href="/contact-us">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
