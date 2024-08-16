import Link from "next/link";
import AppImage from "./AppImage";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  origin: string;
  imageSrc: string;
  category: string;
  slug: string;
};

const ProductCard = ({
  id,
  title,
  price,
  origin,
  imageSrc,
  category,
  slug,
}: ProductCardProps) => {
  const { addToWishlist, isInWishlist, removeFromWishlist } = useCart();
  const { showToast } = useToast();

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product page

    if (isInWishlist(id)) {
      removeFromWishlist(id);
      showToast("Item removed from your wishlist", "info", "Wishlist Updated");
    } else {
      // Create a simple product object with required information
      const productToAdd = {
        id,
        title,
        price,
        images: [imageSrc],
        artisan: "",
        materials: [],
        origin: "",
        artisanId: "",
        description: "",
        details: [],
        category: "",
        featured: false,
        new: false,
        sustainabilityBadges: [],
        related: [],
        slug,
      };

      addToWishlist(productToAdd);
      showToast(
        `${title} added to your wishlist`,
        "success",
        "Added to Wishlist"
      );
    }
  };

  return (
    <div className="group relative">
      <Link href={`/product/${slug}`} className="block overflow-hidden">
        <div className="aspect-[4/5] bg-osloGray/10 mb-4 overflow-hidden relative">
          {/* This will be replaced with an actual image once we have assets */}
          {imageSrc ? (
            <AppImage
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-osloGray/20"></div>
          )}
          <button
            onClick={handleWishlist}
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-islandSpice text-bordeaux p-2 rounded-full hover:bg-white transition-colors z-10"
            aria-label={
              isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isInWishlist(id) ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </Link>
      <div>
        <Link href={`/product/${slug}`} className="block">
          <h3 className="text-lg font-playfair mb-1 group-hover:text-bordeaux transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-bordeaux font-montserrat font-medium mb-1">
          ${price.toLocaleString()}
        </p>
        <p className="text-sm text-osloGray">Hand-crafted in {origin}</p>
      </div>
    </div>
  );
};

export default ProductCard;
