import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-stone-800 tracking-wide hover:text-rose-500 transition-colors"
        >
          🧶 Cozy Loops
        </Link>
        <div className="flex gap-6 text-stone-600 text-sm font-medium">
          <Link href="/shop" className="hover:text-rose-500 transition-colors">
            Shop
          </Link>
          <Link href="/about" className="hover:text-rose-500 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-rose-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
