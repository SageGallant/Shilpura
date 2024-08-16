"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import AppImage from "../../../components/AppImage";
import { useCart, WishlistItem } from "../../../context/CartContext";
import { Product } from "../../../lib/products";
import { useToast } from "../../../context/ToastContext";

// Note: Metadata can only be used in Server Components, so we need to move it outside
// export const metadata: Metadata = {
//   title: "Profile Information",
//   description:
//     "Manage your Shilpura account, view orders, saved addresses, and wishlist items",
// };

// Mock user data
const userData = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  phone: "+91 98765 43210",
  joinDate: "August 2023",
  profileImage: "/images/placeholder-profile.jpg", // Would be replaced with actual image path
};

// Mock order history
const orderHistory = [
  {
    id: "ORD-5837294",
    date: "July 15, 2024",
    total: 12500,
    status: "Delivered",
    items: [
      {
        id: "PROD-001",
        name: "Hand-painted Blue Pottery Vase",
        price: 4500,
        quantity: 1,
        image: "/images/products/blue-pottery-vase.jpg",
      },
      {
        id: "PROD-008",
        name: "Embroidered Wall Hanging",
        price: 8000,
        quantity: 1,
        image: "/images/products/wall-hanging.jpg",
      },
    ],
  },
  {
    id: "ORD-4926184",
    date: "May 22, 2024",
    total: 7800,
    status: "Delivered",
    items: [
      {
        id: "PROD-015",
        name: "Handwoven Pashmina Shawl",
        price: 7800,
        quantity: 1,
        image: "/images/products/pashmina-shawl.jpg",
      },
    ],
  },
  {
    id: "ORD-3751049",
    date: "March 10, 2024",
    total: 3200,
    status: "Delivered",
    items: [
      {
        id: "PROD-023",
        name: "Brass Decorative Plate",
        price: 3200,
        quantity: 1,
        image: "/images/products/brass-plate.jpg",
      },
    ],
  },
];

