# Email Functionality Debugging Guide

## Problem: "Email function is not working on my local"

This guide will help you troubleshoot why the contact form emails aren't being sent.

## ✅ Step 1: Verify Your Environment Setup

### Create `.env.local` file

You need to create a `.env.local` file in the project root directory (same level as `package.json`):

```bash
# Copy from .env.example to create .env.local
cp .env.example .env.local
```

### Fill in the credentials

Open `.env.local` and ensure it has these variables:

```dotenv
VITE_EMAILJS_SERVICE_ID=service_j44qy4y
VITE_EMAILJS_TEMPLATE_ID=template_g76y9kb
VITE_EMAILJS_PUBLIC_KEY=6x1H0GBPhn_UKukBa
VITE_CONTACT_EMAIL=gabrieln.dev3@gmail.com
```

**Important**: These are YOUR actual EmailJS credentials - they must match what you have in your EmailJS dashboard.

## ✅ Step 2: Restart Your Dev Server

After creating `.env.local`, you **MUST** restart your development server for the environment variables to load:

```bash
# Stop the current dev server (Ctrl+C)
# Then run:
npm run dev
```

## ✅ Step 3: Test the Email Function

1. Open your browser console with `F12` (or right-click → Inspect → Console tab)
2. Navigate to the **Contact** page in your application
3. Fill out the contact form
4. Click **Submit**
5. **Check the browser console** for debugging messages

### Expected Console Output (Success)

```
✅ EmailJS initialized successfully
📤 Sending email with params: { to_email: '...', from_name: '...', ... }
✅ Email sent successfully: { status: 200, text: 'OK', ... }
```

### Expected Console Output (Configuration Error)

```
⚠️ EmailJS not configured. Missing: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
📧 Email data: { name: 'John Doe', email: 'john@example.com', ... }
```

This means `.env.local` is missing or credentials are empty.

### Expected Console Output (Send Error)

```
❌ Error sending email: Error: [API Error Details]
Error details: ...
```

This could mean:
- EmailJS credentials are incorrect
- Template doesn't exist in EmailJS
- Network issue

## ✅ Step 4: Verify EmailJS Account

Make sure your EmailJS account is set up correctly:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Verify you have:
   - **Service ID**: `service_j44qy4y` (or your actual service ID)
   - **Template ID**: `template_g76y9kb` (or your actual template ID)
   - **Public Key**: `6x1H0GBPhn_UKukBa` (or your actual public key)

3. Check that your template has these parameters:
   ```
   {{to_email}}
   {{from_name}}
   {{from_email}}
   {{phone}}
   {{subject}}
   {{message}}
   ```

## ✅ Step 5: Check Network Requests

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Submit the contact form
4. Look for a request to `api.emailjs.com`
5. Check the response status code:
   - **200**: Success
   - **401/403**: Authentication error (wrong PUBLIC_KEY)
   - **404**: Template not found
   - **500**: EmailJS server error

## Troubleshooting Checklist

- [ ] `.env.local` file exists in project root
- [ ] `.env.local` has all 4 required variables filled in
- [ ] Dev server has been restarted after creating `.env.local`
- [ ] EmailJS credentials are correct (match dashboard)
- [ ] Browser console shows initialization message
- [ ] Email template exists in EmailJS dashboard
- [ ] Network request to `api.emailjs.com` returns 200

## Common Issues & Solutions

### Issue: "EmailJS not configured. Missing: VITE_EMAILJS_SERVICE_ID..."

**Solution**: 
- Verify `.env.local` exists
- Verify it has all 4 variables (not empty strings)
- Restart dev server
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: "Error sending email: 401 or 403"

**Solution**:
- Your PUBLIC_KEY is wrong
- Copy the correct PUBLIC_KEY from EmailJS dashboard
- Make sure there are no spaces or quotes in `.env.local`

### Issue: "Error sending email: Invalid template"

**Solution**:
- Your TEMPLATE_ID doesn't exist
- Create a template in EmailJS dashboard
- Or copy correct TEMPLATE_ID from dashboard

### Issue: Email sent successfully but didn't receive it

**Solution**:
- Check your email spam/junk folder
- Verify CONTACT_EMAIL is correct in `.env.local`
- Check EmailJS Activity log in dashboard to confirm send
- Check email spam settings at your email provider

## Getting Help

1. Check browser console (F12) for detailed error messages
2. Check EmailJS Activity log in your dashboard
3. Verify all environment variables in `.env.local`
4. Ensure dev server was restarted after .env.local changes

## Files Modified

- **src/pages/Contact.tsx**: Now displays detailed error messages from email service
- **src/services/email.ts**: Provides detailed logging and error handling
- **.env.local**: Your configuration file (create this - not in git)

---

**Need more help?** Check the [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for initial EmailJS account setup instructions.
