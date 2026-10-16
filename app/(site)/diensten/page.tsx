import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Watermark from "@/components/Watermark";

export const metadata: Metadata = {
  title: "Het lekkerste brood, snel geleverd voor bedrijven",
  description: "Bakkerij Gijbels levert het lekkerste brood aan uw bedrijf of voorziening. Zo genieten u én uw klanten van overheerlijke bakkerijproducten. Ontdek meer!",
};

export default function Diensten() {
  return (
    <>
      <PageHero image={{ src: "/images/hero-bakker.jpg" }} title="Diensten voor professionals" subtitle="Stipte levering van brood en gebak aan bedrijven en voorzieningen!" />
      <section className="relative overflow-hidden">
        <Watermark className="w-[620px]" />
        <div className="relative mx-auto max-w-[980px] px-5 py-14 text-lg leading-relaxed md:px-0 md:py-[100px]">
          <p>
            Bent u voor uw buurtwinkel, superette, bedrijf, zorginstelling, rusthuis of organisatie op zoek naar een bakker die de <b>hoogste kwaliteit levert tegen goede prijzen?</b> Neem dan snel contact op met Bakkerij Gijbels om uw vraag te bespreken.
          </p>
          <p className="mt-6">
            Als ervaren én ambachtelijke bakker brengen we de lekkerste broden, patisserie, gebak en andere <b>lekkernijen tot aan uw deur</b>. Onze <b>stipte service</b> verzekert u op elk moment van de week van uitmuntende kwaliteitsproducten, altijd vers bereid in onze ateliers.
          </p>
          <p className="mt-8 font-bold">Volgens de hoogste standaarden</p>
          <p className="mt-1">
            Voor de <b>kwaliteit van uw broden en gebak</b>, nemen we geen enkel risico. We kiezen dan ook voluit voor verse producten, die volgens de hoogste standaarden worden verwerkt, bereid en vervoerd.
          </p>
          <p className="mt-3">
            Om u die zekerheid te garanderen, laten we onze ateliers en werkwijze elk jaar keuren door een externe firma. Dat verzekert u van overheerlijke producten die zonder uitzondering <b>voldoen aan de striktste HACCP-standaarden</b>.
          </p>
          <p className="mt-8">
            Wilt u meer weten over onze service voor bedrijven en professionals?{" "}
            <Link href="/contact" className="text-blue hover:underline">
              Neem contact met ons op!
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
