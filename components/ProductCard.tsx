import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm flex flex-col">
      <div className="relative aspect-square bg-stone-100">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {!product.available && (
          <span className="absolute top-3 left-3 bg-stone-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            Sold Out
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-stone-800 text-base mb-1">
          {product.name}
        </h3>
        <p className="text-rose-500 font-medium mb-2">${product.price}</p>
        <p className="text-stone-500 text-sm flex-1 mb-4">
          {product.shortDescription}
        </p>

        {product.available ? (
          <Link
            href={`/product/${product.id}`}
            className="block text-center bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            View Details
          </Link>
        ) : (
          <span className="block text-center bg-stone-200 text-stone-400 text-sm font-medium px-4 py-2 rounded-full cursor-not-allowed select-none">
            Sold Out
          </span>
        )}
      </div>
    </article>
  );
}
