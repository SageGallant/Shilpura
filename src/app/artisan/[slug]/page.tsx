import ArtisanDisplay from "./ArtisanDisplay";
import { generateStaticParams } from "./generateStaticParams";
import { getArtisanBySlug } from "../../../lib/artisans";
import { notFound } from "next/navigation";

export { generateStaticParams };

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function Page({ params }: PageProps) {
  // Resolve params if it's a Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  const artisan = getArtisanBySlug(resolvedParams.slug);

  if (!artisan) {
    notFound();
  }

  return <ArtisanDisplay artisan={artisan} />;
}
