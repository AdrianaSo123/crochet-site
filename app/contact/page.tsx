import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Cozy Loops",
  description: "Get in touch to purchase a product or make a custom request.",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Get in Touch</h1>
      <p className="text-stone-500 mb-10">
        Interested in a product, have a custom request, or just want to say
        hello? Fill out the form below and I will get back to you soon.
      </p>

      <ContactForm />

      <div className="mt-10 pt-8 border-t border-stone-200 flex flex-col gap-2 text-sm text-stone-500">
        <p>
          Prefer email?{" "}
          <a
            href="mailto:hello@cozyloops.com"
            className="text-rose-500 hover:text-rose-600 underline underline-offset-2"
          >
            hello@cozyloops.com
          </a>
        </p>
        <p>
          Follow along on{" "}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-500 hover:text-rose-600 underline underline-offset-2"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
