"use client";

import { useState } from "react";
import Link from "next/link";
import AppImage from "../../../components/AppImage";
import { Product } from "../../../lib/products";
import { getArtisanById } from "../../../lib/artisans";
import ProductCard from "../../../components/ProductCard";
import { useCart } from "../../../context/CartContext";
import { useToast } from "../../../context/ToastContext";

type Props = {
  product: Product;
};

export default function ProductDisplay({ product }: Props) {
  const artisan = product.artisanId ? getArtisanById(product.artisanId) : null;
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

  // Get cart functions from context
  const { addToCart, addToWishlist, isInCart, isInWishlist } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(
      `Added ${quantity} of ${product.title} to your cart`,
      "success",
      "Item Added to Cart"
    );
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    showToast(
      `Added ${product.title} to your wishlist`,
      "success",
      "Added to Wishlist"
    );
  };

  // Helper to format badge name for display
  const formatBadgeName = (badge: string) => {
    return badge
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

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
              {product.images && product.images.length > 0 ? (
                <AppImage
                  src={product.images[activeImage]}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full bg-osloGray/20">
                  {/* Placeholder for main image */}
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images && product.images.length > 0
                ? product.images.map((image, i) => (
                    <button
                      key={i}
                      className={`aspect-square relative bg-white overflow-hidden border-2 ${
                        activeImage === i
                          ? "border-bordeaux"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(i)}
                    >
                      <AppImage
                        src={image}
                        alt={`${product.title} - view ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))
                : [...Array(4)].map((_, i) => (
                    <button
                      key={i}
                      className={`aspect-square relative bg-white overflow-hidden border-2 ${
                        activeImage === i
                          ? "border-bordeaux"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(i)}
                    >
                      <div className="w-full h-full bg-osloGray/10"></div>
                    </button>
                  ))}
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

            {/* Product description */}
            <div className="py-4 text-osloGray mb-6">
              <p>{product.description}</p>
            </div>

            {/* Add to cart */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex border border-osloGray/30">
                  <button
                    className="px-3 py-2 border-r border-osloGray/30 text-osloGray"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-12 text-center py-2 border-0 focus:outline-none"
                    min="1"
                  />
                  <button
                    className="px-3 py-2 border-l border-osloGray/30 text-osloGray"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn-primary flex-1"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
              <button
                className="w-full py-3 border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-islandSpice transition-colors"
                onClick={handleAddToWishlist}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
