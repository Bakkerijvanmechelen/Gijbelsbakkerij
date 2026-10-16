import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5">
      <Reveal className="grain relative overflow-hidden rounded-[2.5rem] bg-butter px-8 py-16 text-center md:py-24">
        <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] text-ink">Spring vandaag nog binnen bij Bakkerij Gijbels!</h2>
        <Link href="/winkels" className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue px-8 py-4 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-deep">
          Ontdek onze winkels <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </section>
  );
}
