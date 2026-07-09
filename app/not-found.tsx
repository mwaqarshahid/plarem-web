import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        This page isn&apos;t on the map.
      </h1>
      <p className="mt-4 text-fg-muted">
        The link may be broken, or the page may have moved. Head back home and
        try again.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-fg px-6 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
      >
        Back to home
      </Link>
    </div>
  );
}
