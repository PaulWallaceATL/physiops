"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { homepageContent } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";

export default function ApplicationsSection() {
  const { applications } = homepageContent;

  return (
    <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
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
              text={applications.headline}
              className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl"
              segmentBy="words"
              delay={60}
              direction="top"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {applications.items.map((item, i) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base">{item.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed">
                      {item.examples}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact-us">{applications.cta}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
