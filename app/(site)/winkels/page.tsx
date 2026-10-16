import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ShopCard from "@/components/ShopCard";
import ShopMapLoader from "@/components/ShopMapLoader";
import { groupShops, ownShops } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ontdek alle bakkerijen van Bakkerij Gijbels",
  description: "Bekijk alle winkels van Bakkerij Gijbels in de provincie Antwerpen, met adres, openingsuren en route.",
};

export default function Winkels() {
  return (
    <>
      <PageHero title="Onze winkels" subtitle="Bakkerij Gijbels: puur genieten, ook bij u in de buurt!" />
      <ShopMapLoader />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[980px] gap-12 px-5 py-14 md:grid-cols-3 md:gap-8 md:px-0 md:py-[80px]">
          {ownShops.map((s) => (
            <ShopCard key={s.name} shop={s} />
          ))}
        </div>
      </section>

      <section className="bg-grey">
        <div className="mx-auto max-w-[980px] px-5 py-14 md:px-0 md:py-[70px]">
          <h2 className="text-center font-display text-[30px] text-olive">Andere bakkerijen in de groep Gijbels</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
            {groupShops.map((s) => (
              <ShopCard key={s.street} shop={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
