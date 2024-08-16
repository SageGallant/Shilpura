"use client";

import { useState } from "react";
import Link from "next/link";
import AppImage from "../../components/AppImage";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";
import CheckoutModal from "../../components/checkout/CheckoutModal";

// Shipping options
const shippingOptions = [
  {
    id: "standard",
    name: "Standard Delivery",
    price: 35,
    description: "Delivery in 5-7 business days",
    isDefault: true,
  },
  {
    id: "express",
    name: "Express Delivery",
    price: 75,
    description: "Delivery in 2-3 business days",
    isDefault: false,
  },
  {
    id: "premium",
    name: "Premium Delivery",
    price: 150,
    description:
      "White-glove service with priority handling, delivery in 1-2 business days",
    isDefault: false,
  },
];

export default function CartPage() {
  const router = useRouter();
  const {
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  } = useCart();
  const { showToast } = useToast();

  const [selectedShipping, setSelectedShipping] = useState("standard");
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Get shipping cost from selected option
  const shipping =
    shippingOptions.find((option) => option.id === selectedShipping)?.price ||
    150;

  // Calculate tax (assuming 5% GST)
  const taxRate = 0.05;
  const tax = Math.round(subtotal * taxRate);

  // Calculate total
  const total = subtotal + shipping + tax - couponDiscount;

  // Handle move to wishlist
  const handleMoveToWishlist = (id) => {
    // Find the item in cart
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      // We need to convert cart item to product format for wishlist
      const product = {
        id: item.id,
        title: item.name,
        price: item.price,
        images: [item.image],
      };

      addToWishlist(product);
      removeFromCart(id);
      showToast(`${item.name} moved to your wishlist`, "success", "Item Moved");
    }
  };

  // Apply coupon code
  const handleApplyCoupon = () => {
    setCouponError("");
    setCouponDiscount(0);

    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    // Demo coupon codes
    if (couponCode === "WELCOME10") {
      const discount = Math.round(subtotal * 0.1); // 10% discount
      setCouponDiscount(discount);
    } else if (couponCode === "SHILPURA500") {
      setCouponDiscount(150); // Fixed amount off
    } else if (couponCode === "PREMIUM20") {
      const discount = Math.round(subtotal * 0.2); // 20% discount for premium customers
      setCouponDiscount(discount);
    } else {
      setCouponError("Invalid or expired coupon code");
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showToast("Your cart is empty", "error", "Cannot Checkout");
      return;
    }

    setShowCheckoutModal(true);
  };

  return (
    <div className="min-h-screen bg-islandSpice/10">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-bordeaux to-terracotta py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-playfair text-white">
            Your Shopping Cart
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-playfair text-bordeaux">
                      Shopping Cart ({cartItems.length} items)
                    </h2>
                  </div>

                  {/* Cart Items List */}
                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                          {/* Product Image */}
                          <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-md flex-shrink-0 relative">
                            {item.image ? (
                              <AppImage
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded-md"
                              />
                            ) : (
                              <div className="w-full h-full bg-osloGray/10 flex items-center justify-center text-osloGray">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-10 w-10"
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
                          </div>

                          {/* Product Details */}
                          <div className="flex-grow">
                            <div className="flex flex-wrap justify-between gap-2">
                              <h3 className="font-medium text-bordeaux">
                                {item.name}
                              </h3>
                              <p className="font-medium">
                                ${item.price.toLocaleString()}
                              </p>
                            </div>

                            <div className="mt-2 text-sm text-osloGray">
                              <p>By {item.artisan}</p>
                              <p>Material: {item.material}</p>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                              {/* Quantity Controls */}
                              <div className="flex items-center">
                                <span className="text-sm text-osloGray mr-2">
                                  Quantity:
                                </span>
                                <div className="flex border border-gray-200 rounded-md">
                                  <button
                                    onClick={() =>
                                      updateCartItemQuantity(item.id, -1)
                                    }
                                    className="w-8 h-8 flex items-center justify-center text-osloGray hover:text-bordeaux disabled:opacity-50"
                                    disabled={item.quantity <= 1}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 12H4"
                                      />
                                    </svg>
                                  </button>
                                  <div className="w-10 h-8 flex items-center justify-center border-x border-gray-200">
                                    {item.quantity}
                                  </div>
                                  <button
                                    onClick={() =>
                                      updateCartItemQuantity(item.id, 1)
                                    }
                                    className="w-8 h-8 flex items-center justify-center text-osloGray hover:text-bordeaux disabled:opacity-50"
                                    disabled={item.quantity >= item.maxQuantity}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
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
                                  </button>
                                </div>
                              </div>

                              {/* Item Total & Actions */}
                              <div className="flex items-center gap-4">
                                <p className="font-medium">
                                  $
                                  {(
                                    item.price * item.quantity
                                  ).toLocaleString()}
                                </p>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-osloGray hover:text-red-500 transition-colors"
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
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleMoveToWishlist(item.id)}
                                  className="text-osloGray hover:text-bordeaux transition-colors"
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
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Continue Shopping */}
                  <div className="p-6 bg-islandSpice/10">
                    <Link
                      href="/collection"
                      className="text-bordeaux hover:text-terracotta transition-colors flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Continue Shopping
                    </Link>
                  </div>
                </div>

                {/* Gift Options */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h3 className="text-xl font-playfair text-bordeaux mb-4">
                    Gift Options
                  </h3>
                  <div className="flex items-start mb-4">
                    <input
                      type="checkbox"
                      id="gift-option"
                      checked={isGift}
                      onChange={(e) => setIsGift(e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label
                        htmlFor="gift-option"
                        className="font-medium text-bordeaux"
                      >
                        Is this a gift?
                      </label>
                      <p className="text-sm text-osloGray">
                        We'll wrap your items in premium gift packaging and
                        include a personalized gift message.
                      </p>
                    </div>
                  </div>

                  {isGift && (
                    <div>
                      <label
                        htmlFor="gift-message"
                        className="block text-sm font-medium text-osloGray mb-2"
                      >
                        Gift Message (optional)
                      </label>
                      <textarea
                        id="gift-message"
                        rows={3}
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
                        placeholder="Add your personal message here..."
                        maxLength={200}
                      ></textarea>
                      <p className="text-xs text-osloGray mt-1">
                        {200 - giftMessage.length} characters remaining
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-playfair text-bordeaux mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-osloGray">Subtotal</span>
                      <span className="font-medium">
                        ${subtotal.toLocaleString()}
                      </span>
                    </div>

                    {/* Shipping Options */}
                    <div>
                      <p className="text-osloGray mb-2">Shipping</p>
                      <div className="space-y-2">
                        {shippingOptions.map((option) => (
                          <div key={option.id} className="flex items-start">
                            <input
                              type="radio"
                              id={option.id}
                              name="shipping"
                              value={option.id}
                              checked={selectedShipping === option.id}
                              onChange={() => setSelectedShipping(option.id)}
                              className="mt-1 mr-2"
                            />
                            <label htmlFor={option.id} className="flex-grow">
                              <span className="block text-sm font-medium">
                                {option.name} - ${option.price}
                              </span>
                              <span className="block text-xs text-osloGray">
                                {option.description}
                              </span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-osloGray">Tax (GST 5%)</span>
                      <span className="font-medium">
                        ${tax.toLocaleString()}
                      </span>
                    </div>

                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${couponDiscount.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span className="text-bordeaux">
                          ${total.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-osloGray mt-1">
                        Including all taxes and shipping
                      </p>
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <div className="mb-6">
                    <label
                      htmlFor="coupon"
                      className="block text-sm font-medium text-osloGray mb-2"
                    >
                      Coupon Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="coupon"
                        value={couponCode}
                        onChange={(e) =>
                          setCouponCode(e.target.value.toUpperCase())
                        }
                        className="flex-grow border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
                        placeholder="Enter coupon code"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="bg-bordeaux text-white px-4 py-2 rounded-md hover:bg-bordeaux/90"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-red-500 text-sm mt-1">{couponError}</p>
                    )}
                    {couponDiscount > 0 && (
                      <p className="text-green-600 text-sm mt-1">
                        Coupon successfully applied!
                      </p>
                    )}
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-bordeaux text-white py-3 rounded-md hover:bg-bordeaux/90 flex items-center justify-center"
                    type="button"
                    aria-label="Proceed to checkout"
                  >
                    <span className="mr-2">Proceed to Checkout</span>
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="max-w-md mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-osloGray mb-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <h2 className="text-2xl font-playfair text-bordeaux mb-4">
                  Your Cart is Empty
                </h2>
                <p className="text-osloGray mb-8">
                  Looks like you haven't added any items to your cart yet.
                  Explore our collection to discover unique handcrafted
                  treasures from artisans across India.
                </p>
                <Link
                  href="/collection"
                  className="inline-block bg-bordeaux text-white px-6 py-3 rounded-md hover:bg-bordeaux/90"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <CheckoutModal
          isOpen={showCheckoutModal}
          onClose={() => {
            setShowCheckoutModal(false);
          }}
          subtotal={subtotal}
          shipping={shipping}
          tax={tax}
          discount={couponDiscount}
          total={total}
          isGift={isGift}
          giftMessage={giftMessage}
          selectedShipping={selectedShipping}
        />
      )}
    </div>
  );
}
