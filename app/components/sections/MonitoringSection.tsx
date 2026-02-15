"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import { Hand } from "lucide-react";
import { homepageContent } from "@/app/lib/data";
import CenterFlow, { type NodeItem } from "@/app/components/CenterFlow";
import StaggeredText from "@/app/components/StaggeredText";

export default function MonitoringSection() {
  const { monitoring } = homepageContent;

  const nodeItems: NodeItem[] = useMemo(
    () =>
      monitoring.conditionsList.map((label) => ({
        content: (
          <span className="whitespace-nowrap text-xs sm:text-sm font-medium text-white">
            {label}
          </span>
        ),
      })),
    [monitoring.conditionsList],
  );

  return (
    <section className="relative z-10 w-full overflow-visible bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <StaggeredText
            as="h2"
            text={monitoring.title}
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
            segmentBy="words"
            delay={60}
            direction="top"
          />
          <p className="text-lg text-white/90">
            {monitoring.subtitle}
          </p>
          <div className="flex flex-col items-center gap-8 overflow-visible pt-10 pb-6 sm:gap-2 sm:py-12">
            <p className="flex items-center gap-1.5 text-sm text-white/80">
              <Hand className="h-4 w-4 shrink-0" aria-hidden />
              <span>Drag</span>
            </p>
            <div className="w-full h-[380px] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[70vh] 2xl:h-[75vh] min-h-[380px] rounded-2xl">
              <CenterFlow
                nodeItems={nodeItems}
                centerContent="PS"
                centerSize={80}
                nodeSize={44}
                variableNodeWidth
                nodeDistance={0.9}
                pulseDuration={4}
                pulseInterval={8}
                lineColor="#ffffff"
                lineColorLight="#ffffff"
                nodeBgColor="#dc2626"
                centerBgColorOverride="#dc2626"
                className="h-full min-h-[380px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
