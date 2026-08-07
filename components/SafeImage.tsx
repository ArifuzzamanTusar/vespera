"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * Wraps next/image with graceful error handling.
 * If the src 404s (placeholder not yet placed), the <img> is hidden
 * and any children (e.g. RoeTin fallback) become fully visible.
 */
interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackVisible?: boolean;
}

export default function SafeImage({ style, fallbackVisible: _, ...props }: SafeImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) return null;

  return (
    <Image
      {...props}
      style={{ ...style, opacity: errored ? 0 : (style?.opacity ?? 1) }}
      onError={() => setErrored(true)}
    />
  );
}