// Mock saved addresses
const savedAddresses = [
  {
    id: "ADDR-001",
    type: "Home",
    name: "Priya Sharma",
    street: "42 Lotus Lane, Vasant Vihar",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "110057",
    country: "India",
    phone: "+91 98765 43210",
    isDefault: true,
  },
  {
    id: "ADDR-002",
    type: "Office",
    name: "Priya Sharma",
    street: "Block C, DLF Cyber City, Phase 2",
    city: "Gurugram",
    state: "Haryana",
    postalCode: "122002",
    country: "India",
    phone: "+91 98765 43210",
    isDefault: false,
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile-info");
  const { wishlistItems, removeFromWishlist, addToCart } = useCart(); // Get wishlist from context
  const { showToast } = useToast();

  // Handle remove from wishlist
  const handleRemoveFromWishlist = (id: string) => {
    removeFromWishlist(id);
  };

  // Handle add to cart
  const handleAddToCart = (item: WishlistItem) => {
    // Create a simple product object with required fields
    const productToAdd: Partial<Product> = {
      id: item.id,
      title: item.name,
      price: item.price,
      images: [item.image || ""],
      artisan: "Unknown Artisan", // Default value
      materials: ["Not specified"], // Default value
      origin: "Unknown", // Required by Product type
      artisanId: "unknown", // Required by Product type
      description: "", // Required by Product type
      details: [], // Required by Product type
      category: "", // Required by Product type
      featured: false, // Required by Product type
      new: false, // Required by Product type
      sustainabilityBadges: [], // Required by Product type
      related: [], // Required by Product type
      slug: item.id, // Using id as slug as a fallback
    };

    addToCart(productToAdd as Product, 1);
    removeFromWishlist(item.id);
    showToast(
      `${item.name} has been added to your cart`,
      "success",
      "Added to Cart"
    );
  };

  return (
    <div className="min-h-screen bg-islandSpice/10">
      {/* Profile Navigation & Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-200 border-2 border-gold">
                    {/* Profile image placeholder */}
                    <div className="w-full h-full bg-gold/20 flex items-center justify-center text-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-bordeaux text-lg font-playfair">
                    {userData.name}
                  </h2>
                  <p className="text-osloGray text-sm">
                    Member since {userData.joinDate}
                  </p>
                </div>

                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab("profile-info")}
                    className={`block w-full text-left py-2 px-4 rounded-md transition-colors ${
                      activeTab === "profile-info"
                        ? "text-bordeaux bg-islandSpice/30 font-medium"
                        : "text-osloGray hover:bg-islandSpice/20"
                    }`}
                  >
                    Profile Information
                  </button>
                  <button
                    onClick={() => setActiveTab("order-history")}
                    className={`block w-full text-left py-2 px-4 rounded-md transition-colors ${
                      activeTab === "order-history"
                        ? "text-bordeaux bg-islandSpice/30 font-medium"
                        : "text-osloGray hover:bg-islandSpice/20"
                    }`}
                  >
                    Order History
                  </button>
                  <button
                    onClick={() => setActiveTab("addresses")}
                    className={`block w-full text-left py-2 px-4 rounded-md transition-colors ${
                      activeTab === "addresses"
                        ? "text-bordeaux bg-islandSpice/30 font-medium"
                        : "text-osloGray hover:bg-islandSpice/20"
                    }`}
                  >
                    Saved Addresses
                  </button>
                  <button
                    onClick={() => setActiveTab("wishlist")}
                    className={`block w-full text-left py-2 px-4 rounded-md transition-colors ${
                      activeTab === "wishlist"
                        ? "text-bordeaux bg-islandSpice/30 font-medium"
                        : "text-osloGray hover:bg-islandSpice/20"
                    }`}
                  >
                    Wishlist
                  </button>
                  <button
                    onClick={() => setActiveTab("account-settings")}
                    className={`block w-full text-left py-2 px-4 rounded-md transition-colors ${
                      activeTab === "account-settings"
                        ? "text-bordeaux bg-islandSpice/30 font-medium"
                        : "text-osloGray hover:bg-islandSpice/20"
                    }`}
                  >
                    Account Settings
                  </button>
                </nav>

                <div className="mt-8 pt-4 border-t border-gray-200">
                  <button className="w-full py-2 text-terracotta hover:text-bordeaux transition-colors font-medium">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Profile Information Section */}
              {activeTab === "profile-info" && (
                <section
                  id="profile-info"
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-playfair text-bordeaux">
                      Profile Information
                    </h2>
                    <button className="text-terracotta hover:text-bordeaux transition-colors flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    <div>
                      <p className="text-sm text-osloGray mb-1">Full Name</p>
                      <p className="font-medium">{userData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-osloGray mb-1">
                        Email Address
                      </p>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-osloGray mb-1">Phone Number</p>
                      <p className="font-medium">{userData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-osloGray mb-1">Member Since</p>
                      <p className="font-medium">{userData.joinDate}</p>
                    </div>
                  </div>
                </section>
              )}

              {/* Order History Section */}
              {activeTab === "order-history" && (
                <section
                  id="order-history"
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-playfair text-bordeaux mb-6">
                    Order History
                  </h2>

                  {orderHistory.length > 0 ? (
                    <div className="space-y-6">
                      {orderHistory.map((order) => (
                        <div
                          key={order.id}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <div className="bg-islandSpice/20 p-4 flex flex-col sm:flex-row sm:items-center justify-between">
                            <div>
                              <p className="font-medium text-bordeaux">
                                {order.id}
                              </p>
                              <p className="text-sm text-osloGray">
                                Ordered on {order.date}
                              </p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center mt-2 sm:mt-0 gap-2 sm:gap-4">
                              <p className="text-sm font-medium">
                                ₹{order.total.toLocaleString()}
                              </p>
                              <span
                                className={`px-3 py-1 text-xs rounded-full ${
                                  order.status === "Delivered"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : order.status === "Processing"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-amber-100 text-amber-700"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="space-y-4">
                              {order.items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center gap-4"
                                >
                                  <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0">
                                    {/* Product image placeholder */}
                                    <div className="w-full h-full bg-osloGray/10 flex items-center justify-center text-osloGray">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
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
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-sm text-osloGray">
                                      Qty: {item.quantity}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">
                                      ₹{item.price.toLocaleString()}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                              <Link
                                href={`/order/${order.id}`}
                                className="text-terracotta hover:text-bordeaux transition-colors font-medium"
                              >
                                View Order Details
                              </Link>
                              <button className="text-osloGray hover:text-bordeaux transition-colors text-sm">
                                Download Invoice
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-islandSpice/10 rounded-lg">
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
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      <h3 className="text-lg font-medium text-bordeaux mb-2">
                        No Orders Yet
                      </h3>
                      <p className="text-osloGray mb-4">
                        You haven't placed any orders with us yet.
                      </p>
                      <Link
                        href="/products"
                        className="inline-block bg-terracotta text-white py-2 px-6 rounded-md hover:bg-terracotta/90"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  )}
                </section>
              )}

              {/* Saved Addresses Section */}
              {activeTab === "addresses" && (
                <section
                  id="addresses"
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-playfair text-bordeaux">
                      Saved Addresses
                    </h2>
                    <button className="text-white bg-terracotta hover:bg-terracotta/90 py-2 px-4 rounded-md transition-colors flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Add New Address
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedAddresses.map((address) => (
                      <div
                        key={address.id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">
                              {address.type}
                            </span>
                            {address.isDefault && (
                              <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">
                                Default
                              </span>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-osloGray hover:text-bordeaux transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </button>
                            <button className="text-osloGray hover:text-red-500 transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="space-y-1 text-sm">
                          <p className="font-medium">{address.name}</p>
                          <p>{address.street}</p>
                          <p>
                            {address.city}, {address.state} {address.postalCode}
                          </p>
                          <p>{address.country}</p>
                          <p className="pt-1">{address.phone}</p>
                        </div>

                        {!address.isDefault && (
                          <button className="mt-3 text-terracotta hover:text-bordeaux transition-colors text-sm">
                            Set as Default
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Wishlist Section */}
              {activeTab === "wishlist" && (
                <section
                  id="wishlist"
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-playfair text-bordeaux mb-6">
                    My Wishlist
                  </h2>

                  {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {wishlistItems.map((item) => (
                        <div
                          key={item.id}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <div className="relative h-48 bg-gray-200">
                            {/* Product image placeholder */}
                            {item.image ? (
                              <AppImage
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-osloGray/10 flex items-center justify-center text-osloGray">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-12 w-12"
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
                              </div>
                            )}
                            <button
                              onClick={() => handleRemoveFromWishlist(item.id)}
                              className="absolute top-2 right-2 text-osloGray hover:text-red-500 transition-colors bg-white rounded-full p-1.5 shadow-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                            {!item.inStock && (
                              <div className="absolute top-2 left-2 bg-red-100 text-red-700 text-xs px-2 py-1 rounded-md">
                                Out of Stock
                              </div>
                            )}
                          </div>

                          <div className="p-4">
                            <h3 className="font-medium text-bordeaux mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-osloGray mb-2">
                              Unknown Artisan
                            </p>
                            <p className="font-medium mb-3">
                              ₹{item.price.toLocaleString()}
                            </p>

                            <button
                              onClick={() => handleAddToCart(item)}
                              className={`w-full py-2 rounded-md ${
                                item.inStock !== false
                                  ? "bg-terracotta text-white hover:bg-terracotta/90"
                                  : "bg-gray-200 text-osloGray cursor-not-allowed"
                              }`}
                              disabled={item.inStock === false}
                            >
                              {item.inStock !== false
                                ? "Add to Cart"
                                : "Notify When Available"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-islandSpice/10 rounded-lg">
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <h3 className="text-lg font-medium text-bordeaux mb-2">
                        Your Wishlist is Empty
                      </h3>
                      <p className="text-osloGray mb-4">
                        You haven't added any items to your wishlist yet.
                      </p>
                      <Link
                        href="/collection"
                        className="inline-block bg-terracotta text-white py-2 px-6 rounded-md hover:bg-terracotta/90"
                      >
                        Explore Products
                      </Link>
                    </div>
                  )}
                </section>
              )}

              {/* Account Settings Section */}
              {activeTab === "account-settings" && (
                <section
                  id="account-settings"
                  className="bg-white rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-playfair text-bordeaux mb-6">
                    Account Settings
                  </h2>

                  <div className="space-y-6">
                    {/* Password Change */}
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium">Password & Security</h3>
                        <button className="text-terracotta hover:text-bordeaux transition-colors">
                          Change Password
                        </button>
                      </div>
                      <p className="text-sm text-osloGray">
                        Your password was last updated 3 months ago. We
                        recommend changing your password regularly for security.
                      </p>
                    </div>

                    {/* Communication Preferences */}
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium mb-4">
                        Communication Preferences
                      </h3>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-osloGray">
                              Receive updates about orders, products and
                              promotions
                            </p>
                          </div>
                          <div className="relative">
                            <div className="w-12 h-6 bg-terracotta rounded-full"></div>
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">SMS Notifications</p>
                            <p className="text-sm text-osloGray">
                              Receive order status updates via text message
                            </p>
                          </div>
                          <div className="relative">
                            <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Account Management */}
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium mb-4">Account Management</h3>

                      <div className="space-y-4">
                        <button className="text-bordeaux hover:text-terracotta transition-colors text-sm">
                          Download Personal Data
                        </button>

                        <div className="border-t border-gray-200 pt-4">
                          <button className="text-red-500 hover:text-red-700 transition-colors text-sm">
                            Deactivate Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
