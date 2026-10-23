import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cookiebeleid | Bakkerij Gijbels" };

export default function Cookiebeleid() {
  return (
    <LegalPage title="Cookiebeleid" updated="oktober 2026">
      <p>
        Op deze website gebruiken wij <strong>geen</strong> analytische, advertentie- of trackingcookies. Daarom vragen we ook geen toestemming via een
        cookiebanner. Hieronder leest u welke beperkte, strikt noodzakelijke opslag wel gebruikt wordt.
      </p>

      <h2>Wat is een cookie?</h2>
      <p>
        Een cookie is een klein tekstbestand dat een website op uw toestel bewaart. Zo kan de website u herkennen bij een volgend bezoek of onthouden dat u bent
        ingelogd.
      </p>

      <h2>Welke cookies gebruiken wij?</h2>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Doel</th>
            <th>Bewaartermijn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sb-… (aanmeldcookies)</td>
            <td>Houden beheerders ingelogd in het beheergedeelte van de website. Bezoekers krijgen deze cookies niet.</td>
            <td>Sessie / maximaal 1 week</td>
          </tr>
        </tbody>
      </table>
      <p>Dit zijn functionele cookies die strikt noodzakelijk zijn voor de werking van de dienst. Hiervoor is volgens de Belgische wetgeving geen toestemming vereist.</p>

      <h2>Externe diensten</h2>
      <p>
        Lettertypes en afbeeldingen worden rechtstreeks vanaf onze eigen website geladen. De kaart op de winkelpagina gebruikt kaartmateriaal van OpenStreetMap: uw
        browser maakt daarvoor rechtstreeks verbinding met die dienst, waarbij uw IP-adres wordt gedeeld. Er worden geen cookies geplaatst. Wanneer u op “Route” of
        “Webshop” klikt, verlaat u onze website en gelden de voorwaarden van de betreffende dienst.
      </p>

      <h2>Cookies verwijderen of weigeren</h2>
      <p>U kunt cookies altijd verwijderen of blokkeren via de instellingen van uw browser.</p>

      <h2>Vragen?</h2>
      <p>
        Mail naar <a href="mailto:info@bakkerijgijbels.be">info@bakkerijgijbels.be</a>. Hoe wij omgaan met uw persoonsgegevens leest u in onze{" "}
        <a href="/privacy">privacyverklaring</a>.
      </p>
    </LegalPage>
  );
}
