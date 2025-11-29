# Quick Start Guide - Tiberias Disability Law Website

## 🚀 Your Website is Ready!

### Current Status: ✅ LIVE (Development Server)

**Access your website now:**
- **From this computer**: http://localhost:3001
- **From any device on your network**: http://192.168.1.17:3001

## 📱 Test it Right Now!

1. Open your browser
2. Go to: **http://localhost:3001**
3. You should see your professional disability law website in Hebrew!

## ⚡ 3 Simple Steps to Go Live

### Step 1: Update Your Contact Info (5 minutes)

Open the file: `src/App.jsx` and update:

**Line 91** - Phone number in button:
```jsx
onClick={() => window.location.href='tel:+972-50-000-0000'}
```
Change to your real number: `tel:+972-50-XXX-XXXX`

**Line 262-270** - Contact details section:
- Phone: `050-000-0000` → Your real phone
- Email: `office@disability-law.co.il` → Your real email
- Address: Update if different

**Save the file** - the website will auto-reload with changes!

### Step 2: Deploy to the Internet (10 minutes)

**Option A: Cloudflare Pages (Free, Recommended for Start)**
```bash
cd /Users/roei/tiberias-disability-law
./deploy.sh
# Choose option 2 (Cloudflare Pages)
```
You'll get a URL like: `https://disability-law.pages.dev`

**Option B: Google Cloud Run (Production-Ready)**
```bash
cd /Users/roei/tiberias-disability-law
./deploy.sh
# Choose option 1 (Google Cloud Run)
# Enter your GCP Project ID when asked
```

### Step 3: Set Up Google My Business (15 minutes)

1. Go to: https://business.google.com
2. Add your law office
3. Link to your new website
4. Add photos and hours
5. **This is critical for local SEO!**

## 🎯 First Week To-Do List

### Day 1: Launch
- [ ] Update contact information
- [ ] Deploy to Cloudflare or Cloud Run
- [ ] Test on mobile phone
- [ ] Share with friends/family for feedback

### Day 2-3: Set Up Analytics
- [ ] Create Google Analytics account
- [ ] Add tracking code to website
- [ ] Set up Google Search Console
- [ ] Submit sitemap

### Day 4-5: Local SEO
- [ ] Complete Google My Business profile
- [ ] Ask 5 satisfied clients for reviews
- [ ] Post photos of your office
- [ ] Update business hours

### Day 6-7: Marketing Setup
- [ ] Add WhatsApp button (see FUTURE_TASKS.md)
- [ ] Set up email notifications for leads
- [ ] Plan your first 5 blog posts
- [ ] Join local Facebook groups

## 💡 Quick Tips

### How to View Leads

When someone fills out the contact form:

1. Open browser console (F12)
2. Type: `JSON.parse(localStorage.getItem('leads'))`
3. See all submissions with timestamps

**Important**: This is temporary. Set up email notifications ASAP!

### How to Make Changes

1. Edit files in `src/` folder
2. Website auto-reloads in browser
3. When happy, deploy again: `./deploy.sh`

### How to Stop/Start Dev Server

**Stop:**
```bash
# Find the process
ps aux | grep vite
# Kill it
pkill -f "vite"
```

**Start:**
```bash
cd /Users/roei/tiberias-disability-law
npm run dev
```

## 🆘 Common Questions

### Q: How much will this cost?
**A:**
- Cloudflare Pages: FREE (recommended for start)
- Google Cloud Run: ~$5-20/month
- Domain name: ~₪50-100/year

### Q: Do I need technical knowledge?
**A:**
- No! The website is ready to use
- Just update contact info and deploy
- For changes, edit text in `src/App.jsx`

### Q: How do I get more visitors?
**A:**
See FUTURE_TASKS.md, but priority #1:
1. Google My Business (free!)
2. Google Ads (₪1000-3000/month)
3. Blog posts about disability law
4. WhatsApp integration

### Q: How do leads work?
**A:**
- Visitors fill out contact form
- Data saved (currently in browser)
- **Next step**: Set up email notifications
- Upgrade to CRM system later

### Q: Can I change the design/colors?
**A:**
Yes! Edit `src/index.css`:
- Colors are defined at the top
- Hebrew text in `src/App.jsx`
- Need help? Ask Claude or a developer

## 📞 Need Help?

### Documentation Files:
- **Technical docs**: `README.md`
- **Deployment guide**: `DEPLOYMENT.md`
- **Growth roadmap**: `FUTURE_TASKS.md`
- **Project overview**: `PROJECT_SUMMARY.md`

### GitHub Repository:
https://github.com/levi-law/tiberias-disability-law

### Quick Commands Cheat Sheet:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Deploy to production
./deploy.sh

# View git status
git status

# Commit changes
git add .
git commit -m "Description of changes"
git push
```

## 🎉 You're Ready!

Your professional website is built and ready to generate leads.

**Next step**: Update your contact info and deploy!

**Timeline to live website**: 30 minutes or less

Good luck growing your practice! 🚀

---

**Questions?** Check the other documentation files or ask Claude for help.
