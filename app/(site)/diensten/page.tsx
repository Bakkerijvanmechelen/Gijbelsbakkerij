import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Het lekkerste brood, snel geleverd voor bedrijven",
  description: "Bakkerij Gijbels levert het lekkerste brood aan uw bedrijf of voorziening. Zo genieten u én uw klanten van overheerlijke bakkerijproducten. Ontdek meer!",
};

const b = "font-bold text-blue";
const forWhom = ["Buurtwinkel", "Superette", "Bedrijf", "Zorginstelling", "Rusthuis", "Organisatie"];

export default function Diensten() {
  return (
    <>
      <PageHero eyebrow="Diensten" title="Diensten voor professionals" subtitle="Stipte levering van brood en gebak aan bedrijven en voorzieningen!" image={{ src: "/images/hero-bakker.jpg", alt: "Een bakker aan het werk", position: "center 20%" }} />

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-16">
          <Reveal className="space-y-6 text-xl leading-relaxed text-ink/80">
            <p>
              Bent u voor uw buurtwinkel, superette, bedrijf, zorginstelling, rusthuis of organisatie op zoek naar een bakker die de <b className={b}>hoogste kwaliteit levert tegen goede prijzen?</b> Neem dan snel contact op met Bakkerij Gijbels om uw vraag te bespreken.
            </p>
            <p>
              Als ervaren én ambachtelijke bakker brengen we de lekkerste broden, patisserie, gebak en andere <b className={b}>lekkernijen tot aan uw deur</b>. Onze <b className={b}>stipte service</b> verzekert u op elk moment van de week van uitmuntende kwaliteitsproducten, altijd vers bereid in onze ateliers.
            </p>
          </Reveal>
          <Reveal delay={120} className="self-start rounded-2xl bg-blue-soft p-8">
            <p className="font-display text-2xl text-blue">Voor wie?</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {forWhom.map((w) => (
                <li key={w} className="rounded-full bg-paper px-4 py-2 font-bold shadow-sm">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl bg-paper p-8 shadow-sm ring-1 ring-ink/5 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-crust">Kwaliteit</p>
            <h2 className="mt-3 font-display text-3xl">Volgens de hoogste standaarden</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Voor de <b className={b}>kwaliteit van uw broden en gebak</b>, nemen we geen enkel risico. We kiezen dan ook voluit voor verse producten, die volgens de hoogste standaarden worden verwerkt, bereid en vervoerd.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl bg-paper p-8 shadow-sm ring-1 ring-ink/5 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-crust">Gekeurd</p>
            <h2 className="mt-3 font-display text-3xl">Elk jaar extern gecontroleerd</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Om u die zekerheid te garanderen, laten we onze ateliers en werkwijze elk jaar keuren door een externe firma. Dat verzekert u van overheerlijke producten die zonder uitzondering <b className={b}>voldoen aan de striktste HACCP-standaarden</b>.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-butter p-8 md:p-10">
          <p className="max-w-xl font-display text-2xl leading-snug">Wilt u meer weten over onze service voor bedrijven en professionals?</p>
          <Link href="/contact" className="rounded-full bg-blue px-8 py-4 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-deep">
            Neem contact met ons op! →
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
