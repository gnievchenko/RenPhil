import Link from "next/link";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="hidden text-muted-foreground hover:text-foreground sm:inline"
          >
            Browse equipment
          </Link>
          <span
            className="cursor-default opacity-50"
            title="Coming soon"
          >
            Become an experiment provider
          </span>
          <span
            className="cursor-default opacity-50"
            title="Coming soon"
          >
            Sign in
          </span>
        </nav>
      </div>
    </header>
  );
}
