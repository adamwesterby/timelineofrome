import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Timeline } from './components/Timeline/Timeline';
import type { TimelineEvent, EraType } from './types';
import eventsData from './data/events.json';
import styles from './App.module.css';

function App() {
  const [currentEra, setCurrentEra] = useState<EraType | null>(null);
  const events = eventsData.events as TimelineEvent[];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="era-"]');
      let current: EraType | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id.replace('era-', '') as EraType;
        }
      });

      setCurrentEra(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Navigation currentEra={currentEra} />
      <Timeline events={events} />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            Timeline of Rome — A visual journey through 1,229 years of Roman history
          </p>
          <p className={styles.footerCredits}>
            Images sourced from Wikimedia Commons under Creative Commons and Public Domain licenses
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
