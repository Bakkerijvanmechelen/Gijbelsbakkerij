import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getShopCount } from "@/lib/shops";

export const metadata: Metadata = {
  title: "De geschiedenis van Bakkerij Gijbels (Antwerpen)",
  description: "Bakkerij Gijbels, uw bakker in Antwerpen, heeft een rijke geschiedenis. Jarenlange verfijning van het ambacht, dat is genieten voor ú. Lees meer!",
};

const b = "font-bold text-blue";

export default async function Geschiedenis() {
  const n = await getShopCount();
  const steps = [
    {
      nr: "01",
      title: "Een passie voor het ambacht",
      body: (
        <p>
          Voor Bakkerij Gijbels begon het allemaal met een passie voor het ambacht. Vanuit onze gezellige bakkerij in de <b className={b}>Driekoningenstraat in Antwerpen</b>, bouwden we al snel <b className={b}>een sterke naam op</b> met ons verse gebak, onze krokante broden en overheerlijke patisserie. Mensen stonden elke week weer in de rij om hun favoriete koffiekoek, broodsoort of taart te bemachtigen. Het <b className={b}>succes van onze recepten</b> was groot. En de vriendelijke aanpak van onze medewerkers werd gesmaakt door onze klanten.
        </p>
      ),
    },
    {
      nr: "02",
      title: "Volgende stap: groeien én verfijnen",
      body: (
        <>
          <p>Al snel werd de bakkerij in Berchem te klein om aan de vraag van onze klanten te voldoen. Daarom weken we uit naar een groter gebouw in Wommelgem – zonder onze eerste vestiging uit het oog te verliezen.</p>
          <p>
            Stap voor stap werkten we <b className={b}>samenwerkingen uit met lokale bakkerijen</b>, die geworteld waren in hun regio. Zij namen de producten van Bakkerij Gijbels op in hun assortiment en bewaarden toch hun <b className={b}>unieke eigenheid</b>, die zo bekend was in de streek.
          </p>
        </>
      ),
    },
    {
      nr: "03",
      title: "Een familie met smaak",
      body: (
        <p>
          Inmiddels is Bakkerij Gijbels uitgegroeid tot een vaste waarde in de streek rond Antwerpen. Met {n} vestigingen <b className={b}>die elk hun eigen karakter</b> hebben, brengen we onze overheerlijke broden, smakelijk gebak en onovertroffen taarten tot bij onze klant. Samen vormen we een hechte familie die smaak weer op het menu zet.
        </p>
      ),
    },
  ];

  return (
    <>
      <PageHero eyebrow="Geschiedenis" title="Een rijke geschiedenis" subtitle="Een rijkelijk assortiment en een passie voor het ambacht!" image={{ src: "/images/hero-bakker.jpg", alt: "Een bakker strooit bloem", position: "center 30%" }} />

      <section className="mx-auto max-w-4xl px-5 pt-16">
        <ol className="relative grid gap-8 before:absolute before:bottom-6 before:left-[1.7rem] before:top-6 before:hidden before:w-px before:bg-ink/15 md:before:block">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.nr} delay={i * 100} className="relative grid gap-5 rounded-[2rem] bg-paper p-7 shadow-sm ring-1 ring-ink/5 md:grid-cols-[3.5rem_1fr] md:gap-8 md:p-10">
              <span className="relative z-10 grid size-14 place-items-center rounded-full bg-blue font-display text-xl text-white">{s.nr}</span>
              <div>
                <h2 className="font-display text-2xl leading-tight md:text-3xl">{s.title}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink/80">{s.body}</div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-8 rounded-[2rem] bg-butter p-8 text-center md:p-10">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            Wilt u zelf proeven van onze unieke service en producten? <span className="text-blue">Kom dan snel eens langs</span> in één van onze {n} bakkerijen!
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
