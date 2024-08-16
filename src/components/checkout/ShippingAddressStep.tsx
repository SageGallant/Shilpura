"use client";

import React, { useState } from "react";

interface ShippingAddressStepProps {
  initialData: {
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
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const ShippingAddressStep: React.FC<ShippingAddressStepProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
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

  return (
    <div>
      <h3 className="text-xl font-playfair text-bordeaux mb-6">
        Shipping Address
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="col-span-2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-osloGray mb-1"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full border ${
                errors.fullName ? "border-red-500" : "border-gray-200"
              } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-osloGray mb-1"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-osloGray mb-1"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border ${
                errors.phone ? "border-red-500" : "border-gray-200"
              } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-osloGray mb-1"
            >
              Street Address*
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full border ${
                errors.address ? "border-red-500" : "border-gray-200"
              } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
              placeholder="Enter your street address"
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-osloGray mb-1"
            >
              City*
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full border ${
                errors.city ? "border-red-500" : "border-gray-200"
              } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
              placeholder="Enter your city"
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-osloGray mb-1"
            >
              State/Province*
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full border ${
                errors.state ? "border-red-500" : "border-gray-200"
              } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
              placeholder="Enter your state"
            />
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">{errors.state}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-osloGray mb-1"
            >
              Postal Code*
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className={`w-full border ${
                errors.postalCode ? "border-red-500" : "border-gray-200"
              } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold`}
              placeholder="Enter your postal code"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-osloGray mb-1"
            >
              Country*
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            >
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Japan">Japan</option>
              <option value="Singapore">Singapore</option>
              <option value="UAE">UAE</option>
            </select>
          </div>

          <div className="col-span-2">
            <div className="flex items-start mt-2">
              <input
                type="checkbox"
                id="saveAddress"
                name="saveAddress"
                checked={!!formData.saveAddress}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="saveAddress" className="text-sm text-osloGray">
                Save this address for future orders
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-osloGray/30 text-osloGray rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-bordeaux text-white rounded-md hover:bg-bordeaux/90"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressStep;
