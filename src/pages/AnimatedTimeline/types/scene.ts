export type SceneRenderMode = 'legacy-svg' | 'cinematic-hybrid' | 'single-image';
export type SceneAssetVersion = 'v1' | 'v2' | 'v3';
export type SceneVisualGrade = 'battle' | 'ceremony' | 'collapse' | 'map';

export type SceneAccentPreset = 'embers' | 'dust' | 'laurel' | 'steel-glint' | 'none';

export interface SceneLayer {
  id: string;
  src: string;
  parallax: number;
  opacity: number;
  blendMode?: 'normal' | 'screen' | 'overlay' | 'soft-light' | 'multiply' | 'lighten';
}

export interface SceneCamera {
  driftX: number;
  driftY: number;
  zoomFrom: number;
  zoomTo: number;
}

interface BaseSceneSpec {
  renderMode: SceneRenderMode;
  fallbackIllustrationKey?: string;
}

export interface LegacySceneSpec extends BaseSceneSpec {
  renderMode: 'legacy-svg';
}

export interface CinematicSceneSpec extends BaseSceneSpec {
  renderMode: 'cinematic-hybrid';
  layers: SceneLayer[];
  accentPreset: SceneAccentPreset;
  accentIntensity?: number;
  camera: SceneCamera;
}

export interface SingleImageSceneSpec extends BaseSceneSpec {
  renderMode: 'single-image';
  src: string;
  camera: SceneCamera;
  grade?: SceneVisualGrade;
}

export type SceneSpec = LegacySceneSpec | CinematicSceneSpec | SingleImageSceneSpec;
