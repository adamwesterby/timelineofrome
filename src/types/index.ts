export type EraType = 'kingdom' | 'republic' | 'empire';
export type SignificanceType = 'major' | 'minor';

export interface TimelineEvent {
  id: string;
  year: number;
  yearDisplay: string;
  title: string;
  summary: string;
  description: string;
  era: EraType;
  significance: SignificanceType;
  imageUrl?: string;
  imageAlt?: string;
  imageCredit?: string;
}

export interface Era {
  id: EraType;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
}

export const ERAS: Era[] = [
  {
    id: 'kingdom',
    name: 'The Kingdom',
    startYear: -753,
    endYear: -509,
    description: 'The legendary founding of Rome and the rule of seven kings, establishing the foundations of Roman society, religion, and government.',
  },
  {
    id: 'republic',
    name: 'The Republic',
    startYear: -509,
    endYear: -27,
    description: 'Rome expands from a city-state to master of the Mediterranean, governed by the Senate and elected magistrates, marked by conquest, civil wars, and political transformation.',
  },
  {
    id: 'empire',
    name: 'The Empire',
    startYear: -27,
    endYear: 476,
    description: 'Under emperors from Augustus to Romulus Augustulus, Rome reaches its greatest territorial extent and cultural achievements before its eventual decline and fall.',
  },
];
