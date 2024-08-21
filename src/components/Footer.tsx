import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bordeaux text-islandSpice">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link
              href="/"
              className="text-2xl font-playfair font-bold mb-4 inline-block"
            >
              SHILPURA
            </Link>
            <p className="text-sm text-islandSpice/80 mb-6">
              Premium handicrafts from skilled artisans around the world,
              connecting heritage crafts with modern aesthetics.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-islandSpice hover:text-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.23.6 1.794 1.163.563.563.914 1.126 1.163 1.794.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427-.25.668-.6 1.23-1.163 1.794-.563.563-1.126.914-1.794 1.163-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.23-.6-1.794-1.163-.563-.563-.914-1.126-1.163-1.794-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427.25-.668.6-1.23 1.163-1.794.563-.563 1.126-.914 1.794-1.163.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.886 2 12.315 2zm0 1.667c-2.393 0-2.732.01-3.743.058-.903.041-1.395.19-1.722.316-.432.168-.74.369-1.063.693-.324.324-.525.631-.692 1.063-.126.327-.275.819-.316 1.722-.048 1.011-.058 1.35-.058 3.743s.01 2.732.058 3.743c.041.903.19 1.395.316 1.722.168.432.369.74.693 1.063.324.324.631.525 1.063.692.327.126.819.275 1.722.316 1.011.048 1.35.058 3.743.058s2.732-.01 3.743-.058c.903-.041 1.395-.19 1.722-.316.432-.168.74-.369 1.063-.693.324-.324.525-.631.692-1.063.126-.327.275-.819.316-1.722.048-1.011.058-1.35.058-3.743s-.01-2.732-.058-3.743c-.041-.903-.19-1.395-.316-1.722-.168-.432-.369-.74-.693-1.063-.324-.324-.631-.525-1.063-.692-.327-.126-.819-.275-1.722-.316-1.011-.048-1.35-.058-3.743-.058z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12.315 6.667a5.333 5.333 0 100 10.666 5.333 5.333 0 000-10.666zm0 8.8a3.467 3.467 0 110-6.934 3.467 3.467 0 010 6.934z"
                    clipRule="evenodd"
                  />
                  <circle cx="17.867" cy="6.133" r="1.25" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-islandSpice hover:text-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-islandSpice hover:text-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="col-span-1">
            <h3 className="font-playfair text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collection"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/category/ceramics"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Ceramics
                </Link>
              </li>
              <li>
                <Link
                  href="/category/textiles"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Textiles
                </Link>
              </li>
              <li>
                <Link
                  href="/category/jewelry"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Jewelry
                </Link>
              </li>
              <li>
                <Link
                  href="/category/home-decor"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="col-span-1">
            <h3 className="font-playfair text-lg mb-6">About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/artisans"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Artisans
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="col-span-1">
            <h3 className="font-playfair text-lg mb-6">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shipping"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-islandSpice/80 hover:text-islandSpice transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-islandSpice/10 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-islandSpice/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shilpura. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-islandSpice/70 hover:text-islandSpice transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-islandSpice/70 hover:text-islandSpice transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-sm text-islandSpice/70 hover:text-islandSpice transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
