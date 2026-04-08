import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";
import type { Product } from "@/types/product";
import productsData from "@/data/products.json";

const products = productsData as Product[];

function getFeaturedProducts(all: Product[]): Product[] {
  const available = all.filter((p) => p.available);
  const featured = available.filter((p) => p.featured);
  if (featured.length >= 3) return featured.slice(0, 6);
  const rest = available.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, 6);
}

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(products);

  return (
    <>
      <HeroSection />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-stone-800 mb-8">
          Featured Products
        </h2>
        <ProductGrid products={featuredProducts} />
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-block border border-rose-400 text-rose-500 hover:bg-rose-50 font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>

      <section className="bg-rose-50 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Made with Love
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Every piece is handmade from start to finish — no machines, no mass
            production. Each item carries a little bit of the time and care put
            into making it.
          </p>
          <Link
            href="/about"
            className="inline-block text-rose-500 hover:text-rose-600 font-medium underline underline-offset-4 transition-colors"
          >
            Read my story →
          </Link>
        </div>
      </section>
    </>
  );
}
