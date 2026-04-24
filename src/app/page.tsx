import Link from "next/link";
import { labs } from "@/lib/labs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-orange-400" />
            <span className="text-lg font-semibold tracking-tight">RenPhil</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="opacity-50">Become a host</span>
            <span className="opacity-50">Sign in</span>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Rent a lab. Run your science.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
              Book bench time, equipment, and full lab suites from scientists
              around the world — by the day.
            </p>
            <div className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full border bg-background p-2 shadow-sm">
              <input
                type="text"
                placeholder="Search labs by city, equipment, or field…"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:opacity-90"
              >
                Search
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Search is a preview — browse the full list below.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              {labs.length} labs available
            </h2>
            <span className="text-sm text-muted-foreground">
              Sorted by editor's picks
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {labs.map((lab) => (
              <Link key={lab.id} href={`/labs/${lab.slug}`} className="group">
                <Card className="h-full overflow-hidden pt-0 transition group-hover:shadow-lg">
                  <div
                    className="aspect-[4/3] w-full"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${lab.gradient[0]}, ${lab.gradient[1]})`,
                    }}
                    aria-hidden="true"
                  />
                  <CardContent className="space-y-3 px-5 pb-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold leading-tight">
                        {lab.title}
                      </h3>
                      <Badge variant="secondary" className="shrink-0">
                        {lab.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {lab.location}
                    </p>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {lab.tagline}
                    </p>
                    <div className="flex items-end justify-between pt-1">
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">
                          ${lab.pricePerDay}
                        </span>{" "}
                        <span className="text-muted-foreground">/ day</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ★ {lab.rating.toFixed(2)}{" "}
                        <span className="text-xs">({lab.reviews})</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
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
