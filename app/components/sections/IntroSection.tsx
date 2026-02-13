"use client";

import dynamic from "next/dynamic";
import GradientText from "@/app/components/GradientText";
import { homepageContent } from "@/app/lib/data";

const StarBurst = dynamic(() => import("@/app/components/StarBurst"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-white dark:bg-neutral-950" />,
});

export default function IntroSection() {
  const { intro } = homepageContent;

  return (
    <section className="relative z-10 w-full bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <StarBurst
          color="#dc2626"
          density={0.45}
          starCount={100}
          opacity={0.35}
          brightness={1}
          flowerIntensity={0.3}
        />
      </div>
      <div className="relative mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full">
        <GradientText
          className="!max-w-full w-full"
          innerClassName=""
          colors={["#dc2626", "#ef4444", "#b91c1c", "#991b1b"]}
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
