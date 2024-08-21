"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "../lib/products";

// Cart item type (extends Product with quantity)
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  artisan: string;
  material: string;
  maxQuantity: number;
};

// Wishlist item type
export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  inStock: boolean;
};

type CartContextType = {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateCartItemQuantity: (id: string, change: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  isInCart: (id: string) => boolean;
  isInWishlist: (id: string) => boolean;
  cartCount: number;
  wishlistCount: number;
};

// Create context with default values
const CartContext = createContext<CartContextType>({
  cartItems: [],
  wishlistItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  clearCart: () => {},
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInCart: () => false,
  isInWishlist: () => false,
  cartCount: 0,
  wishlistCount: 0,
});

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Calculate totals
  const cartCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

  // Initialize from session storage when component mounts
  useEffect(() => {
    setIsClient(true);
    const storedCart = sessionStorage.getItem("cart");
    const storedWishlist = sessionStorage.getItem("wishlist");

    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart from session storage:", error);
      }
    }

    if (storedWishlist) {
      try {
        setWishlistItems(JSON.parse(storedWishlist));
      } catch (error) {
        console.error("Error parsing wishlist from session storage:", error);
      }
    }
  }, []);

  // Update session storage when cart changes
  useEffect(() => {
    if (isClient) {
      sessionStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]);

  // Update session storage when wishlist changes
  useEffect(() => {
    if (isClient) {
      sessionStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, isClient]);

  // Add a product to the cart
  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        // Update quantity if item already exists
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: quantity,
            image: product.images[0],
            artisan: product.artisan,
            material: product.materials.join(", "),
            maxQuantity: 10, // Default max quantity, could be from product data
          },
        ];
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update cart item quantity
  const updateCartItemQuantity = (id: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity >= 1 && newQuantity <= item.maxQuantity) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      })
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Add a product to the wishlist
  const addToWishlist = (product: Product) => {
    setWishlistItems((prevItems) => {
      // Don't add if already in wishlist
      if (prevItems.some((item) => item.id === product.id)) {
        return prevItems;
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.images[0],
          inStock: true, // Default, could be from product data
        },
      ];
    });
  };

  // Remove a product from the wishlist
  const removeFromWishlist = (id: string) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Check if a product is in the cart
  const isInCart = (id: string) => {
    return cartItems.some((item) => item.id === id);
  };

  // Check if a product is in the wishlist
  const isInWishlist = (id: string) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInCart,
        isInWishlist,
        cartCount,
        wishlistCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
