import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { app } from "@/lib/app-data";

export const metadata: Metadata = {
  title: "Press Kit & Store Listing",
  description: `Official ${app.name} brand assets, store-listing copy, and product facts.`,
};

function Field({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-faint">
          {label}
        </h3>
        {hint ? <span className="text-[10px] text-fg-faint">{hint}</span> : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap text-fg">{value}</p>
    </div>
  );
}

export default function PressPage() {
  return (
    <PageShell
      eyebrow="Press kit"
      title="Everything you need to write about Plarem."
      intro="Official store-listing copy, product facts, and downloadable brand assets. All copy below is approved for reuse."
    >
      <h2 className="text-lg font-semibold">Store listing</h2>
      <div className="mt-4 grid gap-3">
        <Field label="App name" value={app.name} />
        <Field label="Tagline" value={app.tagline} />
        <Field
          label="App Store subtitle"
          value={app.subtitle}
          hint={`${app.subtitle.length}/30 chars`}
        />
        <Field
          label="Short description (Google Play)"
          value={app.shortDescription}
          hint={`${app.shortDescription.length}/80 chars`}
        />
        <Field label="Long description" value={app.longDescription} />
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Category" value={app.category} />
          <Field label="Content rating" value={app.contentRating} />
          <Field label="Price" value={app.price} />
          <Field label="Platforms" value={`Android (live) · iOS (${app.iosStatus})`} />
        </div>
        <Field label="Keywords" value={app.keywords.join(", ")} />
        <Field label="Support email" value={app.supportEmail} />
      </div>

      <h2 className="mt-14 text-lg font-semibold">Brand assets</h2>
      <p className="mt-2 text-sm text-fg-muted">
        Right-click any asset to save it. Please don&apos;t recolour or distort
        the mark.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <a
          href="/press/app-icon.svg"
          download="plarem-app-icon.svg"
          className="glass group rounded-2xl p-5 text-center transition-colors hover:border-indigo-bright/30"
        >
          <Image
            src="/press/app-icon.svg"
            alt="Plarem app icon"
            width={96}
            height={96}
            className="mx-auto rounded-2xl transition-transform group-hover:scale-105"
          />
          <p className="mt-3 text-xs text-fg-muted">App icon · SVG</p>
        </a>
        <a
          href="/press/logo-horizontal.svg"
          download="plarem-logo-horizontal.svg"
          className="glass group flex flex-col items-center justify-center rounded-2xl p-5 text-center transition-colors hover:border-indigo-bright/30"
        >
          <Image
            src="/press/logo-horizontal.svg"
            alt="Plarem horizontal logo"
            width={200}
            height={58}
            className="transition-transform group-hover:scale-105"
          />
          <p className="mt-3 text-xs text-fg-muted">Logo · horizontal SVG</p>
        </a>
        <a
          href="/press/logo-white.svg"
          download="plarem-logo-white.svg"
          className="glass group flex flex-col items-center justify-center rounded-2xl bg-raised p-5 text-center transition-colors hover:border-indigo-bright/30"
        >
          <Image
            src="/press/logo-white.svg"
            alt="Plarem white logo"
            width={96}
            height={96}
            className="transition-transform group-hover:scale-105"
          />
          <p className="mt-3 text-xs text-fg-muted">Logo · white mark SVG</p>
        </a>
      </div>

      <h2 className="mt-14 text-lg font-semibold">Brand colors</h2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { name: "Primary", hex: "#4F5BE8" },
          { name: "Primary bright", hex: "#9BA3FF" },
          { name: "Secondary", hex: "#00A98F" },
          { name: "Secondary bright", hex: "#3DD9BD" },
        ].map((c) => (
          <div key={c.hex} className="glass overflow-hidden rounded-2xl">
            <div className="h-16" style={{ backgroundColor: c.hex }} />
            <div className="p-3">
              <p className="text-xs font-medium text-fg">{c.name}</p>
              <p className="font-mono text-[11px] text-fg-faint">{c.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
