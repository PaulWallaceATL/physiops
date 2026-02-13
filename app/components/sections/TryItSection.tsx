"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Mail, BookOpen, MessageCircle, type LucideIcon } from "lucide-react";
import { homepageContent } from "@/app/lib/data";

interface ContactCard {
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
  pillText: string;
  pillBg: string;
  pillTextColor: string;
  linkText: string;
  linkColor: string;
  href: string;
  spanTwoCols?: boolean;
}

export default function TryItSection() {
  const { tryIt } = homepageContent;

  const cards: ContactCard[] = [
    {
      icon: Mail,
      iconColor: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      pillText: "Request a Demo",
      pillBg: "bg-white dark:bg-neutral-950",
      pillTextColor: "text-red-700 dark:text-red-400",
      linkText: "Set up a demo or see Physio PS in action",
      linkColor: "text-red-600 dark:text-red-400",
      href: "/contact-us",
    },
    {
      icon: BookOpen,
      iconColor: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      pillText: "Learn More",
      pillBg: "bg-white dark:bg-neutral-950",
      pillTextColor: "text-red-700 dark:text-red-400",
      linkText: "See how ANS monitoring integrates into your practice",
      linkColor: "text-red-600 dark:text-red-400",
      href: "/ans-monitoring-integration",
    },
    {
      icon: MessageCircle,
      iconColor: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      pillText: "Get in Touch",
      pillBg: "bg-white dark:bg-neutral-950",
      pillTextColor: "text-red-700 dark:text-red-400",
      linkText: tryIt.description,
      linkColor: "text-red-600 dark:text-red-400",
      href: "/contact-us",
      spanTwoCols: true,
    },
  ];

  return (
    <section className="relative z-10 w-full bg-white py-16 dark:bg-neutral-950 sm:py-24 border-y border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-4xl tracking-tight font-medium leading-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:mb-16 lg:text-6xl"
        >
          {tryIt.headline}
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={index}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group flex flex-col justify-between rounded-3xl p-4 transition-shadow duration-300 hover:shadow-lg sm:p-6 ${card.bgColor} ${card.spanTwoCols ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                {/* Top Section - Pill */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${card.pillBg}`}
                  >
                    <Icon className={`h-4 w-4 ${card.iconColor}`} />
                    <span className={`text-sm font-medium ${card.pillTextColor}`}>
                      {card.pillText}
                    </span>
                  </div>
                </div>

                {/* Bottom Section - Link */}
                <div>
                  <p
                    className={`text-lg font-medium transition-all duration-300 group-hover:scale-[1.02] sm:text-xl ${card.linkColor}`}
                  >
                    {card.linkText}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
