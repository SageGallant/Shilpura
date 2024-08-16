"use client";

import { useState } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AppImage from "../components/AppImage";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-islandSpice mb-6">
            ARTISAN CRAFTS COLLECTION
          </h1>
          <p className="text-lg md:text-xl text-islandSpice mb-8 font-montserrat">
            Discover unique handcrafted pieces from master artisans around the
            world
          </p>
          <Link href="/collection" className="btn-primary">
            EXPLORE COLLECTION
          </Link>
        </div>
        <div className="absolute inset-0 z-0">
          <AppImage
            src="/images/Hero.png"
            alt="Shilpura hero image featuring handcrafted artisan products"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-islandSpice">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux">
              Featured Categories
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 border border-osloGray text-osloGray hover:text-bordeaux hover:border-bordeaux transition-colors">
                <span className="sr-only">Previous</span>
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="p-2 border border-osloGray text-osloGray hover:text-bordeaux hover:border-bordeaux transition-colors">
                <span className="sr-only">Next</span>
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[4/5] bg-osloGray/20 relative overflow-hidden">
                <AppImage
                  src="/images/Products/Ceramic_Bowl1.png"
                  alt="Handcrafted ceramics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-playfair text-islandSpice mb-2">
                    Ceramics
                  </h3>
                  <Link
                    href="/category/ceramics"
                    className="text-islandSpice text-sm font-montserrat inline-flex items-center"
                  >
                    Explore Collection
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Category 2 */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[4/5] bg-osloGray/20 relative overflow-hidden">
                <AppImage
                  src="/images/Products/Pillow_Cover1.png"
                  alt="Handcrafted textiles"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-playfair text-islandSpice mb-2">
                    Textiles
                  </h3>
                  <Link
                    href="/category/textiles"
                    className="text-islandSpice text-sm font-montserrat inline-flex items-center"
                  >
                    Explore Collection
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Category 3 */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[4/5] bg-osloGray/20 relative overflow-hidden">
                <AppImage
                  src="/images/Products/Silver_Turquoise1.png"
                  alt="Handcrafted jewelry"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-playfair text-islandSpice mb-2">
                    Jewelry
                  </h3>
                  <Link
                    href="/category/jewelry"
                    className="text-islandSpice text-sm font-montserrat inline-flex items-center"
                  >
                    Explore Collection
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux text-center mb-12">
            Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Explore Item 1 */}
            <div className="group relative overflow-hidden aspect-video md:aspect-square bg-osloGray/10">
              <AppImage
                src="/images/Artisan/Isabella3.png"
                alt="Natural dyeing techniques"
                fill
                className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-islandSpice/80 p-6 transform transition-transform duration-500 group-hover:scale-105">
                  <p className="text-bordeaux font-cormorant text-lg">
                    Discover the art of
                  </p>
                  <h3 className="text-2xl font-playfair text-bordeaux mb-2">
                    Natural Dyeing
                  </h3>
                  <Link
                    href="/explore/natural-dyeing"
                    className="border-b border-bordeaux text-sm text-bordeaux hover:border-bordeaux/70 hover:text-bordeaux/70 transition-colors"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>

            {/* Explore Item 2 */}
            <div className="group relative overflow-hidden aspect-video md:aspect-square bg-osloGray/10">
              <AppImage
                src="/images/Products/Terracotta2.png"
                alt="Seasonal collection"
                fill
                className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-islandSpice/80 p-6 transform transition-transform duration-500 group-hover:scale-105">
                  <p className="text-bordeaux font-cormorant text-lg">
                    Explore our
                  </p>
                  <h3 className="text-2xl font-playfair text-bordeaux mb-2">
                    Seasonal Collection
                  </h3>
                  <Link
                    href="/explore/seasonal"
                    className="border-b border-bordeaux text-sm text-bordeaux hover:border-bordeaux/70 hover:text-bordeaux/70 transition-colors"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>

            {/* Explore Item 3 */}
            <div className="group relative overflow-hidden aspect-video md:aspect-square bg-osloGray/10">
              <AppImage
                src="/images/Artisan/Kwame3.png"
                alt="Sustainable crafts"
                fill
                className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-islandSpice/80 p-6 transform transition-transform duration-500 group-hover:scale-105">
                  <p className="text-bordeaux font-cormorant text-lg">
                    Learn about
                  </p>
                  <h3 className="text-2xl font-playfair text-bordeaux mb-2">
                    Sustainable Crafts
                  </h3>
                  <Link
                    href="/explore/sustainable"
                    className="border-b border-bordeaux text-sm text-bordeaux hover:border-bordeaux/70 hover:text-bordeaux/70 transition-colors"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Feature */}
      <section className="py-20 bg-islandSpice">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/5] relative overflow-hidden">
                <AppImage
                  src="/images/Artisan/Amina1.png"
                  alt="Featured artisan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-bordeaux font-cormorant text-lg mb-2">
                Featured Artisan
              </p>
              <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-4">
                Amina Mansouri
              </h2>
              <p className="text-osloGray mb-6">
                Amina Mansouri is a third-generation ceramic artist from Fes,
                Morocco, known for her exceptional hand-painted terracotta works
                that blend traditional Moroccan patterns with contemporary
                design sensibilities.
              </p>
              <p className="text-osloGray mb-8">
                Each piece tells a story of cultural heritage, skillful
                craftsmanship, and artistic evolution. Her ceramics are created
                using clay from the Rif Mountains, formed on traditional wheels,
                sun-dried, and fired in wood-burning kilns.
              </p>
              <Link href="/artisan/amina-mansouri" className="btn-secondary">
                Meet Amina
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux">
              Featured Products
            </h2>
            <Link
              href="/collection"
              className="text-bordeaux hover:text-terracotta transition-colors flex items-center"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Product 1 */}
            <div className="group relative">
              <Link
                href="/product/sterling-silver-turquoise-necklace"
                className="block overflow-hidden"
              >
                <div className="aspect-[4/5] bg-osloGray/10 mb-4 overflow-hidden relative">
                  <AppImage
                    src="/images/Products/Silver_Turquoise1.png"
                    alt="Sterling Silver & Turquoise Necklace"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div>
                <Link
                  href="/product/sterling-silver-turquoise-necklace"
                  className="block"
                >
                  <h3 className="text-lg font-playfair mb-1 group-hover:text-bordeaux transition-colors">
                    Sterling Silver & Turquoise Necklace
                  </h3>
                </Link>
                <p className="text-bordeaux font-montserrat font-medium mb-1">
                  $695
                </p>
                <p className="text-sm text-osloGray">Hand-crafted in Mexico</p>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="group relative">
              <Link
                href="/product/hand-thrown-ceramic-bowl-set"
                className="block overflow-hidden"
              >
                <div className="aspect-[4/5] bg-osloGray/10 mb-4 overflow-hidden relative">
                  <AppImage
                    src="/images/Products/Ceramic_Bowl1.png"
                    alt="Hand-Thrown Ceramic Bowl Set"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div>
                <Link
                  href="/product/hand-thrown-ceramic-bowl-set"
                  className="block"
                >
                  <h3 className="text-lg font-playfair mb-1 group-hover:text-bordeaux transition-colors">
                    Hand-Thrown Ceramic Bowl Set
                  </h3>
                </Link>
                <p className="text-bordeaux font-montserrat font-medium mb-1">
                  $345
                </p>
                <p className="text-sm text-osloGray">Hand-crafted in Japan</p>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="group relative">
              <Link
                href="/product/hand-knotted-wool-rug"
                className="block overflow-hidden"
              >
                <div className="aspect-[4/5] bg-osloGray/10 mb-4 overflow-hidden relative">
                  <AppImage
                    src="/images/Products/Wool_Rug1.png"
                    alt="Hand-Knotted Wool Rug"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div>
                <Link href="/product/hand-knotted-wool-rug" className="block">
                  <h3 className="text-lg font-playfair mb-1 group-hover:text-bordeaux transition-colors">
                    Hand-Knotted Wool Rug
                  </h3>
                </Link>
                <p className="text-bordeaux font-montserrat font-medium mb-1">
                  $580
                </p>
                <p className="text-sm text-osloGray">Hand-crafted in Turkey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-islandSpice/20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux text-center mb-12">
            From Our Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-osloGray mb-6 text-center">
                The craftsmanship is exceptional. I've purchased artisanal goods
                from around the world, and Shilpura's collection stands out for
                its authenticity and quality.
              </p>
              <div className="text-center">
                <p className="font-medium text-bordeaux">Sarah Johnson</p>
                <p className="text-sm text-osloGray">New York, USA</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-osloGray mb-6 text-center">
                I love knowing the story behind each piece I buy. The connection
                to the artisans makes every purchase meaningful and special.
              </p>
              <div className="text-center">
                <p className="font-medium text-bordeaux">James Martinez</p>
                <p className="text-sm text-osloGray">Barcelona, Spain</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-osloGray mb-6 text-center">
                The ceramic bowls I purchased are not just functional
                items—they're pieces of art that bring joy every time I use
                them. Truly exceptional quality.
              </p>
              <div className="text-center">
                <p className="font-medium text-bordeaux">Emma Chen</p>
                <p className="text-sm text-osloGray">Toronto, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
