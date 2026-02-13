"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import PageHero from "@/app/components/PageHero";
import { products } from "@/app/lib/data";

const ParallaxCards = dynamic(
  () => import("@/app/components/parallax-cards").then((m) => m.default),
  { ssr: false, loading: () => <div className="min-h-[70vh] flex items-center justify-center bg-neutral-100 dark:bg-neutral-900" /> }
);

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80";

export default function ProductsPage() {
  const router = useRouter();
  const images = products.map((p) => p.image ?? DEFAULT_IMAGE);

  const handleCardClick = (index: number) => {
    const product = products[index];
    if (product) router.push(`/products/${product.slug}`);
  };

  return (
    <div>
      <PageHero
        title="Products"
        subtitle="Physio PS autonomic function monitoring solutions for clinical and remote care."
      />
      <section className="relative z-10 w-full min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <ParallaxCards
          images={images}
          enableDepthFog={true}
          fogIntensity={1.2}
          enableMagneticAttraction={true}
          magneticStrength={50}
          onCardClick={handleCardClick}
          className="w-full min-h-[70vh] sm:min-h-[80vh]"
        />
      </section>
    </div>
  );
}
