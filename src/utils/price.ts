/**
 * Format a price to display as currency
 * @param price The price to format
 * @param currencyCode The ISO currency code
 * @returns Formatted price string
 */
export function formatPrice(
  price: number,
  currencyCode: string = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Calculate the savings percentage between original and sale price
 * @param originalPrice The original price
 * @param salePrice The sale price
 * @returns Savings percentage as a whole number
 */
export function calculateSavings(
  originalPrice: number,
  salePrice: number
): number {
  if (originalPrice <= 0 || salePrice >= originalPrice) {
    return 0;
  }

  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

/**
 * Calculate tax amount based on price and tax rate
 * @param price The price before tax
 * @param taxRate The tax rate as a decimal (e.g., 0.08 for 8%)
 * @returns The tax amount
 */
export function calculateTax(price: number, taxRate: number): number {
  return price * taxRate;
}
