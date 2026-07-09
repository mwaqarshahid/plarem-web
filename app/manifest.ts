import type { MetadataRoute } from "next";
import { app } from "@/lib/app-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: app.name,
    short_name: app.name,
    description: app.shortDescription,
    start_url: "/",
    display: "browser",
    background_color: "#07080d",
    theme_color: "#07080d",
    icons: [
      {
        src: "/app-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
