import { ImageResponse } from "next/og";
import { app } from "@/lib/app-data";

export const runtime = "edge";
export const alt = `${app.name} — ${app.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
            "radial-gradient(ellipse 80% 60% at 50% 20%, #1b1f3a 0%, #07080d 65%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* mark */}
        <svg width="140" height="140" viewBox="0 0 128 128" fill="none">
          <g transform="translate(0, 7)">
            <path
              d="M 34 54 A 30 30 0 1 1 94 54"
              fill="none"
              stroke="#3DD9BD"
              strokeWidth="4.5"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M64 24 C49.5 24 39 35 39 48.5 C39 55.5 48.5 67 64 91 C79.5 67 89 55.5 89 48.5 C89 35 78.5 24 64 24 Z"
              fill="#4F5BE8"
            />
            <circle cx="64" cy="47" r="11.5" fill="#FFFFFF" opacity="0.96" />
            <circle cx="64" cy="47" r="5" fill="#00A98F" />
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
            color: "#3DD9BD",
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
