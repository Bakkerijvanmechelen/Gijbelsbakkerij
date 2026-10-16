import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { tiles } from "@/lib/content";
import { getShopCount } from "@/lib/shops";

const cards = [
  { title: "Brood", image: "/images/cat-brood.jpg", href: "/assortiment#broden", text: "Krokant gebakken in onze speciale broodovens, in alle vormen en formaten: van meergranen en luchtig wit tot rozijnen- en suikerbrood." },
  { title: "Pistolets & koffiekoeken", image: "/images/cat-koffiekoeken.jpg", href: "/assortiment#klassiek", text: "De klassiekers van uw bakker, gemaakt volgens uitvoerig verfijnde recepten en met grondstoffen van de hoogste kwaliteit." },
  { title: "Patisserie", image: "/images/cat-patisserie.jpg", href: "/assortiment#patisserie", text: "Kies uw favoriet in onze koeltoog. Verjaardags- en bruidstaarten bereiden en versieren we tot in de puntjes." },
  { title: "Vlaaien", image: "/images/cat-vlaaien.jpg", href: "/assortiment#patisserie", text: "Onze royaal gevulde fruitvlaaien worden door onze klanten het meest gesmaakt. Het hele jaar door vers." },
];

export default async function Home() {
  const n = await getShopCount();

  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-ink text-flour">
        <Image src="/images/hero-bakker.jpg" alt="Een bakker strooit bloem" fill priority sizes="100vw" className="hero-zoom object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-24">
          <p className="fade-up text-sm font-bold uppercase tracking-[0.25em] text-butter">Ambachtelijke bakkerij in Antwerpen</p>
          <h1 className="fade-up mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl" style={{ animationDelay: "120ms" }}>
            Echt bakmanschap
          </h1>
          <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-flour/90" style={{ animationDelay: "240ms" }}>
            De bakker met het lekkerste assortiment. Brood dat krokant gebakken wordt in onze eigen ovens, patisserie en vlaaien, in {n} vestigingen vlakbij u.
          </p>
          <Link href="/winkels" className="fade-up mt-8 inline-block rounded-full bg-butter px-7 py-3 font-bold text-ink transition hover:bg-white" style={{ animationDelay: "360ms" }}>
            Ontdek onze winkels
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Ons assortiment</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/80">U kent het wel: de typische geur van uw lokale bakker. Er gaat niets boven versgebakken brood, gebak, taarten en patisserie.</p>
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal as="li" key={c.title} delay={(i % 2) * 120} className="overflow-hidden rounded-2xl bg-white shadow-md shadow-ink/10">
              <div className="relative aspect-[4/3]">
                <Image src={c.image} alt={c.title} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-ink/80">{c.text}</p>
                <Link href={c.href} className="mt-4 inline-block text-sm font-bold uppercase tracking-wider text-crust underline underline-offset-4 hover:text-blue">
                  Ontdek meer
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-ink text-flour">
        <Image src="/images/galerij-4.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">{n} vestigingen, dezelfde verrukkelijke kwaliteit</h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Versheid", "Wat startte als een kleine buurtbakkerij in Berchem, groeide uit tot een bakkerij die de standaard zet als het aankomt op versheid en smaak."],
              ["Ingrediënten", "Voedzame broden bereid met de beste ingrediënten die de natuur ons te bieden heeft, en verrassende recepturen voor gebak die van elke hap een feest maken."],
              ["Met de glimlach", `Onze ${n} vestigingen in de provincie Antwerpen serveren het lekkerste van een ambachtelijke bakker, door medewerkers die houden van hun vak.`],
            ].map(([t, p], i) => (
              <Reveal as="li" key={t} delay={i * 100} className="rounded-xl border border-flour/15 bg-ink/60 p-6 backdrop-blur">
                <h3 className="font-display text-xl text-butter">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-flour/85">{p}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-flour/90">Kom langs en proef het zelf. Een overzicht van al onze bakkerijen vindt u bij de winkels.</p>
          <Link href="/winkels" className="mt-6 inline-block rounded-full bg-butter px-7 py-3 font-bold text-ink transition hover:bg-white">
            Alle winkels bekijken
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md shadow-ink/10">
          <Image src={tiles[0].image.replace("cat-brood", "assortiment-broden")} alt="Gijbels brood" fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-4xl md:text-5xl">De bakker met het lekkerste assortiment</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
            <p>
              U moest eens weten hoe goed u Bakkerij Gijbels al kent. Waarschijnlijk genoot u al met volle teugen van onze gebakjes, of smeerde u de lekkerste boterham met brood dat krokant gebakken werd in onze ovens.
            </p>
            <p>Wie weet werd de taart die u met uw verjaardag zo smakelijk onder uw vrienden verdeelde, bereid door onze gedreven bakkers.</p>
          </div>
          <div className="mt-8 rounded-xl bg-blue-soft p-6 text-sm leading-relaxed text-blue-deep">
            <p className="font-display text-xl">Een begrip in de provincie Antwerpen</p>
            <p className="mt-2">Onze broden, taarten, patisserie en gebakjes vinden elke dag weer hun weg naar honderden huiskamers, waar ze alle gezellige momenten de juiste smaak geven.</p>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
