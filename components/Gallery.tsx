"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Gallery({ images }: { images: string[] }) {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  const arrow = "absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center bg-black/80 text-white hover:bg-blue";

  return (
    <div className="relative">
      <ul ref={track} className="flex snap-x gap-[15px] overflow-x-auto px-2.5 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((src, i) => (
          <li key={src} className="relative size-[224px] shrink-0 snap-start">
            <Image src={src} alt={`Gijbels assortiment ${i + 1}`} fill sizes="224px" className="object-cover" />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => scroll(-1)} aria-label="Vorige foto's" className={`${arrow} left-0`}>◀</button>
      <button type="button" onClick={() => scroll(1)} aria-label="Volgende foto's" className={`${arrow} right-0`}>▶</button>
    </div>
  );
}
