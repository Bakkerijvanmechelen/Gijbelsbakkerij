import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Watermark from "@/components/Watermark";

export const metadata: Metadata = {
  title: "De geschiedenis van Bakkerij Gijbels (Antwerpen)",
  description: "Bakkerij Gijbels, uw bakker in Antwerpen, heeft een rijke geschiedenis. Jarenlange verfijning van het ambacht, dat is genieten voor ú. Lees meer!",
};

export default function Geschiedenis() {
  return (
    <>
      <PageHero image={{ src: "/images/hero-bakker.jpg" }} title="Een rijke geschiedenis" subtitle="Een rijkelijk assortiment en een passie voor het ambacht!" />
      <section className="relative overflow-hidden">
        <Watermark className="w-[620px]" />
        <div className="relative mx-auto max-w-[980px] px-5 py-14 text-lg leading-relaxed md:px-0 md:py-[100px]">
          <p>
            Voor Bakkerij Gijbels begon het allemaal met een passie voor het ambacht. Vanuit onze gezellige bakkerij in de <b>Driekoningenstraat in Antwerpen</b>, bouwden we al snel <b>een sterke naam op</b> met ons verse gebak, onze krokante broden en overheerlijke patisserie. Mensen stonden elke week weer in de rij om hun favoriete koffiekoek, broodsoort of taart te bemachtigen. Het <b>succes van onze recepten</b> was groot. En de vriendelijke aanpak van onze medewerkers werd gesmaakt door onze klanten.
          </p>
          <p className="mt-8 font-bold">Volgende stap: groeien én verfijnen</p>
          <p className="mt-1">
            Al snel werd de bakkerij in Berchem te klein om aan de vraag van onze klanten te voldoen. Daarom weken we uit naar een groter gebouw in Wommelgem – zonder onze eerste vestiging uit het oog te verliezen.
          </p>
          <p className="mt-3">
            Stap voor stap werkten we <b>samenwerkingen uit met lokale bakkerijen</b>, die geworteld waren in hun regio. Zij namen de producten van Bakkerij Gijbels op in hun assortiment en bewaarden toch hun <b>unieke eigenheid</b>, die zo bekend was in de streek.
          </p>
          <p className="mt-8 font-bold">Een familie met smaak</p>
          <p className="mt-1">
            Inmiddels is Bakkerij Gijbels uitgegroeid tot een vaste waarde in de streek rond Antwerpen. Met 10 vestigingen <b>die elk hun eigen karakter</b> hebben, brengen we onze overheerlijke broden, smakelijk gebak en onovertroffen taarten tot bij onze klant. Samen vormen we een hechte familie die smaak weer op het menu zet.
          </p>
          <p className="mt-8">
            Wilt u zelf proeven van onze unieke service en producten? <b>Kom dan snel eens langs</b> in één van onze 10 bakkerijen!
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
