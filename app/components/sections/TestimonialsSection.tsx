"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { homepageContent } from "@/app/lib/data";

const PLACEHOLDER_AVATARS = [
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=75&w=96&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=75&w=96&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=75&w=96&auto=format&fit=crop",
];

export default function TestimonialsSection() {
  const { testimonials } = homepageContent;
  const items = testimonials.items;

  const mainTestimonial = {
    quote: items[0].quote,
    name: items[0].author,
    title: items[0].credentials,
    avatar: PLACEHOLDER_AVATARS[0],
  };

  // Second row: 3 cards — use items[1], items[2], and items[0] again so we have 3
  const rowTestimonials = [
    { ...items[1], avatar: PLACEHOLDER_AVATARS[1] },
    { ...items[2], avatar: PLACEHOLDER_AVATARS[2] },
    { ...items[0], avatar: PLACEHOLDER_AVATARS[0] },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden py-12">
      {/* Aurora Dream Soft Harmony Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 60% 20%, rgba(220, 38, 38, 0.4), transparent 65%),
            radial-gradient(ellipse 70% 60% at 20% 80%, rgba(185, 28, 28, 0.35), transparent 65%),
            radial-gradient(ellipse 60% 50% at 60% 65%, rgba(127, 29, 29, 0.3), transparent 62%),
            radial-gradient(ellipse 65% 40% at 50% 60%, rgba(0, 0, 0, 0.25), transparent 68%),
            linear-gradient(180deg, rgba(220, 38, 38, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)
          `,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center text-2xl font-normal text-white sm:text-3xl lg:mb-16 lg:text-4xl"
        >
          {testimonials.headline}
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {/* Main Testimonial - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-3xl border border-white/30 bg-neutral-300/30 p-6 backdrop-blur-md sm:p-8 lg:col-span-3 lg:p-12"
          >
            <blockquote className="mb-6 text-sm leading-relaxed text-white/90 sm:text-base lg:mb-8 lg:text-center lg:text-4xl lg:font-medium lg:text-white lg:leading-relaxed">
              &ldquo;{mainTestimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3 lg:justify-center lg:gap-4">
              <Image
                src={mainTestimonial.avatar}
                alt={mainTestimonial.name}
                width={48}
                height={48}
                sizes="(max-width: 1024px) 40px, 48px"
                className="h-10 w-10 rounded-full border-2 border-white/30 object-cover lg:h-12 lg:w-12"
              />
              <div>
                <div className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                  {mainTestimonial.name}
                </div>
                <div className="text-sm uppercase tracking-tight text-white/80">
                  {mainTestimonial.title}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Three Column Testimonials */}
          {rowTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.author}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-white/30 bg-neutral-300/30 p-6 backdrop-blur-md sm:p-8"
            >
              <blockquote className="mb-6 text-sm leading-relaxed text-white/90 sm:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  sizes="40px"
                  className="h-10 w-10 rounded-full border-2 border-white/30 object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-xs uppercase tracking-tight text-white/80">
                    {testimonial.credentials}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Button asChild variant="outline" size="lg" className="border-red-400/80 bg-red-600/20 text-white hover:bg-red-600/40 hover:border-red-300 hover:text-white">
            <Link href="/contact-us">{testimonials.cta}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
