"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNavigation } from "@/app/lib/data";
import Logo from "./Logo";

const productsDropdownItems = mainNavigation.productsDropdown.items;
const specialtiesDropdownItems = mainNavigation.specialtiesDropdown.items;

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white px-6 py-4 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Left Side */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="z-50 no-underline flex items-center" aria-label="Physio PS Home">
              <Logo />
            </Link>

            {/* Navigation Items */}
            <div className="hidden items-center gap-1 lg:flex">
              {/* Home */}
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white no-underline"
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("products")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {activeMenu === "products" && (
                    <>
                      <div className="absolute left-0 top-full h-2 w-full" />
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
                      >
                        <div className="p-2">
                          {productsDropdownItems.map((item, index) => (
                            <motion.div key={item.label}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900 no-underline"
                              >
                                <motion.span
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.2,
                                    delay: index * 0.03,
                                  }}
                                >
                                  {item.label}
                                </motion.span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Specialties Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("specialties")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                  Specialties
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {activeMenu === "specialties" && (
                    <>
                      <div className="absolute left-0 top-full h-2 w-full" />
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
                      >
                        <div className="p-2">
                          {specialtiesDropdownItems.map((item, index) => (
                            <motion.div key={item.label}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900 no-underline"
                              >
                                <motion.span
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.2,
                                    delay: index * 0.03,
                                  }}
                                >
                                  {item.label}
                                </motion.span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Integration */}
              <Link
                href="/ans-monitoring-integration"
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white no-underline"
              >
                Integration
              </Link>

              {/* Contact */}
              <Link
                href="/contact-us"
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white no-underline"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Log In - primary action */}
            <Link
              href="/log-in"
              className="hidden rounded-md bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 lg:block no-underline"
            >
              Log In
            </Link>

            {/* Mobile: Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 lg:hidden z-50"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 lg:hidden"
          >
            <div className="h-[73px] border-b border-neutral-200 dark:border-neutral-800" />

            <div className="mx-auto flex h-[calc(100%-73px)] max-w-[1400px] flex-col px-6">
              <div className="flex flex-1 flex-col gap-8 overflow-y-auto py-8 pb-0">
                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-medium text-neutral-900 dark:text-white no-underline"
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Products Accordion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <button
                    onClick={() =>
                      setMobileAccordion(
                        mobileAccordion === "products" ? null : "products"
                      )
                    }
                    className="flex w-full items-center justify-between text-left text-2xl font-medium text-neutral-900 dark:text-white"
                  >
                    Products
                    <ChevronDown
                      className={`h-6 w-6 transition-transform ${mobileAccordion === "products" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === "products" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-4">
                          {productsDropdownItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-md px-4 py-3 text-base text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 no-underline"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Specialties Accordion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <button
                    onClick={() =>
                      setMobileAccordion(
                        mobileAccordion === "specialties"
                          ? null
                          : "specialties"
                      )
                    }
                    className="flex w-full items-center justify-between text-left text-2xl font-medium text-neutral-900 dark:text-white"
                  >
                    Specialties
                    <ChevronDown
                      className={`h-6 w-6 transition-transform ${mobileAccordion === "specialties" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === "specialties" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-4">
                          {specialtiesDropdownItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-md px-4 py-3 text-base text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 no-underline"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Integration */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <Link
                    href="/ans-monitoring-integration"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-medium text-neutral-900 dark:text-white no-underline"
                  >
                    Integration
                  </Link>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link
                    href="/contact-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-medium text-neutral-900 dark:text-white no-underline"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>

              {/* Bottom: Log In */}
              <div className="flex flex-col gap-3 border-t border-neutral-200 py-6 dark:border-neutral-800">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link
                    href="/log-in"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full justify-center rounded-md bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 no-underline"
                  >
                    Log In
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
