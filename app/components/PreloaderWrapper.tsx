"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

const PRELOADER_DURATION_MS = 3200;

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), PRELOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Preloader
      loading={loading}
      variant="stairs"
      position="fixed"
      duration={PRELOADER_DURATION_MS}
      loadingText="Physio PS"
      loadingTextLine2="Complete Autonomic Function Testing"
      zIndex={100}
      textClassName="!text-red-500"
      showProgressBar={true}
    >
      {children}
    </Preloader>
  );
}
