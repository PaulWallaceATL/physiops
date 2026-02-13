"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { homepageContent } from "@/app/lib/data";

export default function TestimonialsSection() {
  const { testimonials } = homepageContent;

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
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl">
              {testimonials.headline}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.items.map((item, i) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <Card className="flex h-full flex-col">
                  <CardHeader className="flex-1">
                    <blockquote className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {item.author}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {item.credentials}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact-us">{testimonials.cta}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
