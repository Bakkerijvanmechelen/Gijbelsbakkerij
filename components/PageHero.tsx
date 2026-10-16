import Image from "next/image";
import Reveal from "./Reveal";

/** Titelblok bovenaan elke subpagina, optioneel met een ronde foto ernaast. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: { src: string; alt: string; position?: string };
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-6 pt-14 md:pt-20">
      <div className={`grid items-center gap-10 ${image ? "md:grid-cols-[1.2fr_1fr]" : ""}`}>
        <div>
          <p className="fade-up inline-block rounded-full bg-blue-soft px-4 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-blue">{eyebrow}</p>
          <h1 className="fade-up mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02]" style={{ animationDelay: "100ms" }}>
            {title}
          </h1>
          <p className="fade-up mt-6 max-w-xl text-xl leading-relaxed text-ink/75" style={{ animationDelay: "200ms" }}>
            {subtitle}
          </p>
        </div>
        {image && (
          <Reveal className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-blue-soft shadow-xl shadow-ink/10 md:rotate-1">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" style={{ objectPosition: image.position ?? "center" }} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
