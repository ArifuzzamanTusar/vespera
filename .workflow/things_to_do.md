# Vespera Caviar — Things to Do (Missing Images Workflow)

Below is the list of missing placeholder images. You should generate or upload these assets and place them in the `/public/images/` directory with the specified filenames. 

The application is configured with `<SafeImage>` handles, so pages will render with elegant fallback layouts (the signature gold & black pearl cluster graphic) until you add these image files.

---

### 1. Hero Background
- **Filename**: `/public/images/hero-bg.jpg`
- **Dimensions**: 1920 × 1080 px (Landscape)
- **Usage**: Displayed behind text at 22% opacity with horizontal and diagonal gold shimmer animations.
- **AI Image Generation Prompt**:
  > "Dark luxury caviar tin on crushed ice, black background, gold rim highlight, extreme macro close-up, cinematic studio lighting, rich dark tones, subtle gold specular reflections, 8K resolution, editorial commercial photography style"

---

### 2. Siberian Sturgeon Classic Product Visual
- **Filename**: `/public/images/tin-siberian.jpg`
- **Dimensions**: 800 × 800 px (Square)
- **Usage**: Main product hero shot for Siberian Sturgeon Classic page.
- **AI Image Generation Prompt**:
  > "Close-up matte black caviar tin open, jet-black sturgeon roe pearls glistening with moisture, dramatic single-source studio light from the left, pure black background, extreme macro depth of field, luxury editorial food photography, clean composition"

---

### 3. Kaluga Fusion Reserve Product Visual
- **Filename**: `/public/images/tin-kaluga.jpg`
- **Dimensions**: 800 × 800 px (Square)
- **Usage**: Main product hero shot for Kaluga Fusion Reserve page.
- **AI Image Generation Prompt**:
  > "Close-up open caviar tin, large olive-brown pearls glistening, warm amber side lighting, rich deep brown tones, dark studio background, macro luxury editorial, premium gourmet food photography"

---

### 4. Imperial Kaluga Fusion Product Visual
- **Filename**: `/public/images/tin-imperial.jpg`
- **Dimensions**: 800 × 800 px (Square)
- **Usage**: Main product hero shot for Imperial Kaluga Fusion page.
- **AI Image Generation Prompt**:
  > "Oversized gold-rimmed caviar tin open, large deeply colored pearls, opulent dark studio lighting with rich shadow, regal and luxurious feeling, close-up macro, black background with subtle gold rim reflection, commercial advertising shot"

---

### 5. Story / House Editorial Image
- **Filename**: `/public/images/about-story.jpg`
- **Dimensions**: 1200 × 800 px (Landscape/Aspect 1:1 fallback)
- **Usage**: Displays in split sections on the About page and Home page.
- **AI Image Generation Prompt**:
  > "Elegant gloved hands carefully opening a black caviar tin with a thin gold rim, white linen cloth on a dark wooden table, warm candle light from the right side, fine dining restaurant atmosphere, dark moody background, cinematic shallow depth of field"

---

### 6. Cold Chain Shipping Box Visual
- **Filename**: `/public/images/shipping-cold.jpg`
- **Dimensions**: 1200 × 800 px (Landscape)
- **Usage**: Displays in the split section on the Shipping & Care page.
- **AI Image Generation Prompt**:
  > "Insulated luxury caviar shipping case open on a clean white marble countertop, dry ice mist rising gently from within, black caviar tin with a gold label nestled inside, cool blue-white ambient light, premium packaging editorial photography, minimalist and high-end"

---

### Verification
Once you place these image files in `/public/images/`, restart your Next.js dev server or refresh the browser. The `<SafeImage>` components will automatically transition from their fallback state to rendering your uploaded visuals seamlessly.
