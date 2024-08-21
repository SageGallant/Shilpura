"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getProductBySlug,
  getRelatedProducts,
  Product,
} from "../../../lib/products";
import { getArtisanById } from "../../../lib/artisans";
import ProductCard from "../../../components/ProductCard";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AppImage from "../../../components/AppImage";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const artisan = product.artisanId ? getArtisanById(product.artisanId) : null;
  const relatedProducts = getRelatedProducts(product.id);

  return (
    <div className="bg-islandSpice min-h-screen py-16">
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
                    href="/collection"
                    className="ml-1 text-sm font-medium text-osloGray hover:text-bordeaux md:ml-2"
                  >
                    Collection
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
                    {product.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Display */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="mb-4 aspect-square relative bg-white overflow-hidden">
              <AppImage
                src={product.images[0] || "/images/placeholder.png"}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-4">
              {product.title}
            </h1>

            <p className="text-2xl text-bordeaux font-medium mb-6">
              ${product.price.toLocaleString()}
            </p>

            <div className="mb-6">
              <Link
                href={`/artisan/${product.artisanId}`}
                className="text-osloGray hover:text-bordeaux"
              >
                Crafted by{" "}
                <span className="font-medium">{product.artisan}</span>
              </Link>
              <p className="text-osloGray">Origin: {product.origin}</p>
            </div>

            <div className="py-4 text-osloGray">
              <p>{product.description}</p>
            </div>

            <div className="py-4 text-osloGray">
              <ul className="list-disc pl-5 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
