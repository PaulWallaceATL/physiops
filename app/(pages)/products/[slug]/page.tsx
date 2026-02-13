import { notFound } from "next/navigation";
import HeroSection from "@/app/components/HeroSection";
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

      <div className="relative z-10 mx-auto max-w-3xl bg-white px-6 py-12 dark:bg-neutral-950">
        <section className="mb-12">
          <h2>Features</h2>
          <ul>
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Benefits</h2>
          <ul>
            {product.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
