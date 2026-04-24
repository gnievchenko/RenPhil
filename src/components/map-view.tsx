"use client";

import { useMemo } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { type Equipment, formatGBP } from "@/lib/equipment";

function brandIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: linear-gradient(135deg, #fa709a, #fee140);
      border: 2px solid white;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  });
}

export default function MapView({ items }: { items: Equipment[] }) {
  const icon = useMemo(() => brandIcon(), []);

  const bounds = useMemo(() => {
    if (items.length === 0) {
      // UK default
      return L.latLngBounds([49.9, -8.5], [58.7, 1.8]);
    }
    const b = L.latLngBounds(items.map((i) => [i.lat, i.lng] as [number, number]));
    return b.pad(0.2);
  }, [items]);

  return (
    <div className="overflow-hidden rounded-2xl border">
      <MapContainer
        bounds={bounds}
        scrollWheelZoom
        style={{ height: 640, width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Marker
            key={item.id}
            position={[item.lat, item.lng]}
            icon={icon}
          >
            <Popup>
              <div className="space-y-1.5 pr-1" style={{ minWidth: 200 }}>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {item.category}
                </p>
                <Link
                  href={`/equipment/${item.slug}`}
                  className="block font-semibold leading-tight text-neutral-900 hover:underline"
                >
                  {item.title}
                </Link>
                <p className="text-xs text-neutral-600">
                  {item.city} · {formatGBP(item.pricePerDay)} / day
                </p>
                <p className="text-xs text-neutral-500">
                  ★ {item.rating.toFixed(2)} ({item.reviews})
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
