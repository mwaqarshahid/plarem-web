"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg-muted transition-colors hover:text-fg"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          ) : (
            <>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-16 z-40 border-b border-line bg-ink/95 backdrop-blur-xl"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-fg-muted transition-colors hover:bg-surface hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-fg px-4 py-3 text-center text-sm font-medium text-ink"
            >
              Get the app
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
