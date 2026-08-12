import { useState, useEffect } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { Timeline } from '../../components/Timeline/Timeline';
import type { TimelineEvent, EraType } from '../../types';
import eventsData from '../../data/events.json';
import styles from './TimelinePage.module.css';

const eras = ['kingdom', 'republic', 'empire'] as const;

export default function TimelinePage() {
  const [currentEra, setCurrentEra] = useState<EraType | null>(null);
  const events = eventsData.events as TimelineEvent[];

  useEffect(() => {
    const sections = eras
      .map((era) => document.getElementById(`era-${era}`))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setCurrentEra(visible.target.id.replace('era-', '') as EraType);
        }
      },
      {
        rootMargin: '-15% 0px -60% 0px',
        threshold: [0, 0.1, 0.25],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation currentEra={currentEra} />

      <section
        className={`${styles.seoSection} ${styles.overviewSection}`}
        aria-labelledby="rome-timeline-overview"
      >
        <div className={styles.contentContainer}>
          <h2 id="rome-timeline-overview">Timeline of Rome: major events from 753 BC to 476 AD</h2>
          <div className={styles.overviewCopy}>
            <p>
              This timeline of Rome is designed for students and casual learners who want a clear path through
              ancient Roman history. It tracks major events in the Roman Kingdom, Roman Republic, and Roman Empire,
              from the legendary founding of Rome to the fall of the Western Empire.
            </p>
            <p>
              Use the era navigation to move between periods, then open event cards for deeper context, people,
              and consequences. Each event includes a short summary to make revision and quick study easier.
            </p>

            <h3>How to read this Roman history timeline</h3>
            <ol className={styles.instructions}>
              <li>Start with the era overview (Kingdom, Republic, Empire) to understand the big picture.</li>
              <li>Scan year labels to place events in sequence before opening details.</li>
              <li>Open cards you want to study to read extended explanations and image notes.</li>
            </ol>
          </div>
        </div>
      </section>

      <Timeline events={events} />

      <section
        className={`${styles.seoSection} ${styles.faqSection}`}
        aria-labelledby="timeline-faq"
      >
        <div className={styles.contentContainer}>
          <h2 id="timeline-faq">FAQ: ancient Rome timeline</h2>

          <div className={styles.faqList}>
            <article>
              <h3>When does the timeline of Rome begin?</h3>
              <p>
                It begins in 753 BC with the traditional founding of Rome by Romulus.
              </p>
            </article>

            <article>
              <h3>What periods are included?</h3>
              <p>
                The timeline covers the Roman Kingdom, Roman Republic, and Roman Empire up to 476 AD.
              </p>
            </article>

            <article>
              <h3>Which major events in ancient Rome are highlighted?</h3>
              <p>
                Major turning points include the founding of Rome, the creation of the Republic, the rise of
                Augustus, and the fall of the Western Roman Empire.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
