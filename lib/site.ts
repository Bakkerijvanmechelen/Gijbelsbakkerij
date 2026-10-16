export const nav = [
  { href: "/geschiedenis", label: "Geschiedenis" },
  { href: "/assortiment", label: "Assortiment" },
  { href: "/diensten", label: "Diensten" },
  { href: "/winkels", label: "Winkels" },
  { href: "/contact", label: "Contact" },
];

export const footerText = "Bakkerij Gijbels is een begrip in Antwerpen. 9 vestigingen brengen het vakmanschap van uw bakker tot vlakbij uw deur.";

export const tiles = [
  { label: "Brood", image: "/images/cat-brood.jpg" },
  { label: "Pistolets", image: "/images/cat-pistolets.jpg" },
  { label: "Patisserie", image: "/images/cat-patisserie.jpg" },
  { label: "Koffie koeken", image: "/images/cat-koffiekoeken.jpg" },
  { label: "Vlaaien", image: "/images/cat-vlaaien.jpg" },
];

export const gallery = ["galerij-1", "galerij-2", "galerij-3", "galerij-4", "galerij-5", "galerij-6"].map((n) => `/images/${n}.jpg`);

export type Shop = {
  name: string;
  street: string;
  city: string;
  phone?: string;
  fax?: string;
  note?: string;
  hours: string[];
  website?: string;
  logo?: { src: string; w: number; h: number };
  lat: number;
  lng: number;
};

const geo: Record<string, [number, number]> = {
  hoofdzetel: [51.2361755, 4.5056288],
  dageraad: [51.207499, 4.4309844],
  berchem: [51.1967522, 4.4227355],
  arend: [51.222949, 4.4814752],
  broodhuys: [51.1652438, 4.4237911],
  hecke: [51.2228243, 4.4740781],
  hermans: [51.2416652, 4.966089],
  devers: [51.3227385, 4.520155],
  brempt1: [51.2159589, 4.32906],
  brempt2: [51.2019111, 4.3433651],
};

const gijbelsLogo = { src: "/images/logo.jpg", w: 200, h: 70 };

/** De drie eigen winkels van Gijbels. */
export const ownShops: Shop[] = [
  {
    name: "Gijbels Hoofdzetel", street: "Kanaaldijk 255", city: "2900 Schoten", note: "Bereikbaar via Blikstraat Wijnegem",
    phone: "03 322 44 21", fax: "03 322 52 90", hours: ["7/7 van 6.00u - 18.00u"], logo: gijbelsLogo, lat: geo.hoofdzetel[0], lng: geo.hoofdzetel[1],
  },
  {
    name: "Gijbels Dageraad", street: "Dageraadplaats 9", city: "2018 Antwerpen", phone: "03 235 53 21",
    hours: ["Ma, di, don van 6.30 u - 17.00u", "Woe : 6.30u - 14.30u", "Vrijd : 6.30u - 14.00u", "Zond : 6.30u - 13.00u", "Tijdens de zomermaanden open tot 14.30u"],
    logo: gijbelsLogo, lat: geo.dageraad[0], lng: geo.dageraad[1],
  },
  {
    name: "Gijbels Berchem", street: "Driekoningenstraat 75", city: "2600 Berchem (Antwerpen)", phone: "03 230 13 12",
    hours: ["Maandag gesloten", "Di tot Za: 7.00u - 17.45u", "Zon en feestdagen: 7.00u - 13.00u"], logo: gijbelsLogo, lat: geo.berchem[0], lng: geo.berchem[1],
  },
];

/** Andere bakkerijen in de groep. */
export const groupShops: Shop[] = [
  {
    name: "Bakkerij De Zwarte Arend", street: "Koningsarendlaan 2", city: "2100 - Deurne", phone: "03 324 06 38", website: "www.bakkerijdezwartearend.be",
    hours: ["Ma tot Zo: 7.00u - 17.45u", "Vrijdag gesloten"], logo: { src: "/images/logo-zwarte-arend.png", w: 227, h: 81 }, lat: geo.arend[0], lng: geo.arend[1],
  },
  {
    name: "Bakkerij 't Broodhuys", street: "Hazeschransstraat 31", city: "2650 - Edegem", phone: "03 440 40 03", website: "www.bakkerijtbroodhuys.be",
    hours: ["Ma: 7u – 17u", "Di: gesloten", "Woe: 7u – 17u", "Don: 7u – 17u", "Vrij: 7u – 17u", "Zat, zon-en feestdagen: 7u – 14u"],
    logo: { src: "/images/logo-broodhuys.png", w: 286, h: 71 }, lat: geo.broodhuys[0], lng: geo.broodhuys[1],
  },
  {
    name: "Van Hecke Bakkerij", street: "Venneborglaan 106", city: "2100 - Deurne", phone: "03 325 65 17", website: "www.vanheckebakkerij.be",
    hours: ["Maandag gesloten", "Week: 7.00u - 17.45u", "Zaterdag: 7.00u - 14.00u", "Zon-en feestdagen: 7.00u - 14.00u"],
    logo: { src: "/images/logo-van-hecke.png", w: 213, h: 43 }, lat: geo.hecke[0], lng: geo.hecke[1],
  },
  {
    name: "Hermans Bakkerij", street: "Turnhoutsebaan 16", city: "2460 - Kasterlee", phone: "014 85 07 96", website: "www.hermansbakkerij.be",
    hours: ["7/7 van 7.00u - 14.00u"], logo: { src: "/images/logo-hermans.png", w: 227, h: 28 }, lat: geo.hermans[0], lng: geo.hermans[1],
  },
  {
    name: "Devers Bakkerij", street: "Bredabaan 1041", city: "2930 - Brasschaat", phone: "03 663 03 84", website: "www.bakkerijdevers.be",
    hours: ["Dinsdag gesloten", "Week: 7.00u - 17.00u", "Zaterdag : 7.00u -15.00u", "Zon-en feestdagen: 7.00u - 15.00u"],
    logo: { src: "/images/logo-devers.png", w: 223, h: 63 }, lat: geo.devers[0], lng: geo.devers[1],
  },
  {
    name: "Bakkerij van Brempt", street: "Statiestraat 84", city: "2070 - Zwijndrecht", phone: "03 252 75 35", website: "www.bakkerijvanbrempt.be",
    hours: ["ma, do , vrij : 7.00u - 18.00u", "di, za zon-en feestdagen : 7.00 u - 14.00 u"], logo: { src: "/images/logo-van-brempt.png", w: 227, h: 89 }, lat: geo.brempt1[0], lng: geo.brempt1[1],
  },
  {
    name: "Bakkerij van Brempt", street: "Dorpstraat 74", city: "2070 - Burcht", phone: "03 252 70 28", website: "www.bakkerijvanbrempt.be",
    hours: ["ma, do, vrij : 7.00u - 18.00u", "di, za zon-en feestdagen: 7.00 u - 14.00 u"], logo: { src: "/images/logo-van-brempt.png", w: 227, h: 89 }, lat: geo.brempt2[0], lng: geo.brempt2[1],
  },
];

export const allShops = [...ownShops, ...groupShops];
