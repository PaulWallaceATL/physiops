"use client";

import Link from "next/link";
import { ArrowRight, Play, Heart, Stethoscope, Activity } from "lucide-react";
import { motion } from "motion/react";
import StaggeredText from "@/app/components/StaggeredText";

export default function HomeHero() {
  return (
    <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 bg-white dark:bg-neutral-950">
      {/* Rounded hero card with gradient (shader-like) */}
      <div className="relative w-full max-w-[1400px] min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden">
        {/* Gradient background - soft red glow, dark edges */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 70% at 50% 40%, rgba(220, 38, 38, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse 100% 100% at 50% 50%, rgba(127, 29, 29, 0.12) 0%, transparent 50%),
              linear-gradient(180deg, rgba(0,0,0,0.03) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.04) 100%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-neutral-100/95 dark:bg-neutral-950/95" />
        <div
          className="absolute inset-0 opacity-90 dark:opacity-95"
          style={{
            background: `
              radial-gradient(ellipse 90% 80% at 60% 30%, rgba(220, 38, 38, 0.08) 0%, transparent 45%),
              radial-gradient(ellipse 70% 60% at 30% 70%, rgba(185, 28, 28, 0.06) 0%, transparent 40%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)]">
          {/* Left column */}
          <div className="flex flex-col justify-between pt-6 sm:pt-8 lg:pt-10 pb-8 lg:pb-10">
            {/* Top row: tag left, CTA right */}
            <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col"
              >
                <span className="text-xs sm:text-sm font-medium text-red-600 dark:text-red-400 tracking-wide">
                  Physio PS
                </span>
                <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-0.5">
                  Testing Has Never Been More Convenient
                </span>
              </motion.div>
              <Link
                href="/contact-us"
                className="shrink-0 rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Main headline + body */}
            <div className="flex flex-col space-y-5 sm:space-y-6">
              <StaggeredText
                as="h1"
                text="Complete Autonomic Function Testing"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-medium text-neutral-900 dark:text-white leading-[1.12]"
                segmentBy="words"
                delay={60}
                direction="top"
              />
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg"
              >
                Physio PS technology is used by physicians and medical providers
                to non-invasively monitor the Autonomic Nervous System using an
                algorithmic measurement of the LFa & RFa.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
              >
                <Link href="/contact-us">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer inline-flex px-6 py-2.5 rounded-full bg-red-600 text-white font-medium text-sm sm:text-base hover:bg-red-700 shadow-lg shadow-red-900/20"
                  >
                    Request Demo
                  </motion.span>
                </Link>
                <Link href="/contact-us">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer inline-flex pl-5 pr-3 py-2.5 rounded-full border-2 border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 font-medium text-sm sm:text-base hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors items-center justify-center gap-2 group"
                  >
                    Get in Touch
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

              {/* Mobile: small icon block */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex lg:hidden mt-6"
              >
                <div className="rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 p-6 inline-flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-red-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex items-center gap-3 sm:gap-4 pt-2 select-none"
              >
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 border-2 border-white dark:border-neutral-950 flex items-center justify-center text-white">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 border-2 border-white dark:border-neutral-950 flex items-center justify-center text-white">
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 border-2 border-white dark:border-neutral-950 flex items-center justify-center text-white">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">
                    50+
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    autonomic function monitors
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right column - visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative hidden lg:flex items-center justify-center p-8 xl:p-12"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-center shadow-xl">
              <svg
                className="w-2/3 max-w-[240px] h-auto text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#heroIconGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <defs>
                  <linearGradient id="heroIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b91c1c" />
                    <stop offset="50%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#7f1d1d" />
                  </linearGradient>
                </defs>
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <Link
                href="/contact-us"
                className="absolute bottom-6 right-6 w-14 h-14 rounded-2xl bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors shadow-lg"
                aria-label="Get in Touch"
              >
                <ArrowRight className="w-6 h-6 text-white -rotate-45" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
