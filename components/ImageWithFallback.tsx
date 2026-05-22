'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fill,
  sizes,
  priority,
  width = 800,
  height = 600,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-[var(--muted)] text-[var(--muted-foreground)] text-sm ${className}`}
      >
        <span>{alt}</span>
      </div>
    );
  }

  const isExternal = src.startsWith('http');
  if (isExternal) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setError(true)}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
