/**
 * Site-wide config for SEO and metadata.
 * Set NEXT_PUBLIC_SITE_URL in production for canonical/OG URLs.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://physiops.com";

export const DEFAULT_TITLE = "Physio PS – Physiotherapy Products & Specialties";
export const DEFAULT_DESCRIPTION =
  "Physio PS offers physiotherapy products and specialties to support recovery and wellness. Complete autonomic function testing for physicians and medical providers.";

export const DEFAULT_KEYWORDS = [
  "physiotherapy",
  "autonomic function testing",
  "ANS monitoring",
  "P&S monitoring",
  "physio PS",
  "clinical monitoring",
  "remote monitoring",
  "medical devices",
];
