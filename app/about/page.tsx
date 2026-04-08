import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Cozy Loops",
  description: "The story behind Cozy Loops and the maker behind the hook.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-8">About Me</h1>

      <div className="space-y-5 text-stone-600 leading-relaxed">
        <p>
          Hi! My name is Adriana, and I am the maker behind Cozy Loops. I
          started crocheting during a quiet winter a few years ago and
          immediately fell in love with how something as simple as a hook and
          some yarn can become something warm, useful, and beautiful.
        </p>
        <p>
          Every item in my shop is made entirely by hand — no machines, no mass
          production. I take my time with each piece, choosing soft, quality
          yarns and putting real care into every stitch. That means no two items
          are exactly alike, and each one carries a little piece of the time and
          love I put into making it.
        </p>
        <p>
          I specialize in cozy home goods, accessories, and gifts — things that
          feel as good as they look. Whether it is a chunky throw blanket for
          your couch, a tiny amigurumi for a little one, or a market bag for
          your weekly grocery run, everything is made to be used and loved.
        </p>
        <p>
          If you have a custom request or just want to say hello, I would love
          to hear from you. Head over to the{" "}
          <Link
            href="/contact"
            className="text-rose-500 underline underline-offset-4 hover:text-rose-600"
          >
            contact page
          </Link>{" "}
          and let us chat!
        </p>
      </div>
    </div>
  );
}
