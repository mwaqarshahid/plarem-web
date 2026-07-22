"use client";

import Image from "next/image";

/**
 * Real store/home screenshot from public/screenshots.
 * Use a unique filename (or bump ?v=) when replacing the PNG so browsers
 * and Next's image optimizer don't keep serving a cached older file.
 */
const SCREEN = {
  src: "/screenshots/home.png",
  alt: "Plarem home screen with active location reminders",
} as const;

export function PhoneMockup() {
  return (
    <div className="relative animate-float">
      <div
        className="absolute -inset-10 -z-10 rounded-full bg-indigo-core/25 blur-[90px]"
        aria-hidden="true"
      />

      <div className="w-[280px] rounded-[2.6rem] border border-white/15 bg-[#1a1d29] p-2 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:w-[300px]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] bg-[#0F1117]">
          <Image
            src={SCREEN.src}
            alt={SCREEN.alt}
            fill
            sizes="300px"
            className="object-cover object-top"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
