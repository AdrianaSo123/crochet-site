import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { Product } from "@/types/product";
import productsData from "@/data/products.json";

const products = productsData as Product[];

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found — Cozy Loops" };
  return {
    title: `${product.name} — Cozy Loops`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/shop"
        className="text-sm text-rose-500 hover:text-rose-600 transition-colors mb-8 inline-block"
      >
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {!product.available && (
            <span className="absolute top-4 left-4 bg-stone-600 text-white text-sm font-medium px-4 py-1.5 rounded-full">
              Sold Out
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-stone-400 mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-stone-800 mb-3">
            {product.name}
          </h1>
          <p className="text-2xl text-rose-500 font-semibold mb-5">
            ${product.price}
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {product.available ? (
            <Link
              href="/contact"
              className="inline-block text-center bg-rose-500 hover:bg-rose-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
            >
              Contact to Purchase
            </Link>
          ) : (
            <span className="inline-block text-center bg-stone-200 text-stone-500 font-medium px-8 py-3 rounded-full select-none">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
