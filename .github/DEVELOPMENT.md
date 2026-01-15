# MentorHub - Development Guide

Complete developer reference for the MentorHub mentorship portfolio application.

## 📁 Project Structure

```
Mentorship-plans/
├── src/
│   ├── components/
│   │   ├── Layout.tsx           # Main layout wrapper with Navbar & Footer
│   │   ├── Navbar.tsx           # Navigation with dark mode toggle
│   │   └── Footer.tsx           # Footer with links and social media
│   ├── pages/
│   │   ├── Home.tsx             # Homepage with hero and features
│   │   ├── About.tsx            # Profile, timeline, expertise
│   │   ├── Services.tsx         # Service packages and pricing
│   │   ├── Testimonials.tsx     # Success stories from mentees
│   │   └── Contact.tsx          # Contact form and information
│   ├── hooks/
│   │   └── useTheme.ts          # Dark mode toggle hook
│   ├── services/
│   │   └── api.ts               # API client with interceptors
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── utils/                   # Utility functions (empty, ready to extend)
│   ├── styles/
│   │   └── globals.css          # Global styles and Tailwind directives
│   ├── App.tsx                  # Main app component with routes
│   └── main.tsx                 # Application entry point
├── public/                      # Static assets
├── dist/                        # Production build output
├── .github/
│   └── plans/
│       ├── implementation-plan.md          # Original blueprint
│       └── implementation-plan.concrete.md # Detailed technical plan
├── package.json                 # Dependencies and scripts
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS theme
├── postcss.config.js            # PostCSS configuration
├── .env.example                 # Environment variables template
├── README.md                    # Project overview
├── GETTING_STARTED.md           # Quick start guide
└── DEVELOPMENT.md               # This file
```

## 🔧 Configuration Files

### vite.config.ts
- Server configuration (port: 5173)
- Auto-open browser on dev
- Build output directory
- Source map settings

### tailwind.config.ts
- Color theme customization
- Typography settings
- Dark mode class configuration
- Extended utilities

### tsconfig.json
- TypeScript strict mode enabled
- React JSX transformation
- Module resolution settings

### postcss.config.js
- Tailwind CSS processing
- Autoprefixer for vendor prefixes

## 💻 Components

### Layout
Wrapper component for all pages:
- Manages navbar and footer
- Provides consistent structure
- Dark mode support

### Navbar
Navigation component with:
- Logo/branding
- Navigation links (Home, About, Services, Testimonials, Contact)
- Dark mode toggle
- Mobile responsive menu

### Footer
Footer with:
- Brand information
- Navigation links
- Social media links
- Copyright information

## 📄 Pages

### Home (src/pages/Home.tsx)
**Purpose**: Landing page to attract and convert visitors
**Contains**:
- Hero section with CTA
- Statistics display
- Feature highlights
- Social proof
- Call-to-action sections

**Key Components**:
- Hero section with gradient background
- Stats counter
- Feature cards
- CTA sections

### About (src/pages/About.tsx)
**Purpose**: Build credibility and personal connection
**Contains**:
- Professional profile
- Career timeline
- Areas of expertise
- Certifications

**Key Sections**:
- Hero with title
- Profile section with photo placeholder
- Timeline component
- Expertise badges
- Certifications grid

### Services (src/pages/Services.tsx)
**Purpose**: Showcase offerings and enable booking
**Contains**:
- Service cards with pricing
- Feature lists per service
- Service comparison table
- Popular service highlight

**Service Types** (customize as needed):
1. Career Coaching
2. Resume & LinkedIn Review
3. Interview Preparation
4. Salary Negotiation
5. Leadership Mentorship
6. Monthly Retainer (popular)

### Testimonials (src/pages/Testimonials.tsx)
**Purpose**: Build social proof and trust
**Contains**:
- Success metrics
- Testimonial cards
- Student information
- Star ratings
- Call-to-action

**Testimonial Structure**:
```typescript
{
  id: string
  name: string
  role: string
  company: string
  image: string (emoji placeholder)
  content: string
  rating: number
}
```

### Contact (src/pages/Contact.tsx)
**Purpose**: Enable inquiries and lead capture
**Contains**:
- Contact form with validation
- Contact information
- Social media links
- FAQ section

**Form Fields**:
- Name (required)
- Email (required, validated)
- Phone (optional)
- Subject (required)
- Message (required)

## 🪝 Custom Hooks

### useTheme
```typescript
const { isDark, toggleTheme } = useTheme()
```
**Purpose**: Manage light/dark mode
**Features**:
- Detects system preference
- Persists to localStorage
- Toggles `dark` class on document root

## 🔌 Services

### API Service (src/services/api.ts)
**Purpose**: Centralized API communication
**Methods**:
- `get<T>(url)` - GET request
- `post<T>(url, data)` - POST request
- `put<T>(url, data)` - PUT request
- `delete<T>(url)` - DELETE request

**Features**:
- Automatic error handling
- JWT token management
- Request/response interceptors
- Type-safe responses

