import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import type { Product } from "@/types/product";
import productsData from "@/data/products.json";

const products = productsData as Product[];

export const metadata: Metadata = {
  title: "Shop — Cozy Loops",
  description: "Browse all handmade crochet products.",
};

export default function ShopPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Shop</h1>
      <p className="text-stone-500 mb-10">
        All products, handmade with care.
      </p>
      <ProductGrid products={products} />
    </div>
  );
}
