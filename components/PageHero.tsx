import Image from "next/image";

/** De blauwe titelbalk bovenaan elke subpagina, optioneel met een fotostrook erboven. */
export default function PageHero({ title, subtitle, image }: { title: string; subtitle: string; image?: { src: string; position?: string } }) {
  return (
    <>
      {image && (
        <div className="relative h-24 bg-black md:h-40">
          <Image src={image.src} alt="" fill priority sizes="100vw" className="object-cover opacity-60" style={{ objectPosition: image.position ?? "center top" }} />
        </div>
      )}
      <section className="bg-blue text-white">
        <div className="mx-auto max-w-[980px] px-5 py-10 md:px-0 md:py-[60px]">
          <h1 className="font-display text-[30px] leading-tight">{title}</h1>
          <p className="mt-2 text-lg">{subtitle}</p>
        </div>
      </section>
    </>
  );
}
