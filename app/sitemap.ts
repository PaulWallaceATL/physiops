import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/site";
import { products, specialties } from "@/app/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/contact-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/integration`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/ans-monitoring-integration`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];
  const productUrls = products.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const specialtyUrls = specialties.map((s) => ({
    url: `${SITE_URL}/specialties/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...base, ...productUrls, ...specialtyUrls];
}
