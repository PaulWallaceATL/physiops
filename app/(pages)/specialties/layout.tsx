import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Specialties",
  description:
    "P&S monitoring and therapy insights by specialty: Neurology, Pulmonology, Cardiology, Endocrinology, Nephrology, Internal Medicine.",
  openGraph: {
    title: "Specialties | Physio PS",
    description:
      "P&S monitoring and therapy insights for clinical practice across medical specialties.",
    url: `${SITE_URL}/specialties`,
  },
  alternates: { canonical: `${SITE_URL}/specialties` },
};

export default function SpecialtiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
