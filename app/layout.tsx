import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { app, SITE_URL } from "@/lib/app-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${app.name} — ${app.tagline}`,
    template: `%s · ${app.name}`,
  },
  description: app.shortDescription,
  keywords: [...app.keywords],
  applicationName: app.name,
  openGraph: {
    type: "website",
    siteName: app.name,
    title: `${app.name} — ${app.tagline}`,
    description: app.shortDescription,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${app.name} — ${app.tagline}`,
    description: app.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
