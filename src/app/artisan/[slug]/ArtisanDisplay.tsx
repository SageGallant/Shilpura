"use client";

import { useState } from "react";
import Link from "next/link";
import AppImage from "../../../components/AppImage";
import { Artisan } from "../../../lib/artisans";
import { products } from "../../../lib/products";
import ProductCard from "../../../components/ProductCard";

type Props = {
  artisan: Artisan;
};

export default function ArtisanDisplay({ artisan }: Props) {
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

        {/* Artisan Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Artisan Image */}
            <div className="w-full md:w-2/5 lg:w-1/3">
              <div className="aspect-[3/4] overflow-hidden bg-osloGray/10 relative">
                {artisan.featuredImage ? (
                  <AppImage
                    src={artisan.featuredImage}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-osloGray/20"></div>
                )}
              </div>
            </div>

            {/* Artisan Info */}
            <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col justify-center">
              <p className="text-bordeaux font-cormorant text-xl mb-2">
                {artisan.craft}
              </p>
              <h1 className="text-4xl md:text-5xl font-playfair text-bordeaux mb-4">
                {artisan.name}
              </h1>
              <p className="text-osloGray mb-6">
                <span className="font-medium">Location:</span>{" "}
                {artisan.location}
              </p>
              <p className="text-osloGray mb-8">{artisan.bio}</p>

              {/* Social Links */}
              {artisan.social && (
                <div className="flex space-x-4 mb-8">
                  {artisan.social.instagram && (
                    <a
                      href={`https://instagram.com/${artisan.social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-osloGray hover:text-bordeaux transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.23.6 1.794 1.163.563.563.914 1.126 1.163 1.794.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427-.25.668-.6 1.23-1.163 1.794-.563.563-1.126.914-1.794 1.163-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.23-.6-1.794-1.163-.563-.563-.914-1.126-1.163-1.794-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427.25-.668.6-1.23 1.163-1.794.563-.563 1.126-.914 1.794-1.163.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.886 2 12.315 2zm0 1.667c-2.393 0-2.732.01-3.743.058-.903.041-1.395.19-1.722.316-.432.168-.74.369-1.063.693-.324.324-.525.631-.692 1.063-.126.327-.275.819-.316 1.722-.048 1.011-.058 1.35-.058 3.743s.01 2.732.058 3.743c.041.903.19 1.395.316 1.722.168.432.369.74.693 1.063.324.324.631.525 1.063.692.327.126.819.275 1.722.316 1.011.048 1.35.058 3.743.058s2.732-.01 3.743-.058c.903-.041 1.395-.19 1.722-.316.432-.168.74-.369 1.063-.693.324-.324.525-.631.692-1.063.126-.327.275-.819.316-1.722.048-1.011.058-1.35.058-3.743s-.01-2.732-.058-3.743c-.041-.903-.19-1.395-.316-1.722-.168-.432-.369-.74-.693-1.063-.324-.324-.631-.525-1.063-.692-.327-.126-.819-.275-1.722-.316-1.011-.048-1.35-.058-3.743-.058z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M12.315 6.667a5.333 5.333 0 100 10.666 5.333 5.333 0 000-10.666zm0 8.8a3.467 3.467 0 110-6.934 3.467 3.467 0 010 6.934z"
                          clipRule="evenodd"
                        />
                        <circle cx="17.815" cy="6.5" r="1.25" />
                      </svg>
                    </a>
                  )}
                  {artisan.social.facebook && (
                    <a
                      href={`https://facebook.com/${artisan.social.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bordeaux hover:text-gold transition-colors"
                      aria-label={`${artisan.name}'s Facebook`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {artisan.social.website && (
                    <a
                      href={`https://${artisan.social.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bordeaux hover:text-gold transition-colors"
                      aria-label={`${artisan.name}'s Website`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              )}

              {/* Sustainability Practices */}
              <div className="mb-8">
                <h3 className="font-playfair text-lg text-bordeaux mb-3">
                  Sustainability Practices
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artisan.sustainabilityPractices.map((practice) => (
                    <span
                      key={practice}
                      className="px-3 py-1 bg-sage/5 text-sage border border-sage/20 rounded-full text-sm"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shop CTA */}
              <Link
                href={`/collection?artisan=${artisan.id}`}
                className="btn-primary self-start"
              >
                Shop {artisan.name}'s Collection
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-osloGray/20 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("story")}
              className={`py-4 text-lg font-playfair border-b-2 ${
                activeTab === "story"
                  ? "border-bordeaux text-bordeaux"
                  : "border-transparent text-osloGray hover:text-bordeaux"
              }`}
            >
              Story
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`py-4 text-lg font-playfair border-b-2 ${
                activeTab === "process"
                  ? "border-bordeaux text-bordeaux"
                  : "border-transparent text-osloGray hover:text-bordeaux"
              }`}
            >
              Craft & Materials
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`py-4 text-lg font-playfair border-b-2 ${
                activeTab === "gallery"
                  ? "border-bordeaux text-bordeaux"
                  : "border-transparent text-osloGray hover:text-bordeaux"
              }`}
            >
              Gallery
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-16 md:mb-24">
          {activeTab === "story" && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-playfair text-bordeaux mb-6">
                The Story of {artisan.name}
              </h2>
              <div className="whitespace-pre-line text-osloGray">
                {artisan.story}
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div>
              <h2 className="text-3xl font-playfair text-bordeaux mb-6">
                Craft & Techniques
              </h2>

              {/* Techniques */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair text-bordeaux mb-4">
                  Techniques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {artisan.techniques.map((technique) => (
                    <div key={technique} className="bg-white p-6 shadow-sm">
                      <h4 className="font-playfair text-lg text-bordeaux mb-2">
                        {technique}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-2xl font-playfair text-bordeaux mb-4">
                  Materials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {artisan.materials.map((material) => (
                    <div key={material} className="bg-white p-6 shadow-sm">
                      <h4 className="font-playfair text-lg text-bordeaux mb-2">
                        {material}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div>
              <h2 className="text-3xl font-playfair text-bordeaux mb-6">
                {artisan.name}'s Workshop
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {artisan.gallery && artisan.gallery.length > 0
                  ? artisan.gallery.map((image, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-osloGray/10 relative"
                      >
                        <AppImage
                          src={image}
                          alt={`${artisan.name}'s workshop - image ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))
                  : // Fallback placeholders if no gallery images
                    [...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-osloGray/10 relative"
                      >
                        <div className="w-full h-full bg-osloGray/20"></div>
                      </div>
                    ))}
              </div>
            </div>
          )}
        </div>

        {/* Products by This Artisan */}
        {artisanProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-playfair text-bordeaux mb-8">
              Products by {artisan.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artisanProducts.map((product) => (
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
          </div>
        )}
      </div>
    </div>
  );
}
