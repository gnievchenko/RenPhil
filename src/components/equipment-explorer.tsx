"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  CATEGORIES,
  type Category,
  type Equipment,
} from "@/lib/equipment";
import { EquipmentCard } from "@/components/equipment-card";
import { Badge } from "@/components/ui/badge";

const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[640px] items-center justify-center rounded-2xl border bg-muted/30 text-sm text-muted-foreground">
      Loading map…
    </div>
  ),
});

type ViewMode = "grid" | "map";

export function EquipmentExplorer({ items }: { items: Equipment[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [city, setCity] = useState<string>("All");
  const [view, setView] = useState<ViewMode>("grid");

  const cities = useMemo(() => {
    const unique = Array.from(new Set(items.map((i) => i.city))).sort();
    return unique;
  }, [items]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((item) => {
      if (category !== "All" && item.category !== category) return false;
      if (city !== "All" && item.city !== city) return false;
      if (!q) return true;
      const haystack = [
        item.title,
        item.tagline,
        item.description,
        item.category,
        item.city,
        item.hostName,
        ...item.specs,
        ...item.highlights,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [items, search, category, city]);

  return (
    <>
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
          <Badge
            variant="secondary"
            className="mb-6 bg-gradient-to-r from-[#fa709a]/15 to-[#fee140]/20 text-foreground"
          >
            UK-wide · 41 active listings
          </Badge>
          <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Rent lab equipment. Run your science.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
            Book specific instruments — bioreactors, mass specs, 3D printers — by
            the day from scientists and shared labs across the United Kingdom.
          </p>
          <div className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full border bg-background p-2 shadow-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search instruments, techniques, or cities…"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              aria-label="Search equipment"
            />
            {search ? (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            ) : null}
            <button
              type="button"
              disabled
              aria-hidden="true"
              className="rounded-full bg-gradient-to-r from-[#fa709a] to-[#fee140] px-5 py-2 text-sm font-medium text-white shadow-sm"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-6 pt-10">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setCategory("All")}
            className={pillClass(category === "All")}
          >
            All categories
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={pillClass(category === c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <label className="text-sm text-muted-foreground" htmlFor="city">
              City
            </label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-full border bg-background px-4 py-1.5 text-sm"
            >
              <option value="All">All UK</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <span className="text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
            </span>
          </div>

          <div className="flex items-center gap-1 rounded-full border bg-background p-1 text-sm">
            <button
              type="button"
              onClick={() => setView("grid")}
              className={toggleClass(view === "grid")}
            >
              Grid
            </button>
            <button
              type="button"
              onClick={() => setView("map")}
              className={toggleClass(view === "map")}
            >
              Map
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border bg-muted/30 p-16 text-center text-sm text-muted-foreground">
            No equipment matches your filters. Try clearing the search or
            switching categories.
          </div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <MapView items={filtered} />
        )}
      </section>
    </>
  );
}

function pillClass(active: boolean) {
  return [
    "rounded-full border px-4 py-1.5 text-xs font-medium transition",
    active
      ? "border-transparent bg-foreground text-background"
      : "border-border bg-background text-foreground/70 hover:text-foreground",
  ].join(" ");
}

function toggleClass(active: boolean) {
  return [
    "rounded-full px-4 py-1 transition",
    active
      ? "bg-foreground text-background"
      : "text-muted-foreground hover:text-foreground",
  ].join(" ");
}
