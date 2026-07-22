import { app } from "@/lib/app-data";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#D7DF23" d="M3.6 1.8 13.7 12 3.6 22.2c-.4-.3-.6-.8-.6-1.4V3.2c0-.6.2-1.1.6-1.4Z" />
      <path fill="#5BB8E8" d="m13.7 12 3.2-3.2 3.6 2.1c1.2.7 1.2 1.6 0 2.3l-3.6 2.1L13.7 12Z" />
      <path fill="#2B9FD8" d="M3.6 1.8c.4-.3 1-.3 1.6.1l11.7 6.9-3.2 3.2L3.6 1.8Z" />
      <path fill="#1E2126" d="M13.7 12 3.6 22.2c.4.4 1 .4 1.6.1l11.7-6.9-3.2-3.4Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.49.96 1.39 2.1 2.94 3.6 2.89 1.44-.06 1.99-.93 3.73-.93s2.24.93 3.77.9c1.56-.03 2.54-1.41 3.5-2.8 1.1-1.61 1.55-3.17 1.57-3.25-.03-.02-3.01-1.16-3.05-4.6ZM14.16 4.06c.8-.96 1.33-2.3 1.18-3.64-1.14.05-2.53.76-3.35 1.72-.73.85-1.38 2.21-1.2 3.52 1.27.1 2.57-.65 3.37-1.6Z" />
    </svg>
  );
}

function badgeClasses(disabled: boolean) {
  return [
    "group relative flex h-14 min-w-44 items-center gap-3 rounded-xl border px-4",
    "transition-all duration-200",
    disabled
      ? "cursor-default border-line bg-surface/60 opacity-60"
      : "border-line bg-surface hover:-translate-y-0.5 hover:border-indigo-bright/40 hover:shadow-[0_8px_40px_-12px_rgba(43,159,216,0.5)]",
  ].join(" ");
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={app.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={badgeClasses(false)}
        aria-label="Get Plarem on Google Play"
      >
        <PlayIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-fg-faint">
            Get it on
          </span>
          <span className="text-base font-semibold text-fg">Google Play</span>
        </span>
      </a>

      <span
        className={badgeClasses(true)}
        aria-label="App Store — coming soon"
        title="Coming soon to the App Store"
      >
        <span className="text-fg-muted">
          <AppleIcon />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-fg-faint">
            Download on the
          </span>
          <span className="text-base font-semibold text-fg-muted">
            App Store
          </span>
        </span>
        <span className="absolute -top-2 -right-2 rounded-full bg-teal-core px-2 py-0.5 text-[10px] font-semibold text-ink">
          Soon
        </span>
      </span>
    </div>
  );
}
