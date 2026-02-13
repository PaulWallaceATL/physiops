"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { homepageContent } from "@/app/lib/data";

type IntegrationPage = (typeof homepageContent)["integrationPage"];

export default function IntegrationPageSections({
  content,
}: {
  content: IntegrationPage;
}) {
  return (
    <>
      <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            {content.intro}
          </motion.p>
        </div>
      </section>

      <section className="relative z-10 w-full border-y border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
              {content.whyIntegrate.headline}
            </h2>
            <div className="space-y-4">
              {content.whyIntegrate.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
              {content.whoItsFor.headline}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.whoItsFor.items.map((item, i) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{item.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {item.examples}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 w-full border-y border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl">
                {content.solutions.headline}
              </h2>
              <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
                {content.solutions.subheadline}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {content.solutions.productCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="flex h-full flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                        {card.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Button asChild className="w-full sm:w-auto">
                        <Link href="/contact-us">{card.cta}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
              {content.providerFocus.title}
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {content.providerFocus.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 w-full border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              {content.cta}
            </p>
            <Button asChild size="lg">
              <Link href="/contact-us">Request A Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
