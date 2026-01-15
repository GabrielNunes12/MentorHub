# MentorHub - Deployment Guide

Complete guide to deploying your MentorHub mentorship portfolio application.

## 🚀 Pre-Deployment Checklist

- [ ] Run `npm run type-check` - no errors
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful build
- [ ] Test locally with `npm run preview`
- [ ] Update all content with your information
- [ ] Test on mobile and tablet devices
- [ ] Dark mode tested on all pages
- [ ] All links working
- [ ] Contact form configured
- [ ] Environment variables configured

## 📦 Build for Production

### Step 1: Verify Build
```bash
npm run build
```

Output will show:
```
✓ 43 modules transformed.
✓ built in 12.73s
```

This creates optimized files in the `dist/` folder.

### Step 2: Test Production Build Locally
```bash
npm run preview
```

Open `http://localhost:4173` to test the production version.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Pros**: 
- Free tier
- Automatic deployments on git push
- Excellent performance
- Built-in analytics

**Steps**:

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/mentorship-plans.git
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Go to Vercel dashboard
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

4. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add your variables (e.g., `VITE_API_URL`)
   - Click "Save"

5. **Deploy**
   - Vercel auto-deploys on push to main
   - Your site is live at `your-project.vercel.app`

6. **Connect Custom Domain**
   - Project Settings → Domains
   - Add your domain
   - Update DNS records (Vercel will show instructions)

---

### Option 2: Netlify

**Pros**:
- Free tier
- Easy setup
- Good build times
- Unlimited bandwidth

**Steps**:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Connect Git Repository**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Authorize Netlify

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Set Environment Variables** (if needed)
   - Site settings → Build & deploy → Environment
   - Add environment variables
   - Trigger new deploy

5. **Connect Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - Update DNS records

---

### Option 3: GitHub Pages

**Pros**:
- Free
- Simple setup
- Integrated with GitHub

**Cons**:
- Limited to static sites
- No server-side rendering

**Steps**:

1. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/', // or /mentorship-plans/ if deploying to subdirectory
     // ... rest of config
   })
   ```

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Deploy to gh-pages branch**
   ```bash
   npm install -g gh-pages
   npx gh-pages -d dist
   ```

4. **Configure Repository Settings**
   - Go to repository → Settings → Pages
   - Source: gh-pages branch
   - Save

5. **Access Your Site**
   - `https://your-username.github.io/mentorship-plans`
   - Or set custom domain in Pages settings

---

### Option 4: AWS Amplify

**Steps**:

1. **Create AWS Account** if you don't have one

2. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

3. **Initialize Amplify**
   ```bash
   amplify init
   ```
   - Project name: `mentorship-plans`
   - Environment: `prod`
   - Default editor: `Visual Studio Code`

4. **Add Hosting**
   ```bash
   amplify add hosting
   ```
   - Hosting service: `Amazon CloudFront and S3`
   - Bucket name: accept default

5. **Publish**
   ```bash
   amplify publish
   ```

---

### Option 5: DigitalOcean App Platform

**Steps**:

