# Akash Nittur - AI & Data Science | GenAI QA Portfolio

A premium, interactive portfolio website showcasing expertise in Python, data analytics, backend development, and GenAI Quality Assurance.

**Live Demo:** https://portfolio-k248-sigma.vercel.app/
**Target Role:** QA Intern / GenAI QA (Impact Analytics, Bangalore)

---

## 🎯 Portfolio Highlights

### Featured Projects
- **AgentGuard** - GenAI Agent QA & Testing Platform demonstrating comprehensive AI testing strategies
- **Financial Analytics Dashboard** - ETL pipeline, data processing, and Power BI dashboards (46K+ NAV records)
- **Quiz Application** - Interactive web app with real-time validation
- **To-Do List App** - Full-featured CRUD application with persistent storage

### Core Sections
- Hero section with AI workflow visualization
- Recruiter snapshot for quick candidate assessment
- GenAI QA Lab with interactive testing cards
- Test Case Explorer with filtering and search
- QA Defect Tracker Kanban board
- API Testing section with pipeline visualization
- Python automation examples
- Data analytics pipeline connecting to QA concepts
- Career timeline and achievements
- Job match matrix mapping requirements to portfolio evidence
- Contact section and recruiter-optimized modal view

---

## 🛠 Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

**Styling:**
- Dark theme with accent colors (blue & purple)
- Glass morphism effects
- Smooth animations and transitions
- Fully responsive design

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx                  # Navigation with recruiter view toggle
│   ├── Footer.tsx                  # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx                # Hero with QA workflow visualization
│   │   ├── RecruiterSnapshot.tsx   # 6-card recruiter overview
│   │   ├── About.tsx               # Career transition narrative
│   │   ├── Experience.tsx          # Professional experience cards
│   │   ├── FeaturedProjects.tsx    # Project showcase with metrics
│   │   ├── GenAILabSection.tsx     # Interactive QA testing cards
│   │   ├── TestCaseExplorer.tsx    # Searchable test case table
│   │   ├── DefectBoard.tsx         # Kanban-style defect board
│   │   ├── APITestingSection.tsx   # API testing pipeline
│   │   ├── PythonAutomation.tsx    # Test automation examples
│   │   ├── DataAnalyticsPipeline.tsx # Data to QA pipeline mapping
│   │   ├── SkillsSection.tsx       # Skills by category
│   │   ├── JobMatchSection.tsx     # Role requirements matrix
│   │   ├── AchievementsTimeline.tsx # Career timeline
│   │   ├── EducationSection.tsx    # Education details
│   │   ├── ResumeSection.tsx       # Resume download/view
│   │   └── ContactSection.tsx      # Contact form & methods
│   ├── modals/
│   │   └── RecruiterModal.tsx      # Condensed recruiter dashboard
│   └── ...
├── data/
│   ├── skills.ts                   # Skills organized by category
│   ├── projects.ts                 # Project descriptions and metadata
│   ├── experience.ts               # Professional experience
│   ├── testCases.ts                # QA test cases
│   ├── defects.ts                  # Defect tracker data
│   └── achievements.ts             # Timeline and education
├── App.tsx                         # Main app component
├── main.tsx                        # Entry point
├── index.css                       # Global styles and animations
└── ...

public/
index.html                          # HTML template
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akashnittur/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Opens automatically at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output in `dist/` directory

---

## 🎨 Design System

### Color Palette
- **Dark Background:** `#0f0f0f`
- **Darker Elements:** `#0a0a0a`
- **Primary Accent:** `#3b82f6` (Blue)
- **Secondary Accent:** `#8b5cf6` (Purple)
- **Success:** `#10b981` (Green)
- **Warning:** `#f59e0b` (Amber)
- **Error:** `#ef4444` (Red)

### Typography
- **Font Family:** System stack with Inter fallback
- **Headings:** 24px - 48px, Bold (700-900)
- **Body:** 14px - 18px, Regular (400-500)

