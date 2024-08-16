"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getArtisanBySlug } from "../../../lib/artisans";
import { products } from "../../../lib/products";
import ProductCard from "../../../components/ProductCard";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ArtisanProfilePage({ params }: Props) {
  const { slug } = params;
  const artisan = getArtisanBySlug(slug);

  if (!artisan) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<"story" | "process" | "gallery">(
    "story"
  );

  // Get products by this artisan
  const artisanProducts = products.filter(
    (product) => product.artisanId === artisan.id
  );

  return (
    <div className="bg-islandSpice min-h-screen pt-8 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-osloGray hover:text-bordeaux"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-osloGray mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="/artisans"
                    className="ml-1 text-sm font-medium text-osloGray hover:text-bordeaux md:ml-2"
                  >
                    Artisans
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-osloGray mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-bordeaux md:ml-2">
                    {artisan.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Rest of the component... */}
      </div>
    </div>
  );
}
