"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/geschiedenis", label: "Geschiedenis" },
  { href: "/assortiment", label: "Assortiment" },
  { href: "/diensten", label: "Diensten" },
  { href: "/winkels", label: "Winkels" },
];

export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const link = (href: string) =>
    `rounded-full px-4 py-2 font-medium transition ${path === href ? "bg-blue text-white" : "text-ink hover:bg-blue-soft hover:text-blue"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Link href="/" onClick={close} aria-label="Bakkerij Gijbels, naar home" className="shrink-0">
          <Image src="/images/logo.jpg" alt="Gijbels" width={200} height={70} priority className="h-11 w-auto rounded-md" />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className={link(n.href)}>
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={path === "/contact" ? "page" : undefined}
            className={`ml-2 rounded-full px-5 py-2.5 font-bold transition ${path === "/contact" ? "bg-blue-deep text-white" : "bg-blue text-white hover:bg-blue-deep"}`}
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          className="grid size-11 place-items-center rounded-full border border-ink/15 bg-paper md:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      <nav id="mobiel-menu" aria-label="Menu" hidden={!open} className="border-t border-ink/5 bg-cream md:hidden">
        <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-3">
          {[...nav, { href: "/contact", label: "Contact" }].map((n) => (
            <li key={n.href}>
              <Link href={n.href} onClick={close} className={`block rounded-2xl px-4 py-3 text-lg font-medium ${path === n.href ? "bg-blue text-white" : "hover:bg-blue-soft"}`}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
