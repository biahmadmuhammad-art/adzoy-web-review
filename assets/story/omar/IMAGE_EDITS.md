# Omar image consistency edits

## Current revision: stronger than the other two patients

Updated on 2026-11-09 using the built-in ImageGen edit tool, following the user’s explicit correction that Omar must show a stronger visible acne impact than Majid and Sara. The prior reduced-severity images are superseded. Omar’s facial identity and the other characters are retained.

### Master portrait

- Saved asset: `assets/story/omar/portrait-pronounced.png`
- Edit target: `assets/story/omar/portrait-moderate.png`
- Comparison reference: `assets/img/content/patients-group-moderate.png`
- Prompt: Use case: identity-preserve / precise-object-edit. Image 1 is the EDIT TARGET: the square portrait of Omar, age 35, in a blue shirt. Image 2 is COMPARISON ONLY: the three-patient montage, where the woman at the top has more visible acne than the younger man on the lower left. The client has rejected Omar looking milder than the other patients. Edit ONLY Omar's facial acne in image 1 to make his acne UNAMBIGUOUSLY MORE PRONOUNCED than BOTH of those other patients, clearly visible even in a small patient-card thumbnail. Increase the number, size, contrast and redness of inflammatory papules and pustules across both cheeks, forehead, temples and chin/jaw; add moderately dense, uneven clusters of distinct raised red inflamed spots and local pink/red inflammation, especially across both cheeks and the forehead. His case should read as the strongest acne case of the three at a glance, an established moderate-to-severe inflammatory acne presentation. Do not leave him with only faint speckles or a few mild spots. Keep a natural clinical photographic appearance, recognizable skin texture and areas of intact skin between lesions; no blood, open sores, exaggerated boils, or disfiguring cysts. Keep his exact facial identity, age, face shape, eyes, nose, lips, hair, beard, skin tone outside inflammation, expression, blue shirt, crop, framing and plain pale background unchanged. Output just the edited square portrait, no montage, no text, no added elements. This portrait will be the master reference for matching his other photos.

### patients-group-pronounced

- Saved asset: `assets/img/content/patients-group-pronounced.png`
- Edit target: `assets/img/content/patients-group-moderate.png`
- Severity reference: `assets/story/omar/portrait-pronounced.png`
- Prompt: Edit IMAGE 1 only. IMAGE 2 is the NEW MASTER REFERENCE for the same man Omar's facial identity and his stronger acne. The user requires his acne to look clearly more pronounced than the two other patient characters. Match the image 2 master's unmistakable inflammatory severity: numerous raised red papules and pustules across forehead, temples, cheeks and chin/jaw, visibly inflamed pink/red clusters and some pale pustule heads, with intact skin between spots. Do NOT tone down the reference, do NOT leave faint mild spots, and do NOT make his skin look healed. Preserve realistic clinical photographic texture. No blood or open sores. Keep his exact identity, age, face shape, expression, hair and beard, eye color, clothing, pose, body proportions, lighting and composition unchanged. Change ONLY Omar's facial acne. Preserve all objects, text and other people. Image 1 is the three-patient montage, with Omar the older blue-shirted man at LOWER RIGHT. Copy the severity and distribution from image 2 onto only his face, adapted to the montage scale. His cheek and forehead inflammation must be distinctly stronger and more visible than the woman's acne even when this image is shown as a small hexagon on a website. Leave the woman at the top and younger man at lower left EXACTLY as they are, including their existing acne. Preserve their size, location, overlaps, the lavender background, and portrait aspect ratio. Output the full three-person montage.

### office-before-pronounced

- Saved asset: `assets/story/omar/office-before-pronounced.png`
- Edit target: `assets/story/omar/office-before-moderate.png`
- Severity reference: `assets/story/omar/portrait-pronounced.png`
- Prompt: Edit IMAGE 1 only. IMAGE 2 is the NEW MASTER REFERENCE for the same man Omar's facial identity and his stronger acne. The user requires his acne to look clearly more pronounced than the two other patient characters. Match the image 2 master's unmistakable inflammatory severity: numerous raised red papules and pustules across forehead, temples, cheeks and chin/jaw, visibly inflamed pink/red clusters and some pale pustule heads, with intact skin between spots. Do NOT tone down the reference, do NOT leave faint mild spots, and do NOT make his skin look healed. Preserve realistic clinical photographic texture. No blood or open sores. Keep his exact identity, age, face shape, expression, hair and beard, eye color, clothing, pose, body proportions, lighting and composition unchanged. Change ONLY Omar's facial acne. Preserve all objects, text and other people. Image 1 is the office scene. Omar is on the RIGHT holding a yellow folder partly in front of his face. Strengthen the visible forehead, temple, cheek and jaw lesions to match the master reference closely, including redness that remains visible at smaller display sizes. Preserve the yellow folder, his hand, blue shirt, office and all colleagues taking a phone photo behind him. Output the same full widescreen 16:9 scene.

### routine-pronounced

