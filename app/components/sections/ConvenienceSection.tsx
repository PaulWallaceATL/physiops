"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useMemo } from "react";
import { homepageContent } from "@/app/lib/data";
import ThreeDTextReveal from "@/app/components/ThreeDTextReveal";

export default function ConvenienceSection() {
  const { convenience } = homepageContent;

  const headlineWords = useMemo(
    () => convenience.headline.split(/\s+/),
    [convenience.headline],
  );

  return (
    <section className="relative z-10 w-full bg-white dark:bg-neutral-950">
      <ThreeDTextReveal
        items={headlineWords}
        scrollDistance="180vh"
        fontSize="clamp(1.5rem, 4vw, 3rem)"
        fontWeight={700}
        gap={12}
        textClassName="normal-case text-neutral-900 dark:text-white"
      />
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <p>
          <Link
            href="/ans-monitoring-integration"
            className="font-medium text-neutral-700 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            {convenience.ctaLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
