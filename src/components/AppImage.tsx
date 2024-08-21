"use client";

import Image, { ImageProps } from "next/image";
import { getImagePath } from "../utils/imagePath";

type AppImageProps = Omit<ImageProps, "src"> & {
  src: string;
  alt: string;
};

export default function AppImage({ src, alt, ...props }: AppImageProps) {
  // Use the utility function to get the correct image path
  const imageSrc = getImagePath(src);

  return <Image src={imageSrc} alt={alt} {...props} />;
}
