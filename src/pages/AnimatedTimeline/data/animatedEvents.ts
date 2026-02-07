import type { EraType } from '../../../types';

export interface AnimatedEvent {
  id: string;
  year: number;
  yearDisplay: string;
  title: string;
  summary: string;
  era: EraType;
}

export const ANIMATED_EVENTS: AnimatedEvent[] = [
  // Kingdom (2)
  {
    id: 'founding-of-rome',
    year: -753,
    yearDisplay: '753 BC',
    title: 'Founding of Rome',
    summary: 'Romulus founds the Eternal City on the banks of the Tiber',
    era: 'kingdom',
  },
  {
    id: 'republic-established',
    year: -509,
    yearDisplay: '509 BC',
    title: 'Republic Established',
    summary: 'The last king is overthrown and Rome becomes a republic',
    era: 'kingdom',
  },
  // Republic (8)
  {
    id: 'gallic-sack',
    year: -390,
    yearDisplay: '390 BC',
    title: 'Gallic Sack of Rome',
    summary: 'Brennus and his Gauls capture and ransom the city',
    era: 'republic',
  },
  {
    id: 'pyrrhic-war',
    year: -280,
    yearDisplay: '280 BC',
    title: 'Pyrrhus Invades Italy',
    summary: 'Greek war elephants challenge the legions of Rome',
    era: 'republic',
  },
  {
    id: 'hannibal-crosses-alps',
    year: -218,
    yearDisplay: '218 BC',
    title: 'Hannibal Crosses the Alps',
    summary: 'Carthage brings war elephants over the mountains into Italy',
    era: 'republic',
  },
  {
    id: 'battle-cannae',
    year: -216,
    yearDisplay: '216 BC',
    title: 'Battle of Cannae',
    summary: 'Hannibal destroys a Roman army with a double envelopment',
    era: 'republic',
  },
  {
    id: 'carthage-destroyed',
    year: -146,
    yearDisplay: '146 BC',
    title: 'Destruction of Carthage',
    summary: 'Rome razes its greatest rival and salts the earth',
    era: 'republic',
  },
  {
    id: 'spartacus-revolt',
    year: -73,
    yearDisplay: '73 BC',
    title: "Spartacus's Slave Revolt",
    summary: 'A gladiator leads thousands in rebellion against Rome',
    era: 'republic',
  },
  {
    id: 'rubicon',
    year: -49,
    yearDisplay: '49 BC',
    title: 'Caesar Crosses the Rubicon',
    summary: 'The die is cast as Caesar marches on Rome',
    era: 'republic',
  },
  {
    id: 'caesar-assassination',
    year: -44,
    yearDisplay: '44 BC',
    title: 'Assassination of Caesar',
    summary: 'Senators strike down the dictator on the Ides of March',
    era: 'republic',
  },
  // Empire (8)
  {
    id: 'augustus-princeps',
    year: -27,
    yearDisplay: '27 BC',
    title: 'Augustus Becomes Emperor',
    summary: 'The Republic ends as Octavian becomes princeps',
    era: 'empire',
  },
  {
    id: 'colosseum-opens',
    year: 80,
    yearDisplay: '80 AD',
    title: 'Colosseum Opens',
    summary: 'The Flavian Amphitheatre hosts 100 days of games',
    era: 'empire',
  },
  {
    id: 'empire-maximum',
    year: 117,
    yearDisplay: '117 AD',
    title: 'Empire at Maximum Extent',
    summary: "Under Trajan, Rome reaches the height of its territorial power",
    era: 'empire',
  },
  {
    id: 'marcus-aurelius',
    year: 161,
    yearDisplay: '161 AD',
    title: 'Reign of Marcus Aurelius',
    summary: 'The philosopher-emperor defends Rome against barbarian invasions',
    era: 'empire',
  },
  {
    id: 'crisis-third-century',
    year: 235,
    yearDisplay: '235 AD',
    title: 'Crisis of the Third Century',
    summary: 'Civil war, plague, and invasion threaten to tear the empire apart',
    era: 'empire',
  },
  {
    id: 'milvian-bridge',
    year: 312,
    yearDisplay: '312 AD',
    title: 'Battle of the Milvian Bridge',
    summary: 'Constantine conquers under the sign of Christ',
    era: 'empire',
  },
  {
    id: 'alaric-sacks-rome',
    year: 410,
    yearDisplay: '410 AD',
    title: 'Visigoths Sack Rome',
    summary: 'For the first time in 800 years, a foreign army enters Rome',
    era: 'empire',
  },
  {
    id: 'fall-western-empire',
    year: 476,
    yearDisplay: '476 AD',
    title: 'Fall of the Western Empire',
    summary: 'The last emperor is deposed and the ancient world ends',
    era: 'empire',
  },
];

export const ERA_COLORS: Record<EraType, string> = {
  kingdom: '#B8860B',
  republic: '#8B2500',
  empire: '#5C3D2E',
};
