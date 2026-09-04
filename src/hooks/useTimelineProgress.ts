import { useEffect, useState, type RefObject } from 'react';
import { TIMELINE_END, TIMELINE_START, yearToProgress } from '../lib/years';

/**
 * Drives the scroll-as-time system.
 *
 * A "reading line" sits a little above the middle of the viewport. Every era
 * head and every entry is a mark on the page with a year. While the line is
 * inside a mark the year holds; in the gap between two marks it runs from one
 * year to the next. The hook also fills each era's spine up to the line and
 * flags every mark the line has passed. Per-frame work writes straight to the
 * DOM (custom properties and data attributes) so React only re-renders when
 * the displayed year changes.
 */
export const READING_LINE_RATIO = 0.4;

interface Mark {
  element: HTMLElement;
  year: number;
  top: number;
  bottom: number;
}

interface LedgerMark {
  element: HTMLElement;
  top: number;
  height: number;
}

export function useTimelineProgress(rootRef: RefObject<HTMLElement>) {
  const [year, setYear] = useState(TIMELINE_START);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let marks: Mark[] = [];
    let ledgers: LedgerMark[] = [];
    let frame = 0;
    let lastYear = Number.NaN;
    const docStyle = document.documentElement.style;

    const measure = () => {
      const scrollY = window.scrollY;
      marks = Array.from(root.querySelectorAll<HTMLElement>('[data-event-year]')).map((element) => {
        const rect = element.getBoundingClientRect();
        // The year holds for the whole entry, an opened account included: while
        // the reader is inside 753 BC the readout says 753 BC. It runs to the
        // next year only across the gap between entries.
        return {
          element,
          year: Number(element.dataset.eventYear),
          top: rect.top + scrollY,
          bottom: rect.bottom + scrollY,
        };
      });
      ledgers = Array.from(root.querySelectorAll<HTMLElement>('[data-ledger]')).map((element) => {
        const rect = element.getBoundingClientRect();
        return { element, top: rect.top + scrollY, height: rect.height };
      });
    };

    const yearAt = (line: number): number => {
      if (marks.length === 0 || line <= marks[0].top) return TIMELINE_START;
      const last = marks[marks.length - 1];
      if (line >= last.top) return last.year === TIMELINE_END ? TIMELINE_END : last.year;

      let index = 0;
      while (index < marks.length - 1 && marks[index + 1].top <= line) index += 1;
      const from = marks[index];
      const to = marks[index + 1];
      if (line <= from.bottom) return from.year;

      const gap = Math.max(1, to.top - from.bottom);
      const t = (line - from.bottom) / gap;
      return from.year + (to.year - from.year) * t;
    };

    const update = () => {
      frame = 0;
      const line = window.scrollY + window.innerHeight * READING_LINE_RATIO;
      const currentYear = yearAt(line);

      const rounded = Math.round(currentYear);
      if (rounded !== lastYear) {
        lastYear = rounded;
        setYear(rounded);
      }
      docStyle.setProperty('--timeline-progress', yearToProgress(currentYear).toFixed(4));

      for (const ledger of ledgers) {
        const progress = Math.min(1, Math.max(0, (line - ledger.top) / Math.max(1, ledger.height)));
        ledger.element.style.setProperty('--spine-progress', progress.toFixed(4));
      }

      for (const mark of marks) {
        const reached = mark.top <= line;
        const current = mark.element.dataset.reached === 'true';
        if (reached !== current) {
          mark.element.dataset.reached = reached ? 'true' : 'false';
        }
      }
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const remeasure = () => {
      measure();
      schedule();
    };

    measure();
    update();

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', remeasure);
    const resizeObserver = new ResizeObserver(remeasure);
    resizeObserver.observe(root);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', remeasure);
      resizeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [rootRef]);

  return year;
}
