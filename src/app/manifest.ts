import { MetadataRoute } from "next";

// This forces the route to be treated as static during static export
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shilpura - Premium Handicrafts",
    short_name: "Shilpura",
    description:
      "Discover exquisite handcrafted items from skilled artisans around the world.",
    start_url: "/",
    display: "standalone",
    background_color: "#EBD9C8",
    theme_color: "#8B2635",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
