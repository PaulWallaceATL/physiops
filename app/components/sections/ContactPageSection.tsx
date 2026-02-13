"use client";

import { motion } from "motion/react";
import ContactForm from "@/app/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homepageContent } from "@/app/lib/data";
import StaggeredText from "@/app/components/StaggeredText";

export default function ContactPageSection() {
  const { tryIt, footer } = homepageContent;

  return (
    <section className="relative z-10 w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <StaggeredText
              as="h2"
              text={tryIt.headline}
              className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl"
              segmentBy="words"
              delay={60}
              direction="top"
            />
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {tryIt.description}
            </p>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                <p>
                  <a
                    href={`tel:${footer.contact.phone.replace(/\D/g, "")}`}
                    className="font-medium text-neutral-900 hover:underline dark:text-white"
                  >
                    {footer.contact.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="font-medium text-neutral-900 hover:underline dark:text-white"
                  >
                    {footer.contact.email}
                  </a>
                </p>
                <p className="leading-relaxed">{footer.contact.address}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
