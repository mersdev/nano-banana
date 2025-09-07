# 🚀 Deployment Guide - Tanah Airku Series

## GitHub Pages Deployment (Recommended)

### Prerequisites
- GitHub account
- Google Gemini API key
- Repository forked/cloned to your GitHub account

### Step-by-Step Setup

#### 1. Repository Setup
```bash
# Clone your forked repository
git clone https://github.com/yourusername/tanah-airku-series.git
cd tanah-airku-series

# Install dependencies
npm install
```

#### 2. Configure GitHub Secrets
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secret:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your actual Gemini API key (get it from [Google AI Studio](https://ai.google.dev/))

#### 3. Enable GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **"GitHub Actions"**
3. Save the settings

#### 4. Update Base Path
Edit `vite.config.ts` and update the repository name:
```typescript
const base = process.env.NODE_ENV === 'production' 
  ? '/your-actual-repository-name/' // Replace this!
  : '/';
```

#### 5. Deploy
```bash
# Commit any changes
git add .
git commit -m "feat: configure for GitHub Pages deployment"

# Push to trigger deployment
git push origin main
```

### 🎯 Accessing Your Deployed App
After successful deployment, your app will be available at:
```
https://yourusername.github.io/your-repository-name/
```

## Alternative Deployment Options

### Vercel Deployment

#### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/tanah-airku-series)

#### Manual Vercel Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variable
vercel env add GEMINI_API_KEY
```

### Netlify Deployment

#### Drag & Drop Method
1. Run `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag the `dist` folder to deploy

#### CLI Method
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist

# Set environment variable
netlify env:set GEMINI_API_KEY your_api_key_here
```

## Environment Variables

### Required Variables
| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `GEMINI_API_KEY` | Google Gemini AI API key | [Google AI Studio](https://ai.google.dev/) |

### Setting Environment Variables

#### GitHub Actions (for GitHub Pages)
- Repository Settings → Secrets and variables → Actions
- Add as repository secret

#### Vercel
```bash
vercel env add GEMINI_API_KEY
```

#### Netlify
```bash
netlify env:set GEMINI_API_KEY your_key_here
```

## Troubleshooting

### Common Issues

#### 1. Build Fails with "GEMINI_API_KEY not found"
**Solution**: Ensure the environment variable is properly set in your deployment platform's secrets/environment variables.

#### 2. App Loads but AI Features Don't Work
**Possible Causes**:
- Invalid API key
- API key not properly injected during build
- CORS issues (shouldn't happen with Gemini API)

**Solution**: Check browser console for errors and verify API key is valid.

#### 3. GitHub Pages Shows 404
**Possible Causes**:
- Incorrect base path in `vite.config.ts`
- GitHub Pages not enabled
- Build artifacts not uploaded correctly

**Solution**: 
- Verify base path matches repository name
- Check GitHub Actions logs
- Ensure GitHub Pages source is set to "GitHub Actions"

#### 4. Images/Assets Not Loading
**Cause**: Incorrect base path configuration

**Solution**: Ensure all asset paths are relative and base path is correctly set.

### Debug Steps

#### 1. Check GitHub Actions Logs
1. Go to repository → Actions tab
2. Click on the latest workflow run
3. Check build and deploy logs for errors

#### 2. Test Local Build
```bash
# Test production build locally
npm run build
npm run preview
```

#### 3. Verify Environment Variables
```bash
# Check if environment variables are loaded
echo $GEMINI_API_KEY
```

## Performance Optimization

### Build Optimization
The project includes several optimizations:
- Code splitting for vendor and AI libraries
- Asset optimization
- Tree shaking for unused code

### CDN Configuration
For better performance, consider:
- Using a CDN for static assets
- Enabling gzip compression
- Setting proper cache headers

## Security Considerations

### API Key Protection
- ✅ API keys are injected at build time
- ✅ No API keys in client-side code
- ✅ Environment variables used for secrets
- ⚠️ Be careful not to commit `.env.local` with real keys

### Best Practices
1. Use different API keys for development and production
2. Regularly rotate API keys
3. Monitor API usage and set quotas
4. Use repository secrets for sensitive data

## Monitoring and Analytics

### Recommended Tools
- **Google Analytics** - User behavior tracking
- **Sentry** - Error monitoring
- **Vercel Analytics** - Performance monitoring (if using Vercel)

### Setup Example (Google Analytics)
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support

If you encounter issues during deployment:

1. Check the [troubleshooting section](#troubleshooting) above
2. Review GitHub Actions logs
3. Create an issue in the repository
4. Contact support at support@tanahairku.com

---

Happy deploying! 🚀🇲🇾
