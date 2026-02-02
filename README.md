# Tidy Up Valet Trash Service

A modern, high-performance landing website for Tidy Up Valet Trash Service, serving multifamily properties in Jacksonville, FL and surrounding counties.

## Features

- **Modern Design** - Industrial clean aesthetic with bold typography and smooth animations
- **Responsive** - Mobile-first design that works on all devices
- **Accessible** - WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Fast** - No frameworks, pure HTML/CSS/JS for optimal performance
- **Lead Capture** - Netlify Forms integration for contact form submissions

## Project Structure

```
tidyup/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet (Industrial Clean design)
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   └── images/
│       ├── logo.svg        # Main logo (color version)
│       ├── logo-white.svg  # Logo for dark backgrounds
│       ├── TidyUp.pdf      # Original brand assets
│       └── Mockup-New.jpg  # Design mockup reference
├── netlify.toml            # Netlify configuration
├── CLAUDE.md               # Project guidelines and standards
└── README.md               # This file
```

## Quick Start

### Local Development

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using live-server (with auto-reload)
npx live-server
```

Then open `http://localhost:8000` in your browser.

## Deployment

This site is deployed on Netlify.

### Automatic Deployment

1. Push changes to the `main` branch
2. Netlify automatically builds and deploys

### Manual Deployment

1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the project folder to deploy

## Contact Form Setup (Netlify Forms)

The contact form uses Netlify Forms for handling submissions. This is already configured in the HTML.

### Current Setup

The form includes:
- `data-netlify="true"` - Enables Netlify Forms
- `netlify-honeypot="bot-field"` - Spam protection
- Hidden form-name field for Netlify processing

When someone submits the form:
1. Netlify captures and stores the submission
2. Data appears in the Netlify dashboard under **Forms > contact**
3. Email notifications are sent (if configured)

### How to Set Up Email Notifications

Once the site is live, configure email notifications:

1. Go to [app.netlify.com](https://app.netlify.com)
2. Select the site (e.g., tidyup-valet)
3. Navigate to **Forms** in the sidebar
4. Click **Form notifications**
5. Click **Add notification** → **Email notification**
6. Enter the recipient email address
7. Save

The client will now receive an instant email every time someone fills out the contact form.

### Additional Notification Options

| Option | Description |
|--------|-------------|
| **Multiple recipients** | Add multiple email addresses to notify client + backup |
| **Slack notifications** | Send form submissions to a Slack channel |
| **Webhook** | Connect to CRM, Zapier, or other automation tools |
| **Outgoing webhook** | POST form data to any URL |

### Form Submission Limits

Netlify Free Tier includes:
- 100 form submissions/month
- Unlimited forms
- Spam filtering included

If the client needs more submissions, Netlify Pro ($19/month) includes 1,000 submissions/month.

## Technology Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, Grid, Flexbox) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Outfit (display), DM Sans (body) |
| Hosting | Netlify |
| Forms | Netlify Forms |

## Design System

### Colors

```css
--color-primary: #1D8547    /* Forest Green */
--color-accent: #E8B931     /* Gold */
--color-dark: #0A0A0A       /* Near Black */
```

### Typography

- **Display**: Outfit (800 weight for headlines)
- **Body**: DM Sans (400-600 weights)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 90+ |
| Lighthouse SEO | 90+ |

## Customization

### Update Contact Information

Edit these locations in `index.html`:
- Contact section: Phone, email
- Footer: Phone, email, address

### Update Colors

Edit CSS custom properties in `css/styles.css`:

```css
:root {
    --color-primary: #1D8547;
    --color-accent: #E8B931;
}
```

## License

Copyright 2025 Tidy Up Valet Trash Service. All rights reserved.
