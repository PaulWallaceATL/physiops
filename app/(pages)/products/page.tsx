"use client";

import PageHero from "@/app/components/PageHero";
import DepthCard from "@/app/components/depth-card";
import { products } from "@/app/lib/data";

export default function ProductsPage() {
  return (
    <div>
      <PageHero
        title="Products"
        subtitle="Physio PS autonomic function monitoring solutions for clinical and remote care."
      />
      <section className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-neutral-100 dark:bg-neutral-900">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
            {products.map((product) => (
              <DepthCard
                key={product.slug}
                title={product.title}
                description={product.benefits[0] ?? product.features[0]}
                buttonText="View product"
                href={`/products/${product.slug}`}
                width={340}
                height={380}
                maxRotation={12}
                maxTranslation={14}
                disableOnMobile={true}
                spotlight={false}
                className="w-full max-w-[340px]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
