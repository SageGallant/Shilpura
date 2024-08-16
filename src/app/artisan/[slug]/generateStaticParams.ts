import { getArtisans } from "../../../lib/artisans";

export function generateStaticParams() {
  const artisans = getArtisans();
  return artisans.map((artisan) => ({
    slug: artisan.slug,
  }));
}
