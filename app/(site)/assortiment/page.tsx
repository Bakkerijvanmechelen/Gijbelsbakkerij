import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import Watermark from "@/components/Watermark";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Het heerlijke assortiment van Bakkerij Gijbels",
  description: "Het assortiment van uw bakker smaakt op elk moment van de dag. Ontdek het aanbod van Bakkerij Gijbels, uw ambachtelijke bakker in Antwerpen. Ontdek meer!",
};

function Block({ image, alt, title, children, flip }: { image: string; alt: string; title: string; children: React.ReactNode; flip?: boolean }) {
  return (
    <div className="mx-auto grid max-w-[980px] items-start gap-8 px-5 md:grid-cols-[278px_1fr] md:gap-[30px] md:px-0">
      <div className={`relative aspect-[278/206] w-full ${flip ? "" : ""}`}>
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 278px, 100vw" className="object-cover" />
      </div>
      <div className="text-lg leading-relaxed">
        <h2 className="font-display text-[30px] leading-tight text-olive">{title}</h2>
        <div className="mt-5 grid gap-3">{children}</div>
      </div>
    </div>
  );
}

export default function Assortiment() {
  return (
    <>
      <PageHero image={{ src: "/images/koffiekoeken.jpg", position: "center" }} title="Ontdek het assortiment van Bakkerij Gijbels" subtitle="Geuren en smaken vol pure gezelligheid!" />

      <section className="bg-grey py-14 md:py-[70px]">
        <p className="mx-auto max-w-[980px] px-5 text-lg leading-relaxed md:px-0">
          U kent het wel: de typische geur van uw lokale bakker, die u tegemoet waait als u nog maar in de buurt komt. Er gaat dan ook niets boven de geur van versgebakken broden, gebak, taarten en patisserie.
        </p>
        <div className="mt-12">
          <Block image="/images/assortiment-broden.jpg" alt="Gijbels brood" title="Broden die barsten van de smaak">
            <p>
              Bakkerij Gijbels creëert de <b>meest smaakvolle broden</b>, die krokant gebakken worden in onze speciale broodovens. De versheid spat van elke hap. Waar hebt u vandaag zin in? Dankzij Bakkerij Gijbels hebt u een ruime keuze aan broden, in <b>alle vormen en formaten</b>.
            </p>
            <p>
              Voedzame <b>meergranenbroden</b>, luchtig wit brood of speciale bereidingen zoals <b>rozijnenbrood</b> of <b>suikerbrood</b> – ze staan allemaal op het menu. Vakkundig samengesteld en bereid door onze ervaren bakkers. Uw dag is pas compleet met een rijkelijk belegde boterham met brood van Bakkerij Gijbels.
            </p>
          </Block>
        </div>
      </section>

      <section className="bg-white py-14 md:py-[100px]">
        <Block image="/images/assortiment-klassiek.jpg" alt="Gijbels taarten en patisserie" title="Zoals alleen uw bakker dat kan">
          <p>
            Natuurlijk geniet u ook van alle <b>klassieke bakkerijproducten</b>, zoals pistolets, overheerlijke koffiekoeken, drooggebak en vlaaien. Gemaakt volgens uitvoerig verfijnde recepten, met grondstoffen van de hoogste kwaliteit.
          </p>
          <p>
            Bakkerij Gijbels staat bekend om zijn <b>uitzonderlijk grote aanbod</b>. Zo vindt u bij ons worstenbroden en appelbollen – niet enkel op verloren maandag, maar het hele jaar door. En voor de lekkerbekken hebben we op het juiste moment excellente kerstbuchen, speculaas in Sinterklaasvorm en andere <b>smakelijke verrassingen klaarliggen</b>.
          </p>
        </Block>
      </section>

      <section className="relative overflow-hidden bg-white pb-6">
        <Watermark className="w-[600px]" />
        <div className="relative py-10 md:py-[60px]">
          <Block image="/images/assortiment-patisserie.jpg" alt="Gijbels patisserie" title="Patisserie om lang van te genieten">
            <p>
              Tijd om een speciale gelegenheid te vieren – of gewoon: zin om te genieten? Kies dan uw favoriete <b>patisserie</b> in onze koeltoog. Vooral onze royaal gevulde fruitvlaaien worden gesmaakt door onze klanten.
            </p>
            <p>
              Wilt u net dat extraatje serveren aan uw gasten op dat belangrijke feest? Weet dan dat onze bakkers alle <b>verjaardags- of bruidstaarten</b> tot in de puntjes bereiden én versieren, precies zoals u dat graag hebt. <b>Kom vandaag nog langs in één van onze bakkerijen</b>!
            </p>
          </Block>
        </div>
        <div className="relative">
          <Gallery images={gallery} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
