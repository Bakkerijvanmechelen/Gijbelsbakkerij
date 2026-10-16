import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { hoursLines, telHref } from "@/lib/shop-types";
import { getShops } from "@/lib/shops";

export const metadata: Metadata = {
  title: "Contact | Gijbels Bakkerij Antwerpen",
  description: "Neem contact op met Bakkerij Gijbels in Antwerpen",
};

export default async function Contact() {
  const main = (await getShops()).find((s) => s.kind === "eigen");

  return (
    <>
      <PageHero eyebrow="Contact" title="Contacteer ons" subtitle="Heeft u vragen? Stuur ons een bericht via onderstaand contactformulier!" />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pt-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="rounded-2xl bg-paper p-7 shadow-sm ring-1 ring-ink/5 md:p-10">
          <h2 className="mb-7 font-display text-blue text-3xl">Stuur ons een bericht</h2>
          <ContactForm />
        </Reveal>
        <Reveal delay={120} className="grid content-start gap-6">
          {main && (
            <address className="rounded-2xl bg-blue-deep p-8 not-italic text-white">
              <p className="font-display text-2xl text-butter">{main.name}</p>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                {main.street}
                <br />
                {main.postal_code} {main.city}
              </p>
              {main.phone && (
                <p className="mt-4">
                  <a href={telHref(main.phone)} className="text-xl font-bold hover:text-butter">
                    {main.phone}
                  </a>
                </p>
              )}
              {hoursLines(main.hours).map((l) => (
                <p key={l} className="mt-2 text-white/75">{l}</p>
              ))}
            </address>
          )}
          <div className="rounded-2xl bg-butter p-8">
            <p className="font-display text-2xl">Liever langskomen?</p>
            <p className="mt-2 text-lg">Bekijk al onze bakkerijen met adres en openingsuren.</p>
            <Link href="/winkels" className="mt-5 inline-block rounded-full bg-blue px-6 py-3 font-bold text-white hover:bg-blue-deep">
              Naar de winkels →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
