"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { homepageContent } from "@/app/lib/data";

const trailImages = [
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=300&fit=crop&q=75",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=300&fit=crop&q=75",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=300&fit=crop&q=75",
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=200&h=300&fit=crop&q=75",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&h=300&fit=crop&q=75",
  "https://images.unsplash.com/photo-1579154204850-9b4594c9a3b0?w=200&h=300&fit=crop&q=75",
];

export default function ConvenienceSection() {
  const { convenience } = homepageContent;
  const trailerRef = useRef<HTMLDivElement>(null);
  const currentImageIndex = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastImageTime = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const movementThreshold = 100;
    const delayBetween = 70;

    const createImageTrail = (e: MouseEvent) => {
      if (!trailerRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < movementThreshold) return;

      const now = Date.now();
      if (
        lastImageTime.current !== 0 &&
        now - lastImageTime.current < delayBetween
      )
        return;

      const img = document.createElement("img");
      img.src = trailImages[currentImageIndex.current];
      img.alt = "";
      img.className = "absolute pointer-events-none rounded-sm object-cover";
      img.style.width = "150px";
      img.style.height = "225px";
      img.style.left = `${relativeX - 75}px`;
      img.style.top = `${relativeY - 112.5}px`;

      trailerRef.current.appendChild(img);

      currentImageIndex.current =
        (currentImageIndex.current + 1) % trailImages.length;

      gsap.fromTo(
        img,
        {
          opacity: 1,
          scale: 0,
          rotation: gsap.utils.random(-20, 20),
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(2)",
        },
      );

      gsap.to(img, {
        opacity: 1,
        scale: 0,
        duration: 0.6,
        delay: 0.6,
        ease: "power2.in",
        onComplete: () => img.remove(),
      });

      lastMousePos.current = { x: e.clientX, y: e.clientY };
      lastImageTime.current = now;
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", createImageTrail);
      return () => section.removeEventListener("mousemove", createImageTrail);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full min-h-screen bg-white dark:bg-neutral-950 overflow-hidden"
    >
      <div
        ref={trailerRef}
        className="absolute inset-0 pointer-events-none z-[9999]"
      />

      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-neutral-900 dark:text-white text-center mb-8 sm:mb-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {convenience.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/ans-monitoring-integration"
            className="inline-block px-8 sm:px-10 py-4 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-base sm:text-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            {convenience.ctaLink}
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto flex items-center justify-center gap-4 sm:gap-6 bg-white dark:bg-neutral-950 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <span className="text-base sm:text-lg font-medium text-neutral-900 dark:text-white">
          Physio PS
        </span>
        <Link
          href="/ans-monitoring-integration"
          className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
        >
          {convenience.ctaLink}
        </Link>
      </motion.div>
    </section>
  );
}
