import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Het heerlijke assortiment van Bakkerij Gijbels",
  description: "Het assortiment van uw bakker smaakt op elk moment van de dag. Ontdek het aanbod van Bakkerij Gijbels, uw ambachtelijke bakker in Antwerpen. Ontdek meer!",
};

const b = "font-bold text-blue";

function Feature({ id, image, alt, title, flip, children }: { id: string; image: string; alt: string; title: string; flip?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-5 pt-20 md:grid-cols-2 md:gap-16">
      <Reveal className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-blue-soft shadow-md shadow-ink/10 ${flip ? "md:order-2" : "md:-rotate-1"}`}>
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
      </Reveal>
      <Reveal delay={120} className={flip ? "md:order-1" : ""}>
        <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] leading-tight">{title}</h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">{children}</div>
      </Reveal>
    </section>
  );
}

export default function Assortiment() {
  return (
    <>
      <PageHero eyebrow="Assortiment" title="Ontdek het assortiment van Bakkerij Gijbels" subtitle="Geuren en smaken vol pure gezelligheid!" image={{ src: "/images/koffiekoeken.jpg", alt: "Koffiekoeken op een rek" }} />

      <section className="mx-auto max-w-4xl px-5 pt-14">
        <Reveal as="p" className="text-center font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-snug text-ink/85">
          U kent het wel: de typische geur van uw lokale bakker, die u tegemoet waait als u nog maar in de buurt komt. Er gaat dan ook niets boven de geur van versgebakken broden, gebak, taarten en patisserie.
        </Reveal>
      </section>

      <Feature id="broden" image="/images/assortiment-broden.jpg" alt="Gijbels brood" title="Broden die barsten van de smaak">
        <p>
          Bakkerij Gijbels creëert de <b className={b}>meest smaakvolle broden</b>, die krokant gebakken worden in onze speciale broodovens. De versheid spat van elke hap. Waar hebt u vandaag zin in? Dankzij Bakkerij Gijbels hebt u een ruime keuze aan broden, in <b className={b}>alle vormen en formaten</b>.
        </p>
        <p>
          Voedzame <b className={b}>meergranenbroden</b>, luchtig wit brood of speciale bereidingen zoals <b className={b}>rozijnenbrood</b> of <b className={b}>suikerbrood</b> – ze staan allemaal op het menu. Vakkundig samengesteld en bereid door onze ervaren bakkers. Uw dag is pas compleet met een rijkelijk belegde boterham met brood van Bakkerij Gijbels.
        </p>
      </Feature>

      <Feature id="klassiek" image="/images/assortiment-klassiek.jpg" alt="Gijbels taarten en patisserie" title="Zoals alleen uw bakker dat kan" flip>
        <p>
          Natuurlijk geniet u ook van alle <b className={b}>klassieke bakkerijproducten</b>, zoals pistolets, overheerlijke koffiekoeken, drooggebak en vlaaien. Gemaakt volgens uitvoerig verfijnde recepten, met grondstoffen van de hoogste kwaliteit.
        </p>
        <p>
          Bakkerij Gijbels staat bekend om zijn <b className={b}>uitzonderlijk grote aanbod</b>. Zo vindt u bij ons worstenbroden en appelbollen – niet enkel op verloren maandag, maar het hele jaar door. En voor de lekkerbekken hebben we op het juiste moment excellente kerstbuchen, speculaas in Sinterklaasvorm en andere <b className={b}>smakelijke verrassingen klaarliggen</b>.
        </p>
      </Feature>

      <Feature id="patisserie" image="/images/assortiment-patisserie.jpg" alt="Gijbels patisserie" title="Patisserie om lang van te genieten">
        <p>
          Tijd om een speciale gelegenheid te vieren – of gewoon: zin om te genieten? Kies dan uw favoriete <b className={b}>patisserie</b> in onze koeltoog. Vooral onze royaal gevulde fruitvlaaien worden gesmaakt door onze klanten.
        </p>
        <p>
          Wilt u net dat extraatje serveren aan uw gasten op dat belangrijke feest? Weet dan dat onze bakkers alle <b className={b}>verjaardags- of bruidstaarten</b> tot in de puntjes bereiden én versieren, precies zoals u dat graag hebt. <b className={b}>Kom vandaag nog langs in één van onze bakkerijen</b>!
        </p>
      </Feature>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <h2 className="mb-6 font-display text-3xl">Uit onze toonbank</h2>
        <Gallery images={gallery} />
      </section>

      <CtaBand />
    </>
  );
}
