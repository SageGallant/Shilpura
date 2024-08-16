"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple search functionality
    const performSearch = () => {
      setIsLoading(true);

      if (!query) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      // Search in title, description, materials, category, etc.
      const filteredProducts = products.filter((product) => {
        const searchableText = [
          product.title,
          product.description,
          product.category,
          product.origin,
          product.artisan,
          ...product.materials,
          ...product.sustainabilityBadges,
          ...(product.details || []),
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query.toLowerCase());
      });

      setSearchResults(filteredProducts);
      setIsLoading(false);
    };

    performSearch();
  }, [query]);

  return (
    <div className="min-h-screen bg-islandSpice/10 py-16">
      <div className="container-custom">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-4">
            Search Results
          </h1>
          {query ? (
            <p className="text-osloGray">
              Found {searchResults.length} results for &quot;{query}&quot;
            </p>
          ) : (
            <p className="text-osloGray">
              Enter a search term to find products
            </p>
          )}
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
          <form className="flex gap-2">
            <input
              type="text"
              defaultValue={query}
              name="q"
              placeholder="Search for products, materials, artisans..."
              className="flex-grow border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-bordeaux"
            />
            <button
              type="submit"
              className="bg-bordeaux text-white px-6 py-2 rounded-md hover:bg-bordeaux/90"
            >
              Search
            </button>
          </form>
        </div>

        {/* Search Results */}
        {isLoading ? (
          <div className="text-center py-12">
            <svg
              className="animate-spin h-10 w-10 text-bordeaux mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-osloGray">Searching...</p>
          </div>
        ) : query && searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                origin={product.origin}
                imageSrc={product.images[0] || ""}
                category={product.category}
                slug={product.slug}
              />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-osloGray mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-playfair text-bordeaux mb-2">
              No Results Found
            </h2>
            <p className="text-osloGray mb-6">
              We couldn&apos;t find any products matching &quot;{query}&quot;
            </p>
            <p className="text-osloGray mb-4">
              Try checking your spelling or using more general terms
            </p>
            <Link
              href="/collection"
              className="inline-block bg-terracotta text-white px-6 py-3 rounded-md hover:bg-terracotta/90"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-osloGray mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h2 className="text-xl font-playfair text-bordeaux mb-4">
              Search Our Collection
            </h2>
            <p className="text-osloGray mb-4">
              Enter a search term to discover handcrafted treasures
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
