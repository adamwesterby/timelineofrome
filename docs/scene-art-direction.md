# Scene Art Direction (Animated Timeline)

This document defines how to produce and review animated timeline scene art across legacy and current renderers.

## Scope

- Runtime renderers:
- `single-image` (`v3`) for one generated image per event.
- `cinematic-hybrid` (`v2`/`v1`) for layered fallback (`bg`, `mid`, `fg`).
- `legacy-svg` for illustration fallback when image assets fail.
- Asset paths:
- `v3`: `src/pages/AnimatedTimeline/assets/scenes-v3/<event-id>/scene.webp`
- `v2`: `src/pages/AnimatedTimeline/assets/scenes-v2/<event-id>/{bg,mid,fg}.svg`
- `v1`: `src/pages/AnimatedTimeline/assets/scenes/<event-id>/{bg,mid,fg}.webp`
- Legacy generator (`scripts/generate-cinematic-assets.py`) remains available for v1 fallback only.

## Visual Constraints

- Event recognizability comes first. A viewer should identify the event in under 2 seconds.
- Preserve timeline palette and mood; avoid bright modern colors.
- Keep lower-left overlay region calm/darker to protect text readability.
- For `v3` single-image scenes, keep focal subject center-right and preserve empty visual breathing room in the lower-left text zone.

## Quality Rubric

Each scene must pass all checks:

- Subject is recognizable at first glance.
- Historical cue is clear and event-specific.
- Headline/subtitle remain readable on desktop and mobile.
- Composition produces clear depth when pan/zoom animates.
- Motion feels coherent and does not distract from narrative focus.

## Composition Checklist

- Include one dominant focal subject in the main composition.
- Keep silhouette contrast strong enough at reduced brightness.
- Avoid generic abstract bars/shapes without semantic meaning.
- Avoid detail overload in the left-lower text zone.
- Validate crop safety at desktop and mobile viewport sizes.

## QA Workflow

Use dev QA mode:

- Open `/animated?qa=1`.
- Switch `v1`, `v2`, and `v3` using the QA panel.
- Review each checklist item and record pass/fail.
- If `v3` is unavailable for an event, app will show `v2`/`v1` fallback.

## Grok Prompt Workflow

- Prompt source of truth: `docs/grok-imagine-prompts.md`.
- Generate 3-5 candidates per event from the matching prompt.
- Select one final image per event by QA checklist pass.
- Export final image as WebP (`2048x1152`, quality 82-88).
- If lower-left text zone is busy, regenerate with stronger "calmer lower-left" instruction.

## Notes on Assets

- `v3` is the default runtime target.
- `v2`/`v1` remain in-place as fallback while `v3` assets are generated and approved.
