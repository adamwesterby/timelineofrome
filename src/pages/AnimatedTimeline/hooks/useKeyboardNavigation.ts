import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  onTogglePlay: () => void;
}

export function useKeyboardNavigation({
  onNext,
  onPrev,
  onTogglePlay,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractiveTarget = target.isContentEditable
          || ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(target.tagName);
        if (isInteractiveTarget) return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          onPrev();
          break;
        case ' ':
          e.preventDefault();
          onTogglePlay();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onTogglePlay]);
}
