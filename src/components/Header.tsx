"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { products } from "../lib/products";
import { useWishlistCount } from "../hooks/useWishlistCount";
import AppImage from "./AppImage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { cartCount } = useCart();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Update search results as user types
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filteredProducts = products
      .filter((product) => {
        const searchableText = [
          product.title,
          product.description,
          product.category,
          product.origin,
          product.artisan,
          ...product.materials,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(term);
      })
      .slice(0, 5); // Limit to 5 results for better UX

    setSearchResults(filteredProducts);
  }, [searchTerm]);

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current?.value.trim();

    if (searchTerm) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setIsSearchOpen(false);
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  // Handle search result click
  const handleSearchResultClick = (slug: string) => {
    router.push(`/product/${slug}`);
    setIsSearchOpen(false);
    setSearchTerm("");
    setSearchResults([]);
  };

  // Close search on escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-playfair font-bold text-bordeaux"
            >
              SHILPURA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/collection"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors"
            >
              Collection
            </Link>
            <Link
              href="/artisans"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors"
            >
              Artisans
            </Link>
            <Link
              href="/about"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="/sustainability"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors"
            >
              Sustainability
            </Link>
            <Link
              href="/contact"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <Link
              href="/account"
              aria-label="Account"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-bordeaux text-islandSpice text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              aria-label="Menu"
              className="md:hidden text-bordeaux hover:text-bordeaux/80 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t border-osloGray/10">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/collection"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </Link>
            <Link
              href="/artisans"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Artisans
            </Link>
            <Link
              href="/about"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/sustainability"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Sustainability
            </Link>
            <Link
              href="/contact"
              className="text-bordeaux hover:text-bordeaux/80 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center pt-20 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-playfair text-bordeaux">
                Search Products
              </h2>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-osloGray hover:text-bordeaux"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSearch}>
              <div className="flex gap-2">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for products, materials, artisans..."
                  className="flex-grow border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-bordeaux"
                  onKeyDown={handleKeyDown}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-bordeaux text-white px-6 py-3 rounded-md hover:bg-bordeaux/90"
                >
                  Search
                </button>
              </div>
              <p className="mt-2 text-sm text-osloGray">
                Press ESC to close search
              </p>
            </form>

            {/* Real-time Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-4 border-t border-gray-200 pt-3 max-h-96 overflow-y-auto">
                <h3 className="text-sm text-osloGray mb-2">Suggestions</h3>
                <ul className="divide-y divide-gray-100">
                  {searchResults.map((product) => (
                    <li key={product.id} className="py-2">
                      <button
                        onClick={() => handleSearchResultClick(product.slug)}
                        className="w-full text-left flex items-center gap-3 hover:bg-islandSpice/10 p-2 rounded-md transition-colors"
                      >
                        <div className="w-12 h-12 bg-osloGray/10 flex-shrink-0 rounded-md flex items-center justify-center">
                          {product.images[0] ? (
                            <AppImage
                              src={product.images[0]}
                              alt={product.title}
                              width={48}
                              height={48}
                              className="object-cover rounded-md"
                            />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-osloGray"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-bordeaux">
                            {product.title}
                          </h4>
                          <p className="text-sm text-osloGray">
                            ${product.price.toLocaleString()} -{" "}
                            {product.category}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
