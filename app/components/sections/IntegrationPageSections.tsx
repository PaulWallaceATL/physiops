"use client";

import Link from "next/link";
import { motion } from "motion/react";
import StaggeredText from "@/app/components/StaggeredText";
import GradientText from "@/app/components/GradientText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Stethoscope,
  Building2,
  Briefcase,
  Home,
  Medal,
  Activity,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import TryItSection from "@/app/components/sections/TryItSection";
import type { homepageContent } from "@/app/lib/data";

type IntegrationPage = (typeof homepageContent)["integrationPage"];

const APPLICATION_ICONS: LucideIcon[] = [
  Stethoscope,
  Building2,
  Briefcase,
  Home,
  Medal,
  Activity,
  Trophy,
];

export default function IntegrationPageSections({
  content,
}: {
  content: IntegrationPage;
}) {
  return (
    <>
      <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <GradientText
            className="!max-w-full w-full mb-6"
            colors={["#dc2626", "#ef4444", "#b91c1c"]}
            animationSpeed={10}
            direction="horizontal"
            yoyo
            block
          >
            <span className="block w-full text-center text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl text-neutral-900 dark:text-white">
              {content.intro}
            </span>
          </GradientText>
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
            <StaggeredText
              as="h2"
              text={content.whyIntegrate.headline}
              className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl"
              segmentBy="words"
              delay={60}
              direction="top"
            />
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
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            <StaggeredText
              as="h2"
              text={content.whoItsFor.headline}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 dark:text-white mb-10"
              segmentBy="words"
              delay={60}
              direction="top"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12">
              {content.whoItsFor.items.map((item, index) => {
                const Icon = APPLICATION_ICONS[index % APPLICATION_ICONS.length];
                return (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group flex flex-col cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg shrink-0 transition-all duration-200 group-hover:border-red-600/60 dark:group-hover:border-red-500/50 group-hover:shadow-md group-hover:shadow-red-950/10">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-900 dark:text-white transition-colors duration-200 group-hover:text-red-600 dark:group-hover:text-red-400" />
                      </div>
                      <h3 className="text-base tracking-tight font-light text-neutral-900 dark:text-white transition-colors duration-200 group-hover:text-red-800 dark:group-hover:text-red-300">
                        {item.category}
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.examples}
                    </p>
                  </motion.div>
                );
              })}
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
              <StaggeredText
                as="h2"
                text={content.solutions.headline}
                className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl"
                segmentBy="words"
                delay={60}
                direction="top"
              />
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
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group"
                >
                  <Card className="flex h-full flex-col transition-all duration-200 border-neutral-200 dark:border-neutral-800 group-hover:border-red-200 dark:group-hover:border-red-900/50">
                    <CardHeader>
                      <CardTitle className="text-xl transition-colors duration-200 group-hover:text-red-800 dark:group-hover:text-red-300">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                        {card.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400 dark:bg-red-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Button asChild className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg shadow-red-900/20">
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
            <StaggeredText
              as="h2"
              text={content.providerFocus.title}
              className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl"
              segmentBy="words"
              delay={60}
              direction="top"
            />
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
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg shadow-red-900/20">
              <Link href="/contact-us">Request A Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <TryItSection />
    </>
  );
}
