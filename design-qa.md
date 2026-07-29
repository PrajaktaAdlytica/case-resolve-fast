# Bankxio motion entry — design QA

## Comparison target

- Source visual truth:
  - `/Users/prajaktagaikwad/.codex/generated_images/019faeb5-9721-7441-a7f0-f21cd316415a/call_0k5QTULQ03M4xCY1WDlGggBY.png`
  - `/Users/prajaktagaikwad/.codex/generated_images/019faeb5-9721-7441-a7f0-f21cd316415a/call_ySTAgjI4D8sDSiwqlRHofST9.png`
  - `/Users/prajaktagaikwad/.codex/generated_images/019faeb5-9721-7441-a7f0-f21cd316415a/call_5f9fvPGzosXa3IaK3vRjeBun.png`
- Browser-rendered implementation:
  - `/Users/prajaktagaikwad/Documents/Codex/2026-07-29/https-case-resolve-fast-vercel-app-2/work/bankxio-motion-qa/scene-1.jpg`
  - `/Users/prajaktagaikwad/Documents/Codex/2026-07-29/https-case-resolve-fast-vercel-app-2/work/bankxio-motion-qa/scene-2.jpg`
  - `/Users/prajaktagaikwad/Documents/Codex/2026-07-29/https-case-resolve-fast-vercel-app-2/work/bankxio-motion-qa/scene-3-final.jpg`
- Full-view comparison evidence:
  - `/Users/prajaktagaikwad/Documents/Codex/2026-07-29/https-case-resolve-fast-vercel-app-2/work/bankxio-motion-qa/comparison-1.jpg`
  - `/Users/prajaktagaikwad/Documents/Codex/2026-07-29/https-case-resolve-fast-vercel-app-2/work/bankxio-motion-qa/comparison-2.jpg`
  - `/Users/prajaktagaikwad/Documents/Codex/2026-07-29/https-case-resolve-fast-vercel-app-2/work/bankxio-motion-qa/comparison-3-final.jpg`
- Viewport: 1280 × 720 CSS pixels, desktop, device scale factor 1.
- Source pixels: 1536 × 1024. Each source was normalized to a 1280 × 720 `cover` crop.
- Implementation pixels: 1280 × 720. No density resampling was required.
- State: homepage entry, each of the three scenes active in the new Maker–Checker → Control Horizon → Evidence Spine order.

## Findings

- No actionable P0, P1 or P2 visual differences remain.
- Typography: the live Inter-based copy was shortened and reduced to a 36–58 px fluid range so each film remains the dominant element while the message stays readable.
- Spacing and layout rhythm: the actual Bankxio navbar, three-scene selector, main copy and actions follow the selected compositions while adding the requested interaction layer. The focal 3D subjects remain unobstructed.
- Colors and tokens: the implementation keeps Bankxio ink, violet, magenta, ivory and white tokens. The dark kinetic scene uses a deeper translucent control surface so controls remain readable where the film fades into ivory.
- Image quality: all three films use dedicated clean image-generation plates derived from the selected concepts. There are no placeholder assets, code-drawn substitutes or stretched source images.
- Copy and content: each scene now uses one compact headline and one short supporting sentence, while keeping human review, evidence lineage and demo framing explicit.

## Interaction and runtime evidence

- The initial selected scene is Maker–Checker, followed by Control Horizon and Evidence Spine.
- Automatic advancement was verified at the 9-second interval.
- All three scene tabs remain manually selectable. Manual selection updates the correct headline and film and resets the automatic timer.
- Each activated film restarts from its own opening frame, preserving its scene-specific camera path and motion sequence.
- The 1200 ms crossfade was visually inspected between each scene.
- The active tab includes a 9-second progress line so automatic advancement is visible without distracting from the film.
- Pause changed the control to `Play motion`, stopped the three background films and held the current scene through a 10-second browser wait.
- Skip scrolled to the unchanged existing Bankxio hero; evidence: `work/bankxio-motion-qa/skip-to-existing-hero.jpg`.
- Two screenshots captured 1.8 seconds apart produced different hashes, confirming live video motion.
- Reduced-motion handling is present: videos are hidden/paused and the poster frame remains.
- All three MP4 assets returned HTTP 200 from the local app.
- The production build completed successfully.
- The development console emitted only the existing Lovable `data-tsd-source` hydration-marker mismatch on the root HTML elements. No `MotionEntry` error, media error or interaction stack trace appeared.

## Comparison history

1. Initial dark-scene review found that the secondary controls lost contrast where the film transitions into the ivory lower third (P2).
2. The controls were changed to a deeper translucent ink surface with a stronger white border, and tab focus styling was normalized to the Bankxio violet token.
3. The kinetic scene was recaptured and compared again in `comparison-3-final.jpg`; the earlier contrast issue is resolved.
4. The entry sequence was reordered to lead with the most cinematic Maker–Checker scene, the copy footprint was reduced, and automatic rotation was added without removing manual control.

## Focused region comparison

A separate crop was not needed. The 2560 × 720 side-by-side comparisons keep the typography, scene selector, primary actions, focal film asset and navbar legible at native height. Pause and skip states were inspected in separate browser interaction evidence.

## Follow-up polish

- P3: perform an additional physical-device review for the smallest mobile viewport before a future production release. The layout already uses a 700 px mobile minimum, stacked scene controls and reduced headline sizing, but the in-app browser used for this pass remained at 1280 × 720.

## Implementation checklist

- [x] Three high-quality motion scenes
- [x] Automatic 9-second scene rotation
- [x] Instant scene selection and crossfade
- [x] Manual selection resets the automatic timer
- [x] Scene-specific motion restarts on activation
- [x] Live, accessible controls
- [x] Pause and reduced-motion behavior
- [x] Skip-to-existing-site path
- [x] Existing homepage content preserved
- [x] Browser visual comparison completed
- [x] Production build completed

final result: passed
