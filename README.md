# Ladybird IoT Website

Production-ready React website for Ladybird IoT - agricultural monitoring and intelligence platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** + **TypeScript** - Modern, type-safe React development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v3** - Utility-first CSS framework
- **Framer Motion** - Smooth scroll animations with IntersectionObserver
- **React Router v6** - Client-side routing
- **react-helmet-async** - SEO meta tags and Schema.org structured data
- **Lucide React** - Beautiful, consistent icons
- **Radix UI** - Accessible UI primitives (Accordion)

## 🎨 Design System

### Colors
- **Primary Green**: `#1B4332` (deep green, trust and growth)
- **Accent Earth**: `#D4A574` (warm, natural)
- **Cream Background**: `#F5F1EB` (soft, readable)
- **Charcoal Text**: `#2D3436` (strong contrast)

### Typography
- **Headings**: Plus Jakarta Sans (Google Fonts)
- **Body**: Inter (Google Fonts)

### Design Principles
- Generous whitespace for readability
- 12px border radius throughout
- Soft shadows for depth
- Mobile-first responsive design
- Glassmorphism navigation on scroll

## 📄 Pages

### Home (`/`)
Hero with animated gradient background, benefits grid, social proof stats, and CTA banner.

### Product (`/product`)
Complete product showcase:
- Ladybird 5 specs and features
- 7 expansion sensors with detailed specs
- Premium 8-in-1 soil sensor
- Software intelligence features
- Pricing tiers (placeholder)

### How It Works (`/how-it-works`)
- "The 3am Problem" storytelling
- 5-step process walkthrough
- Use cases by crop type
- FAQ accordion

### About (`/about`)
- Company history (TerraPrima → Mountain IoT acquisition)
- Mission and values
- Partners section
- UN Sustainable Development Goals alignment

### Contact (`/contact`)
- Multi-field contact form with farm size/crop type dropdowns
- Company address and contact details
- Social media links
- Map placeholder

## 🔍 SEO Features

✅ Unique meta titles and descriptions per page  
✅ Open Graph tags for social sharing  
✅ Twitter Card support  
✅ Schema.org structured data:
- Organization (all pages)
- Product (/product)
- HowTo (/how-it-works)
- FAQPage (/how-it-works)
- LocalBusiness (/contact)

✅ Canonical URLs  
✅ Static sitemap.xml  
✅ robots.txt  

## 📱 Responsive Design

Fully responsive across:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## ♿ Accessibility

- WCAG 2.1 AA compliant markup
- Semantic HTML elements
- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels where needed
- Sufficient color contrast ratios

## 📦 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Accordion.tsx
│   ├── AnimatedSection.tsx
│   ├── Button.tsx
│   └── SEO.tsx
├── layouts/          # Layout components
│   ├── Layout.tsx
│   └── Footer.tsx
├── pages/            # Page components (routes)
│   ├── Home.tsx
│   ├── Product.tsx
│   ├── HowItWorks.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── lib/              # Utilities
│   └── utils.ts
├── App.tsx           # Route configuration
├── main.tsx          # App entry point
└── index.css         # Global styles + Tailwind

public/
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## 🎭 Animations

All scroll animations use Framer Motion with IntersectionObserver triggers:
- Fade-in-up on viewport entry
- Staggered delays for grid items
- Smooth 0.6s transitions
- "once" mode to prevent re-triggering

## 📝 Form Handling

Contact form currently logs submissions to console. Ready for integration with:
- Supabase
- FormSubmit
- Netlify Forms
- Custom API endpoint

## 🌐 Deployment

Build outputs to `dist/` directory. Deploy to:

**Recommended hosts:**
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages (with hash router)

All require only the `dist/` folder contents.

## 🔧 Configuration

### Environment Variables
None required for build. Optional for runtime:
- `VITE_API_URL` - Backend API endpoint
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anon key

### Build Configuration
- `vite.config.ts` - Vite build settings
- `tailwind.config.js` - Design system tokens
- `tsconfig.json` - TypeScript compiler options

## 📄 License

See LICENSE file for details.

## 🤝 Contributing

This is a client project. Changes should be coordinated with Mountain IoT Group.

---

Built with ❤️ for farmers who want their fields to tell them more.
