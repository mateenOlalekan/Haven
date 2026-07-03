# 🏠 NaijaHomes

**A fully functional, dynamic Nigerian real estate listing platform** built with React, Vite, Tailwind CSS, GSAP animations, and Zustand state management.

## ✨ Features

### Core Functionality
- **🔍 Smart Search & Filter** — Filter by location, price range (₦), property type, bedrooms/bathrooms, listing type (sale/rent/shortlet)
- **📱 Dynamic Listings Grid** — Real-time updates, infinite scroll, skeleton loaders
- **🏢 Property Detail Pages** — Image galleries, agent info, amenities, location maps, contact flows
- **👤 Agent/Agency Profiles** — Verified badges, ratings, listing history
- **❤️ Favorites System** — Sync across all screens (grid, details, dashboard)
- **📊 User Dashboard** — Saved properties, inquiry history, saved searches
- **📝 Post Listings** — Multi-step form with image upload for agents/landlords
- **💬 Contact Flows** — WhatsApp + Call + Email integration, inquiry modals

### Nigerian Localization
- **Currency** — ₦ Naira formatting with proper comma placement
- **Rent Conventions** — Listed per year with monthly equivalent
- **Property Types** — Self-con, mini flat, duplex, bungalow, block of flats, land with survey
- **Locations** — Real Nigerian cities (Lagos, Abuja, Port Harcourt, Ibadan, Enugu, Kano) with neighborhoods
- **Contact Preferences** — WhatsApp as primary contact method + phone + email
- **Trust Signals** — Verified agent badges, inspection history, user reviews

### Design & Animation
- **Consistent Design System** — Deep green primary + warm gold accent, unified typography and spacing
- **GSAP Animations** — ScrollTrigger for staggered reveals, hero animations, micro-interactions, count-up stats
- **Responsive Design** — Mobile-first, optimized for Nigerian users on slower connections
- **Loading States** — Skeleton screens instead of blank renders
- **Empty States** — Clear messaging with actionable CTAs

## 🛠️ Tech Stack

- **React 19** — Latest UI library
- **Vite 6** — Lightning-fast build tool
- **Tailwind CSS 4** — Utility-first styling
- **GSAP 3** — Professional animations with ScrollTrigger
- **Zustand** — Lightweight state management
- **React Router v7** — Client-side routing
- **Firebase** — Authentication & real-time database
- **Axios** — HTTP client
- **React Hook Form** — Form management & validation
- **Lucide React** — Icon library

## 📦 Project Structure

```
src/
├── components/
│   ├── Layout/                 # Navbar, Footer, Layout wrapper
│   ├── Common/                 # Buttons, Cards, Badges, Modals, Inputs
│   ├── Hero/                   # Landing page hero section
│   ├── ListingGrid/            # Listings with filters & pagination
│   ├── PropertyDetail/         # Single property view
│   ├── AgentProfile/           # Agent/agency pages
│   ├── Dashboard/              # User saved properties & inquiries
│   ├── PostListing/            # Multi-step form for new listings
│   └── ContactFlow/            # Inquiry modals & messaging
├── pages/
│   ├── Home.jsx
│   ├── Search.jsx
│   ├── PropertyDetail.jsx
│   ├── AgentProfile.jsx
│   ├── Dashboard.jsx
│   ├── PostListing.jsx
│   └── NotFound.jsx
├── stores/
│   └── propertyStore.js        # Zustand store: listings, favorites, filters, user state
├── hooks/
│   ├── useAnimation.js         # GSAP animation utilities
│   ├── useFilteredListings.js  # Filter/search logic
│   └── useLocalStorage.js      # Persist state to localStorage
├── utils/
│   ├── mockData.js             # 20+ realistic Nigerian property listings
│   ├── formatters.js           # Naira formatting, phone formatting
│   ├── validators.js           # Nigerian phone, email validation
│   └── animations.js           # GSAP animation presets
├── styles/
│   ├── globals.css             # Design system tokens, root styles
│   └── animations.css          # GSAP animation helpers
├── constants/
│   ├── locations.js            # Nigerian cities & neighborhoods
│   ├── propertyTypes.js        # Property type definitions
│   └── colors.js               # Color palette (green, gold, neutrals)
├── App.jsx                     # Main app & routes
└── main.jsx                    # Entry point
```

## 🎨 Design System

### Color Palette
- **Primary** — `#1B4332` (Deep forest green, trust & stability)
- **Secondary** — `#2D6A4F` (Medium green)
- **Accent** — `#D4A574` (Warm gold, premium & aspirational)
- **Success** — `#52B788` (Light green)
- **Error** — `#E63946` (Red)
- **Neutral** — `#F7F9FC` (Off-white), `#E5E7EB` (Light gray), `#6B7280` (Dark gray)
- **Text** — `#1F2937` (Dark gray on light), `#F3F4F6` (Light on dark)

### Typography
- **Heading 1** — 3xl, bold (36px)
- **Heading 2** — 2xl, bold (28px)
- **Heading 3** — xl, semibold (20px)
- **Body** — base, regular (16px)
- **Small** — sm, regular (14px)
- **Fonts** — Inter (system), fallback to sans-serif

### Spacing
- Grid-based: 4px base unit (4, 8, 12, 16, 24, 32, 40, 48, 64px)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to explore NaijaHomes.

## 📊 Mock Data

Includes **25+ realistic Nigerian property listings** with:
- Real neighborhood names (Lekki Phase 1, Gwarinpa, Wuse 2, GRA Port Harcourt, etc.)
- Accurate Naira pricing (₦450,000/year for self-cons, ₦85,000,000+ for duplexes)
- Nigerian agent names & phone formats (+234...)
- Property photos via Unsplash API (real property images)
- Verified agent badges & ratings

## 🎬 GSAP Animations

- **Hero Section** — Staggered text + image reveal on load
- **Listing Cards** — ScrollTrigger stagger animation as user scrolls
- **Page Transitions** — Smooth fade/slide between routes
- **Favorite Button** — Heart icon bounce on click
- **Filter Panel** — Slide-in/out with ease
- **Modal Dialogs** — Scale + fade entrance
- **Number Count-ups** — Stats animation on home page
- **Image Gallery** — Smooth slide transitions in property details

## 🔐 Respects Preferences

- Animations honor `prefers-reduced-motion` for accessibility
- Lightweight asset loading for slow connections
- Progressive image loading with lazy-load
- Optimized for mobile-first experience

## 📱 Responsive Breakpoints

- **Mobile** — 320px and up
- **Tablet** — 768px and up
- **Desktop** — 1024px and up

## 🔄 State Management (Zustand)

Global store includes:
- Listings with filters applied
- Favorite/bookmarked properties
- User authentication state
- Search queries & saved searches
- Inquiry history
- Agent/agency data
- UI state (modals, panels, loading)

All synced across screens in real-time.

## ✅ Next Steps

1. Run `npm install`
2. Start dev server: `npm run dev`
3. Explore all pages and features
4. Customize colors, text, and listings in `/src/constants/` and `/src/utils/mockData.js`
5. Deploy to Vercel/Netlify with `npm run build`

---

**Built with ❤️ for Nigerian real estate professionals and property seekers.**
