import { ERAS } from '../types';

export const TIMELINE_START = ERAS[0].startYear;
export const TIMELINE_END = ERAS[ERAS.length - 1].endYear;
export const TIMELINE_SPAN = TIMELINE_END - TIMELINE_START;

export function formatYear(year: number): string {
  const rounded = Math.round(year);
  if (rounded < 0) {
    return `${Math.abs(rounded)} BC`;
  }
  if (rounded === 0) {
    return '1 BC';
  }
  return `${rounded} AD`;
}

/** Position of a year along the full 753 BC – 476 AD span, from 0 to 1. */
export function yearToProgress(year: number): number {
  const progress = (year - TIMELINE_START) / TIMELINE_SPAN;
  return Math.min(1, Math.max(0, progress));
}

export function eraDuration(startYear: number, endYear: number): number {
  return endYear - startYear;
}

/** ISO 8601 expanded years for <time>: 753 BC is -0752 (there is no year zero). */
export function isoYear(year: number): string {
  if (year > 0) return String(year).padStart(4, '0');
  return `-${String(Math.abs(year + 1)).padStart(4, '0')}`;
}