### Components
- Glass morphism cards with backdrop blur
- Gradient text and backgrounds
- Smooth hover transitions
- Animated section reveals
- Responsive grid layouts

---

## 📊 Content Sections

### Hero Section
- Main headline: "Building Reliable AI Systems"
- Subheadline with research focus
- QA workflow visualization (7-node pipeline)
- Call-to-action buttons
- Availability indicator

### Recruiter Snapshot
- 6 quick-reference cards
- Core strengths with evidence
- Designed for 30-second scan

### Experience
- Bluestock Fintech (Completed)
- Bold Analytics (Upcoming)
- Key achievements and technologies

### GenAI QA Lab
- 8 interactive QA testing topics
- Expandable cards with details
- Test scenarios and failure modes
- QA insights and best practices

### Test Case Explorer
- Searchable/filterable test cases
- 10 pre-populated test cases
- Status and severity indicators
- Pass/fail rate metrics

### Defect Board
- Kanban-style columns (Open/In Progress/Retest/Closed)
- Clickable defect cards
- Modal detail view with STR, expected/actual
- Severity and priority badges

### Skills
- 6 skill categories
- No percentage scores (focuses on context)
- Badges for each skill

### Contact
- Email, Phone, GitHub, LinkedIn
- Contact form with validation
- Schedule meeting CTA

---

## 🔑 Key Features

### Interactive Elements
- ✅ Smooth scroll navigation
- ✅ Recruiter Modal (30-second overview)
- ✅ Test case filtering and search
- ✅ Defect board with detail modals
- ✅ Expandable QA lab cards
- ✅ Responsive mobile navigation
- ✅ Dark mode by default
- ✅ Contact form

### Performance
- ✅ Lazy loading support
- ✅ Optimized assets
- ✅ Code splitting ready
- ✅ Minimal dependencies
- ✅ Fast initial load

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Color contrast compliance
- ✅ Reduced motion support

### SEO
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Semantic headings
- ✅ Sitemap-ready structure
- ✅ Favicon

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

All sections adapt for mobile-first design with card-based layouts replacing complex tables.

---

## 🔗 Social Links

Update links in `Footer.tsx` and `Navbar.tsx`:
- GitHub: `github.com/akashnittur`
- LinkedIn: `linkedin.com/in/akashnittur`
- Email: `akashnittur143@gmail.com`
- Phone: `+91 9113571934`

---

## 📄 Resume

Place resume PDF in `public/resume.pdf` and update download button in `ResumeSection.tsx`:
```tsx
<a href="/resume.pdf" download className="btn-primary">
  Download Resume (PDF)
</a>
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
Update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/portfolio/',
  // ...
})
```

---

## 📝 Customization Guide

### Update Candidate Info
Edit `src/data/` files:
- `skills.ts` - Add/remove skills
- `projects.ts` - Update projects
- `experience.ts` - Modify experience
- `testCases.ts` - Update test cases
- `defects.ts` - Modify defects
- `achievements.ts` - Update timeline

### Update Copy
- `Hero.tsx` - Main headline and CTA
- `About.tsx` - Personal narrative
- `ContactSection.tsx` - Contact info
- `Footer.tsx` - Footer text

### Customize Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'accent': '#3b82f6',
      'accent-purple': '#8b5cf6',
      // ...
    }
  }
}
```

---

## ✅ Quality Checklist

Before deploying, verify:
- [ ] All links work
- [ ] No console errors
- [ ] Mobile layout responsive
- [ ] Contact form functional
- [ ] Social links updated
- [ ] Resume download works
- [ ] Dark mode working
- [ ] All animations smooth
- [ ] SEO meta tags correct
- [ ] Performance optimized

---

## 📞 Support

For questions or updates, contact:
- Email: `akashnittur143@gmail.com`
- Phone: `+91 9113571934`

---

## 📄 License

This portfolio is personal work and open-source. Feel free to use as a template for your own portfolio.

---

**Built with React, TypeScript, Vite, and Tailwind CSS**  
**Designed for QA Engineering and AI roles**  
**Last Updated:** August 2026
