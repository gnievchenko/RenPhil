import Link from "next/link";
import { notFound } from "next/navigation";
import { getLabBySlug, labs } from "@/lib/labs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export default async function LabDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);
  if (!lab) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-orange-400" />
            <span className="text-lg font-semibold tracking-tight">RenPhil</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to all labs
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <div
          className="aspect-[21/9] w-full overflow-hidden rounded-2xl"
          style={{
            backgroundImage: `linear-gradient(135deg, ${lab.gradient[0]}, ${lab.gradient[1]})`,
          }}
          aria-hidden="true"
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{lab.type}</Badge>
                <span className="text-sm text-muted-foreground">
                  {lab.location}
                </span>
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                {lab.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                {lab.tagline}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                ★ {lab.rating.toFixed(2)} · {lab.reviews} reviews · Hosted by{" "}
                <span className="text-foreground">{lab.hostName}</span>
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                About this lab
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {lab.description}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                Equipment
              </h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {lab.equipment.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                Highlights
              </h2>
              <ul className="space-y-2">
                {lab.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                Meet your host
              </h2>
              <Card>
                <CardContent className="flex items-start gap-4 p-5">
                  <div
                    className="h-12 w-12 shrink-0 rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${lab.gradient[0]}, ${lab.gradient[1]})`,
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium">{lab.hostName}</p>
                    <p className="text-sm text-muted-foreground">
                      {lab.hostBio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold">
                    ${lab.pricePerDay}
                  </span>
                  <span className="text-sm text-muted-foreground">/ day</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ★ {lab.rating.toFixed(2)} · {lab.reviews} reviews
                </div>
                <button
                  type="button"
                  disabled
                  className="w-full cursor-not-allowed rounded-full bg-foreground py-3 text-sm font-medium text-background opacity-60"
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

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          <p>
            RenPhil · A marketplace for laboratory space · Built on Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
