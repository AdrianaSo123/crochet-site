import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-rose-50 py-20 sm:py-28 px-6 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-stone-800 mb-4 tracking-tight">
        Cozy Loops
      </h1>
      <p className="text-lg sm:text-xl text-stone-600 max-w-xl mx-auto mb-8">
        Handmade crochet pieces crafted with love — one stitch at a time.
      </p>
      <Link
        href="/shop"
        className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium px-8 py-3 rounded-full transition-colors text-base"
      >
        Shop Now
      </Link>
    </section>
  );
}
