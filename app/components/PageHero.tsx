"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import StaggeredText from "@/app/components/StaggeredText";

type PageHeroProps = {
  title: string;
  subtitle: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative z-10 w-full min-h-screen overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      {/* Content - Hero3 layout */}
      <div className="relative flex min-h-screen flex-col p-[4vmax]">
        <div className="flex flex-1 relative w-full overflow-hidden">
          {/* Header: logo left, Request A Demo right */}
          <div className="absolute top-0 left-0 right-0 flex w-full items-center justify-between p-[4vmax]">
            <Link href="/" className="leading-tight font-semibold text-neutral-900 dark:text-white no-underline shrink-0">
              Physio PS
            </Link>
            <Link
              href="/contact-us"
              className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-[max(0.9rem,1vmax)] hover:opacity-90 transition-opacity no-underline whitespace-nowrap"
            >
              Request A Demo
            </Link>
          </div>
        </div>

        {/* Bottom section - title and links */}
        <div className="flex flex-col items-start md:flex-row">
          <div className="pb-[4vmax] pl-[4vmax] pr-[4vmax] relative">
            <StaggeredText
              as="h1"
              text={title}
              className="text-neutral-900 dark:text-white text-[4vmax] sm:text-[5vmax] leading-tight font-medium"
              segmentBy="words"
              delay={50}
              direction="top"
            />
            <span className="text-neutral-600 dark:text-neutral-400 font-normal text-[0.5em] sm:text-[0.45em] block mt-2">
              {subtitle}
            </span>
          </div>

          {/* Links panel - Hero3 style */}
          <div className="bg-neutral-100 dark:bg-neutral-900 flex-1 w-full md:w-auto rounded-tl-[3vmax] md:rounded-tl-[3vmax] relative font-light text-[max(1rem,1.4vmax)] flex items-end justify-end pt-[4vmax] self-end pl-[4vmax] pr-[4vmax] pb-[4vmax]">
            <ul className="flex flex-col gap-[max(0.7rem,0.8vmax)] opacity-70 hover:opacity-100 transition-opacity duration-300 items-end">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="/contact-us"
                  className="group flex items-center gap-[max(0.6rem,0.8vmax)] pb-[max(0.1rem,0.2vmax)] relative text-neutral-900 dark:text-white no-underline"
                >
                  <span className="relative">
                    Request A Demo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 dark:bg-white group-hover:w-full transition-all duration-300 origin-left" />
                  </span>
                  <ArrowUpRight className="w-[max(1rem,1.4vmax)] h-[max(1rem,1.4vmax)]" />
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/ans-monitoring-integration"
                  className="group flex items-center gap-[max(0.6rem,0.8vmax)] pb-[max(0.1rem,0.2vmax)] relative text-neutral-900 dark:text-white no-underline"
                >
                  <span className="relative">
                    Integration
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 dark:bg-white group-hover:w-full transition-all duration-300 origin-left" />
                  </span>
                  <ArrowUpRight className="w-[max(1rem,1.4vmax)] h-[max(1rem,1.4vmax)]" />
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  href="/products/clinical-monitoring-unit"
                  className="group flex items-center gap-[max(0.6rem,0.8vmax)] pb-[max(0.1rem,0.2vmax)] relative text-neutral-900 dark:text-white no-underline"
                >
                  <span className="relative">
                    Products
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 dark:bg-white group-hover:w-full transition-all duration-300 origin-left" />
                  </span>
                  <ArrowUpRight className="w-[max(1rem,1.4vmax)] h-[max(1rem,1.4vmax)]" />
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
