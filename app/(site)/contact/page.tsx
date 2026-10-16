import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact | Gijbels Bakkerij Antwerpen",
  description: "Neem contact op met Bakkerij Gijbels in Antwerpen",
};

export default function Contact() {
  return (
    <>
      <PageHero title="Contacteer ons" subtitle="Heeft u vragen? Stuur ons een bericht via onderstaand contactformulier!" />
      <section className="bg-white">
        <div className="mx-auto max-w-[932px] px-5 py-12 md:px-0 md:py-[60px]">
          <h2 className="mb-8 font-display text-[30px]">Stuur ons een bericht</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
