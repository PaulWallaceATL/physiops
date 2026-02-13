"use client";

import GradientText from "@/app/components/GradientText";
import { homepageContent } from "@/app/lib/data";

export default function IntroSection() {
  const { intro } = homepageContent;

  return (
    <section className="relative z-10 w-full bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl w-full">
        <GradientText
          className="!max-w-full w-full"
          innerClassName=""
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          animationSpeed={10}
          direction="horizontal"
          yoyo
          block
        >
          <span className="block w-full text-center text-xl font-semibold leading-snug tracking-tight sm:text-2xl md:text-3xl lg:text-4xl lg:leading-relaxed">
            {intro.paragraph}
          </span>
        </GradientText>
      </div>
    </section>
  );
}
