# SVN Aviation Project Documentation

## ✈️ Overview
SVN Aviation is a premium aviation charter and air logistics web application built for SVN Aviation, a branch of Schnell Vogel Nigeria Limited. The platform provides on-demand executive flights, helicopter services, and critical air logistics coordination across Nigeria.

## 🏗️ Architecture
The project follows a modern headless architecture:
- **Frontend**: [Next.js](https://nextjs.org/) (App Router) for high-performance server-side rendering and static generation.
- **CMS**: [Sanity.io](https://www.sanity.io/) for structured content management (Hero slides, Blog posts, Site settings).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling and high-end aesthetics.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid, premium transitions and micro-interactions.

---

## 🛠️ Tools & Technologies

### 1. Next.js (Framework)
- **Role**: Core application framework.
- **Best Practices**:
  - Uses **App Router** for optimized routing and layouts.
  - Implements **Server Components** by default to reduce client-side bundle size.
  - Uses `generateMetadata` for dynamic SEO.
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)

### 2. Sanity CMS (Content Management)
- **Role**: Manages dynamic content like blog posts, services, and operational capabilities.
- **Integration**: Accessed via `next-sanity` using the Sanity Client.
- **Documentation**: [Sanity Docs](https://www.sanity.io/docs)

### 3. Tailwind CSS (Styling)
- **Role**: Styling the entire application with a custom brand palette (Black, Brand-Yellow).
- **Architecture**: Uses CSS variables and Tailwind utilities for consistency.
- **Documentation**: [Tailwind CSS Docs](https://tailwindcss.com/docs)

### 4. Framer Motion (Animations)
- **Role**: Provides the premium "feel" through controlled entrance animations and page transitions.
- **Usage**: Integrated into `HeroSlider`, `ServicesGrid`, and interactive UI elements.
- **Documentation**: [Framer Motion Docs](https://www.framer.com/motion/introduction/)

### 5. Radix UI & Shadcn (UI Components)
- **Role**: Provides accessible, unstyled primitives (Radix) and beautiful, reusable components (Shadcn).
- **Benefits**: Ensures high accessibility standards (WAI-ARIA).
- **Documentation**: [Radix UI](https://www.radix-ui.com/), [Shadcn UI](https://ui.shadcn.com/)

---

## 🔒 Security & Best Practices Audit

### Security Highlights
- **Environment Variables**: Sensitive keys (Sanity Project ID, Dataset) are managed via `.env.local` and never committed to version control.
- **Input Sanitization**: Content from Sanity is rendered using `@portabletext/react` which handles sanitization.
- **Certificates**: Local development certificates are excluded from the repository.

### Best Practices (Recent Improvements)
- **Semantic HTML**: Added `<main>` landmarks to all primary pages (`Home`, `ServicePage`, `BlogPostPage`) for improved accessibility/SEO.
- **Heading Hierarchy**: Streamlined `h1` usage to ensure each page has a single primary heading.
- **SEO Optimization**: Implemented JSON-LD Schema (Organization) in the root layout for better search engine indexing.
- **Performance**: Optimized images using `next/image` with proper priority loading for Hero sections.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- NPM / PNPM

### Installation
```bash
npm install
```

### Environment Setup
Create a `.env.local` file with the following:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
# Optional: SANITY_API_READ_TOKEN for preview mode
```

### Local Development
```bash
npm run dev
```

### Deployment
The project is optimized for deployment on **Vercel**:
1. Connect your repository to Vercel.
2. Add the environment variables.
3. Vercel will automatically handle the build and deployment.

---

## 📁 Directory Structure
- `/app`: Next.js pages, layouts, and API routes.
- `/components`: Reusable UI components and page sections.
- `/lib`: Utility functions and static data.
- `/sanity`: Sanity schema definitions and client configuration.
- `/public`: Static assets (Logos, Favicons).

---

## 📝 Maintenance
To update the content, visit the Sanity Studio at `/studio` on your local or deployed environment.
