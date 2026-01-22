# Morning DJ Coffee Set Website

A modern, minimal landing platform for Morning DJ Coffee Set - morning DJ sessions hosted in cafés, venues, and open spaces.

## Overview

This website answers three key questions:
- **What is Morning DJ Coffee Set?** - A cultural movement replacing nightlife with daytime culture
- **Why should I attend?** - Experience specialty coffee, curated DJ sets, and morning energy
- **How do I join/book/collaborate?** - View events, become a partner, or get in touch

## Features

- **7 Core Pages:**
  - Home - Emotional hook with hero section and highlights
  - Concept - Explains the idea and target audience
  - Events - Upcoming events with RSVP functionality
  - Locations - Cities where events are hosted
  - Gallery - Photo and video showcase
  - Partners - B2B partnership information
  - Contact - Contact form and business information

- **Design:**
  - Minimal, editorial style
  - Large typography
  - Black/white/warm coffee tones
  - Full-width imagery support
  - Mobile-first responsive design

- **Technical:**
  - Static HTML/CSS/JavaScript
  - No build process required
  - Ready for deployment on Vercel, Netlify, or any static host
  - Lightweight and fast

## File Structure

```
/
├── index.html          # Home page
├── concept.html        # Concept page
├── events.html         # Events page
├── locations.html      # Locations page
├── gallery.html        # Gallery page
├── partners.html       # Partners page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## Customization

### Update Content

1. **Organization Information:**
   - Replace `[Your Org Number]` in footer sections with actual organization number
   - Update email addresses in `contact.html`

2. **Events:**
   - Edit event cards in `events.html` with real event data
   - Update the "Next Event" section on `index.html`

3. **Partners:**
   - Replace placeholder partner names with actual partners
   - Add partner logos (replace text placeholders with `<img>` tags)

4. **Gallery:**
   - Replace placeholder divs in `gallery.html` with actual images:
   ```html
   <div class="gallery-item">
       <img src="path/to/image.jpg" alt="Description">
   </div>
   ```

5. **Social Media:**
   - Update social media links (currently using `#` placeholders)
   - Add Instagram embed code in `gallery.html` if desired

### Styling

All styles are in `css/style.css`. Key CSS variables for easy customization:

```css
:root {
    --color-black: #1a1a1a;
    --color-white: #ffffff;
    --color-coffee: #6f4e37;
    --color-cream: #f5f1eb;
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
    --font-heading: 'Georgia', 'Times New Roman', serif;
}
```

## Deployment

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Netlify

1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or use Netlify CLI: `netlify deploy --prod`

### GitHub Pages

1. Push to a GitHub repository
2. Go to Settings > Pages
3. Select source branch and folder

## Form Handling

Currently, forms use client-side JavaScript with alert messages. To enable actual form submission:

1. **Contact Form:** Connect to a service like:
   - Formspree
   - Netlify Forms
   - EmailJS
   - Custom backend API

2. **Email Capture:** Connect to:
   - Mailchimp
   - ConvertKit
   - Custom email service

Update the form submission handlers in `js/main.js` accordingly.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested for:
  - Desktop (1920px+)
  - Tablet (768px - 1024px)
  - Mobile (320px - 767px)

## Future Enhancements

- Add CMS integration (Contentful, Sanity, or Strapi) for easy event management
- Implement actual booking/ticketing system
- Add blog section for "Press" content
- Create "Merch" page
- Add map integration for locations page
- Implement Instagram feed API integration

## License

© Cercino AB - All rights reserved

## Contact

For questions about this website, contact: hello@morningdjcoffeeset.com
