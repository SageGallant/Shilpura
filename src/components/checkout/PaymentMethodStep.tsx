"use client";

import React, { useState } from "react";

interface PaymentMethodStepProps {
  initialData: {
    cardNumber: string;
    cardholderName: string;
    expiryDate: string;
    cvv: string;
    saveCard: boolean;
    paymentMethod: string;
  };
  onSubmit: (data: any) => void;
  onBack: () => void;
}

const PaymentMethodStep: React.FC<PaymentMethodStepProps> = ({
  initialData,
  onSubmit,
  onBack,
}) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    // Format card number with spaces after every 4 digits
    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/\D/g, "")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .substring(0, 19); // Limit to 16 digits + 3 spaces = 19 chars

      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    }
    // Format expiry date as MM/YY
    else if (name === "expiryDate") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(?=\d)/g, "$1/")
        .substring(0, 5); // Limit to MM/YY format

      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    }
    // Format CVV to only allow numbers and max 3-4 digits
    else if (name === "cvv") {
      const formattedValue = value.replace(/\D/g, "").substring(0, 4);

      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    }
    // Handle payment method selection
    else if (name === "paymentMethod") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Handle all other inputs
    else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }

    // Clear error when field is updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.paymentMethod === "credit-card") {
      if (
        !formData.cardNumber.trim() ||
        formData.cardNumber.replace(/\s/g, "").length < 16
      ) {
        newErrors.cardNumber = "Please enter a valid card number";
      }

      if (!formData.cardholderName.trim()) {
        newErrors.cardholderName = "Cardholder name is required";
      }

      if (!formData.expiryDate.trim() || formData.expiryDate.length < 5) {
        newErrors.expiryDate = "Please enter a valid expiry date";
      } else {
        const [month, year] = formData.expiryDate.split("/");
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // Get last two digits
        const currentMonth = currentDate.getMonth() + 1; // 1-12

        if (parseInt(month) < 1 || parseInt(month) > 12) {
          newErrors.expiryDate = "Invalid month";
        } else if (
          parseInt(year) < currentYear ||
          (parseInt(year) === currentYear && parseInt(month) < currentMonth)
        ) {
          newErrors.expiryDate = "Card has expired";
        }
      }

      if (!formData.cvv.trim() || formData.cvv.length < 3) {
        newErrors.cvv = "Please enter a valid CVV";
      }
    } else if (formData.paymentMethod === "upi") {
      // Add UPI validation if needed
    } else if (formData.paymentMethod === "paypal") {
      // Add PayPal validation if needed
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  // Function to determine which payment method form to show
  const renderPaymentForm = () => {
    switch (formData.paymentMethod) {
      case "credit-card":
        return (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-osloGray mb-1"
              >
                Card Number*
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className={`w-full border ${
                  errors.cardNumber ? "border-red-500" : "border-gray-200"
                } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="col-span-2">
              <label
                htmlFor="cardholderName"
                className="block text-sm font-medium text-osloGray mb-1"
              >
                Cardholder Name*
              </label>
              <input
                type="text"
                id="cardholderName"
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.cardholderName ? "border-red-500" : "border-gray-200"
                } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
                placeholder="Enter name as it appears on card"
              />
              {errors.cardholderName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.cardholderName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-osloGray mb-1"
              >
                Expiry Date*
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className={`w-full border ${
                  errors.expiryDate ? "border-red-500" : "border-gray-200"
                } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
                placeholder="MM/YY"
                maxLength={5}
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-osloGray mb-1"
              >
                CVV*
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className={`w-full border ${
                  errors.cvv ? "border-red-500" : "border-gray-200"
                } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
                placeholder="123"
                maxLength={4}
              />
              {errors.cvv && (
                <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
              )}
            </div>

            <div className="col-span-2">
              <div className="flex items-start mt-2">
                <input
                  type="checkbox"
                  id="saveCard"
                  name="saveCard"
                  checked={!!formData.saveCard}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="saveCard" className="text-sm text-osloGray">
                  Save this card for future payments (securely encrypted)
                </label>
              </div>
            </div>
          </div>
        );
      case "paypal":
        return (
          <div className="mt-6 p-4 bg-blue-50 rounded-md text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-10 w-10 mx-auto text-blue-600"
              >
                <path
                  fill="currentColor"
                  d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.8z"
                ></path>
              </svg>
            </div>
            <p className="text-blue-800 mb-6">
              You will be redirected to PayPal to complete your payment
              securely.
            </p>
            <p className="text-sm text-gray-600">
              Note: This is a demonstration. In a real application, you would be
              redirected to the actual PayPal payment page.
            </p>
          </div>
        );
      case "upi":
        return (
          <div className="mt-6 p-4 bg-green-50 rounded-md flex flex-col items-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 mx-auto text-green-600"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M7 15h0M2 9.5h20"></path>
              </svg>
            </div>
            <p className="text-green-800 mb-6">
              Complete your payment using UPI.
            </p>
            <div className="w-full max-w-xs">
              <label
                htmlFor="upiId"
                className="block text-sm font-medium text-osloGray mb-1"
              >
                UPI ID*
              </label>
              <input
                type="text"
                id="upiId"
                name="upiId"
                className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="example@upi"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Note: This is a demonstration. In a real application, this would
              connect to a UPI payment service.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h3 className="text-xl font-playfair text-bordeaux mb-6">
        Payment Method
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div
            className={`border rounded-md p-4 text-center cursor-pointer transition-colors ${
              formData.paymentMethod === "credit-card"
                ? "border-bordeaux bg-bordeaux/5"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() =>
              handleChange({
                target: { name: "paymentMethod", value: "credit-card" },
              } as any)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-8 w-8 mx-auto mb-2 ${
                formData.paymentMethod === "credit-card"
                  ? "text-bordeaux"
                  : "text-osloGray"
              }`}
            >
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            <span
              className={`text-sm ${
                formData.paymentMethod === "credit-card"
                  ? "text-bordeaux font-medium"
                  : "text-osloGray"
              }`}
            >
              Credit Card
            </span>
          </div>

          <div
            className={`border rounded-md p-4 text-center cursor-pointer transition-colors ${
              formData.paymentMethod === "paypal"
                ? "border-bordeaux bg-bordeaux/5"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() =>
              handleChange({
                target: { name: "paymentMethod", value: "paypal" },
              } as any)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-8 w-8 mx-auto mb-2 ${
                formData.paymentMethod === "paypal"
                  ? "text-bordeaux"
                  : "text-osloGray"
              }`}
            >
              <path d="M19 5.5c-1.5-1.5-3.5-2.5-5.5-2.5h-7a2 2 0 0 0-2 2v8-1M7 11.5h-1a2 2 0 0 0-2 2v3.5a2 2 0 0 0 2 2h3M8 18l2-3 2 3M10 15H6M22 9v9a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-9l5-5"></path>
            </svg>
            <span
              className={`text-sm ${
                formData.paymentMethod === "paypal"
                  ? "text-bordeaux font-medium"
                  : "text-osloGray"
              }`}
            >
              PayPal
            </span>
          </div>

          <div
            className={`border rounded-md p-4 text-center cursor-pointer transition-colors ${
              formData.paymentMethod === "upi"
                ? "border-bordeaux bg-bordeaux/5"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() =>
              handleChange({
                target: { name: "paymentMethod", value: "upi" },
              } as any)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-8 w-8 mx-auto mb-2 ${
                formData.paymentMethod === "upi"
                  ? "text-bordeaux"
                  : "text-osloGray"
              }`}
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M7 15h0M2 9.5h20"></path>
            </svg>
            <span
              className={`text-sm ${
                formData.paymentMethod === "upi"
                  ? "text-bordeaux font-medium"
                  : "text-osloGray"
              }`}
            >
              UPI
            </span>
          </div>
        </div>

        {renderPaymentForm()}

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-osloGray/30 text-osloGray rounded-md hover:bg-gray-50 flex items-center"
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
            Back to Shipping
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-bordeaux text-white rounded-md hover:bg-bordeaux/90"
          >
            Review Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethodStep;
