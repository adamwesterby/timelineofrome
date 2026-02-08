import { useEffect, useRef } from 'react';

interface UseSwipeNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  enabled?: boolean;
}

export function useSwipeNavigation({ onNext, onPrev, enabled = true }: UseSwipeNavigationProps) {
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!enabled) {
      touchStart.current = null;
      return;
    }

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;

      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStart.current.x;
      const dy = touch.clientY - touchStart.current.y;

      // Only count horizontal-dominant swipes past 50px threshold
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) {
          onNext();
        } else {
          onPrev();
        }
      }

      touchStart.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, onNext, onPrev]);
}
