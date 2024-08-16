/**
 * Format a date for display
 * @param date Date to format
 * @param options Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
}

/**
 * Check if a date is in the past
 * @param date Date to check
 * @returns Boolean indicating if the date is in the past
 */
export function isPastDate(date: Date | string | number): boolean {
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj < new Date();
}

/**
 * Calculate days remaining until a future date
 * @param targetDate Future date
 * @returns Number of days remaining, or 0 if date is in the past
 */
export function daysRemaining(targetDate: Date | string | number): number {
  const dateObj =
    targetDate instanceof Date ? targetDate : new Date(targetDate);
  const now = new Date();

  if (dateObj <= now) {
    return 0;
  }

  const diffTime = dateObj.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
