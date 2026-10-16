"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { allShops } from "@/lib/site";

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

/** Kaart met alle winkels (OpenStreetMap, geen API-sleutel nodig). */
export default function ShopMap() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    (async () => {
      const L = (await import("leaflet")).default;
      if (!el.current) return;
      map = L.map(el.current, { scrollWheelZoom: false }).setView([51.23, 4.5], 10);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const pin = L.divIcon({
        className: "",
        html: '<svg viewBox="0 0 24 34" width="30" height="42" aria-hidden="true"><path d="M12 0C5.4 0 0 5.2 0 11.7 0 20 12 34 12 34s12-14 12-22.3C24 5.2 18.6 0 12 0z" fill="#2f4a9c" stroke="#fff" stroke-width="1.5"/><circle cx="12" cy="11.5" r="4.5" fill="#fff"/></svg>',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -38],
      });

      const points: [number, number][] = [];
      for (const s of allShops) {
        const dest = encodeURIComponent(`${s.street}, ${s.city.replace(" - ", " ")}`);
        L.marker([s.lat, s.lng], { icon: pin, title: s.name })
          .addTo(map)
          .bindPopup(`<strong>${esc(s.name)}</strong><br>${esc(s.street)} ${esc(s.city)}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${dest}" target="_blank" rel="noopener noreferrer" style="color:#2f4a9c">Routebeschrijving</a>`);
        points.push([s.lat, s.lng]);
      }
      map.fitBounds(points, { padding: [40, 40] });
      // Scrollen pas als de bezoeker de kaart aanklikt, zodat de pagina niet vastloopt op de kaart.
      map.on("click", () => map?.scrollWheelZoom.enable());
      map.on("mouseout", () => map?.scrollWheelZoom.disable());
    })();
    return () => {
      map?.remove();
    };
  }, []);

  return <div ref={el} role="region" aria-label="Kaart met alle bakkerijen" className="h-[350px] w-full bg-grey" />;
}
