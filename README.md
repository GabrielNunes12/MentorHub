# MentorHub - Mentorship Portfolio

A modern, professional React-based portfolio website designed to showcase mentoring skills, expertise, and services. Built with React, TypeScript, Tailwind CSS, and Vite for optimal performance.

## 🚀 Features

- **Responsive Design**: Fully responsive on desktop, tablet, and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Modern UI**: Built with Tailwind CSS for a clean, professional appearance
- **Multi-page Application**: Home, About, Services, Testimonials, and Contact pages
- **Service Showcase**: Display mentorship packages with pricing and features
- **Testimonials Gallery**: Showcase success stories from mentees
- **Contact Form**: Integrated contact form with validation
- **Performance Optimized**: Vite for fast development and optimized builds
- **Type Safe**: Full TypeScript support

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Routing**: React Router v6
- **Form Handling**: React Hook Form + Zod
- **HTTP Client**: Axios
- **Package Manager**: npm

## 📋 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About/Profile page
│   ├── Services.tsx    # Services showcase
│   ├── Testimonials.tsx # Success stories
│   └── Contact.tsx     # Contact form
├── hooks/              # Custom React hooks
│   └── useTheme.ts     # Theme toggle hook
├── services/           # API and external services
│   └── api.ts          # API client configuration
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── utils/              # Utility functions
├── styles/             # Global styles
│   └── globals.css     # Global CSS with Tailwind
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎨 Pages

### Home Page
- Eye-catching hero section with CTA buttons
- Key statistics display
- Feature highlights
- Call-to-action sections

### About Page
- Professional profile with avatar
- Career timeline
- Areas of expertise
- Certifications and credentials

### Services Page
- Service cards with pricing
- Feature lists
- Service comparison table
- Popular service highlight

### Testimonials Page
- Success stories from mentees
- Star ratings
- Student information
- Success metrics

### Contact Page
- Contact form with validation
- Contact information display
- Social media links
- FAQ section

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone or navigate to the project**
```bash
cd Mentorship-plans
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Update configuration** (optional)
Edit `.env.local` with your API endpoints and service credentials.

### Development

Start the development server with HMR (Hot Module Replacement):

```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Building

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Type Checking

Check for TypeScript errors:

```bash
npm run type-check
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px and above)
- Tablets (768px and above)
- Desktop screens (1024px and above)

## 🎨 Theming

The application includes a light/dark mode toggle. Theme preference is saved to localStorage.

### Color Scheme
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray (#1F2937)
- **Accent**: Cyan (#10B981)

## 🔧 Customization

### Update Branding
1. Edit the logo in `src/components/Navbar.tsx`
2. Update the title in the footer
3. Modify the color scheme in `tailwind.config.ts`

### Customize Content
- **About Page**: Edit `src/pages/About.tsx`
- **Services**: Update service data in `src/pages/Services.tsx`
- **Testimonials**: Modify testimonials in `src/pages/Testimonials.tsx`

### Add New Pages
1. Create a new file in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 🔌 API Integration

The application includes an API service layer in `src/services/api.ts`:

```typescript
import api from './services/api'

// Make API calls
const response = await api.get<YourType>('/endpoint')
const response = await api.post<YourType>('/endpoint', data)
```

### Authentication
JWT tokens can be stored in localStorage and will be automatically included in requests:

```typescript
localStorage.setItem('authToken', 'your_token_here')
```

## 📊 Form Validation

The contact form uses React Hook Form with Zod validation.

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to Other Platforms

The build output is in the `dist/` directory. Upload this folder to your hosting provider.

## 🎯 Performance

- **Code Splitting**: Lazy loading pages with React.lazy()
- **Image Optimization**: Responsive images with proper sizing
- **CSS Optimization**: Tailwind CSS purge unused styles
- **Build Size**: Optimized bundle size with Vite

Target metrics:
- Lighthouse score: > 90
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api

# Email Service (Optional)
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID=your_ga_id

# Calendar Integration (Optional)
VITE_CALENDLY_URL=https://calendly.com/yourprofile
```

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check types
npm run type-check

# Lint code
npm run lint
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [TypeScript](https://www.typescriptlang.org)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Next Steps

1. **Customize Content**: Update your personal information, services, and testimonials
2. **Add Backend**: Connect to your backend API for dynamic content
3. **Setup Email**: Integrate email service for contact form submissions
4. **Analytics**: Set up Google Analytics to track visitors
5. **Domain**: Configure your custom domain
6. **Deploy**: Push to production on your preferred hosting platform

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
