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

type AssetCard = {
  href: string;
  download: string;
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  /** light = white card (for dark marks); dark = raised (for white marks) */
  surface?: "default" | "light" | "dark";
};

function AssetGrid({ assets }: { assets: AssetCard[] }) {
  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {assets.map((asset) => {
        const surface =
          asset.surface === "light"
            ? "bg-white"
            : asset.surface === "dark"
              ? "bg-raised"
              : "";
        const labelClass =
          asset.surface === "light" ? "text-neutral-600" : "text-fg-muted";
        return (
          <a
            key={asset.href}
            href={asset.href}
            download={asset.download}
            className={`glass group flex flex-col items-center justify-center rounded-2xl p-5 text-center transition-colors hover:border-indigo-bright/30 ${surface}`}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.width}
              height={asset.height}
              className="mx-auto max-h-24 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <p className={`mt-3 text-xs ${labelClass}`}>{asset.label}</p>
          </a>
        );
      })}
    </div>
  );
}

const marks: AssetCard[] = [
  {
    href: "/press/logo-icon.svg",
    download: "plarem-logo-icon.svg",
    src: "/press/logo-icon.svg",
    alt: "Plarem color mark",
    label: "Mark · color SVG",
    width: 96,
    height: 96,
    surface: "light",
  },
  {
    href: "/press/logo-white.svg",
    download: "plarem-logo-white.svg",
    src: "/press/logo-white.svg",
    alt: "Plarem white mark",
    label: "Mark · white SVG",
    width: 96,
    height: 96,
    surface: "dark",
  },
  {
    href: "/press/logo-black.svg",
    download: "plarem-logo-black.svg",
    src: "/press/logo-black.svg",
    alt: "Plarem black mark",
    label: "Mark · black SVG",
    width: 96,
    height: 96,
    surface: "light",
  },
  {
    href: "/press/logo-monochrome.svg",
    download: "plarem-logo-monochrome.svg",
    src: "/press/logo-monochrome.svg",
    alt: "Plarem monochrome mark",
    label: "Mark · mono SVG",
    width: 96,
    height: 96,
    surface: "light",
  },
  {
    href: "/press/logo-outline.svg",
    download: "plarem-logo-outline.svg",
    src: "/press/logo-outline.svg",
    alt: "Plarem outline mark",
    label: "Mark · outline SVG",
    width: 96,
    height: 96,
    surface: "dark",
  },
  {
    href: "/press/logo-icon@2x.png",
    download: "plarem-logo-icon@2x.png",
    src: "/press/logo-icon@2x.png",
    alt: "Plarem color mark PNG",
    label: "Mark · color PNG @2x",
    width: 128,
    height: 128,
    surface: "light",
  },
];

const wordmarks: AssetCard[] = [
  {
    href: "/press/logo-horizontal.svg",
    download: "plarem-logo-horizontal.svg",
    src: "/press/logo-horizontal.svg",
    alt: "Plarem horizontal logo",
    label: "Horizontal · SVG (Place Reminder)",
    width: 220,
    height: 64,
    surface: "light",
  },
  {
    href: "/press/logo-horizontal@2x.png",
    download: "plarem-logo-horizontal@2x.png",
    src: "/press/logo-horizontal@2x.png",
    alt: "Plarem horizontal logo PNG",
    label: "Horizontal · PNG @2x",
    width: 220,
    height: 64,
    surface: "light",
  },
  {
    href: "/press/logo-vertical.svg",
    download: "plarem-logo-vertical.svg",
    src: "/press/logo-vertical.svg",
    alt: "Plarem vertical logo",
    label: "Vertical · SVG",
    width: 96,
    height: 120,
    surface: "light",
  },
  {
    href: "/press/logo-white@2x.png",
    download: "plarem-logo-white@2x.png",
    src: "/press/logo-white@2x.png",
    alt: "Plarem white mark PNG",
    label: "White mark · PNG @2x",
    width: 128,
    height: 128,
    surface: "dark",
  },
];

const appIcons: AssetCard[] = [
  {
    href: "/press/app-icon.svg",
    download: "plarem-app-icon.svg",
    src: "/press/app-icon.svg",
    alt: "Plarem app icon gradient",
    label: "App icon · gradient SVG",
    width: 96,
    height: 96,
  },
  {
    href: "/press/app-icon-1024.png",
    download: "plarem-app-icon-1024.png",
    src: "/press/app-icon-1024.png",
    alt: "Plarem app icon 1024",
    label: "App icon · 1024 PNG",
    width: 96,
    height: 96,
  },
  {
    href: "/press/app-icon-rounded-1024.png",
    download: "plarem-app-icon-rounded-1024.png",
    src: "/press/app-icon-rounded-1024.png",
    alt: "Plarem rounded app icon",
    label: "App icon · rounded PNG",
    width: 96,
    height: 96,
  },
  {
    href: "/press/app-icon-flat-1024.png",
    download: "plarem-app-icon-flat-1024.png",
    src: "/press/app-icon-flat-1024.png",
    alt: "Plarem flat app icon",
    label: "App icon · flat PNG",
    width: 96,
    height: 96,
    surface: "light",
  },
  {
    href: "/press/app-icon-transparent-1024.png",
    download: "plarem-app-icon-transparent-1024.png",
    src: "/press/app-icon-transparent-1024.png",
    alt: "Plarem transparent app icon",
    label: "App icon · transparent PNG",
    width: 96,
    height: 96,
    surface: "dark",
  },
  {
    href: "/press/google-play-icon-512.png",
    download: "plarem-google-play-icon-512.png",
    src: "/press/google-play-icon-512.png",
    alt: "Google Play icon 512",
    label: "Play Store icon · 512 PNG",
    width: 96,
    height: 96,
  },
];

const storeGraphics: AssetCard[] = [
  {
    href: "/press/google-play-feature-graphic.png",
    download: "plarem-play-feature-graphic.png",
    src: "/press/google-play-feature-graphic.png",
    alt: "Google Play feature graphic",
    label: "Play feature graphic · 1024×500",
    width: 320,
    height: 156,
  },
  {
    href: "/press/app-store-icon-1024.png",
    download: "plarem-app-store-icon-1024.png",
    src: "/press/app-store-icon-1024.png",
    alt: "App Store icon 1024",
    label: "App Store icon · 1024 PNG",
    width: 96,
    height: 96,
  },
];

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

      <h2 className="mt-14 text-lg font-semibold">Marks</h2>
      <p className="mt-2 text-sm text-fg-muted">
        Right-click any asset to save it. Please don&apos;t recolour or distort
        the mark.
      </p>
      <AssetGrid assets={marks} />

      <h2 className="mt-14 text-lg font-semibold">Wordmarks</h2>
      <AssetGrid assets={wordmarks} />

      <h2 className="mt-14 text-lg font-semibold">App icons</h2>
      <AssetGrid assets={appIcons} />

      <h2 className="mt-14 text-lg font-semibold">Store graphics</h2>
      <AssetGrid assets={storeGraphics} />

      <h2 className="mt-14 text-lg font-semibold">Brand colors</h2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { name: "Ink", hex: "#1E2126" },
          { name: "Arrow", hex: "#2B9FD8" },
          { name: "Lime", hex: "#D7DF23" },
          { name: "Tile light", hex: "#A2A4A7" },
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
