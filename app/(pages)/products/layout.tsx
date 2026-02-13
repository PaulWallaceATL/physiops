import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Physio PS autonomic function monitoring products: Clinical Monitoring Unit, Remote Monitoring Unit, and Portable Autonomic Lab.",
  openGraph: {
    title: "Products | Physio PS",
    description:
      "Explore Physio PS autonomic function monitoring products for clinical and remote care.",
    url: `${SITE_URL}/products`,
  },
  alternates: { canonical: `${SITE_URL}/products` },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
