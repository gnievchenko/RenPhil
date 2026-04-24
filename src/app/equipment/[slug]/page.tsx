import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  equipment,
  formatGBP,
  getEquipmentBySlug,
  getEquipmentImage,
} from "@/lib/equipment";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return equipment.map((item) => ({ slug: item.slug }));
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  if (!item) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to all equipment
        </Link>

        <div
          className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl"
          style={{
            backgroundImage: `linear-gradient(135deg, ${item.gradient[0]}, ${item.gradient[1]})`,
          }}
        >
          <Image
            src={getEquipmentImage(item)}
            alt={item.title}
            fill
            sizes="(min-width:1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="text-[11px] uppercase tracking-wide"
                >
                  {item.category}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {item.city}, United Kingdom
                </span>
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                {item.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                {item.tagline}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                ★ {item.rating.toFixed(2)} · {item.reviews} reviews · Hosted by{" "}
                <span className="text-foreground">{item.hostName}</span>
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                About this equipment
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                Specifications
              </h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {item.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                      aria-hidden="true"
                    />
                    {spec}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                What's included
              </h2>
              <ul className="space-y-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span aria-hidden="true">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                Your provider
              </h2>
              <Card>
                <CardContent className="flex items-start gap-4 p-5">
                  <div
                    className="h-12 w-12 shrink-0 rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${item.gradient[0]}, ${item.gradient[1]})`,
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium">{item.hostName}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.hostBio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold">
                    {formatGBP(item.pricePerDay)}
                  </span>
                  <span className="text-sm text-muted-foreground">/ day</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ★ {item.rating.toFixed(2)} · {item.reviews} reviews
                </div>
                <button
                  type="button"
                  disabled
                  className="w-full cursor-not-allowed rounded-full bg-gradient-to-r from-[#fa709a] to-[#fee140] py-3 text-sm font-medium text-white opacity-75"
                >
                  Request booking
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Booking is coming soon — sign-in required.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
