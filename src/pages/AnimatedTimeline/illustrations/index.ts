import type { ComponentType } from 'react';
import { FoundingOfRome } from './FoundingOfRome';
import { RepublicEstablished } from './RepublicEstablished';
import { GallicSack } from './GallicSack';
import { PyrrhicWar } from './PyrrhicWar';
import { HannibalCrossesAlps } from './HannibalCrossesAlps';
import { BattleCannae } from './BattleCannae';
import { CarthageDestroyed } from './CarthageDestroyed';
import { SpartacusRevolt } from './SpartacusRevolt';
import { Rubicon } from './Rubicon';
import { CaesarAssassination } from './CaesarAssassination';
import { AugustusPrinceps } from './AugustusPrinceps';
import { ColosseumOpens } from './ColosseumOpens';
import { EmpireMaximum } from './EmpireMaximum';
import { MarcusAurelius } from './MarcusAurelius';
import { CrisisThirdCentury } from './CrisisThirdCentury';
import { MilvianBridge } from './MilvianBridge';
import { AlaricSacksRome } from './AlaricSacksRome';
import { FallWesternEmpire } from './FallWesternEmpire';

export const illustrations: Record<string, ComponentType> = {
  'founding-of-rome': FoundingOfRome,
  'republic-established': RepublicEstablished,
  'gallic-sack': GallicSack,
  'pyrrhic-war': PyrrhicWar,
  'hannibal-crosses-alps': HannibalCrossesAlps,
  'battle-cannae': BattleCannae,
  'carthage-destroyed': CarthageDestroyed,
  'spartacus-revolt': SpartacusRevolt,
  'rubicon': Rubicon,
  'caesar-assassination': CaesarAssassination,
  'augustus-princeps': AugustusPrinceps,
  'colosseum-opens': ColosseumOpens,
  'empire-maximum': EmpireMaximum,
  'marcus-aurelius': MarcusAurelius,
  'crisis-third-century': CrisisThirdCentury,
  'milvian-bridge': MilvianBridge,
  'alaric-sacks-rome': AlaricSacksRome,
  'fall-western-empire': FallWesternEmpire,
};