- Saved asset: `assets/story/omar/routine-pronounced.png`
- Edit target: `assets/story/omar/routine-moderate.png`
- Severity reference: `assets/story/omar/portrait-pronounced.png`
- Prompt: Edit IMAGE 1 only. IMAGE 2 is the NEW MASTER REFERENCE for the same man Omar's facial identity and his stronger acne. The user requires his acne to look clearly more pronounced than the two other patient characters. Match the image 2 master's unmistakable inflammatory severity: numerous raised red papules and pustules across forehead, temples, cheeks and chin/jaw, visibly inflamed pink/red clusters and some pale pustule heads, with intact skin between spots. Do NOT tone down the reference, do NOT leave faint mild spots, and do NOT make his skin look healed. Preserve realistic clinical photographic texture. No blood or open sores. Keep his exact identity, age, face shape, expression, hair and beard, eye color, clothing, pose, body proportions, lighting and composition unchanged. Change ONLY Omar's facial acne. Preserve all objects, text and other people. Image 1 is the bathroom routine scene. Omar is on the RIGHT applying gel with one finger to his cheek. Strengthen visible forehead, temple, cheek and chin/jaw acne to match the master reference closely. Preserve the clear gel and finger, white T-shirt, warm lighting, and the product box on the LEFT including all exact existing Adzoy branding and strength text, water glass and tablet blister. Output the same full widescreen 16:9 scene.

### Current web coverage

- Master portrait: patient hub, examination, hotspot zoom, voice card, treatment decision and Strength 0.3% patient card.
- Group montage: Quality of Life hexagon and Patients menu preview.
- Story scenes: office before treatment and daily routine.
- Outcome: existing improved-skin photo retained, appropriate to the story’s after-treatment stage.
- Visual acceptance: Omar’s acne must read as more pronounced than both other patients in the full-size assets, the rendered montage and the patient cards.

## Previous revision (superseded)

The following reduced-severity edit prompts record the earlier iteration; their assets are no longer used by active web pages.

## patients-group-moderate

- Saved asset: `assets/img/content/patients-group-moderate.png`
- Edit target: `assets/img/content/patients-group.jpg`
- Reference: `assets/story/omar/portrait-moderate.png`
- Prompt: Edit image 1 only. Image 2 is a reference for the same man Omar's already approved acne severity and identity. Precisely reduce the density, size and redness of the visible inflammatory acne on Omar to match image 2: scattered small papules and some mild red marks remain visible on forehead, cheeks and chin, but no dense dark-red clusters or large nodules/cysts. This is a baseline acne depiction, not clear or healed skin. Keep his facial identity, age, hair, beard, skin tone, expression and pose completely unchanged. Preserve the source photo's composition, camera, crop, aspect ratio, colors and lighting, and everything outside his facial skin. No text, graphics or watermarks added. Image 1 is a portrait-format montage of three people. ONLY change the facial acne of the older blue-shirted man in the LOWER RIGHT. Leave the teenage man lower left and the woman above completely untouched, including all their acne. Preserve the exact montage spacing, overlaps, clothing and pale lavender background. Do not replace the montage with a single portrait. Match his facial acne to image 2 at the smaller scale of the montage.

## office-before-moderate

- Saved asset: `assets/story/omar/office-before-moderate.png`
- Edit target: `assets/story/omar/office-before.webp`
- Reference: `assets/story/omar/portrait-moderate.png`
- Prompt: Edit image 1 only. Image 2 is a reference for the same man Omar's already approved acne severity and identity. Precisely reduce the density, size and redness of the visible inflammatory acne on Omar to match image 2: scattered small papules and some mild red marks remain visible on forehead, cheeks and chin, but no dense dark-red clusters or large nodules/cysts. This is a baseline acne depiction, not clear or healed skin. Keep his facial identity, age, hair, beard, skin tone, expression and pose completely unchanged. Preserve the source photo's composition, camera, crop, aspect ratio, colors and lighting, and everything outside his facial skin. No text, graphics or watermarks added. Image 1 is the wide 16:9 office scene. Omar is on the RIGHT holding a yellow folder beside his face. Only reduce his exposed cheek/jaw/forehead acne to the reference. Preserve the folder, hands, blue shirt, and the three colleagues posing for a phone photo in the background exactly. Keep the widescreen 16:9 composition.

## routine-moderate

- Saved asset: `assets/story/omar/routine-moderate.png`
- Edit target: `assets/story/omar/routine.webp`
- Reference: `assets/story/omar/portrait-moderate.png`
- Prompt: Edit image 1 only. Image 2 is a reference for the same man Omar's already approved acne severity and identity. Precisely reduce the density, size and redness of the visible inflammatory acne on Omar to match image 2: scattered small papules and some mild red marks remain visible on forehead, cheeks and chin, but no dense dark-red clusters or large nodules/cysts. This is a baseline acne depiction, not clear or healed skin. Keep his facial identity, age, hair, beard, skin tone, expression and pose completely unchanged. Preserve the source photo's composition, camera, crop, aspect ratio, colors and lighting, and everything outside his facial skin. No text, graphics or watermarks added. Image 1 is the wide 16:9 bathroom scene. Omar on the RIGHT touches gel to his cheek. Only reduce the visible forehead and cheek acne to the reference. Preserve his finger, gel smear, white T-shirt, warm bathroom light, the Adzoy product box at the LEFT including exact existing branding, the glass of water and tablet blister unchanged. Keep the widescreen 16:9 composition.

## Web coverage

- Quality of Life hexagon and Patients menu preview: revised group montage.
- Omar history/work and daily routine scenes: revised scene images.
- Patient hub, examination, voice card, treatment decision and hotspot zoom: approved portrait already used.
- Strength 0.3% patient card: now uses the approved portrait; severity label aligned with the patient profile.
- Outcome scene: reviewed; retained the existing improved-skin photo.
