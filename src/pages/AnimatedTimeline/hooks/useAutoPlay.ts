import { useEffect, useRef } from 'react';

interface UseAutoPlayProps {
  isPlaying: boolean;
  onNext: () => void;
  interval?: number;
  /** Incremented on manual navigation to reset the timer */
  resetKey: number;
}

export function useAutoPlay({
  isPlaying,
  onNext,
  interval = 8000,
  resetKey,
}: UseAutoPlayProps) {
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion.current) return;

    const timer = setInterval(onNext, interval);
    return () => clearInterval(timer);
  }, [isPlaying, onNext, interval, resetKey]);
}
