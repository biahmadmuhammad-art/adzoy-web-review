# Omar image consistency edits

Updated on 2026-11-09 with the built-in ImageGen edit tool.

## Current direction

Omar’s acne should be visibly stronger than Majid’s and Sara’s while staying between the rejected overly mild and overly inflamed versions. The current middle version uses visible small-to-medium inflammatory spots, reduced swelling, and moderate localized redness. Facial identity, composition, and the other patients are preserved.

## Saved assets and usage

| Saved asset | Active web appearances |
| --- | --- |
| `assets/story/omar/portrait-balanced.png` | Patient hub, examination, hotspot zoom, voice card, treatment decision, Strength 0.3% card |
| `assets/img/content/patients-group-balanced.png` | Quality of Life hexagon, Patients menu preview |
| `assets/story/omar/office-before-balanced.png` | Omar history/work scene |
| `assets/story/omar/routine-balanced.png` | Omar daily routine scene |

The improved-skin outcome photo remains appropriate to the after-treatment stage. Earlier `moderate` and `pronounced` image files are retained for history and no longer referenced by active pages.

## Final prompts

### Master portrait

Edit target: `assets/story/omar/portrait-pronounced.png`. Lower-bound reference: the rejected softer preview generated immediately before this edit.

Edit IMAGE 1 (strong-acne Omar portrait) to an INTERMEDIATE strength between image 1 and IMAGE 2 (too mild). The client said image 1 is much too heavy, then said image 2 is too mild. We need the visual midpoint, leaning slightly toward image 1, rather than returning to image 2. Keep approximately TWO THIRDS of the visible inflammatory spots from image 1, distributed on forehead, both cheeks and jaw/chin. Reduce the largest raised spots and white/yellow pustule heads to about HALF their current size; remove the oversized pustule heads. Keep numerous clearly visible SMALL-TO-MEDIUM RED PAPULES, moderately raised and individually distinct. Reduce the continuous red background inflammation on cheeks and forehead by about HALF while keeping localized red rims around spots. The result must be visibly and noticeably stronger than image 2, with clearly greater density and red-lesion visibility, but substantially less swollen and less red than image 1. Think realistic intermediate moderate-to-severe acne: clearly more than mild, without exaggerated large boils. This is a direct middle-strength calibration, not a near-clear skin retouch. Preserve the exact man, identity, age, face, eyes, expression, hair, beard, blue shirt, pale background, square crop and lighting. Change only acne on the facial skin. Output only the single edited square portrait.

### patients-group-balanced

Edit target: `assets/img/content/patients-group-pronounced.png`. Reference: `assets/story/omar/portrait-balanced.png`.

Edit IMAGE 1 only. IMAGE 2 is the final INTERMEDIATE-SEVERITY MASTER of Omar and must determine the exact degree of acne in this edit. Image 1's acne is too strong. Match image 2: many clearly visible small-to-medium red papules on forehead, both cheeks and chin/jaw, with moderate localized pinkness; remove the largest swollen bumps and oversized white/yellow heads, reduce the broad background redness to the amount in image 2. The result must stay noticeably stronger than a sparse mild-acne face, but not as intense as image 1. Do not over-soften or clear the skin. Copy the lesion size, density and redness of image 2 as faithfully as possible while adapting to the angle and lighting in image 1. Preserve identity, age, facial features, expression, hair, beard, clothing, pose, composition and lighting; change only Omar's facial acne. Image 1 is the three-patient montage. Omar is the older blue-shirted man at LOWER RIGHT. ONLY edit his face to the middle severity shown in image 2. Leave the woman's and younger man's acne and everything else entirely unchanged. Omar should remain visibly more affected than the woman, with a moderate difference, not a dramatic jump. Preserve the portrait aspect ratio, pale lavender background, exact face sizes, positions, crop and overlaps. Output the full montage.

### office-before-balanced

Edit target: `assets/story/omar/office-before-pronounced.png`. Reference: `assets/story/omar/portrait-balanced.png`.

Edit IMAGE 1 only. IMAGE 2 is the final INTERMEDIATE-SEVERITY MASTER of Omar and must determine the exact degree of acne in this edit. Image 1's acne is too strong. Match image 2: many clearly visible small-to-medium red papules on forehead, both cheeks and chin/jaw, with moderate localized pinkness; remove the largest swollen bumps and oversized white/yellow heads, reduce the broad background redness to the amount in image 2. The result must stay noticeably stronger than a sparse mild-acne face, but not as intense as image 1. Do not over-soften or clear the skin. Copy the lesion size, density and redness of image 2 as faithfully as possible while adapting to the angle and lighting in image 1. Preserve identity, age, facial features, expression, hair, beard, clothing, pose, composition and lighting; change only Omar's facial acne. Image 1 is the office scene. Omar is at RIGHT holding a yellow folder by his face. Match the visible cheek, forehead and jaw to image 2's middle severity. Preserve the yellow folder, hand, blue shirt and colleagues posing for a phone picture in the background. Output the same full widescreen scene.

### routine-balanced

Edit target: `assets/story/omar/routine-pronounced.png`. Reference: `assets/story/omar/portrait-balanced.png`.

Edit IMAGE 1 only. IMAGE 2 is the final INTERMEDIATE-SEVERITY MASTER of Omar and must determine the exact degree of acne in this edit. Image 1's acne is too strong. Match image 2: many clearly visible small-to-medium red papules on forehead, both cheeks and chin/jaw, with moderate localized pinkness; remove the largest swollen bumps and oversized white/yellow heads, reduce the broad background redness to the amount in image 2. The result must stay noticeably stronger than a sparse mild-acne face, but not as intense as image 1. Do not over-soften or clear the skin. Copy the lesion size, density and redness of image 2 as faithfully as possible while adapting to the angle and lighting in image 1. Preserve identity, age, facial features, expression, hair, beard, clothing, pose, composition and lighting; change only Omar's facial acne. Image 1 is the bathroom routine scene. Omar is at RIGHT applying gel with a finger. Match visible cheek, forehead and jaw to image 2's middle severity. Keep his finger, clear gel smear, white T-shirt, warm bathroom lighting, and the Adzoy box at LEFT with all existing branding and strength text, water glass and tablet blister unchanged. Output the same full widescreen scene.
