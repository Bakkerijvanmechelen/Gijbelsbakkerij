import Image from "next/image";
import type { Shop } from "@/lib/site";

export default function ShopCard({ shop }: { shop: Shop }) {
  return (
    <article>
      {shop.logo && (
        <div className="flex h-[89px] items-end">
          <Image src={shop.logo.src} alt={shop.name} width={shop.logo.w} height={shop.logo.h} className="max-h-[89px] w-auto max-w-full object-contain object-left-bottom" />
        </div>
      )}
      <h3 className="mt-6 text-xl font-bold text-blue">{shop.name}</h3>
      <p className="mt-2 text-lg leading-relaxed">
        {shop.street}
        <br />
        {shop.city}
      </p>
      {shop.note && <p className="mt-3 text-lg">{shop.note}</p>}
      {(shop.phone || shop.fax) && (
        <p className="mt-3 text-lg">
          {shop.phone && (
            <>
              T: <a href={`tel:${shop.phone.replace(/\s/g, "")}`} className="hover:text-blue">{shop.phone}</a>
              <br />
            </>
          )}
          {shop.fax && <>F: {shop.fax}</>}
        </p>
      )}
      {shop.website && (
        <p className="mt-3 text-lg">
          <a href={`http://${shop.website}`} target="_blank" rel="noopener noreferrer" className="text-blue underline">
            {shop.website}
          </a>
        </p>
      )}
      <p className="mt-4 text-lg leading-relaxed">
        {shop.hours.map((h) => (
          <span key={h} className="block">
            {h}
          </span>
        ))}
      </p>
    </article>
  );
}
