"use client";
import { useState } from "react";
import Image from "next/image";

interface LogoAvatarProps {
  src: string;
  alt: string;
  fallbackInitials: string;
  fallbackColor: string;
}

export default function LogoAvatar({ src, alt, fallbackInitials, fallbackColor }: LogoAvatarProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="w-full h-full flex items-center justify-center font-extrabold text-white text-xl rounded-xl"
        style={{ backgroundColor: fallbackColor }}
      >
        {fallbackInitials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={56}
      height={56}
      className="object-contain p-2 w-full h-full"
      unoptimized
      onError={() => setError(true)}
    />
  );
}
