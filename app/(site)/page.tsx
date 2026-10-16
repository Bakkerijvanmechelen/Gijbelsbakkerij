import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { tiles } from "@/lib/content";
import { getShopCount } from "@/lib/shops";

export default async function Home() {
  const n = await getShopCount();

  return (
    <>
      {/* Hero */}
      <section className="mx-3 mt-3 md:mx-6">
        <div className="grain relative flex min-h-[78vh] items-end overflow-hidden rounded-[2rem] bg-ink text-white md:rounded-[2.5rem]">
          <Image src="/images/hero-bakker.jpg" alt="Een bakker strooit bloem" fill priority sizes="100vw" className="hero-zoom object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10" />
          <div className="relative w-full px-6 pb-10 pt-32 md:px-14 md:pb-16">
            <p className="fade-up inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-butter backdrop-blur">Bakkerij Gijbels · Antwerpen</p>
            <h1 className="fade-up mt-5 max-w-4xl font-display text-[clamp(3rem,9vw,7.2rem)] leading-[0.95]" style={{ animationDelay: "120ms" }}>
              Echt bakmanschap
            </h1>
            <p className="fade-up mt-5 max-w-xl text-xl text-white/85 md:text-2xl" style={{ animationDelay: "240ms" }}>
              De bakker met het lekkerste assortiment
            </p>
            <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <Link href="/winkels" className="inline-flex items-center gap-2 rounded-full bg-butter px-7 py-4 text-lg font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white">
                Ontdek onze winkels <span aria-hidden>→</span>
              </Link>
              <Link href="/assortiment" className="rounded-full border border-white/40 px-7 py-4 text-lg font-bold backdrop-blur transition hover:bg-white hover:text-ink">
                Bekijk het assortiment
              </Link>
            </div>
            <ul className="fade-up mt-10 flex flex-wrap gap-2 text-sm font-medium" style={{ animationDelay: "480ms" }}>
              {[`${n} vestigingen in de provincie Antwerpen`, "Krokant gebakken in eigen ovens", "Brood, patisserie en vlaaien"].map((t) => (
                <li key={t} className="rounded-full bg-white/12 px-4 py-2 backdrop-blur ring-1 ring-white/20">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Marquee items={tiles.map((t) => t.label)} />
      </div>

      {/* Intro */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-24 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-crust">Over Bakkerij Gijbels</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">Bakkerij Gijbels, de bakker met het lekkerste assortiment!</h2>
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-lg leading-relaxed text-ink/80 md:pt-9">
          <p>
            U moest eens weten hoe goed u Bakkerij Gijbels al kent. Waarschijnlijk genoot u al met volle teugen van onze gebakjes. Of smeerde u de lekkerste boterham met <b className="font-bold text-blue">brood dat krokant gebakken</b> werd in onze ovens. Wie weet werd de taart die u met uw verjaardag zo smakelijk onder uw vrienden verdeelde, bereid door <b className="font-bold text-blue">onze gedreven bakkers</b>.
          </p>
          <p>
            Bakkerij Gijbels is een begrip in de provincie Antwerpen. <b className="font-bold text-blue">Onze broden, taarten, patisserie en gebakjes</b> vinden elke dag weer hun weg naar honderden huiskamers. Waar ze alle gezellige momenten de juiste smaak geven.
          </p>
        </Reveal>
      </section>

      {/* Assortiment */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-tight">Ons assortiment</h2>
          <Link href="/assortiment" className="font-bold text-blue underline underline-offset-4 hover:text-blue-deep">
            Alles ontdekken →
          </Link>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {tiles.map((t, i) => (
            <Reveal as="li" key={t.label} delay={i * 80} className={i === 4 ? "col-span-2 lg:col-span-1" : ""}>
              <Link href={t.href} className="group relative block aspect-[3/4] overflow-hidden rounded-3xl bg-blue-soft shadow-sm ring-1 ring-ink/5">
                <Image src={t.image} alt={t.label} fill sizes="(min-width: 1024px) 220px, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 font-display text-[1.3rem] leading-tight text-white">
                  {t.label}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/90 text-sm text-ink transition group-hover:bg-butter" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Vestigingen */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <Reveal className="grain relative overflow-hidden rounded-[2.5rem] bg-blue-deep p-8 text-white md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr]">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1]">
                <span className="mr-3 inline-block text-[1.7em] leading-none text-butter">{n}</span>
                vestigingen, dezelfde verrukkelijke kwaliteit
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/85">
                <p>
                  Wat startte als een kleine buurtbakkerij in Berchem, groeide uit tot een bakkerij die de standaard zet als het aankomt op <b className="text-white">versheid en smaak</b>.
                </p>
                <p>
                  Voedzame broden, in alle vormen en formaten, bereid met de <b className="text-white">beste ingrediënten</b> die de natuur ons te bieden heeft. <b className="text-white">Verrassende recepturen</b> voor gebak, die van elke hap een waar feest maken. Kortom, onze ambachtslui investeren elke dag opnieuw het beste van zichzelf in elke bereiding die ze tevoorschijn toveren.
                </p>
                <p>
                  Onze <b className="text-white">{n} vestigingen in de provincie Antwerpen</b> bieden u het lekkerste van wat een ambachtelijke bakker te bieden heeft. Om duimen en vingers bij af te likken. Geserveerd met de glimlach, door medewerkers die houden van hun vak.
                </p>
                <p>
                  <b className="text-white">Kom langs en proef het zelf</b>. U vindt een overzicht van al onze bakkerijen op deze website.
                </p>
              </div>
              <Link href="/winkels" className="mt-8 inline-flex items-center gap-2 rounded-full bg-butter px-7 py-4 text-lg font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white">
                Alle winkels bekijken <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/20 md:-rotate-2">
              <Image src="/images/cat-koffiekoeken.jpg" alt="Gijbels koffiekoeken" fill sizes="(min-width: 768px) 35vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
