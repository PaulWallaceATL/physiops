"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { homepageContent } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";

const RisingLines = dynamic(() => import("@/app/components/RisingLines"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 bg-black"
      style={{
        background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(127,29,29,0.15) 100%)",
      }}
    />
  ),
});

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
    <footer className="relative z-10 w-full overflow-hidden bg-black">
      {/* Rising lines background (same as integration/products/specialties hero) */}
      <div className="absolute inset-0">
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
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        {/* Large Headline */}
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="py-12">
            <StaggeredText
              as="h2"
              text={footer.headline}
              className="text-3xl font-medium tracking-tight leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              segmentBy="words"
              delay={50}
              direction="top"
            />
          </motion.div>
        </div>

        {/* Two Column: Newsletter + Link Columns */}
        <div className="border-y border-white/20">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1.5fr]"
            >
              {/* Left - Newsletter */}
              <div className="border-b border-white/20 py-8 lg:border-b-0 lg:border-r lg:py-8 lg:pr-8">
                <h3 className="mb-6 text-lg font-medium tracking-tight text-white sm:text-xl">
                  {footer.newsletterHeadline}
                </h3>
                <div className="mb-6 flex">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 border border-r-0 border-white/30 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none sm:px-6 sm:py-4 sm:text-base"
                    aria-label="Email address"
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center border border-red-500/80 bg-red-600 px-4 transition-colors hover:bg-red-700 sm:px-6"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </button>
                </div>
                <p className="text-xs text-white/70 sm:text-sm">
                  {footer.newsletterDisclaimer}
                </p>
              </div>

              {/* Right - Navigation + Resources + Contact */}
              <div className="py-8 lg:py-8 lg:pl-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div>
                    <h4 className="mb-4 text-sm font-medium tracking-tight text-white sm:mb-6 sm:text-base">
                      Navigation
                    </h4>
                    <ul className="space-y-3">
                      {footer.navigation.column1.map((link) => (
                        <li key={`col1-${link.label}`}>
                          <Link
                            href={link.href}
                            className="text-sm tracking-tight text-white/80 transition-colors hover:text-red-300 sm:text-base"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-medium tracking-tight text-white sm:mb-6 sm:text-base">
                      Resources
                    </h4>
                    <ul className="space-y-3">
                      {footer.navigation.column2.map((link) => (
                        <li key={`col2-${link.label}`}>
                          <Link
                            href={link.href}
                            className="text-sm tracking-tight text-white/80 transition-colors hover:text-red-300 sm:text-base"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-medium tracking-tight text-white sm:mb-6 sm:text-base">
                      Contact
                    </h4>
                    <ul className="space-y-3 text-sm text-white/80 sm:text-base">
                      <li>
                        <a
                          href={`tel:${footer.contact.phone.replace(/\D/g, "")}`}
                          className="transition-colors hover:text-red-300"
                        >
                          {footer.contact.phone}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${footer.contact.email}`}
                          className="transition-colors hover:text-red-300"
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
                className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl hover:opacity-80 transition-opacity"
              >
                Physio PS
              </Link>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-red-300 transition-colors hover:text-white sm:text-base"
            >
              {footer.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-xs text-white/70 sm:text-sm">
              {footer.copyright}
            </p>
            <p className="text-xs leading-relaxed text-white/70 sm:text-sm max-w-4xl">
              {footer.legal}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
