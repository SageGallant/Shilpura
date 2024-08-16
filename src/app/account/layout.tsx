import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Shilpura",
    default: "My Account | Shilpura",
  },
  description: "Manage your account, orders, and preferences on Shilpura",
};

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-bordeaux to-terracotta py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-playfair text-white">
            My Account
          </h1>
        </div>
      </section>

      {children}
    </>
  );
}
