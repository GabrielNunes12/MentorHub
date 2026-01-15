# Getting Started with MentorHub

This guide will help you get your mentorship portfolio up and running.

## 🎯 Quick Start (5 minutes)

### 1. Start Development Server
```bash
npm run dev
```
The app will automatically open in your browser at `http://localhost:5173`.

### 2. Customize Your Content

#### Update Your Name & Title
- Go to [src/pages/Home.tsx](src/pages/Home.tsx) and [src/pages/About.tsx](src/pages/About.tsx)
- Replace placeholder text with your actual information

#### Update Services & Pricing
- Edit [src/pages/Services.tsx](src/pages/Services.tsx)
- Modify the `services` array with your actual offerings

#### Add Your Testimonials
- Edit [src/pages/Testimonials.tsx](src/pages/Testimonials.tsx)
- Replace example testimonials with real student feedback

#### Update Contact Information
- Edit [src/pages/Contact.tsx](src/pages/Contact.tsx)
- Add your actual email, phone, and social media links

### 3. Customize Styling

#### Change Brand Colors
Edit [tailwind.config.ts](tailwind.config.ts):
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',      // Change primary color
      secondary: '#YOUR_COLOR',    // Change secondary color
      accent: '#YOUR_COLOR',       // Change accent color
    },
  },
}
```

#### Update Logo/Brand Name
In [src/components/Navbar.tsx](src/components/Navbar.tsx), line 19:
```tsx
<span className="text-2xl font-bold">Your Brand Name</span>
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```
This creates a `dist/` folder with optimized files.

### Deploy Options

#### **Vercel** (Recommended - Free)
```bash
npm install -g vercel
vercel
```

#### **Netlify** (Free)
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### **GitHub Pages**
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select `dist/` folder as source

## 🔗 Integration Options

### Connect Google Analytics
1. Get your tracking ID from Google Analytics
2. Add to [.env.local](.env.local):
```env
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Connect Calendly for Scheduling
1. Create a Calendly account
2. Update your profile URL in [src/pages/Contact.tsx](src/pages/Contact.tsx)

### Connect Email Service
1. Use EmailJS or Mailgun for contact form emails
2. Configure credentials in [.env.local](.env.local)

## 💡 Customization Ideas

- [ ] Add your professional photo
- [ ] Update success metrics and stats
- [ ] Add more testimonials
- [ ] Create additional service packages
- [ ] Add a blog section
- [ ] Integrate scheduling system
- [ ] Add client portal
- [ ] Setup email notifications

## 🎨 Design Tips

- The dark/light mode toggle is in the navbar
- All images can be replaced with yours
- Emojis are used as placeholders - replace with actual images
- Color scheme follows modern gradient design

## 🔍 Important Files

| File | Purpose |
|------|---------|
| [src/App.tsx](src/App.tsx) | Main app routes |
| [src/components/Navbar.tsx](src/components/Navbar.tsx) | Navigation menu |
| [tailwind.config.ts](tailwind.config.ts) | Color scheme & styling |
| [src/pages/*.tsx](src/pages/) | Page content |
| [.env.example](.env.example) | Environment variables |

## 📱 Testing Responsive Design

Press F12 and toggle device toolbar to test on mobile. Make sure it looks good on:
- iPhone (375px)
- Tablet (768px)
- Desktop (1024px+)

## ⚠️ Common Tasks

### Add a New Page
1. Create file in `src/pages/YourPage.tsx`
2. Add import in `src/App.tsx`
3. Add route in `<Routes>`
4. Add link in `src/components/Navbar.tsx`

### Change Theme Colors
Edit [tailwind.config.ts](tailwind.config.ts) and update the `colors` object in `theme.extend`

### Update Contact Email
In [src/pages/Contact.tsx](src/pages/Contact.tsx), update the email link:
```tsx
<a href="mailto:your-email@example.com">
```

## 🚀 Performance Tips

- Test with Lighthouse (Chrome DevTools)
- Compress images before uploading
- Use lazy loading for images
- Keep bundle size minimal

## 📞 Getting Help

Refer to:
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vite.dev)

## ✅ Pre-Launch Checklist

- [ ] Updated all content with your information
- [ ] Changed brand colors and logo
- [ ] Added professional photos/images
- [ ] Tested on mobile devices
- [ ] Set up email for contact form
- [ ] Configured analytics
- [ ] Removed placeholder testimonials
- [ ] Updated contact information
- [ ] Tested all links work
- [ ] Built and tested production version
- [ ] Set up custom domain
- [ ] Deployed to hosting platform

---

**You're all set! Good luck with your mentorship business! 🚀**
