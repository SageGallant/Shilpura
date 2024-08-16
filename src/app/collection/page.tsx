"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/products";

// Define filter categories
const categories = [
  { id: "all", name: "All Products" },
  { id: "ceramics", name: "Ceramics" },
  { id: "textiles", name: "Textiles" },
  { id: "jewelry", name: "Jewelry" },
  { id: "home-decor", name: "Home Decor" },
];

const origins = [
  { id: "all", name: "All Origins" },
  { id: "morocco", name: "Morocco" },
  { id: "peru", name: "Peru" },
  { id: "mexico", name: "Mexico" },
  { id: "ghana", name: "Ghana" },
  { id: "japan", name: "Japan" },
  { id: "india", name: "India" },
  { id: "kenya", name: "Kenya" },
  { id: "turkey", name: "Turkey" },
];

const badges = [
  { id: "eco-friendly-materials", name: "Eco-Friendly Materials" },
  { id: "traditional-craft", name: "Traditional Craft" },
  { id: "fair-trade", name: "Fair Trade" },
  { id: "ethical-sourcing", name: "Ethical Sourcing" },
];

const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "newest", name: "Newest" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
];

// Price Range Slider Component
const PriceRangeSlider = ({ priceRange, setPriceRange, min, max }) => {
  const [localValues, setLocalValues] = useState(priceRange);

  // Calculate percentage position for styling the range slider
  const leftThumbPosition = ((localValues[0] - min) / (max - min)) * 100;
  const rightThumbPosition = ((localValues[1] - min) / (max - min)) * 100;

  const handleChange = (e, index) => {
    const newValues = [...localValues];
    const value = Number(e.target.value);

    if (index === 0) {
      // Ensure min doesn't exceed max
      newValues[0] = Math.min(value, localValues[1] - 10);
    } else {
      // Ensure max doesn't go below min
      newValues[1] = Math.max(value, localValues[0] + 10);
    }

    setLocalValues(newValues);
  };

  // Update parent component state when thumb is released
  const handleMouseUp = () => {
    setPriceRange(localValues);
  };

  // Styling for the range track
  const rangeStyle = {
    left: `${leftThumbPosition}%`,
    width: `${rightThumbPosition - leftThumbPosition}%`,
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-osloGray">${localValues[0]}</span>
        <span className="text-osloGray">${localValues[1]}</span>
      </div>

      <div className="relative h-6">
        {/* Range Track Background */}
        <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-osloGray/20 rounded"></div>

        {/* Active Range Track */}
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 bg-bordeaux rounded"
          style={rangeStyle}
        ></div>

        {/* Min Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={localValues[0]}
          onChange={(e) => handleChange(e, 0)}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className="absolute top-0 left-0 w-full h-6 appearance-none bg-transparent pointer-events-none z-10"
          style={{
            // Override default styling
            "--thumb-width": "16px",
            "--thumb-color": "#8A1538", // bordeaux color
          }}
        />

        {/* Max Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={localValues[1]}
          onChange={(e) => handleChange(e, 1)}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className="absolute top-0 left-0 w-full h-6 appearance-none bg-transparent pointer-events-none z-20"
          style={{
            // Override default styling
            "--thumb-width": "16px",
            "--thumb-color": "#8A1538", // bordeaux color
          }}
        />
      </div>

      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: var(--thumb-width);
          height: var(--thumb-width);
          border-radius: 50%;
          background: var(--thumb-color);
          cursor: pointer;
          pointer-events: auto;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: var(--thumb-width);
          height: var(--thumb-width);
          border-radius: 50%;
          background: var(--thumb-color);
          cursor: pointer;
          pointer-events: auto;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedOrigin, setSelectedOrigin] = useState("all");
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter products based on selected filters
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by origin
    if (selectedOrigin !== "all") {
      result = result.filter(
        (product) => product.origin.toLowerCase() === selectedOrigin
      );
    }

    // Filter by sustainability badges
    if (selectedBadges.length > 0) {
      result = result.filter((product) =>
        selectedBadges.every((badge) =>
          product.sustainabilityBadges.includes(badge)
        )
      );
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case "newest":
        result = result
          .filter((product) => product.new)
          .concat(result.filter((product) => !product.new));
        break;
      case "price-low":
        result = result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = result.sort((a, b) => b.price - a.price);
        break;
      case "featured":
      default:
        result = result
          .filter((product) => product.featured)
          .concat(result.filter((product) => !product.featured));
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedOrigin, selectedBadges, priceRange, sortBy]);

  // Toggle sustainability badge selection
  const toggleBadge = (badgeId: string) => {
    if (selectedBadges.includes(badgeId)) {
      setSelectedBadges(selectedBadges.filter((id) => id !== badgeId));
    } else {
      setSelectedBadges([...selectedBadges, badgeId]);
    }
  };

  return (
    <div className="bg-islandSpice min-h-screen pt-8 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-bordeaux mb-4">
            Our Collection
          </h1>
          <p className="text-osloGray max-w-2xl mx-auto">
            Discover our curated collection of handcrafted treasures from
            skilled artisans around the world. Each piece tells a unique story
            and celebrates cultural heritage through traditional craftsmanship.
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="block lg:hidden mb-6">
          <button
            className="w-full bg-white py-3 px-4 flex items-center justify-between shadow-sm"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <span className="font-medium text-bordeaux">Filters & Sorting</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-bordeaux transition-transform duration-300 ${
                isMobileFilterOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Filters - Desktop & Mobile */}
          <div
            className={`w-full lg:w-1/4 lg:pr-8 ${
              isMobileFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white p-6 mb-6 shadow-sm">
              {/* Sort By */}
              <div className="mb-8">
                <h3 className="font-playfair text-lg mb-4 text-bordeaux">
                  Sort By
                </h3>
                <select
                  className="w-full p-2 border border-osloGray/30 focus:outline-none focus:border-bordeaux"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-playfair text-lg mb-4 text-bordeaux">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category.id}`}
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="mr-2 text-bordeaux focus:ring-bordeaux"
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="text-osloGray"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Origins */}
              <div className="mb-8">
                <h3 className="font-playfair text-lg mb-4 text-bordeaux">
                  Origins
                </h3>
                <div className="space-y-2">
                  {origins.map((origin) => (
                    <div key={origin.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`origin-${origin.id}`}
                        name="origin"
                        checked={selectedOrigin === origin.id}
                        onChange={() => setSelectedOrigin(origin.id)}
                        className="mr-2 text-bordeaux focus:ring-bordeaux"
                      />
                      <label
                        htmlFor={`origin-${origin.id}`}
                        className="text-osloGray"
                      >
                        {origin.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-playfair text-lg mb-4 text-bordeaux">
                  Price Range
                </h3>
                <PriceRangeSlider
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  min={0}
                  max={1000}
                />
              </div>

              {/* Sustainability */}
              <div className="mb-8">
                <h3 className="font-playfair text-lg mb-4 text-bordeaux">
                  Sustainability
                </h3>
                <div className="space-y-2">
                  {badges.map((badge) => (
                    <div key={badge.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`badge-${badge.id}`}
                        checked={selectedBadges.includes(badge.id)}
                        onChange={() => toggleBadge(badge.id)}
                        className="mr-2 text-bordeaux focus:ring-bordeaux"
                      />
                      <label
                        htmlFor={`badge-${badge.id}`}
                        className="text-osloGray"
                      >
                        {badge.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reset Filters Button */}
              <button
                className="w-full py-2 border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-islandSpice transition-colors"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedOrigin("all");
                  setSelectedBadges([]);
                  setPriceRange([0, 1000]);
                  setSortBy("featured");
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="w-full lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-playfair text-bordeaux mb-4">
                  No products found
                </h3>
                <p className="text-osloGray mb-6">
                  No products match your current filter selection.
                </p>
                <button
                  className="py-2 px-6 border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-islandSpice transition-colors"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedOrigin("all");
                    setSelectedBadges([]);
                    setPriceRange([0, 1000]);
                    setSortBy("featured");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
