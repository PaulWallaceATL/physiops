"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Stethoscope, Heart } from "lucide-react";
import { homepageContent } from "@/app/lib/data";

const PROVIDER_IMAGE =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=774&auto=format&fit=crop";
const PATIENT_IMAGE =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=774&auto=format&fit=crop";

export default function ProviderPatientSection() {
  const { providerFocus, patientFocus, learnMoreCta } = homepageContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      title: providerFocus.title,
      icon: Stethoscope,
      image: PROVIDER_IMAGE,
      description: providerFocus.description,
    },
    {
      title: patientFocus.title,
      icon: Heart,
      image: PATIENT_IMAGE,
      description: patientFocus.description,
    },
  ];

  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [features.length]);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 5000);
    }
  };

  return (
    <section className="relative z-10 w-full py-8 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left Column - Feature list only (no section title) */}
          <div className="flex flex-col lg:pr-12 xl:pr-16">
            {/* Separator */}
            <div className="w-full lg:w-[calc(100%+3rem)] xl:w-[calc(100%+4rem)] h-px bg-neutral-200 dark:bg-neutral-800 mb-8" />

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    onClick={() => handleFeatureClick(index)}
                    className={`w-full text-left flex items-center gap-3 py-3 px-4 rounded-lg transition-[background-color] duration-200 ${
                      isActive
                        ? "bg-neutral-100 dark:bg-neutral-900"
                        : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-200 ${
                        isActive
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-400 dark:text-neutral-600"
                      }`}
                    />
                    <span
                      className={`text-base sm:text-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Learn more CTA */}
            <p className="mt-8">
              <Link
                href="/ans-monitoring-integration"
                className="font-medium text-neutral-700 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                {learnMoreCta}
              </Link>
            </p>
          </div>

          {/* Right Column - Image with Overlay Card */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 max-h-[650px]"
            >
              {/* Background Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={features[activeIndex].image}
                  alt=""
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-30"
                />
              </AnimatePresence>

              {/* Overlay Card */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-2.5 flex items-center justify-center">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeIndex}
                      initial={{ y: "250%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-250%" }}
                      transition={{
                        duration: 1.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="w-full max-w-md absolute mx-auto"
                    >
                      <div className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md rounded-2xl p-1 shadow-lg">
                        <div className="bg-white dark:bg-neutral-950 rounded-xl p-6 max-h-[70vh] overflow-y-auto">
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                            {features[activeIndex].title}
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {features[activeIndex].description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
