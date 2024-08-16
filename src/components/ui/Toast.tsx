"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Define different types of notifications with their own styling
export type ToastType = "success" | "error" | "info";

export interface ToastProps {
  message: string;
  type?: ToastType;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
  title?: string;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  isOpen,
  onClose,
  duration = 3000,
  title,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, 400); // Match animation duration
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen, duration, onClose]);

  // Only render if we're in the browser and the toast is open
  if (typeof window === "undefined" || !isOpen) return null;

  // Define styling based on toast type
  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "border-l-4 border-sage bg-sage/5";
      case "error":
        return "border-l-4 border-bordeaux bg-bordeaux/5";
      case "info":
        return "border-l-4 border-osloGray bg-osloGray/5";
      default:
        return "border-l-4 border-sage bg-sage/5";
    }
  };

  // Define icon based on toast type
  const getToastIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-sage"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-bordeaux"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "info":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-osloGray"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return createPortal(
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className={`rounded-md shadow-xl bg-white ${getToastStyles()} max-w-md ${
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        }`}
      >
        <div className="flex p-4">
          <div className="flex-shrink-0 mr-3">{getToastIcon()}</div>
          <div className="flex-1">
            {title && (
              <h3 className="font-playfair text-bordeaux mb-1 text-lg">
                {title}
              </h3>
            )}
            <p className="text-osloGray font-montserrat">{message}</p>
          </div>
          <button
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                onClose();
                setIsClosing(false);
              }, 400);
            }}
            className="flex-shrink-0 ml-3 text-osloGray hover:text-bordeaux transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Toast;
