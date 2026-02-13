"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Play, Heart, Stethoscope, Activity } from "lucide-react";
import { motion } from "motion/react";
import StaggeredText from "@/app/components/StaggeredText";

const GradientBlob = dynamic(
  () => import("@/app/components/gradient-blob").then((m) => m.default),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-4xl" /> }
);

export default function HomeHero() {
  return (
    <section className="relative z-10 w-full flex items-start lg:items-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            {/* Announcement Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 sm:gap-3 rounded-full border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/30 p-1 w-fit hover:border-red-400 dark:hover:border-red-700 transition-colors cursor-pointer"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-600 text-white text-xs sm:text-sm font-medium">
                New
              </span>
              <span className="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 mr-2">
                Testing Has Never Been More Convenient
              </span>
            </motion.div>

            {/* Main Headline */}
            <StaggeredText
              as="h1"
              text="Complete Autonomic Function Testing"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-neutral-900 dark:text-white leading-[1.15]"
              segmentBy="words"
              delay={60}
              direction="top"
            />

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg tracking-tight"
            >
              Physio PS technology is used by physicians and medical providers
              to non-invasively monitor the Autonomic Nervous System using an
              algorithmic measurement of the LFa & RFa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <Link href="/contact-us">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer inline-flex px-6 py-2.5 rounded-full bg-red-600 text-white font-medium text-sm sm:text-base hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors duration-200 w-full sm:w-auto shadow-lg shadow-red-900/20"
                >
                  Get in Touch
                </motion.span>
              </Link>
              <Link href="/contact-us">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer inline-flex pl-5 pr-3 py-2.5 rounded-full border-2 border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 font-medium text-sm sm:text-base hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors duration-200 items-center justify-center gap-2 w-full sm:w-auto group"
                >
                  Request Demo
                  <motion.span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-600 dark:bg-red-500"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-3 h-3 fill-white" />
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4 select-none"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 border-4 border-white dark:border-neutral-950 flex items-center justify-center text-white shadow-md">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 border-4 border-white dark:border-neutral-950 flex items-center justify-center text-white shadow-md">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 border-4 border-white dark:border-neutral-950 flex items-center justify-center text-white shadow-md">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">
                  50+
                </span>
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  autonomic function monitors
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Gradient blob (brand colors) + CTA overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-auto"
          >
            <div className="relative w-full h-[250px] sm:h-[500px] rounded-4xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <GradientBlob
                width="100%"
                height="100%"
                className="!absolute inset-0"
                primaryColor="#dc2626"
                secondaryColor="#b91c1c"
                accentColor="#f87171"
                baseColor="#0a0a0a"
                breathe={true}
                parallax={true}
                metallic={0.35}
                morphIntensity={0.6}
                quality="medium"
                pauseWhenOffscreen={true}
              />
              {/* Corner CTA overlay - pointer-events-auto so link is clickable */}
              <div className="absolute bottom-0 right-0 flex flex-col items-end pointer-events-auto z-10">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white dark:fill-neutral-950"
                >
                  <path d="M0 200C155.996 199.961 200.029 156.308 200 0V200H0Z" />
                </svg>
                <div className="relative">
                  <div className="w-24 h-24 bg-white dark:bg-neutral-950 rounded-tl-4xl pl-4 pt-4">
                    <Link
                      href="/contact-us"
                      className="w-full h-full cursor-pointer border-none flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-[1.2em] transition-colors"
                    >
                      <ArrowRight className="w-6 h-6 text-white -rotate-45" />
                    </Link>
                  </div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 -left-[40px] fill-white dark:fill-neutral-950"
                  >
                    <path d="M0 200C155.996 199.961 200.029 156.308 200 0V200H0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
