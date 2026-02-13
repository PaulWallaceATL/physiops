"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";

export default function Footer() {
  const { footer } = homepageContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
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
        {/* Two Column Layout with Borders */}
        <div className="border-y border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-12"
            >
              {/* Left Column - Navigation Links */}
              <div className="space-y-8">
                <div>
                  <h4 className="mb-4 text-sm font-medium tracking-tight text-neutral-900 dark:text-white sm:mb-6 sm:text-base">
                    Navigation
                  </h4>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-base">
                    {footer.navigation.column1.map((link) => (
                      <li key={`col1-${link.label}`}>
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-neutral-900 dark:hover:text-white"
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
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-base">
                    {footer.navigation.column2.map((link) => (
                      <li key={`col2-${link.label}`}>
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Contact */}
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
                  <li className="max-w-sm">
                    <span>{footer.contact.address}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: CTA, Copyright, Legal */}
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="py-8 space-y-6">
            <div>
              <Link
                href="/contact-us"
                className="text-sm font-medium tracking-tight text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-400 sm:text-base"
              >
                {footer.cta}
              </Link>
            </div>
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
