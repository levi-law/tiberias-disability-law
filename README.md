# Tiberias Disability Law - Professional Website

A professional, bilingual (Hebrew/English) website for a disability law practice in Tiberias, Israel. Features lead capture, contact forms, and SEO optimization.

## Features

- ✅ **Bilingual Support**: Hebrew (RTL) and English ready
- ✅ **Lead Capture**: Contact form with localStorage persistence
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **SEO Optimized**: Meta tags, semantic HTML, proper structure
- ✅ **Professional Design**: Modern UI with smooth animations
- ✅ **Services Showcase**: Detailed service cards
- ✅ **Contact Information**: Phone, email, address, hours
- ✅ **Statistics Display**: Showcase credibility with numbers

## Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser to: http://localhost:3001

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment Options

### Option 1: Google Cloud Run (Recommended for Production)

1. Build the application:
```bash
npm run build
```

2. Create a Dockerfile:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

3. Deploy to Cloud Run:
```bash
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/disability-law
gcloud run deploy disability-law --image gcr.io/YOUR_PROJECT_ID/disability-law --platform managed --region us-central1 --allow-unauthenticated
```

### Option 2: Cloudflare Pages (Fast & Free)

1. Build the application:
```bash
npm run build
```

2. Deploy using Wrangler:
```bash
npx wrangler pages deploy dist --project-name=disability-law
```

### Option 3: Local Server (Testing)

The application is already running on:
- **Local**: http://localhost:3001
- **Network**: http://192.168.1.17:3001

## Lead Management

Leads are currently stored in localStorage. To view captured leads:

1. Open browser console (F12)
2. Type: `JSON.parse(localStorage.getItem('leads'))`
3. View all submitted leads with timestamps

### Future: Backend Integration

For production, leads should be sent to:
- Email notification service
- CRM system (e.g., HubSpot, Salesforce)
- Database (e.g., Firebase, PostgreSQL)

## Customization

### Update Contact Information

Edit `src/App.jsx` and update:
- Phone number: Line 91 and contact section
- Email: contact section
- Address: contact section
- Office hours: contact section

### Update Content

All content is in `src/App.jsx`:
- Hero section: Lines 85-95
- Services: Lines 100-150
- About section: Lines 160-200
- Stats: Lines 205-230

### Update Colors

Edit `src/index.css`:
- Primary color (blue): `#1e3c72`, `#2a5298`
- Accent color (orange): `#ff6b35`
- Background: `#f8f9fa`

## SEO Optimization

The website includes:
- Meta description and keywords
- Semantic HTML structure
- Mobile-responsive design
- Fast loading times
- Hebrew language meta tags

### Next Steps for SEO:
1. Set up Google Analytics
2. Add Google Search Console
3. Create sitemap.xml
4. Set up structured data (Schema.org)
5. Add blog for content marketing

## Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Custom CSS with Heebo font
- **Icons**: React Icons
- **Deployment**: Google Cloud / Cloudflare

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Free to use and modify

## Support

For questions or support, contact: office@disability-law.co.il
