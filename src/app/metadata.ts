import type { Metadata } from "next";

type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shilpura.com";

export function generateMetadata({
  title,
  description,
  keywords,
  image,
}: MetadataProps): Metadata {
  const defaultTitle = "Shilpura - Premium Handicrafts";
  const defaultDescription =
    "Discover exquisite handcrafted items from skilled artisans around the world.";
  const defaultKeywords = [
    "handicrafts",
    "artisan",
    "handmade",
    "premium",
    "eco-friendly",
    "sustainable",
    "luxury",
    "home decor",
    "jewelry",
    "textiles",
    "ceramics",
  ];
  const defaultImage = `${siteUrl}/images/shilpura-og.jpg`;

  return {
    title: title ? `${title} | Shilpura` : defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    authors: [{ name: "Shilpura Team" }],
    creator: "Shilpura",
    publisher: "Shilpura",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      title: title ? `${title} | Shilpura` : defaultTitle,
      description: description || defaultDescription,
      siteName: "Shilpura",
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title || defaultTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | Shilpura` : defaultTitle,
      description: description || defaultDescription,
      images: [image || defaultImage],
    },
  };
}
