"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";

export default function ProductBenefitsSection({ product }: { product: Product }) {
  return (
    <section className="relative z-10 w-full border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <StaggeredText
            as="h2"
            text="Benefits"
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl"
            segmentBy="words"
            delay={60}
            direction="top"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {product.benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{benefit}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0" />
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="pt-4">
            <Button asChild size="lg">
              <Link href="/contact-us">Request A Demo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
