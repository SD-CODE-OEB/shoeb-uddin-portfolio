import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shoeb Uddin - Frontend Developer Portfolio",
    short_name: "Shoeb Uddin Portfolio",
    description:
      "Frontend Developer Portfolio showcasing React, Next.js, and TypeScript projects",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#ffd700",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["portfolio", "developer", "frontend", "web-development"],
    lang: "en",
  };
}
