import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amazing Spa - Massage & Wellness in Lajpat Nagar",
    short_name: "Amazing Spa",
    description:
      "Discover Amazing Spa in Lajpat Nagar, New Delhi, for relaxing massage and wellness services.",
    start_url: "/",
    display: "standalone",
    background_color: "#18110b",
    theme_color: "#332219",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
