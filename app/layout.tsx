import type { Metadata } from "next";
import { DM_Sans, Young_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const youngSerif = Young_Serif({ variable: "--font-young-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Bakkerij Gijbels: uw bakker in Antwerpen",
  description: "Bakkerij Gijbels is een begrip in Antwerpen. Onze vestigingen brengen het vakmanschap van uw bakker tot vlakbij uw deur. Proef meer op onze website.",
  icons: { icon: "/images/logo.jpg" },
  // Niet vindbaar voor Google zolang de site niet live staat (zie next.config.ts).
  robots: process.env.ALLOW_INDEXING === "true" ? undefined : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${dmSans.variable} ${youngSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