**Usage**:
```typescript
import api from './services/api'

const response = await api.get<User>('/users/me')
if (response.success) {
  console.log(response.data)
} else {
  console.error(response.error)
}
```

## 📘 Types (src/types/index.ts)

```typescript
interface Mentor {
  id: string
  name: string
  title: string
  bio: string
  image: string
  email: string
  yearsOfExperience: number
  studentsMentored: number
  successRate: number
}

interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: string
  features: string[]
  icon: string
}

interface Testimonial {
  id: string
  studentName: string
  studentRole: string
  studentCompany: string
  content: string
  rating: number
  date: string
}

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  phone?: string
}

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  statusCode: number
}
```

## 🎨 Styling

### Tailwind CSS
- Utility-first CSS framework
- Dark mode support (class-based)
- Responsive design (mobile-first)
- Custom theme in config

### Global Styles
Located in [src/styles/globals.css](src/styles/globals.css):
- Tailwind directives
- Custom CSS variables
- Scrollbar styling
- Font smoothing

### Color Palette
```
Primary:   #3B82F6 (Blue)
Secondary: #1F2937 (Dark Gray)
Accent:    #10B981 (Green)
```

Update in `tailwind.config.ts` theme.extend.colors

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api

# Email Service
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key

# Analytics
VITE_GOOGLE_ANALYTICS_ID=your_ga_id

# Calendar
VITE_CALENDLY_URL=https://calendly.com/yourprofile
```

Access in code with `import.meta.env.VITE_*`

## 📦 Dependencies

### Core
- **react**: UI framework
- **react-dom**: React rendering
- **react-router-dom**: Client-side routing

### Forms & Validation
- **react-hook-form**: Form state management
- **zod**: Type-safe validation

### HTTP
- **axios**: HTTP client

### Styling
- **tailwindcss**: CSS framework
- **postcss**: CSS processing
- **autoprefixer**: CSS vendor prefixes

## 🧪 Testing

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```

## 🚀 Development Workflow

### 1. Start Development Server
```bash
npm run dev
```
- Hot module replacement
- Auto-open browser
- Watch mode for files

### 2. Make Changes
- Edit files in `src/`
- Changes auto-refresh in browser

### 3. Type Check
```bash
npm run type-check
```
Verify TypeScript compilation

### 4. Build for Production
```bash
npm run build
```
Creates optimized `dist/` folder

### 5. Preview Production Build
```bash
npm run preview
```
Test the production build locally

## 🔄 Git Workflow

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit: MentorHub portfolio"
git branch -M main
git remote add origin <your-repo>
git push -u origin main
```

### Regular Commits
```bash
git add src/
git commit -m "Update: [feature description]"
git push
```

## 📱 Responsive Breakpoints

Using Tailwind's breakpoints:
- `sm`: 640px (tablets)
- `md`: 768px (medium tablets)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large screens)

Example:
```tsx
<div className="text-lg md:text-xl lg:text-2xl">
  Text that grows on larger screens
</div>
```

## 🎯 Common Tasks

### Add a New Service
1. Open [src/pages/Services.tsx](src/pages/Services.tsx)
2. Add object to `services` array
3. Update comparison table if needed

### Update Colors
1. Edit [tailwind.config.ts](tailwind.config.ts)
2. Update colors in `theme.extend.colors`
3. Rebuild with `npm run build`

### Add New Page
1. Create `src/pages/YourPage.tsx`
2. Add import in [src/App.tsx](src/App.tsx)
3. Add route in `<Routes>`
4. Update [src/components/Navbar.tsx](src/components/Navbar.tsx)

### Connect Backend
1. Set `VITE_API_URL` in `.env.local`
2. Use API service in components:
   ```typescript
   import api from '@/services/api'
   const data = await api.get('/endpoint')
   ```

### Deploy to Production
1. Build: `npm run build`
2. Deploy `dist/` folder to hosting
3. Configure environment variables on host
4. Point domain to deployed site

## 📚 Resources

- [React 19 Docs](https://react.dev)
- [Vite Docs](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [TypeScript](https://www.typescriptlang.org)
- [React Hook Form](https://react-hook-form.com)

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 5174
```

### TypeScript Errors
```bash
npm run type-check
```

### Build Issues
```bash
rm -r node_modules dist
npm install
npm run build
```

### Style Not Updating
- Clear browser cache (Ctrl+F5)
- Restart dev server
- Check Tailwind config syntax

## ✅ Quality Checklist

- [ ] TypeScript: No errors (`npm run type-check`)
- [ ] Linting: No warnings (`npm run lint`)
- [ ] Build: Successful (`npm run build`)
- [ ] Responsive: Tested on mobile, tablet, desktop
- [ ] Dark Mode: Works on all pages
- [ ] Navigation: All links work
- [ ] Forms: Validation works
- [ ] Performance: Lighthouse score > 90
- [ ] Accessibility: ARIA labels present
- [ ] Production Ready: Build test successful

---

**Happy coding! Build something amazing! 🚀**
