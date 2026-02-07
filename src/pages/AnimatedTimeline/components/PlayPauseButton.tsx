import styles from './PlayPauseButton.module.css';

interface PlayPauseButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function PlayPauseButton({ isPlaying, onToggle }: PlayPauseButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
    >
      {isPlaying ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <rect x="4" y="3" width="4" height="14" rx="1" />
          <rect x="12" y="3" width="4" height="14" rx="1" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3.5L16.5 10L5 16.5V3.5Z" />
        </svg>
      )}
    </button>
  );
}
