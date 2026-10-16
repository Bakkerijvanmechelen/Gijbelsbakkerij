import Image from "next/image";
import Link from "next/link";
import { hoursLines, telHref } from "@/lib/shop-types";
import { getShops } from "@/lib/shops";

export default async function SiteFooter() {
  const shops = await getShops();
  const main = shops.find((s) => s.kind === "eigen");

  return (
    <footer className="mt-24 rounded-t-[2.5rem] bg-blue-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image src="/images/logo.jpg" alt="Gijbels" width={200} height={70} className="h-14 w-auto rounded-lg" />
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/80">
            Bakkerij Gijbels is een begrip in Antwerpen. {shops.length} vestigingen brengen het vakmanschap van uw bakker tot vlakbij uw deur.
          </p>
        </div>

        <nav aria-label="Voettekst">
          <p className="font-display text-xl text-butter">Ontdek</p>
          <ul className="mt-4 grid gap-2 text-white/85">
            {[["/geschiedenis", "Geschiedenis"], ["/assortiment", "Assortiment"], ["/diensten", "Diensten"], ["/winkels", "Winkels"], ["/contact", "Contact"]].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-butter">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {main && (
          <address className="not-italic">
            <p className="font-display text-xl text-butter">{main.name}</p>
            <p className="mt-4 leading-relaxed text-white/85">
              {main.street}
              <br />
              {main.postal_code} {main.city}
            </p>
            {main.phone && (
              <p className="mt-3">
                <a href={telHref(main.phone)} className="font-bold transition hover:text-butter">
                  {main.phone}
                </a>
              </p>
            )}
            {hoursLines(main.hours)[0] && <p className="mt-3 text-white/70">{hoursLines(main.hours)[0]}</p>}
          </address>
        )}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">© 2026 Bakkerij Gijbels</div>
    </footer>
  );
}
