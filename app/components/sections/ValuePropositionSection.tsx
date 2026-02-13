"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Terminal, Zap, Server } from "lucide-react";
import { homepageContent } from "@/app/lib/data";

export default function ValuePropositionSection() {
  const { valueProposition } = homepageContent;

  return (
    <section className="relative z-10 w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black border-y border-neutral-800">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center">
          {/* Icon Cards */}
          <div className="flex items-center justify-center mb-4 relative sm:h-40">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -top-24">
              <div className="relative w-[260px] h-[260px] sm:w-[310px] sm:h-[310px]">
                <svg
                  width="586"
                  height="586"
                  viewBox="0 0 586 586"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-30"
                >
                  <motion.circle
                    cx="293"
                    cy="293"
                    r="290.5"
                    className="stroke-white"
                    strokeOpacity="0.5"
                    strokeWidth="5"
                    strokeDasharray="25 25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 360,
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.1 },
                      scale: { duration: 0.6, delay: 0.1 },
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.circle
                    cx="293"
                    cy="293"
                    r="236.5"
                    className="stroke-white"
                    strokeOpacity="0.8"
                    strokeWidth="5"
                    strokeDasharray="25 25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: -360,
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.2 },
                      scale: { duration: 0.6, delay: 0.2 },
                      rotate: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.circle
                    cx="293"
                    cy="293"
                    r="182.5"
                    className="stroke-white"
                    strokeWidth="5"
                    strokeDasharray="25 25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 360,
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.3 },
                      scale: { duration: 0.6, delay: 0.3 },
                      rotate: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/50 via-60% to-black pointer-events-none" />
              </div>
            </div>

            <motion.div
              className="relative right-[-220px] sm:right-[-250px] top-4 w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center z-0"
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Terminal
                strokeWidth={1}
                className="w-12 h-12 text-white"
              />
            </motion.div>

            <motion.div
              className="relative z-10 w-40 h-40 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Zap
                strokeWidth={1}
                className="w-16 h-16 text-white"
              />
            </motion.div>

            <motion.div
              className="relative right-[220px] sm:right-[250px] top-4 w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center z-0"
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Server
                strokeWidth={1}
                className="w-12 h-12 text-white"
              />
            </motion.div>
          </div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.15] mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Advanced nervous system monitoring
          </motion.h2>

          <motion.div
            className="text-base text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>{valueProposition.paragraph}</p>
            <p>{valueProposition.supportingParagraph}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 rounded-full bg-red-600 text-white font-medium text-base sm:text-lg hover:bg-red-700 duration-200 hover:scale-105 transition-transform cursor-pointer"
            >
              <Zap className="w-5 h-5" />
              Request A Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
