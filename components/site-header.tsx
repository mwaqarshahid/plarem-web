import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

const nav = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" aria-label="Plarem home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-fg-muted md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#download"
            className="hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] sm:inline-block"
          >
            Get the app
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
