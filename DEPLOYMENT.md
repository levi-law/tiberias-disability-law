# Deployment Guide - Tiberias Disability Law Website

This guide provides step-by-step instructions for deploying your website to production.

## Current Status

✅ **Local Development Server Running**
- URL: http://localhost:3001
- Network: http://192.168.1.17:3001

## Deployment Options

### Option 1: Google Cloud Run (Recommended)

**Advantages:**
- Fully managed, scalable
- Pay only for what you use
- Automatic HTTPS
- Custom domain support
- ~$5-20/month

**Steps:**

1. **Set up Google Cloud Project**
```bash
# Login to gcloud (already authenticated)
gcloud config set project YOUR_PROJECT_ID

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

2. **Build and Deploy**
```bash
cd /Users/roei/tiberias-disability-law

# Build and submit to Cloud Build
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/disability-law

# Deploy to Cloud Run
gcloud run deploy disability-law \
  --image gcr.io/YOUR_PROJECT_ID/disability-law \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000
```

3. **Get your URL**
```bash
gcloud run services describe disability-law --region us-central1 --format='value(status.url)'
```

4. **Set up custom domain (optional)**
```bash
gcloud run domain-mappings create \
  --service disability-law \
  --domain www.yourdomain.com \
  --region us-central1
```

### Option 2: Cloudflare Pages (Fast & Free)

**Advantages:**
- Free tier with unlimited bandwidth
- Global CDN (ultra-fast)
- Automatic HTTPS
- Easy custom domain setup

**Steps:**

1. **Build the site**
```bash
cd /Users/roei/tiberias-disability-law
npm run build
```

2. **Deploy with Wrangler**
```bash
# Install wrangler if not already
npm install -g wrangler

# Deploy (already authenticated)
wrangler pages deploy dist --project-name=disability-law
```

3. **Access your site**
- URL will be: https://disability-law.pages.dev
- Or set up custom domain in Cloudflare dashboard

### Option 3: Keep Running Locally (For Testing)

**Current Setup:**
- Server is already running on port 3001
- Accessible at: http://localhost:3001 and http://192.168.1.17:3001

**To keep it running:**
```bash
# The server is running in background
# To check status:
ps aux | grep vite

# To stop:
pkill -f "vite"

# To restart:
cd /Users/roei/tiberias-disability-law
npm run dev
```

## Quick Deploy Script

I've created a quick deploy script for you:

```bash
#!/bin/bash
# File: deploy.sh

echo "🚀 Deploying Disability Law Website..."

# Choose deployment method
echo "Select deployment method:"
echo "1) Google Cloud Run"
echo "2) Cloudflare Pages"
read -p "Enter choice (1 or 2): " choice

if [ "$choice" == "1" ]; then
    echo "📦 Building and deploying to Cloud Run..."
    read -p "Enter your GCP Project ID: " PROJECT_ID

    gcloud config set project $PROJECT_ID
    gcloud builds submit --tag gcr.io/$PROJECT_ID/disability-law
    gcloud run deploy disability-law \
      --image gcr.io/$PROJECT_ID/disability-law \
      --platform managed \
      --region us-central1 \
      --allow-unauthenticated \
      --port 3000

    echo "✅ Deployed! Getting URL..."
    gcloud run services describe disability-law --region us-central1 --format='value(status.url)'

elif [ "$choice" == "2" ]; then
    echo "📦 Building for Cloudflare Pages..."
    npm run build

    echo "🚀 Deploying to Cloudflare..."
    wrangler pages deploy dist --project-name=disability-law

    echo "✅ Deployed! Check output above for URL"
else
    echo "❌ Invalid choice"
    exit 1
fi
```

## Post-Deployment Checklist

After deploying, complete these important tasks:

### 1. Update Contact Information
- [ ] Replace placeholder phone number with real number
- [ ] Update email address
- [ ] Update office address
- [ ] Verify office hours

### 2. Set Up Analytics
- [ ] Create Google Analytics account
- [ ] Add tracking code to website
- [ ] Set up goal tracking for form submissions
- [ ] Verify data is being collected

### 3. Set Up Google My Business
- [ ] Claim/create business listing
- [ ] Add photos of office
- [ ] Add business hours
- [ ] Link to website

### 4. Set Up Email Notifications
- [ ] Configure SendGrid or AWS SES
- [ ] Set up email template for lead notifications
- [ ] Test form submission → email notification

### 5. SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Verify website in Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Monitor search rankings

### 6. Security
- [ ] Ensure HTTPS is working (automatic on Cloud Run/Cloudflare)
- [ ] Add privacy policy page
- [ ] Add terms of service
- [ ] Configure GDPR compliance if needed

### 7. Backup & Monitoring
- [ ] Set up automated backups
- [ ] Configure uptime monitoring (UptimeRobot)
- [ ] Set up error tracking (Sentry)
- [ ] Create disaster recovery plan

## Updating the Live Site

When you make changes:

1. **Update code locally**
2. **Test locally**: `npm run dev`
3. **Deploy updates**: Run the same deployment command
4. **Verify**: Check live site to ensure changes are applied

## Troubleshooting

### Site not loading
- Check deployment logs: `gcloud run services logs read disability-law`
- Verify container is running: `gcloud run services describe disability-law`

### Form submissions not working
- Check browser console for errors
- Verify localStorage is enabled
- Test on different browsers

### Slow performance
- Check network tab in browser DevTools
- Consider adding CDN
- Optimize images
- Enable caching

## Getting Help

- Google Cloud Run docs: https://cloud.google.com/run/docs
- Cloudflare Pages docs: https://developers.cloudflare.com/pages
- React docs: https://react.dev
- Vite docs: https://vitejs.dev

## Cost Estimates

**Google Cloud Run:**
- First 2 million requests/month: Free
- After that: ~$0.40 per million requests
- Memory: ~$0.0000025 per GB-second
- Estimated monthly cost: $5-20 for low-medium traffic

**Cloudflare Pages:**
- Free tier: Unlimited bandwidth, 500 builds/month
- Pro: $20/month (more builds, advanced features)
- Estimated monthly cost: $0 (free tier is generous)

## Recommended: Start with Cloudflare Pages

For initial launch, I recommend starting with Cloudflare Pages (free) to test the market, then move to Cloud Run when you need:
- Backend functionality (database, email)
- More control over infrastructure
- Advanced monitoring and logging

---

**Ready to deploy?** Choose your method above and let me know if you need any help!
