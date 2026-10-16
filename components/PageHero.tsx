import Image from "next/image";

/** Donkere foto-banner bovenaan elke subpagina. */
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
    <section className="relative overflow-hidden bg-blue-deep text-flour">
      <Image src={image?.src ?? "/images/hero-bakker.jpg"} alt="" fill priority sizes="100vw" className="hero-zoom object-cover opacity-40 mix-blend-luminosity" style={{ objectPosition: image?.position ?? "center 30%" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/90 via-blue-deep/50 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-40 md:pb-24 md:pt-48">
        <p className="fade-up text-sm font-bold uppercase tracking-[0.25em] text-butter">{eyebrow}</p>
        <h1 className="fade-up mt-4 max-w-3xl font-display text-4xl leading-tight md:text-6xl" style={{ animationDelay: "100ms" }}>
          {title}
        </h1>
        <p className="fade-up mt-5 max-w-2xl text-lg leading-relaxed text-flour/85" style={{ animationDelay: "200ms" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
