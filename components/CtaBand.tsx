import Image from "next/image";
import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="relative mt-24 overflow-hidden bg-ink text-flour">
      <Image src="/images/galerij-2.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">Spring vandaag nog binnen bij Bakkerij Gijbels!</h2>
        <Link href="/winkels" className="mt-8 inline-block rounded-full bg-butter px-7 py-3 font-bold text-ink transition hover:bg-white">
          Ontdek onze winkels
        </Link>
      </div>
    </section>
  );
}
