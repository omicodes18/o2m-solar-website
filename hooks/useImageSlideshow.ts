"use client";

import { useEffect, useState } from "react";

export function useImageSlideshow(length: number, intervalMs = 4500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);

  return { index, setIndex };
}
