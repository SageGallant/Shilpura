/**
 * Helper function to correctly resolve image paths for GitHub Pages deployment
 * @param path The original image path
 * @returns The correct path for the current environment
 */
export function getImagePath(path: string): string {
  // If path is empty or undefined, return an empty string
  if (!path) return "";

  // If path already includes http/https or the basePath, return as is
  if (path.startsWith("http") || path.includes("/Shilpura/")) {
    return path;
  }

  // Clean up the path to ensure consistent handling
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // In production (GitHub Pages), prepend the basePath
  if (process.env.NODE_ENV === "production") {
    // For GitHub Pages deployment
    return `/Shilpura${normalizedPath}`;
  }

  // In development, return the normalized path
  return normalizedPath;
}
