export type Shop = {
  id: string;
  name: string;
  kind: "eigen" | "groep";
  street: string;
  postal_code: string;
  city: string;
  phone: string | null;
  fax: string | null;
  note: string | null;
  website: string | null;
  hours: string | null;
  logo_url: string | null;
  lat: number | null;
  lng: number | null;
  position: number;
  visible: boolean;
};

export const kindLabel: Record<Shop["kind"], string> = {
  eigen: "Gijbels-winkel",
  groep: "Bakkerij in de groep",
};

/** Openingsuren staan als tekst, één regel per dag of groep van dagen. */
export const hoursLines = (h: string | null) =>
  (h ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

export const addressLine = (s: Pick<Shop, "street" | "postal_code" | "city">) => `${s.street}, ${s.postal_code} ${s.city}`;

export const routeUrl = (s: Pick<Shop, "street" | "postal_code" | "city">) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine(s))}`;

export const websiteUrl = (w: string) => (/^https?:\/\//i.test(w) ? w : `https://${w}`);
export const websiteLabel = (w: string) => w.replace(/^https?:\/\//i, "").replace(/\/$/, "");
export const telHref = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;
