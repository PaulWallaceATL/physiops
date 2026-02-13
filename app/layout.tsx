import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreloaderWrapper from "./components/PreloaderWrapper";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Physio PS – Physiotherapy Products & Specialties",
  description:
    "Physio PS offers physiotherapy products and specialties to support recovery and wellness.",
  openGraph: {
    title: "Physio PS – Physiotherapy Products & Specialties",
    description:
      "Physio PS offers physiotherapy products and specialties to support recovery and wellness.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Physio PS – Physiotherapy Products & Specialties",
    description:
      "Physio PS offers physiotherapy products and specialties to support recovery and wellness.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden min-w-0`}
      >
        <CustomCursor circleColor="#dc2626" dotColor="#dc2626" />
        <PreloaderWrapper>
          <Navbar />
          <div className="pt-[73px]">{children}</div>
          <Footer />
        </PreloaderWrapper>
      </body>
    </html>
  );
}
