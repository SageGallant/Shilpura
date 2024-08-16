"use client";

import React from "react";

interface ReviewOrderStepProps {
  shippingDetails: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    saveAddress: boolean;
  };
  paymentDetails: {
    cardNumber: string;
    cardholderName: string;
    expiryDate: string;
    cvv: string;
    saveCard: boolean;
    paymentMethod: string;
  };
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  isGift: boolean;
  giftMessage: string;
  selectedShipping: string;
  onConfirm: () => void;
  onBack: () => void;
  isProcessing: boolean;
}

const ReviewOrderStep: React.FC<ReviewOrderStepProps> = ({
  shippingDetails,
  paymentDetails,
  subtotal,
  shipping,
  tax,
  discount,
  total,
  isGift,
  giftMessage,
  selectedShipping,
  onConfirm,
  onBack,
  isProcessing,
}) => {
  // Helper to mask card number for display
  const getDisplayCardNumber = () => {
    if (!paymentDetails.cardNumber) return "";
    const lastFourDigits = paymentDetails.cardNumber
      .replace(/\s/g, "")
      .slice(-4);
    return `•••• •••• •••• ${lastFourDigits}`;
  };

  // Helper to get payment method display name
  const getPaymentMethodName = () => {
    switch (paymentDetails.paymentMethod) {
      case "credit-card":
        return "Credit Card";
      case "paypal":
        return "PayPal";
      case "upi":
        return "UPI";
      default:
        return "Unknown payment method";
    }
  };

  // Helper to get shipping method name
  const getShippingMethodName = () => {
    switch (selectedShipping) {
      case "standard":
        return "Standard Delivery (5-7 business days)";
      case "express":
        return "Express Delivery (2-3 business days)";
      case "premium":
        return "Premium Delivery (1-2 business days)";
      default:
        return "Standard Delivery";
    }
  };

  return (
    <div>
      <h3 className="text-xl font-playfair text-bordeaux mb-6">
        Review Your Order
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Shipping Information */}
        <div>
          <h4 className="font-medium text-bordeaux mb-3 flex items-center">
            <span>Shipping Information</span>
          </h4>
          <div className="bg-islandSpice/20 p-4 rounded-md">
            <p className="font-medium">{shippingDetails.fullName}</p>
            <p>{shippingDetails.email}</p>
            <p>{shippingDetails.phone}</p>
            <p className="mt-2">{shippingDetails.address}</p>
            <p>{`${shippingDetails.city}, ${shippingDetails.state} ${shippingDetails.postalCode}`}</p>
            <p>{shippingDetails.country}</p>

            <div className="mt-3 pt-3 border-t border-osloGray/10">
              <p className="text-sm text-bordeaux font-medium">
                Shipping Method:
              </p>
              <p className="text-sm">{getShippingMethodName()}</p>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h4 className="font-medium text-bordeaux mb-3 flex items-center">
            <span>Payment Information</span>
          </h4>
          <div className="bg-islandSpice/20 p-4 rounded-md">
            <p className="font-medium">{getPaymentMethodName()}</p>

            {paymentDetails.paymentMethod === "credit-card" && (
              <>
                <p>{paymentDetails.cardholderName}</p>
                <p>{getDisplayCardNumber()}</p>
                <p>Expires: {paymentDetails.expiryDate}</p>
              </>
            )}

            {paymentDetails.paymentMethod === "paypal" && (
              <p>You will complete your payment through PayPal.</p>
            )}

            {paymentDetails.paymentMethod === "upi" && (
              <p>You will complete your payment through UPI.</p>
            )}
          </div>
        </div>
      </div>

      {/* Gift Information if applicable */}
      {isGift && (
        <div className="mb-8">
          <h4 className="font-medium text-bordeaux mb-3">Gift Information</h4>
          <div className="bg-islandSpice/20 p-4 rounded-md">
            <p className="text-sm italic">
              {giftMessage || "This order will be wrapped as a gift."}
            </p>
          </div>
        </div>
      )}

      {/* Order Summary */}
      <div className="mb-8">
        <h4 className="font-medium text-bordeaux mb-3">Order Summary</h4>
        <div className="bg-islandSpice/20 p-4 rounded-md">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toLocaleString()}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-${discount.toLocaleString()}</span>
              </div>
            )}

            <div className="border-t border-osloGray/20 pt-2 mt-2">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="text-bordeaux">${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal text */}
      <div className="mb-8">
        <p className="text-xs text-osloGray mb-2">
          By placing your order, you agree to Shilpura's privacy policy and
          terms of conditions.
        </p>
        <p className="text-xs text-osloGray">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={isProcessing}
          className={`px-6 py-2 border border-osloGray/30 text-osloGray rounded-md hover:bg-gray-50 flex items-center ${
            isProcessing ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Payment
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isProcessing}
          className={`px-6 py-3 bg-bordeaux text-white rounded-md hover:bg-bordeaux/90 min-w-[150px] ${
            isProcessing ? "opacity-90 cursor-not-allowed" : ""
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Place Order"
          )}
        </button>
      </div>
    </div>
  );
};

export default ReviewOrderStep;
