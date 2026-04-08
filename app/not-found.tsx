import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-6 py-24 text-center">
      <p className="text-8xl mb-6">🧶</p>
      <h1 className="text-5xl font-bold text-rose-300 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-stone-800 mb-3">
        Page Not Found
      </h2>
      <p className="text-stone-500 mb-8">
        We could not find what you were looking for. It may have been moved or
        does not exist.
      </p>
      <Link
        href="/shop"
        className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
      >
        Back to Shop
      </Link>
    </div>
  );
}
