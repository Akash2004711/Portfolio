# Portfolio Setup & Development Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [Build & Deployment](#build--deployment)
5. [Customization](#customization)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js:** 18.0 or higher
- **npm:** 9.0 or higher (or yarn/pnpm)
- **Git:** For version control

### Installation (5 minutes)

```bash
# 1. Navigate to project directory
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

**Output:**
```
VITE v5.0.0  ready in 123 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

Open `http://localhost:5173` in your browser. Portfolio loads automatically.

### Key Commands

| Command | Purpose | Output |
|---------|---------|--------|
| `npm run dev` | Start dev server with hot reload | Runs on port 5173 |
| `npm run build` | Build for production | Creates `dist/` folder |
| `npm run preview` | Preview production build locally | Simulates deployment |
| `npm run lint` | (Optional) Check code style | Shows warnings/errors |

---

## 📂 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 ← Navigation + recruiter button
│   │   ├── Footer.tsx                 ← Footer with links
│   │   ├── sections/
│   │   │   ├── Hero.tsx               ← Landing section
│   │   │   ├── RecruiterSnapshot.tsx  ← 6-card overview
│   │   │   ├── About.tsx              ← Career narrative
│   │   │   ├── Experience.tsx         ← Job history
│   │   │   ├── FeaturedProjects.tsx   ← Project showcase
│   │   │   ├── GenAILabSection.tsx    ← QA testing labs
│   │   │   ├── TestCaseExplorer.tsx   ← Test case table
│   │   │   ├── DefectBoard.tsx        ← Defect Kanban
│   │   │   ├── InteractiveQADemo.tsx  ← Interactive demo ✨ NEW
│   │   │   ├── APITestingSection.tsx  ← API testing
│   │   │   ├── PythonAutomation.tsx   ← Pytest examples
│   │   │   ├── DataAnalyticsPipeline.tsx ← Data pipeline
│   │   │   ├── SkillsSection.tsx      ← Skills by category
│   │   │   ├── JobMatchSection.tsx    ← Role requirements
│   │   │   ├── AchievementsTimeline.tsx ← Timeline
│   │   │   ├── EducationSection.tsx   ← Education
│   │   │   ├── ResumeSection.tsx      ← Resume CTA
│   │   │   └── ContactSection.tsx     ← Contact form
│   │   └── modals/
│   │       └── RecruiterModal.tsx     ← 30-sec recruiter view
│   ├── data/
│   │   ├── skills.ts                  ← Skill definitions
│   │   ├── projects.ts                ← Project metadata
│   │   ├── experience.ts              ← Job history data
│   │   ├── testCases.ts               ← QA test cases
│   │   ├── defects.ts                 ← Defect tracking
│   │   └── achievements.ts            ← Timeline data
│   ├── App.tsx                        ← Main app component
│   ├── main.tsx                       ← React entry point
│   └── index.css                      ← Global styles
│
├── public/
│   └── (assets go here)
│
├── index.html                         ← HTML template
├── package.json                       ← Dependencies
├── tsconfig.json                      ← TypeScript config
├── vite.config.ts                     ← Vite configuration
├── tailwind.config.js                 ← Tailwind config
├── postcss.config.js                  ← PostCSS config
├── README.md                          ← Project README
├── SETUP.md                           ← This file
└── .gitignore                         ← Git ignore rules
```

### Component Organization

**Naming Convention:**
- Page sections: `SectionName.tsx` (in `src/components/sections/`)
- Modals: `ModalName.tsx` (in `src/components/modals/`)
- Utilities: `utility-name.ts` (in `src/utils/` - create if needed)
- Data files: `dataname.ts` (in `src/data/`)

**Component Template:**
```tsx
export default function ComponentName() {
  return (
    <section id="section-id" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold">
          Title <span className="text-gradient">Highlight</span>
        </h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

---

## 💻 Development Workflow

### Making Changes

**1. Update Section Content**

Edit data files in `src/data/`:
```ts
// src/data/skills.ts
export const skillsData: Skill[] = [
  { name: 'Python', category: 'Programming', proficiency: 'Advanced' },
  // Add more...
]
```

Changes auto-reflect in `SkillsSection.tsx`.

**2. Modify Component Styling**

Options:
- **Tailwind classes:** Add classes to JSX
- **Custom CSS:** Edit `src/index.css`
- **Inline styles:** Use `style={}` for dynamic values

**3. Add New Section**

Create new file:
```bash
# Example: New "Awards" section
touch src/components/sections/AwardsSection.tsx
```

Import in `App.tsx`:
```tsx
import AwardsSection from './components/sections/AwardsSection'

// Add to main rendering
<AwardsSection />
```

**4. Update Navigation Links**

Edit `Navbar.tsx`:
```tsx
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  // Add more...
]
```

Ensure section has matching `id`:
```tsx
<section id="about" className="section-padding">
```

### Hot Module Replacement (HMR)

Changes auto-reload in browser:
- Edit component → Saves → Browser updates (< 1 second)
- Edit CSS → Browser updates immediately
- Edit data files → Component re-renders

No manual refresh needed! ✨

---

## 🏗 Build & Deployment

### Production Build

```bash
npm run build
```

**Output:**
```
dist/
├── assets/
│   ├── index-abc123.js        (Bundled JS)
│   ├── index-def456.css       (Bundled CSS)
│   └── ... (optimized assets)
└── index.html                 (Main HTML)
```

**Size target:** < 150 KB gzipped

### Local Preview

```bash
npm run preview
```

Runs optimized build locally for testing before deployment.

### Deploy to Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**First run:** Follow setup prompts
**Future deploys:** `vercel` auto-detects project

### Deploy to Netlify

```bash
# Build locally
npm run build

# Drag dist/ folder to Netlify
# Or use Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

Edit `vite.config.ts`:
```ts
export default defineConfig({
  base: '/portfolio/',  // Match your repo name
  plugins: [react()],
})
```

Then:
```bash
npm run build
# Upload dist/ to gh-pages branch
```

### Environment Variables

For API keys or secrets:
```bash
# Create .env.local (git-ignored)
VITE_API_KEY=your_key_here

# Use in code
const apiKey = import.meta.env.VITE_API_KEY
```

---

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'accent': '#3b82f6',        // Blue
      'accent-purple': '#8b5cf6', // Purple
      'success': '#10b981',       // Green
      // Add custom colors
    }
  }
}
```

Then use in components:
```tsx
<span className="text-accent">Colored text</span>
```

### Fonts

In `tailwind.config.js`:
```js
extend: {
  fontFamily: {
    'sans': ['Inter', 'sans-serif'],
    'mono': ['Fira Code', 'monospace'],
  }
}
```

### Animations

Add in `src/index.css`:
```css
@keyframes myAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-my-animation {
  animation: myAnimation 1s ease-in-out;
}
```

### Breakpoints

Tailwind default breakpoints:
```
sm: 640px   (mobile)
md: 768px   (tablet)
lg: 1024px  (desktop)
xl: 1280px  (large)
```

Use in components:
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3">
```

### Content Updates

| Item | File | Field |
|------|------|-------|
| Your name | Multiple | Search + Replace "Akash Nittur" |
| Email | `ContactSection.tsx`, `Footer.tsx` | Update href |
| Phone | `RecruiterModal.tsx` | Update number |
| GitHub link | `Navbar.tsx`, `Footer.tsx` | Update href |
| LinkedIn link | `Navbar.tsx`, `Footer.tsx` | Update href |
| Resume | `ResumeSection.tsx` | Link to PDF |
| Project descriptions | `src/data/projects.ts` | Edit project object |
| Skills | `src/data/skills.ts` | Add/remove skills |
| Experience | `src/data/experience.ts` | Update jobs |

---

## 🔧 Troubleshooting

### Dev Server Won't Start

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**If port 5173 is in use:**
```bash
# Use different port
npm run dev -- --port 3000
```

### Changes Not Reflecting

**Solution:** Hard refresh browser
```
Windows/Linux: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

Or disable cache in DevTools (Chrome → Settings → Network).

### Build Fails

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for console errors
npm run build 2>&1 | tee build.log
```

### Styling Not Applied

**Checklist:**
1. ✅ Tailwind class name spelled correctly
2. ✅ `index.css` has `@tailwind` directives
3. ✅ No conflicting CSS
4. ✅ `tailwind.config.js` includes correct paths

### Images Not Loading

```tsx
// ❌ Wrong
<img src="image.png" />

// ✅ Correct (public folder)
<img src="/image.png" />

// ✅ Correct (import)
import myImage from '../assets/image.png'
<img src={myImage} />
```

### TypeScript Errors

Install missing types:
```bash
npm install --save-dev @types/node
```

Or suppress specific error:
```tsx
// @ts-ignore
const value = someUnknownValue
```

---

## 📚 Resources

- **React Docs:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vite:** https://vitejs.dev/guide
- **Lucide Icons:** https://lucide.dev

---

## 🎯 Next Steps

After setup:

1. **Customize content** - Update data files with your info
2. **Add resume PDF** - Place in `public/resume.pdf`
3. **Update social links** - Links to GitHub, LinkedIn, etc.
4. **Test responsive design** - Check on mobile/tablet
5. **Deploy** - Push to Vercel, Netlify, or GitHub Pages

---

## 📞 Support

- **Issues:** Check Troubleshooting section
- **Questions:** Review component comments in code
- **Help:** Check README.md or inline code comments

---

**Happy building! 🚀**

Last Updated: August 2026
