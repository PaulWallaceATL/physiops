"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_PX = 60;

export default function ScrollRevealContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const check = () => {
      if (window.scrollY > SCROLL_THRESHOLD_PX) setRevealed(true);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div
      className={cn(
        "transition-opacity duration-700 ease-out",
        revealed ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
      aria-hidden={!revealed}
    >
      {children}
    </div>
  );
}
