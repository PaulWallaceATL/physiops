"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import StaggeredText from "@/app/components/StaggeredText";
import RisingLines from "@/app/components/RisingLines";

type PageHeroProps = {
  title: string;
  subtitle: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative z-10 w-full min-h-screen overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <div className="relative flex min-h-screen flex-col p-[4vmax]">
        {/* Content box: RisingLines only in this container; content on top */}
        <div className="relative flex-1 min-h-[calc(100vh-8vmax)] min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] rounded-[3vmax] overflow-hidden bg-black">
          <RisingLines
            color="#dc2626"
            horizonColor="#dc2626"
            haloColor="#f87171"
            riseSpeed={0.02}
            flowSpeed={0.12}
            riseIntensity={0.7}
            flowIntensity={0.5}
            horizonIntensity={0.8}
            haloIntensity={6}
            brightness={1.0}
          />
          <div className="relative z-10 flex min-h-full flex-col text-white">
            <div className="flex w-full flex-shrink-0 items-center justify-between p-[4vmax]">
              <Link href="/" className="leading-tight font-semibold text-white no-underline shrink-0 hover:opacity-90">
                Physio PS
              </Link>
              <Link
                href="/contact-us"
                className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-red-600 text-white font-medium text-[max(0.9rem,1vmax)] hover:bg-red-700 transition-colors no-underline whitespace-nowrap"
              >
                Request A Demo
              </Link>
            </div>

            <div className="flex flex-1 flex-col items-start md:flex-row">
              <div className="pb-[4vmax] pl-[4vmax] pr-[4vmax] relative">
                <StaggeredText
                  as="h1"
                  text={title}
                  className="text-white text-[4vmax] sm:text-[5vmax] leading-tight font-medium"
                  segmentBy="words"
                  delay={50}
                  direction="top"
                />
                <span className="text-white/90 font-normal text-base sm:text-lg block mt-3 max-w-xl">
                  {subtitle}
                </span>
              </div>

              <div className="flex-1 w-full md:w-auto rounded-tl-[3vmax] md:rounded-tl-[3vmax] relative font-light text-[max(1rem,1.4vmax)] flex items-end justify-end pt-[4vmax] self-end pl-[4vmax] pr-[4vmax] pb-[4vmax]">
                <ul className="flex flex-col gap-[max(0.7rem,0.8vmax)] opacity-80 hover:opacity-100 transition-opacity duration-300 items-end">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link
                      href="/contact-us"
                      className="group flex items-center gap-[max(0.6rem,0.8vmax)] pb-[max(0.1rem,0.2vmax)] relative text-white no-underline"
                    >
                      <span className="relative">
                        Request A Demo
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 origin-left" />
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
                      className="group flex items-center gap-[max(0.6rem,0.8vmax)] pb-[max(0.1rem,0.2vmax)] relative text-white no-underline"
                    >
                      <span className="relative">
                        Integration
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 origin-left" />
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
                      className="group flex items-center gap-[max(0.6rem,0.8vmax)] pb-[max(0.1rem,0.2vmax)] relative text-white no-underline"
                    >
                      <span className="relative">
                        Products
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 origin-left" />
                      </span>
                      <ArrowUpRight className="w-[max(1rem,1.4vmax)] h-[max(1rem,1.4vmax)]" />
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
