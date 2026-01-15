# Email Setup - Quick Checklist

## Before Testing Email Functionality

- [ ] **Create `.env.local` file** in project root (copy from `.env.example`)
- [ ] **Fill in all 4 variables**:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
  - `VITE_CONTACT_EMAIL`
- [ ] **Restart dev server**: `npm run dev`
- [ ] **Wait for build to complete**

## Testing Email Function

- [ ] Open browser console: `F12`
- [ ] Go to Contact page
- [ ] Fill out form completely
- [ ] Click Submit button
- [ ] **Check browser console for messages**:
  - ✅ "EmailJS initialized successfully" = Good
  - ⚠️ "EmailJS not configured" = .env.local issue
  - ❌ Error message = Credentials or template issue

## Debugging Steps

If email doesn't work:

1. **Check `.env.local` exists** and has all variables
2. **Check dev server console** for any build warnings
3. **Check browser console** for email service logs
4. **Check EmailJS dashboard** Activity tab for failed requests
5. **Restart dev server** after any .env.local changes

## Expected Success Flow

```
Console shows: ✅ EmailJS initialized successfully
User fills form and clicks Submit
Console shows: 📤 Sending email with params: {...}
Console shows: ✅ Email sent successfully: {...}
User sees: "Message sent successfully! I'll get back to you soon."
Email appears: In your email inbox
```

## If Still Not Working

→ See [EMAIL_DEBUGGING_GUIDE.md](./EMAIL_DEBUGGING_GUIDE.md) for detailed troubleshooting

---

**File locations:**
- `.env.local` - Create in project root (not in git)
- `src/services/email.ts` - Email service logic
- `src/pages/Contact.tsx` - Contact form component
- `.env.example` - Reference for required variables
