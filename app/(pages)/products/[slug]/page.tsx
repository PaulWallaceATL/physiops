import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import ProductFeaturesSection from "@/app/components/sections/ProductFeaturesSection";
import ProductBenefitsSection from "@/app/components/sections/ProductBenefitsSection";
import { products } from "@/app/lib/data";
import { SITE_URL } from "@/app/lib/site";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product)
    return { title: "Product" };
  const title = product.title;
  const description = `Physio PS ${product.title}. ${product.benefits.slice(0, 2).join(" ")} Autonomic function monitoring solutions.`;
  const url = `${SITE_URL}/products/${slug}`;
  return {
    title,
    description,
    openGraph: { title: `${title} | Physio PS`, description, url },
    alternates: { canonical: url },
  };
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
      <PageHero title={product.title} subtitle={subtitle} />
      <ProductFeaturesSection product={product} />
      <ProductBenefitsSection product={product} />
    </div>
  );
}
