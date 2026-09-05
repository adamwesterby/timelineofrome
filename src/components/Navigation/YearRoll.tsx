import styles from './YearRoll.module.css';

interface YearRollProps {
  year: number;
}

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const BLANK_INDEX = DIGITS.length;

/**
 * The year as three rolling numeral drums plus an era mark. Each drum holds
 * 0–9 and a blank; a change of year rotates only the drums that differ.
 */
export function YearRoll({ year }: YearRollProps) {
  const isBc = year < 0;
  const magnitude = Math.abs(year) || 1;
  const padded = String(magnitude).padStart(3, ' ');

  return (
    <span className={styles.roll} aria-hidden="true">
      {padded.split('').map((char, position) => {
        const index = char === ' ' ? BLANK_INDEX : Number(char);
        return (
          <span key={position} className={styles.drum}>
            <span
              className={styles.strip}
              style={{ transform: `translateY(${-index}em)` }}
            >
              {DIGITS.map((digit) => (
                <span key={digit} className={styles.digit}>
                  {digit}
                </span>
              ))}
              <span className={styles.digit} />
            </span>
          </span>
        );
      })}
      <span className={styles.era}>
        <span className={`${styles.eraMark} ${isBc ? styles.eraOn : ''}`}>BC</span>
        <span className={`${styles.eraMark} ${isBc ? '' : styles.eraOn}`}>AD</span>
      </span>
    </span>
  );
}
