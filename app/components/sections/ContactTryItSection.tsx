"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Logo from "@/app/components/Logo";
import { homepageContent } from "@/app/lib/data";

export default function ContactTryItSection() {
  const [agreed, setAgreed] = useState(false);
  const { tryIt, footer } = homepageContent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to API or email
  };

  return (
    <section className="relative z-10 w-full bg-white py-16 dark:bg-neutral-950 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Company Info */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-4 text-2xl font-normal text-neutral-900 dark:text-white sm:text-3xl"
              >
                {tryIt.headline}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md"
              >
                {tryIt.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-24 space-y-8 lg:mt-0"
            >
              <div className="flex items-center gap-3">
                <Logo iconOnly />
              </div>

              <div className="space-y-4">
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  <p className="font-medium text-neutral-900 dark:text-white">
                    Physio PS, Inc.
                  </p>
                  <p>{footer.contact.address}</p>
                </div>

                <div className="space-y-1 text-sm">
                  <a
                    href={`tel:${footer.contact.phone.replace(/\D/g, "")}`}
                    className="block text-neutral-600 transition-colors hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400"
                  >
                    {footer.contact.phone}
                  </a>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="block text-neutral-600 transition-colors hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400"
                  >
                    {footer.contact.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-12 text-5xl font-normal text-neutral-900 dark:text-white sm:text-6xl lg:mb-16 lg:text-7xl"
            >
              Contact us
            </motion.h1>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full border-b border-neutral-300 bg-transparent pb-3 text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-red-600 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:border-red-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full border-b border-neutral-300 bg-transparent pb-3 text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-red-600 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-neutral-300 bg-transparent pb-3 text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-red-600 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:border-red-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company / Practice"
                  className="w-full border-b border-neutral-300 bg-transparent pb-3 text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-red-600 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:border-red-500"
                />
              </div>

              <div>
                <textarea
                  placeholder="Type your message..."
                  rows={3}
                  className="w-full resize-none border-b border-neutral-300 bg-transparent pb-3 text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-red-600 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:border-red-500"
                />
              </div>

              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => setAgreed(!agreed)}
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    agreed
                      ? "border-red-600 bg-red-600 dark:border-red-500 dark:bg-red-500"
                      : "border-neutral-400 bg-transparent dark:border-neutral-600"
                  }`}
                >
                  {agreed && (
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
                <label className="text-sm text-neutral-600 dark:text-neutral-400">
                  I have read and understood the{" "}
                  <a
                    href="#"
                    className="underline transition-colors hover:text-red-600 dark:hover:text-red-400"
                  >
                    privacy statement
                  </a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-xl bg-red-600 px-12 py-4 text-base font-medium text-white transition-all hover:bg-red-700 hover:scale-[1.02] dark:bg-red-500 dark:hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
