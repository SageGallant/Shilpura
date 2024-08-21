"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Note: You'd need to add framer-motion as a dependency

interface ConfirmationStepProps {
  onFinish: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ onFinish }) => {
  // Generate a random order number
  const orderNumber = `SHP-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-6 px-6 md:px-10 text-center">
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-sage"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-playfair text-bordeaux mb-4">
          Thank You for Your Order!
        </h2>

        <p className="text-osloGray mb-6">
          Your order has been received and is being processed. We'll send you a
          confirmation email with your order details shortly.
        </p>

        <div className="bg-islandSpice/30 p-4 rounded-md inline-block mb-8">
          <p className="text-bordeaux font-medium">
            Order Number: {orderNumber}
          </p>
          <p className="text-sm text-osloGray">Order Date: {orderDate}</p>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-osloGray">
            You can track your order status in the{" "}
            <Link href="/account/orders" className="text-bordeaux underline">
              My Orders
            </Link>{" "}
            section of your account.
          </p>
          <p className="text-osloGray">
            If you have any questions about your order, please contact our
            customer service team at{" "}
            <a
              href="mailto:support@shilpura.com"
              className="text-bordeaux underline"
            >
              support@shilpura.com
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onFinish}
            className="px-6 py-3 bg-bordeaux text-white rounded-md hover:bg-bordeaux/90"
          >
            Continue Shopping
          </button>
          <Link
            href="/account/orders"
            className="px-6 py-3 border border-bordeaux text-bordeaux rounded-md hover:bg-bordeaux/5"
          >
            View Order Status
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmationStep;
