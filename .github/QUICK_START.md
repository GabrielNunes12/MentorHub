# 🚀 Quick Start Guide - MentorHub Frontend

## Installation & Setup

### 1. Install Dependencies
```bash
cd Mentorship-plans
npm install
```

### 2. Configure Environment Variables
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and update with your values
```

### 3. Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

---

## 📧 Email Setup (Contact Form)

Your contact form needs email configuration to send messages. Follow the steps in `EMAILJS_SETUP.md`:

1. **Sign up for free at** [emailjs.com](https://www.emailjs.com/)
2. **Create an Email Service** (Gmail recommended)
3. **Create an Email Template** with your message format
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key
5. **Add to `.env.local`**:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_CONTACT_EMAIL=your-email@gmail.com
   ```

---

## 🎨 Customization

### Update Your Personal Info

**Home Page** - [src/pages/Home.tsx](src/pages/Home.tsx)
- Edit hero section text
- Update statistics (students mentored, success rate, etc.)

**About Page** - [src/pages/About.tsx](src/pages/About.tsx)
- Replace profile photo (emoji or image URL)
- Update career timeline
- Modify expertise areas
- Add certifications

**Services Page** - [src/pages/Services.tsx](src/pages/Services.tsx)
- Edit service names and prices
- Update feature lists
- Modify service descriptions

**Testimonials** - [src/pages/Testimonials.tsx](src/pages/Testimonials.tsx)
- Add real student testimonials
- Update success metrics

**Contact Info** - [src/pages/Contact.tsx](src/pages/Contact.tsx)
- Update email: `gabrieln.dev3@gmail.com`
- Update phone: `+351928460134`
- Add social media links (LinkedIn, GitHub, etc.)

### Change Color Scheme

Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',      // Change primary color
      secondary: '#1F2937',    // Change secondary color
      accent: '#10B981',       // Change accent color
    }
  }
}
```

---

## 📱 Navigation Structure

- **/** - Home page
- **/about** - About/Profile page
- **/services** - Services & pricing
- **/testimonials** - Success stories
- **/contact** - Contact form & information

---

## 🔧 Available Commands

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Check code quality
npm run type-check  # Check TypeScript errors
```

---

## 📦 Project Structure

```
src/
├── components/      # Reusable components (Navbar, Footer, Layout)
├── pages/          # Page components (Home, About, Services, etc.)
├── hooks/          # Custom hooks (useTheme for dark mode)
├── services/       # API & email services
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── styles/         # Global CSS styles
└── App.tsx         # Main app component
```

---

## 🌙 Features

✅ **Responsive Design** - Works on all devices
✅ **Dark Mode** - Toggle theme with button in navbar
✅ **Contact Form** - Integrated email sending
✅ **Service Showcase** - Display pricing & features
✅ **Testimonials** - Show client success stories
✅ **Fast Loading** - Optimized with Vite
✅ **Type Safe** - Full TypeScript support

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to netlify.app
```

### Deploy to Other Platforms
Build the project and upload the `dist/` folder:
```bash
npm run build
# Upload dist/ folder to your hosting
```

---

## 🐛 Common Issues

### "Email not sending"
- ✅ Check `.env.local` has correct EmailJS credentials
- ✅ Verify email template exists in EmailJS dashboard
- ✅ Check browser console for error messages (F12)

### "Port 5173 already in use"
```bash
npm run dev -- --port 5174
```

### "TypeScript errors"
```bash
npm run type-check
```

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [EmailJS Setup Guide](./EMAILJS_SETUP.md)
- [Detailed README](./README.md)

---

## ✨ Next Steps

1. ✅ Set up EmailJS for contact form
2. ✅ Customize all page content with your info
3. ✅ Update social media links
4. ✅ Add real testimonials from clients
5. ✅ Set up custom domain
6. ✅ Deploy to production

---

**Happy mentoring! 🎯**
