# CLAUDE.md - Tidy Up Valet Trash Service Website

## Project Overview

Single-page landing website for Tidy Up Valet Trash Service.

- **Service Area:** Jacksonville, FL and surrounding counties
- **Target Audience:** Multifamily property managers and owners
- **Goal:** Generate leads through contact form submissions
- **Design:** Industrial Clean aesthetic - refined, utilitarian, trustworthy
- **Hosting:** Netlify (with Netlify Forms)

## Brand Guidelines

### Colors

```css
--color-primary: #1D8547;      /* Forest Green - main brand color */
--color-primary-dark: #145C32; /* Darker green for hover states */
--color-accent: #E8B931;       /* Gold - accent highlights */
--color-dark: #0A0A0A;         /* Near black - hero backgrounds */
--color-white: #FFFFFF;        /* White */
```

### Typography

- **Display Font:** Outfit (Google Fonts) - bold, geometric for headlines
- **Body Font:** DM Sans (Google Fonts) - clean, readable for body text
- Minimum body size: 16px
- Line height: 1.6 for readability

### Logo

- Trash bin icon in green square + "TIDY UP" text
- Tagline: "VALET TRASH SERVICE"
- White version for dark backgrounds
- Color version for light backgrounds

## Writing Standards

### BANNED Words and Phrases

Never use these AI-typical terms:

- "utilize" → use "use"
- "leverage" → use "use" or rephrase
- "streamline" or "streamlined"
- "cutting-edge" or "state-of-the-art"
- "innovative" (unless truly novel)
- "robust"
- "seamless"
- "holistic"
- "synergy"
- "empower"
- "revolutionize"
- "transform" (as buzzword)
- "elevate"
- "unlock"
- "harness"
- "delve"
- "landscape" (business context)
- "navigate" (business context)
- "spearhead"
- "foster"
- "facilitate"
- Any word ending in "-ize" when simpler exists

### BANNED Formatting

- No emoji in professional copy
- No excessive exclamation points (max 1 per page section)
- No unnecessary hyphenated compound adjectives as buzzwords
- No ALL CAPS for emphasis (use bold sparingly if needed)

### Preferred Language

- Short, direct sentences (under 20 words)
- Active voice over passive
- Concrete over abstract
- "Help" not "assist"
- "Work with" not "collaborate with"
- "Make" not "craft" or "curate"
- Numbers as digits for scannability (13-gallon, not thirteen-gallon)

## Content (Client Provided)

### About Section

"Tidy Up goes beyond door-to-door trash collection. We help create cleaner, healthier communities by maintaining pristine property environments through dependable valet trash, recycling, and parking lot cleaning services residents can trust.

We partner with multifamily properties to educate residents on proper recycling practices—promoting sustainability while reducing contamination. Our mission is to help properties increase net operating income while providing residents with one of the most valued community amenities at an affordable cost.

Let Tidy Up help your properties achieve higher net income while delivering the best valet trash service in Florida."

### How It Works

**Step 1: Prep**
- Use your 13-gal bin
- Tie bags tight
- Double-bag pet waste
- No loose or sharp items

**Step 2: Recycle**
- Separate recyclables
- Break down cardboard
- Not sure? Leave it out — we'll handle it

**Step 3: Notify & Collect**
- Text when we arrive
- Set bin outside your door
- We collect — multiple passes
- Text when we're done
- Bring bin back inside

## Technical Standards

### HTML

- Semantic HTML5 (header, main, section, article, footer, nav)
- One H1 per page (in hero)
- Logical heading hierarchy (H1 → H2 → H3)
- Alt text on all images (descriptive, not "image of...")
- Lang attribute on html element
- Proper meta tags for SEO

### CSS

- Mobile-first responsive design
- CSS custom properties for theming
- BEM-inspired naming conventions
- No inline styles
- Flexbox and Grid for layout
- Smooth scroll behavior
- Focus states for accessibility
- Reduced motion support (@media prefers-reduced-motion)

### JavaScript

- Vanilla JS only (no frameworks)
- Progressive enhancement (site works without JS)
- Defer attribute on script tags
- No document.write
- Intersection Observer for scroll animations

### Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 90+
- First Contentful Paint: under 1.5s
- Total page weight: under 500KB

### Accessibility Requirements

- WCAG 2.1 AA compliance
- Color contrast ratio: 4.5:1 minimum (text), 3:1 (large text)
- Keyboard navigable (tab order logical)
- Skip to content link
- ARIA labels on interactive elements without visible text
- Focus indicators visible
- No autoplay media

## File Structure

```
tidyup/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   ├── favicon.ico
│   │   └── og-image.jpg
│   ├── TidyUp.pdf
│   └── Mockup-New.jpg
├── CLAUDE.md
├── README.md
├── .gitignore
└── netlify.toml
```

## Contact Information (Pending)

- **Domain:** [WAITING FROM CLIENT]
- **Phone:** [WAITING FROM CLIENT] - using (904) 555-1234 placeholder
- **Email:** [WAITING FROM CLIENT] - using info@tidyup.com placeholder
- **Social Media:** [WAITING FROM CLIENT]

## Deployment

### Netlify Configuration

- Repository connected to Netlify for automatic deployments
- Build command: (none - static site)
- Publish directory: `.`
- Netlify Forms enabled for contact form

### Form Handling

Using Netlify Forms:
- `data-netlify="true"` attribute on form element
- `name="contact"` attribute for form identification
- Honeypot field for bot protection
- Netlify handles submissions automatically

## Development Commands

```bash
# Local development with live reload
npx live-server

# Or Python simple server
python -m http.server 8000

# Or Node
npx serve .
```

## Verification Checklist

### Before ANY Code Commit

#### Content Check
- [ ] Read all visible text out loud - does it sound human?
- [ ] Search for banned words (Ctrl+F each one)
- [ ] Count exclamation points (max 1 per section)
- [ ] Verify no emoji in body copy
- [ ] Confirm active voice used

#### HTML Check
- [ ] Validate at validator.w3.org
- [ ] One H1 only
- [ ] All images have alt text
- [ ] All links have descriptive text (no "click here")
- [ ] Form inputs have labels
- [ ] Lang attribute present

#### CSS Check
- [ ] Mobile view works (320px width)
- [ ] Tablet view works (768px width)
- [ ] Desktop view works (1440px width)
- [ ] No horizontal scroll at any size
- [ ] Buttons/links have hover states
- [ ] Focus states visible

#### Accessibility Check
- [ ] Tab through entire page - logical order?
- [ ] Can activate all buttons/links with keyboard?
- [ ] Color contrast passes (use WebAIM checker)

#### Performance Check
- [ ] Images optimized
- [ ] No unused CSS
- [ ] Scripts deferred
- [ ] Run Lighthouse audit

## Client Communication Log

- [x] Received logo and brand colors
- [x] Received content copy
- [ ] Waiting: Domain name
- [ ] Waiting: Phone number
- [ ] Waiting: Email for form submissions
- [ ] Waiting: Social media links
- [ ] Sent preview link: [DATE]
- [ ] Client feedback received: [DATE]
- [ ] Final approval: [DATE]
- [ ] Site live: [DATE]
