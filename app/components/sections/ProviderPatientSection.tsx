"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { homepageContent } from "@/app/lib/data";

export default function ProviderPatientSection() {
  const { providerFocus, patientFocus, learnMoreCta } = homepageContent;

  return (
    <section className="relative z-10 w-full border-y border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{providerFocus.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {providerFocus.description}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{patientFocus.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {patientFocus.description}
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center">
            <Link
              href="/ans-monitoring-integration"
              className="font-medium text-neutral-700 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              {learnMoreCta}
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
