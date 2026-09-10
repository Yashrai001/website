"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export function FallbackImage({ alt, src, className, fill, ...props }: ImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div 
        className={cn(
          "flex flex-col items-center justify-center bg-muted text-muted-foreground border border-border/40 overflow-hidden",
          fill ? "absolute inset-0 w-full h-full" : "w-full h-full min-h-[200px]",
          className
        )}
      >
        <span className="font-serif text-sm tracking-[0.25em] opacity-40 select-none uppercase font-semibold text-primary">HOTEL LUXE</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={cn(
        className,
        "transition-opacity duration-300 ease-out",
        loaded ? "opacity-100" : "opacity-0"
      )}
      fill={fill}
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      {...props}
    />
  );
}

