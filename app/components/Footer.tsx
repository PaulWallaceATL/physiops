"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { homepageContent } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";

export default function Footer() {
  const { footer } = homepageContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative z-10 w-full bg-white dark:bg-neutral-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Large Headline */}
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="py-12">
            <StaggeredText
              as="h2"
              text={footer.headline}
              className="text-3xl font-medium tracking-tight leading-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              segmentBy="words"
              delay={50}
              direction="top"
            />
          </motion.div>
        </div>

        {/* Two Column: Newsletter + Link Columns */}
        <div className="border-y border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1.5fr]"
            >
              {/* Left - Newsletter */}
              <div className="border-b border-neutral-200 py-8 dark:border-neutral-800 lg:border-b-0 lg:border-r lg:py-8 lg:pr-8">
                <h3 className="mb-6 text-lg font-medium tracking-tight text-neutral-900 dark:text-white sm:text-xl">
                  {footer.newsletterHeadline}
                </h3>
                <div className="mb-6 flex">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 border border-r-0 border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:border-neutral-600 sm:px-6 sm:py-4 sm:text-base"
                    aria-label="Email address"
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center border border-neutral-300 bg-neutral-100 px-4 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:px-6"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-5 w-5 text-neutral-900 dark:text-white sm:h-6 sm:w-6" />
                  </button>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
                  {footer.newsletterDisclaimer}
                </p>
              </div>

              {/* Right - Navigation + Resources + Contact */}
              <div className="py-8 lg:py-8 lg:pl-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div>
                    <h4 className="mb-4 text-sm font-medium tracking-tight text-neutral-900 dark:text-white sm:mb-6 sm:text-base">
                      Navigation
                    </h4>
                    <ul className="space-y-3">
                      {footer.navigation.column1.map((link) => (
                        <li key={`col1-${link.label}`}>
                          <Link
                            href={link.href}
                            className="text-sm tracking-tight text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:text-base"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-medium tracking-tight text-neutral-900 dark:text-white sm:mb-6 sm:text-base">
                      Resources
                    </h4>
                    <ul className="space-y-3">
                      {footer.navigation.column2.map((link) => (
                        <li key={`col2-${link.label}`}>
                          <Link
                            href={link.href}
                            className="text-sm tracking-tight text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:text-base"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-medium tracking-tight text-neutral-900 dark:text-white sm:mb-6 sm:text-base">
                      Contact
                    </h4>
                    <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
                      <li>
                        <a
                          href={`tel:${footer.contact.phone.replace(/\D/g, "")}`}
                          className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                        >
                          {footer.contact.phone}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${footer.contact.email}`}
                          className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                        >
                          {footer.contact.email}
                        </a>
                      </li>
                      <li className="max-w-xs">{footer.contact.address}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom: Large Logo, CTA, Copyright, Legal */}
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="py-8 space-y-6">
            <div>
              <Link
                href="/"
                className="text-5xl font-bold text-neutral-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl hover:opacity-80 transition-opacity"
              >
                Physio PS
              </Link>
            </div>
            <Link
              href="/contact-us"
              className="inline-block text-sm font-medium tracking-tight text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-400 sm:text-base"
            >
              {footer.cta}
            </Link>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
              {footer.copyright}
            </p>
            <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-sm max-w-4xl">
              {footer.legal}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
