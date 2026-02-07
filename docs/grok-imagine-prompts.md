# Grok Imagine Prompt Pack (Animated Timeline v3)

Use the following base prefix for every event-specific prompt:

`Cinematic historical illustration, 16:9 composition, late-antique/Roman color palette (terracotta, bronze, smoke, parchment), realistic textures, dramatic natural light, no text, no logos, no modern objects, no anachronistic armor, keep lower-left 35% of frame visually calmer and darker for UI text readability, focal subject center-right, high detail, atmospheric depth.`

## Event Prompts

1. `founding-of-rome`
- `Romulus marking the first boundary of Rome on the Palatine hill at dawn, Tiber valley in the background, early Iron Age huts and timber palisade, a small ritual fire, a wolf motif subtly present in carved wood, companions watching with spears and cloaks, sacred and mythic mood, warm sunrise haze.`

2. `republic-established`
- `Expulsion of the last king and birth of the Roman Republic, Roman nobles and citizens swearing civic oath in the Forum, fasces and early republican standards visible, temple steps and columns behind, tense but triumphant political transition, golden torchlight mixed with overcast sky.`

3. `gallic-sack`
- `390 BC sack of Rome by Gauls, Brennus-like war leader in foreground with heavy torque and sword, burning rooftops and collapsing walls behind, Roman defenders scattered, smoke and embers filling the air, chaotic urban devastation.`

4. `pyrrhic-war`
- `Pyrrhus of Epirus confronting Roman legions in southern Italy, war elephants advancing with Hellenistic infantry support, Roman maniples bracing with shields and pila, dust-choked battlefield, bronze armor glint, moment of shock and tactical surprise.`

5. `hannibal-crosses-alps`
- `Hannibal’s army crossing snowy Alpine pass, elephants and Carthaginian soldiers navigating icy cliffs, pack animals and banners in storm wind, steep precipices and fog, extreme endurance and danger, cold blue-gray light with muted earth tones.`

6. `battle-cannae`
- `Battle of Cannae at the decisive phase of double envelopment, dense Roman infantry trapped in tightening crescent, Carthaginian wings closing from both flanks, overhead dust cloud and compressed formations, tactical masterpiece conveyed through composition.`

7. `carthage-destroyed`
- `146 BC destruction of Carthage, Roman legionaries breaching and burning Punic city blocks, shattered harbor architecture, flames and black smoke columns, civilians fleeing in distance, grim finality of total war.`

8. `spartacus-revolt`
- `Spartacus leading rebel gladiators and escaped slaves, improvised armor and captured Roman weapons, camp on rugged slope near Vesuvius, determined faces and raised standards, firelight and dawn mist, insurgent energy and defiance.`

9. `rubicon`
- `Julius Caesar crossing the Rubicon in winter dusk, Caesar mounted at shallow river crossing with legion standards behind him, officers hesitating on the bank, tense irreversible decision, muted moonlit water reflections, restrained dramatic lighting.`

10. `caesar-assassination`
- `Ides of March inside the Theatre of Pompey senate chamber, senators in white togas converging with concealed daggers, Caesar collapsing near statue pedestal, shocked expressions and scattered scrolls, political betrayal frozen in a single instant.`

11. `augustus-princeps`
- `27 BC rise of Augustus as princeps, Octavian/Augustus in laurel wreath on marble rostra addressing Senate and citizens, ceremonial standards and calm authority, architectural grandeur of early imperial Rome, warm dignified light and ordered composition.`

12. `colosseum-opens`
- `80 AD inaugural spectacle at the Flavian Amphitheatre, newly opened Colosseum packed with spectators, arena activity implied at middle distance, awnings and flags above, monumental scale and civic celebration, sunlit stone and festive atmosphere.`

13. `empire-maximum`
- `117 AD Roman Empire at greatest extent under Trajan, imperial strategy scene centered on large carved campaign map/tablet with provinces highlighted, Trajan and officers planning in military pavilion, standards and frontier symbols in background, sense of vast administrative control.`

14. `marcus-aurelius`
- `Marcus Aurelius at Danubian frontier during Marcomannic wars, emperor in cloak and armor near horse, legion camp and defensive earthworks behind, cold northern sky, stoic leadership amid pressure, contemplative yet martial tone.`

15. `crisis-third-century`
- `Crisis of the Third Century, fractured empire visualized through contested cityscape: rival armies, anxious civilians, plague pyres in distance, damaged fortifications and economic strain, unstable leadership atmosphere, heavy dust and dim copper light.`

16. `milvian-bridge`
- `312 AD Battle of the Milvian Bridge, Constantine’s forces surging near the Tiber crossing, opposing troops collapsing at bridge choke point, luminous Chi-Rho sign subtly visible in the sky, decisive momentum and religious turning point.`

17. `alaric-sacks-rome`
- `410 AD Visigoth sack of Rome, breached gates and armed Gothic warriors entering monumental streets, Roman civilians and clergy fleeing, looted mansions and smoke plumes, psychological shock of the “eternal city” violated.`

18. `fall-western-empire`
- `476 AD deposition of Romulus Augustulus, young emperor surrendering imperial insignia to Odoacer’s representatives in dim palace hall, exhausted guards and stripped regalia, end-of-era melancholy, twilight tones and quiet finality.`

## Generation Contract

1. Generate 3-5 candidates per event from the event prompt above.
2. Select one final image per event using the scene QA checklist.
3. Save final files to `src/pages/AnimatedTimeline/assets/scenes-v3/<event-id>/scene.webp`.
4. Export at `2048x1152` (16:9), WebP quality `82-88`.
5. If the lower-left text-safe area is too busy, regenerate with stronger calm-zone guidance.
