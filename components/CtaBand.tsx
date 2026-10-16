import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="bg-black px-5 py-20 text-center text-white md:py-[100px]">
      <p className="text-[26px] leading-snug md:text-[33px]">Spring vandaag nog binnen bij Bakkerij Gijbels!</p>
      <Link href="/winkels" className="mt-6 inline-block rounded-full bg-blue px-8 py-4 font-footer text-base text-white transition hover:bg-white hover:text-blue">
        Ontdek onze winkels
      </Link>
    </section>
  );
}