1. **Create DigitalOcean Account**
   - Go to [digitalocean.com](https://www.digitalocean.com)

2. **Create New App**
   - Click "Create" → "App Platform"
   - Connect GitHub repository
   - Select branch (main)

3. **Configure Build**
   - Build command: `npm run build`
   - Output directory: `dist`
   - HTTP Port: `3000`

4. **Set Environment Variables** (if needed)
   - App settings → Environment
   - Add variables
   - Save and deploy

---

## 🔧 Configuration by Host

### Environment Variables Setup

Create `.env.local` with your variables:

```env
# Required
VITE_API_URL=https://api.yourdomain.com

# Optional - Email
VITE_EMAIL_SERVICE_ID=your_service
VITE_EMAIL_TEMPLATE_ID=your_template
VITE_EMAIL_PUBLIC_KEY=your_key

# Optional - Analytics
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Optional - Calendar
VITE_CALENDLY_URL=https://calendly.com/yourprofile
```

### Domain Configuration

#### Using GoDaddy
1. Buy domain on GoDaddy
2. Go to DNS settings
3. Add CNAME record pointing to your host

#### Using Cloudflare
1. Add your domain to Cloudflare
2. Update nameservers at domain registrar
3. Add CNAME records in Cloudflare

#### Using Route 53 (AWS)
1. Create hosted zone
2. Update nameservers at registrar
3. Add records for your app

## 🔐 Security Setup

### HTTPS/SSL
- All modern hosts provide free SSL
- Vercel, Netlify, AWS Amplify auto-configure
- Usually ready within 24 hours

### Environment Secrets
- Never commit `.env.local` to git
- Keep secrets in host environment variables only
- Use `.env.example` for documentation

### Security Headers
Most hosts add these automatically:
- X-Content-Type-Options
- X-Frame-Options
- Content-Security-Policy

## 📊 Monitoring & Analytics

### Google Analytics
1. Create property in [analytics.google.com](https://analytics.google.com)
2. Get measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Implement tracking script

### Vercel Analytics
- Automatic with Vercel
- Dashboard → Analytics
- View page views, user data

### Error Tracking
Use [Sentry.io](https://sentry.io) for error monitoring:
1. Create account
2. Create project (React)
3. Get DSN
4. Install in your app
5. Monitor errors in dashboard

## 🚀 Post-Deployment

### Testing
```bash
# Test your live site
curl https://yourdomain.com

# Run Lighthouse
# - Open DevTools
# - Lighthouse tab
# - Generate report
```

### Monitoring
- Check analytics regularly
- Monitor errors in Sentry
- Review site performance
- Track conversion metrics

### Maintenance
- Keep dependencies updated: `npm update`
- Monitor bundle size
- Test new features before deploying
- Backup your content

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push
Most hosts support this:

1. **Connect repository** when deploying
2. **Configure build settings**
3. **Trigger deploys** automatically on push

Example GitHub Actions workflow:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - name: Deploy
      run: npm run deploy
```

## 💰 Cost Comparison

| Host | Free Tier | Paid Plan |
|------|-----------|-----------|
| **Vercel** | 100GB bandwidth | $20+/mo |
| **Netlify** | 300 build mins | $19+/mo |
| **GitHub Pages** | Unlimited | Free |
| **AWS Amplify** | 15GB storage | Pay per use |
| **DigitalOcean** | None | $5+/mo |

## 🆘 Troubleshooting

### Build Fails on Host
1. Check build logs on host dashboard
2. Verify `package.json` scripts
3. Check Node.js version compatibility
4. Ensure `.gitignore` doesn't exclude needed files

### Site Looks Wrong After Deploy
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check CSS is loading (inspect element)
3. Verify environment variables set correctly
4. Check dist folder is being deployed

### Domain Not Working
1. Wait 24-48 hours for DNS propagation
2. Verify DNS records set correctly
3. Check domain registrar settings
4. Use DNS lookup tool to verify

### Environment Variables Not Working
1. Verify they're set in host dashboard
2. Check variable names match code
3. Redeploy after adding variables
4. Use `console.log(import.meta.env)` to debug

## 📈 Performance Optimization

### Before Deployment
- [ ] Compress images
- [ ] Minimize JavaScript
- [ ] Optimize CSS
- [ ] Enable gzip compression
- [ ] Use CDN for static assets

### Monitor After Deployment
- [ ] Core Web Vitals
- [ ] Page load time
- [ ] First Contentful Paint
- [ ] Cumulative Layout Shift

## 🎉 Launch Checklist

- [ ] Domain configured
- [ ] Site live and accessible
- [ ] HTTPS working
- [ ] Mobile responsive
- [ ] Dark mode working
- [ ] Contact form working
- [ ] Analytics configured
- [ ] Error tracking setup
- [ ] Performance verified
- [ ] SEO metadata set
- [ ] Share on social media
- [ ] Tell your network!

## 📚 Additional Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)
- [AWS Amplify Docs](https://docs.amplify.aws)
- [Web Vitals Guide](https://web.dev/vitals)

---

**Your mentorship portfolio is ready to shine! 🌟**
