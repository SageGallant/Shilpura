"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import Toast, { ToastType } from "../components/ui/Toast";

interface ToastContextType {
  showToast: (message: string, type?: ToastType, title?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("success");
  const [title, setTitle] = useState<string | undefined>(undefined);

  const showToast = (
    message: string,
    type: ToastType = "success",
    title?: string
  ) => {
    setMessage(message);
    setToastType(type);
    setTitle(title);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        isOpen={isOpen}
        message={message}
        type={toastType}
        title={title}
        onClose={handleClose}
      />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
