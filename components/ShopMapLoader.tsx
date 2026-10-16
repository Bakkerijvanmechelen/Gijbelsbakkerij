"use client";

import dynamic from "next/dynamic";

// Leaflet werkt alleen in de browser.
const ShopMap = dynamic(() => import("./ShopMap"), {
  ssr: false,
  loading: () => <div className="h-[350px] w-full bg-grey" aria-hidden />,
});

export default function ShopMapLoader() {
  return <ShopMap />;
}
