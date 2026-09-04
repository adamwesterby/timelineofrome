import { useRef } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Navigation } from '../../components/Navigation/Navigation';
import { Timeline } from '../../components/Timeline/Timeline';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { useTimelineProgress } from '../../hooks/useTimelineProgress';
import type { TimelineEvent } from '../../types';
import eventsData from '../../data/events.json';
import styles from './TimelinePage.module.css';

const events = eventsData.events as TimelineEvent[];

const faq = [
  {
    question: 'When does the timeline of Rome begin?',
    answer: 'It begins in 753 BC with the traditional founding of Rome by Romulus.',
  },
  {
    question: 'What periods are included?',
    answer: 'The timeline covers the Roman Kingdom, Roman Republic, and Roman Empire up to 476 AD.',
  },
  {
    question: 'Which major events in ancient Rome are highlighted?',
    answer:
      'Major turning points include the founding of Rome, the creation of the Republic, the rise of Augustus, and the fall of the Western Roman Empire.',
  },
];

export default function TimelinePage() {
  const mainRef = useRef<HTMLElement>(null);
  const year = useTimelineProgress(mainRef);
  useRevealOnScroll(mainRef);

  return (
    <>
      <Hero />
      <Navigation year={year} />

      <main id="main-content" ref={mainRef} className={styles.main}>
        <Timeline events={events} />

        <section className={styles.afterword} aria-labelledby="rome-timeline-overview">
          <div className={styles.afterwordInner}>
            <h2 id="rome-timeline-overview" className={styles.afterwordTitle}>
              Timeline of Rome: major events from 753 BC to 476 AD
            </h2>
            <div className={styles.afterwordCopy}>
              <p className={styles.lede}>
                This timeline of Rome is designed for students and casual learners who want a clear path
                through ancient Roman history. It tracks major events in the Roman Kingdom, Roman
                Republic, and Roman Empire, from the legendary founding of Rome to the fall of the
                Western Empire.
              </p>
              <p>
                Use the era ruler to move between periods, then open any entry for deeper context,
                people, and consequences. Each event includes a short summary to make revision and
                quick study easier.
              </p>

              <h3 className={styles.afterwordSubtitle}>How to read this Roman history timeline</h3>
              <ol className={styles.instructions}>
                <li>Start with the era overview (Kingdom, Republic, Empire) to understand the big picture.</li>
                <li>Scan the years in the margin to place events in sequence before opening details.</li>
                <li>Open the entries you want to study to read the full account and image notes.</li>
              </ol>
            </div>
          </div>

          <div className={`${styles.afterwordInner} ${styles.faqBlock}`}>
            <h2 id="timeline-faq" className={styles.afterwordTitle}>
              FAQ: ancient Rome timeline
            </h2>
            <dl className={styles.faqList}>
              {faq.map((item) => (
                <div key={item.question} className={styles.faqItem}>
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
    </>
  );
}
