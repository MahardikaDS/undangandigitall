@AGENTS.md

# Undangan Digital Project: Technical Guidelines (Static Version)

## Project Vision

A high-performance, static digital invitation web app. Focuses on minimalist "Black & Wood" aesthetics, smooth visual transitions, and lightning-fast loading speeds.

## Tech Stack

- **Framework:** Next.js (Static Export)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (Subtle fade-ins & parallax)
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify / GitHub Pages

## Project Structure (Static Sections)

1. **Cover/Welcome:** URL-based guest name parameter & "Open" button.
2. **Hero:** Main couple photo with elegant typography.
3. **Couple Profile:** Clean layout for couple and parents' info.
4. **Event & Location:** Countdown (Client-side JS) & Google Maps deep links.
5. **Gallery:** Optimized masonry layout (Next/Image).
6. **Story / Quotes:** Poetic & minimalist typography.
7. **RSVP:** Redirect to WhatsApp API for confirmation.
8. **Digital Gift:** Interactive "Click to Copy" bank account cards.
9. **Closing:** Warm sign-off.

## Coding & Design Standards

- **Aesthetic:** Minimalist. Palette: #1a1a1a (Deep Black), #f5f5f5 (Off-white), with Wood-inspired accents.
- **Responsiveness:** Mobile-first approach (90% of guests view on phones).
- **Personalization:** Extract guest names from URL params (e.g., `?to=Budi`).
- **Optimization:** All images in WebP; minimal external JS libraries.

## Development Checklist

- [ ] Initialize Next.js project with Tailwind.
- [ ] Implement URL parameter logic for Guest Names.
- [ ] Create reusable "Section" components for UI consistency.
- [ ] Add Framer Motion `WhileInView` animations.
- [ ] Setup WhatsApp API integration for RSVP.
