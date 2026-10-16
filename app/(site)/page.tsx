import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Watermark from "@/components/Watermark";
import { tiles } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[520px] items-center justify-center overflow-hidden bg-black text-center text-white md:h-[640px]">
        <Image src="/images/hero-bakker.jpg" alt="" fill priority sizes="100vw" className="object-cover object-top opacity-45" />
        <div className="relative px-5">
          <h1 className="font-display text-[44px] leading-tight md:text-[63px]">Echt bakmanschap</h1>
          <p className="mt-4 text-xl md:text-[23px]">De bakker met het lekkerste assortiment</p>
          <Link href="/winkels" className="mt-8 inline-block rounded-full bg-blue px-8 py-4 font-footer text-base text-white transition hover:bg-white hover:text-blue">
            Ontdek onze winkels
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-blue text-white">
        <div className="mx-auto max-w-[980px] px-5 py-16 md:px-0 md:pb-[140px] md:pt-[70px]">
          <h2 className="font-display text-[30px] leading-snug">Bakkerij Gijbels, de bakker met het lekkerste assortiment!</h2>
          <p className="mt-6 text-lg leading-relaxed">
            U moest eens weten hoe goed u Bakkerij Gijbels al kent. Waarschijnlijk genoot u al met volle teugen van onze gebakjes. Of smeerde u de lekkerste boterham met <b>brood dat krokant gebakken</b> werd in onze ovens. Wie weet werd de taart die u met uw verjaardag zo smakelijk onder uw vrienden verdeelde, bereid door <b>onze gedreven bakkers</b>.
          </p>
          <p className="mt-8 text-lg leading-relaxed">
            Bakkerij Gijbels is een begrip in de provincie Antwerpen. <b>Onze broden, taarten, patisserie en gebakjes</b> vinden elke dag weer hun weg naar honderden huiskamers. Waar ze alle gezellige momenten de juiste smaak geven.
          </p>
        </div>
      </section>

      {/* Categorieën */}
      <section className="bg-light py-9">
        <ul className="mx-auto grid max-w-[1190px] gap-[30px] px-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <li key={t.label} className="relative aspect-[275/500] overflow-hidden bg-grey">
              <Image src={t.image} alt={t.label} fill sizes="(min-width: 1024px) 275px, 50vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-[15px] flex h-[40%] items-center bg-olive/40 px-6">
                <h2 className="font-display text-[28px] uppercase leading-tight text-white">{t.label}</h2>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Vestigingen */}
      <section className="relative overflow-hidden">
        <Watermark />
        <div className="relative mx-auto grid max-w-[980px] gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:px-0 md:py-[100px]">
          <div>
            <h2 className="font-display text-[30px] leading-snug text-olive">10 vestigingen, dezelfde verrukkelijke kwaliteit</h2>
            <p className="mt-6 text-lg leading-relaxed">
              Wat startte als een kleine buurtbakkerij in Berchem, groeide uit tot een bakkerij die de standaard zet als het aankomt op <b>versheid en smaak</b>.
            </p>
            <p className="mt-3 text-lg leading-relaxed">
              Voedzame broden, in alle vormen en formaten, bereid met de <b>beste ingrediënten</b> die de natuur ons te bieden heeft. <b>Verrassende recepturen</b> voor gebak, die van elke hap een waar feest maken. Kortom, onze ambachtslui investeren elke dag opnieuw het beste van zichzelf in elke bereiding die ze tevoorschijn toveren.
            </p>
            <p className="mt-8 text-lg leading-relaxed">
              Onze <b>10 vestigingen in de provincie Antwerpen</b> bieden u het lekkerste van wat een ambachtelijke bakker te bieden heeft. Om duimen en vingers bij af te likken. Geserveerd met de glimlach, door medewerkers die houden van hun vak.
            </p>
            <p className="mt-3 text-lg leading-relaxed">
              <b>Kom langs en proef het zelf</b>. U vindt een overzicht van al onze bakkerijen op deze website.
            </p>
          </div>
          <div className="relative aspect-[399/266] w-full self-start md:mt-0">
            <Image src="/images/koffiekoeken.jpg" alt="Gijbels koffiekoeken" fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
