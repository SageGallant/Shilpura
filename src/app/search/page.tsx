import SearchComponent from "./SearchComponent";
import { Suspense } from "react";

export const metadata = {
  title: "Search | Shilpura",
  description:
    "Search for handcrafted products, materials, and artisans at Shilpura.",
};

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchComponent />
    </Suspense>
  );
}

function SearchLoading() {
  return (
    <div className="min-h-screen bg-islandSpice/10 py-16">
      <div className="container-custom">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-4">
            Search Results
          </h1>
          <p className="text-osloGray">Loading search...</p>
        </div>

        {/* Search Form Loading */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
          <div className="flex gap-2">
            <div className="flex-grow h-10 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-24 h-10 bg-bordeaux/30 rounded-md animate-pulse"></div>
          </div>
        </div>

        {/* Loading State */}
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
          <p className="text-osloGray">Loading search results...</p>
        </div>
      </div>
    </div>
  );
}
