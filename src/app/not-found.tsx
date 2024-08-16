"use client";

import Link from "next/link";
import AppImage from "../components/AppImage";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-islandSpice">
      <div className="max-w-md">
        <h1 className="text-6xl font-playfair font-bold text-bordeaux mb-6">
          404
        </h1>
        <div className="relative w-full h-60 mb-8">
          <AppImage
            src="/images/404-artisan.jpg"
            alt="Artisan working on a craft"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h2 className="text-3xl font-playfair font-medium text-bordeaux mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-osloGray mb-8">
          The craftsmanship you're looking for seems to have wandered off. Let's
          guide you back to our collection.
        </p>
        <Link href="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
