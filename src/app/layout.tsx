import "../globals.css";
import { playfair, montserrat, inter } from "./fonts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { ToastProvider } from "../context/ToastContext";

export const metadata = {
  title: "Shilpura - Premium Handicrafts",
  description:
    "Discover exquisite handcrafted items from skilled artisans around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body className={inter.className}>
        <CartProvider>
          <ToastProvider>
            <Header />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
