"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useImageSlideshow(length: number, intervalMs = 4500) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
  }, [length, intervalMs]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const selectIndex = useCallback(
    (newIndex: number | ((prev: number) => number)) => {
      setIndex(newIndex);
      startTimer();
    },
    [startTimer]
  );

  return { index, setIndex: selectIndex };
}
