import { ImageResponse } from "next/og";
import { app } from "@/lib/app-data";

export const runtime = "edge";
export const alt = `${app.name} — ${app.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Brand mark paths matching brand/svg/logo-white.svg (dark OG background). */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, #1a2834 0%, #07080d 65%)",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 128 128" fill="none">
          <g transform="translate(0, 4)">
            <path
              d="M 25.4 43.6 A 40 40 0 0 1 47.1 17.7"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M 80.9 17.7 A 40 40 0 0 1 102.6 43.6"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path d="M 40 68 L 88 68 L 64 106 Z" fill="#D7DF23" />
            <circle cx="64" cy="54" r="30" fill="#FFFFFF" />
            <g transform="translate(64, 54) rotate(42)">
              <path
                d="M 0 -15 L 10.5 12 L 0 5.5 L -10.5 12 Z"
                fill="#1E2126"
              />
            </g>
          </g>
        </svg>
        <div
          style={{
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            color: "#ECEEF8",
            letterSpacing: -3,
          }}
        >
          {app.name}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 34,
            color: "#9297AB",
          }}
        >
          {app.tagline}
        </div>
        <div
          style={{
            marginTop: 34,
            display: "flex",
            gap: 14,
            fontSize: 20,
            color: "#D7DF23",
          }}
        >
          <span>Free</span>
          <span style={{ color: "#5C6076" }}>·</span>
          <span>No account</span>
          <span style={{ color: "#5C6076" }}>·</span>
          <span>Local-first</span>
        </div>
      </div>
    ),
    size,
  );
}
