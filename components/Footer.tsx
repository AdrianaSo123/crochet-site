import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
        <p>© {new Date().getFullYear()} Cozy Loops. All handmade with love.</p>
        <div className="flex gap-5">
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
    </footer>
  );
}
