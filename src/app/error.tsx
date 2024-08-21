"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-islandSpice">
      <div className="max-w-md">
        <h1 className="text-4xl font-playfair font-bold text-bordeaux mb-6">
          Something Went Wrong
        </h1>
        <p className="text-lg text-osloGray mb-8">
          We apologize, but it seems there was an issue with your request. Our
          artisans are working hard to fix this.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn-secondary order-2 sm:order-1"
          >
            Try Again
          </button>
          <Link href="/" className="btn-primary order-1 sm:order-2">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
