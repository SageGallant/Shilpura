"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "../../context/ToastContext";
import { useCart } from "../../context/CartContext";

// Step components
import ShippingAddressStep from "./ShippingAddressStep";
import PaymentMethodStep from "./PaymentMethodStep";
import ReviewOrderStep from "./ReviewOrderStep";
import ConfirmationStep from "./ConfirmationStep";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  isGift: boolean;
  giftMessage: string;
  selectedShipping: string;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  subtotal,
  shipping,
  tax,
  discount,
  total,
  isGift,
  giftMessage,
  selectedShipping,
}) => {
  const router = useRouter();
  const { clearCart } = useCart();
  const { showToast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form state
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    saveAddress: false,
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
    paymentMethod: "credit-card", // credit-card, paypal, upi
  });

  if (!isOpen) return null;

  const handleSubmitShipping = (data: any) => {
    setShippingDetails(data);
    setCurrentStep(2);
  };

  const handleSubmitPayment = (data: any) => {
    setPaymentDetails(data);
    setCurrentStep(3);
  };

  const handleConfirmOrder = () => {
    setIsProcessing(true);

    // Simulate API call for order processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep(4);
      clearCart();
      showToast(
        "Your order has been placed successfully!",
        "success",
        "Order Confirmation"
      );
    }, 2000);
  };

  const handleFinish = () => {
    onClose();
    router.push("/");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ShippingAddressStep
            initialData={shippingDetails}
            onSubmit={handleSubmitShipping}
            onCancel={onClose}
          />
        );
      case 2:
        return (
          <PaymentMethodStep
            initialData={paymentDetails}
            onSubmit={handleSubmitPayment}
            onBack={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <ReviewOrderStep
            shippingDetails={shippingDetails}
            paymentDetails={paymentDetails}
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            discount={discount}
            total={total}
            isGift={isGift}
            giftMessage={giftMessage}
            selectedShipping={selectedShipping}
            onConfirm={handleConfirmOrder}
            onBack={() => setCurrentStep(2)}
            isProcessing={isProcessing}
          />
        );
      case 4:
        return <ConfirmationStep onFinish={handleFinish} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-auto">
          {/* Header with step indicators */}
          {currentStep < 4 && (
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-playfair text-bordeaux">
                  Checkout
                </h2>
                <button
                  onClick={onClose}
                  className="text-osloGray hover:text-bordeaux"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
              </div>

              {/* Step progress bar */}
              <div className="mt-6 mb-2">
                <div className="flex justify-between">
                  <div className="text-sm text-bordeaux font-medium">
                    Shipping
                  </div>
                  <div
                    className={`text-sm ${
                      currentStep >= 2
                        ? "text-bordeaux font-medium"
                        : "text-osloGray"
                    }`}
                  >
                    Payment
                  </div>
                  <div
                    className={`text-sm ${
                      currentStep >= 3
                        ? "text-bordeaux font-medium"
                        : "text-osloGray"
                    }`}
                  >
                    Review
                  </div>
                </div>
                <div className="mt-2 bg-gray-200 h-1 rounded-full">
                  <div
                    className="bg-bordeaux h-1 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
