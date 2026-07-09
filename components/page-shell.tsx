/** Shared layout for content pages (about, legal, support, press). */
export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-indigo-core/10 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{title}</h1>
        {intro ? (
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">{intro}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}
