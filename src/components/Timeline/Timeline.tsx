import { useMemo } from 'react';
import type { TimelineEvent, Era } from '../../types';
import { ERAS } from '../../types';
import { EraSection } from '../EraSection/EraSection';
import styles from './Timeline.module.css';

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const eventsByEra = useMemo(() => {
    const grouped: Record<string, TimelineEvent[]> = {
      kingdom: [],
      republic: [],
      empire: [],
    };

    events.forEach((event) => {
      if (grouped[event.era]) {
        grouped[event.era].push(event);
      }
    });

    // Sort events within each era by year (ascending, accounting for BC/AD)
    Object.keys(grouped).forEach((era) => {
      grouped[era].sort((a, b) => a.year - b.year);
    });

    return grouped;
  }, [events]);

  return (
    <main className={styles.timeline}>
      {ERAS.map((era: Era) => (
        <EraSection
          key={era.id}
          era={era}
          events={eventsByEra[era.id] || []}
        />
      ))}
    </main>
  );
}
