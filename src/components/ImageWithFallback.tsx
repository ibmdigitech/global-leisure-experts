'use client';

import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
}

export function ImageWithFallback({ src, fallbackSrc, alt = '', className = '' }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {hasError && fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
        />
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          onError={() => {
            setHasError(true);
            if (fallbackSrc) {
              setImgSrc(fallbackSrc);
            }
          }}
          className={className}
        />
      )}
    </>
  );
}
