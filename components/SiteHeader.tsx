"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative z-40 bg-white">
      <div className="mx-auto flex h-20 max-w-[980px] items-center justify-between px-5 md:h-[120px] md:px-0">
        <Link href="/" onClick={close} aria-label="Bakkerij Gijbels, naar home">
          <Image src="/images/logo.jpg" alt="Gijbels" width={200} height={70} priority className="h-[56px] w-auto md:h-[70px]" />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden md:block">
          <ul className="flex gap-10 text-base font-bold uppercase text-olive">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={path === n.href ? "page" : undefined} className={`transition hover:text-blue ${path === n.href ? "text-blue" : ""}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          className="grid size-11 place-items-center rounded border border-olive/30 text-olive md:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav id="mobiel-menu" aria-label="Menu" hidden={!open} className="border-t border-grey md:hidden">
        <ul className="px-5 py-2">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} onClick={close} className={`block py-3 text-lg font-bold uppercase ${path === n.href ? "text-blue" : "text-olive"}`}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
