import { notFound } from "next/navigation";
import HeroSection from "@/app/components/HeroSection";
import ProductFeaturesSection from "@/app/components/sections/ProductFeaturesSection";
import ProductBenefitsSection from "@/app/components/sections/ProductBenefitsSection";
import { products } from "@/app/lib/data";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const subtitle = "Physio PS autonomic function monitoring solutions.";

  return (
    <div>
      <HeroSection title={product.title} subtitle={subtitle} />
      <ProductFeaturesSection product={product} />
      <ProductBenefitsSection product={product} />
    </div>
  );
}
