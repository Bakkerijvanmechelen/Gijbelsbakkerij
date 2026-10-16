import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ShopExplorer from "@/components/ShopExplorer";
import { getShops } from "@/lib/shops";

export const metadata: Metadata = {
  title: "Ontdek alle bakkerijen van Bakkerij Gijbels",
  description: "Bekijk alle winkels van Bakkerij Gijbels in de provincie Antwerpen, met adres, openingsuren en route.",
};

export default async function Winkels() {
  const shops = await getShops();
  return (
    <>
      <PageHero eyebrow="Winkels" title="Onze winkels" subtitle="Bakkerij Gijbels: puur genieten, ook bij u in de buurt!" />
      <ShopExplorer shops={shops} />
    </>
  );
}
