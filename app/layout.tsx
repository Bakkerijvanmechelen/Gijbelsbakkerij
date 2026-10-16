import type { Metadata } from "next";
import { Arimo, Montserrat, Stoke } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["400", "700"] });
const stoke = Stoke({ variable: "--font-stoke", subsets: ["latin"], weight: ["400"] });
const arimo = Arimo({ variable: "--font-arimo", subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Bakkerij Gijbels: uw bakker in Antwerpen",
  description: "Bakkerij Gijbels is een begrip in Antwerpen. 9 vestigingen brengen het vakmanschap van uw bakker tot vlakbij uw deur. Proef meer op onze website.",
  icons: { icon: "/images/logo.jpg" },
  // Niet vindbaar voor Google zolang de site niet live staat (zie next.config.ts).
  robots: process.env.ALLOW_INDEXING === "true" ? undefined : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${montserrat.variable} ${stoke.variable} ${arimo.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
