# Oricode AI Landing Page

A modern, responsive landing page for Oricode AI - the AI-powered coding assistant for SAP ABAP developers.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project
cd oricode-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000

### Build for Production

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

## 📁 Project Structure

```
oricode-landing/
├── app.vue                    # Main app entry
├── nuxt.config.ts            # Nuxt configuration
├── package.json              # Dependencies
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   ├── NavBar.vue            # Navigation
│   ├── HeroSection.vue       # Hero with CTA
│   ├── FeaturesSection.vue   # Feature grid
│   ├── HowItWorksSection.vue # 3 steps
│   ├── CodeDemoSection.vue   # Interactive demo
│   ├── PricingSection.vue    # Pricing cards
│   ├── TestimonialsSection.vue # Reviews
│   ├── CtaSection.vue        # Final CTA
│   └── FooterSection.vue     # Footer
└── public/
    └── favicon.svg           # Site icon
```

## 🎨 Customization

### Brand Colors
Edit `assets/css/main.css`:

```css
:root {
  --orange-500: #ff6b35;  /* Primary */
  --orange-600: #e85a2a;  /* Darker */
  --orange-400: #ff8c5a;  /* Lighter */
}
```

### Pricing
Edit `components/PricingSection.vue`:

```javascript
const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    features: ['100 messages/month', ...]
  },
  // ...
]
```

### Testimonials
Edit `components/TestimonialsSection.vue`:

```javascript
const testimonials = [
  {
    quote: "...",
    name: "...",
    role: "..."
  }
]
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Deploy!

```bash
# Or using Vercel CLI
npm i -g vercel
vercel
```

### Netlify

```bash
# Build
npm run generate

# Deploy dist/ folder to Netlify
```

### Railway

1. Connect GitHub repo
2. Set build command: `npm run generate`
3. Set start command: `npm run preview`

## 📝 Pages to Add

- `/signup` - Registration page
- `/login` - Login page
- `/dashboard` - User dashboard
- `/docs` - Documentation
- `/blog` - Blog posts
- `/contact` - Contact form

## 🔧 Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Space Grotesk + JetBrains Mono
- **Icons**: Inline SVG
- **Animations**: CSS Keyframes

## 📄 License

MIT License - Oricode AI
