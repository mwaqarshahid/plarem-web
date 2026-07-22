"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 480;

/**
 * Floating control that appears after scrolling and returns to the top of the page.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/90 text-fg shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 hover:border-indigo-bright/50 hover:bg-indigo-core hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-bright sm:right-8 sm:bottom-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
