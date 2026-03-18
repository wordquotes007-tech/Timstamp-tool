# YouTube Timestamp Generator

A modern, professional SaaS web application for generating YouTube video timestamps and chapters. Built with React, TypeScript, and Vite.

## Features

### Core Features
- Input field for YouTube video URLs
- Multi-line timestamp input (seconds + titles)
- Automatic timestamp formatting (00:00, 01:30, 10:05)
- Real-time preview of generated timestamps
- Video thumbnail preview
- One-click copy to clipboard
- Download timestamps as .txt file
- Input validation

### Advanced Features
- Dark mode toggle (persisted in localStorage)
- Fully responsive mobile design
- Video ID extraction from various YouTube URL formats
- Error handling and user feedback
- SEO optimized with meta tags and schema markup

### Pages
- **Home** - Main timestamp generator tool
- **Blog** - SEO-optimized articles about YouTube timestamps
- **About** - Information about the service
- **Contact** - Contact form
- **Privacy Policy** - Privacy information
- **Terms & Conditions** - Terms of service

### Monetization Ready
- Google AdSense placeholder areas (top, middle, bottom)
- Pro version upgrade section
- CTA buttons for future subscription model

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: CSS with CSS Variables for theming
- **Deployment**: Ready for Vercel, Netlify, or any static host

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is ready to deploy on:

### Vercel
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Import repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Static Hosts
Build the project and upload the `dist` folder to any static hosting service.

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── TimestampGenerator.tsx
│   ├── AdBanner.tsx
│   └── ProUpgrade.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Privacy.tsx
│   └── Terms.tsx
├── utils/           # Utility functions
│   └── timestampUtils.ts
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## SEO Optimization

- Meta tags for description, keywords, and author
- Open Graph tags for social sharing
- Twitter Card tags
- Schema.org markup for WebApplication
- Canonical URLs
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved.

## Support

For questions or support, visit the contact page or email support@timestampgenerator.com
