# Deployment Guide

## GitHub Actions & Vercel Setup

This project is configured for automatic deployment to Vercel using GitHub Actions.

### Prerequisites

1. **GitHub Repository** - Push your code to GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Environment Variables** - Set up in Vercel dashboard

### Environment Variables

The following environment variables need to be set in Vercel:

```
VITE_CALENDLY_URL=https://calendly.com/prismaticnetwork12
```

If you want to use service-specific Calendly links, you can also add:
```
VITE_CALENDLY_CAREER=https://calendly.com/d/ctjv-525-36m/mentorship-career
VITE_CALENDLY_RESUME=https://calendly.com/d/cyd5-24n-428/mentorship-resume
VITE_CALENDLY_INTERVIEW=https://calendly.com/d/cx7r-7df-vtz/mentorship-interview-prep
```

### Steps to Deploy

#### 1. Connect Vercel to GitHub

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Select "Import Git Repository"
4. Connect your GitHub account and select the `Mentorship-plans` repository
5. Click "Import"

#### 2. Configure Project Settings

1. **Framework Preset**: Select "Vite"
2. **Build Command**: `npm run build` (should auto-detect)
3. **Output Directory**: `dist` (should auto-detect)
4. **Install Command**: `npm ci`

#### 3. Set Environment Variables

1. Go to your project settings in Vercel
2. Navigate to "Settings" > "Environment Variables"
3. Add the following:
   - Key: `VITE_CALENDLY_URL`
   - Value: Your Calendly URL
4. Select environments: Production, Preview, Development
5. Click "Save"

#### 4. Deploy

Click "Deploy" and Vercel will:
- Run the GitHub Actions workflow
- Build your project
- Deploy to production

### Automatic Deployments

Once connected:
- **Main/Master branch** → Production
- **Pull requests** → Preview deployments
- **Push to any branch** → Preview deployment

### GitHub Actions Workflow

The `.github/workflows/ci.yml` file automatically:
1. Runs on every push and pull request
2. Installs dependencies
3. Builds the project
4. Runs TypeScript type checking
5. Reports status back to GitHub

### Troubleshooting

**Build fails on Vercel:**
- Check environment variables are set
- Ensure all `.env.local` variables are added to Vercel
- Run `npm run build` locally to verify it works

**Deployment doesn't trigger:**
- Check that the repository is connected in Vercel settings
- Verify branch protection rules aren't blocking deployment

**Environment variables not loading:**
- Restart the Vercel deployment
- Double-check variable names match exactly
- Ensure variables are set for the correct environment (Production)

### Rollback

To rollback a deployment:
1. Go to Vercel project dashboard
2. Click "Deployments"
3. Click the three dots (...) next to the previous working deployment
4. Select "Promote to Production"

### Custom Domain

To add a custom domain:
1. Go to project settings in Vercel
2. Click "Domains"
3. Add your domain
4. Follow DNS setup instructions from your domain registrar

### Local Development

Still works as normal:
```bash
npm run dev
```

### Production Build

To test production build locally:
```bash
npm run build
npm run preview
```

---

**Your Vercel URL will be provided after the first successful deployment!**
