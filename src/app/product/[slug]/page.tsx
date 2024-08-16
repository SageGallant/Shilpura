import ProductDisplay from "./ProductDisplay";
import { generateStaticParams } from "./generateStaticParams";
import { getProductBySlug } from "../../../lib/products";
import { notFound } from "next/navigation";

export { generateStaticParams };

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function Page({ params }: PageProps) {
  // Resolve params if it's a Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return <ProductDisplay product={product} />;
}
