#!/bin/bash

# Deployment script for Disability Law Website
# Usage: ./deploy.sh

set -e

echo "🚀 Disability Law Website - Deployment Script"
echo "=============================================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Choose deployment method
echo "Select deployment method:"
echo "1) Google Cloud Run (Recommended for production)"
echo "2) Cloudflare Pages (Free, fast CDN)"
echo "3) Build only (test locally)"
echo ""
read -p "Enter choice (1, 2, or 3): " choice

case $choice in
    1)
        echo -e "${BLUE}📦 Deploying to Google Cloud Run...${NC}"
        echo ""

        # Get project ID
        read -p "Enter your GCP Project ID: " PROJECT_ID

        if [ -z "$PROJECT_ID" ]; then
            echo -e "${RED}❌ Project ID cannot be empty${NC}"
            exit 1
        fi

        echo -e "${BLUE}Setting project...${NC}"
        gcloud config set project $PROJECT_ID

        echo -e "${BLUE}Enabling required APIs...${NC}"
        gcloud services enable run.googleapis.com cloudbuild.googleapis.com

        echo -e "${BLUE}Building container image...${NC}"
        gcloud builds submit --tag gcr.io/$PROJECT_ID/disability-law

        echo -e "${BLUE}Deploying to Cloud Run...${NC}"
        gcloud run deploy disability-law \
          --image gcr.io/$PROJECT_ID/disability-law \
          --platform managed \
          --region us-central1 \
          --allow-unauthenticated \
          --port 3000 \
          --memory 512Mi \
          --cpu 1

        echo ""
        echo -e "${GREEN}✅ Deployed successfully!${NC}"
        echo ""
        echo "Getting your URL..."
        URL=$(gcloud run services describe disability-law --region us-central1 --format='value(status.url)')
        echo -e "${GREEN}🌐 Your website is live at: $URL${NC}"
        ;;

    2)
        echo -e "${BLUE}📦 Building for Cloudflare Pages...${NC}"
        npm run build

        echo ""
        echo -e "${BLUE}🚀 Deploying to Cloudflare Pages...${NC}"

        # Check if wrangler is installed
        if ! command -v wrangler &> /dev/null; then
            echo -e "${RED}Wrangler not found. Installing...${NC}"
            npm install -g wrangler
        fi

        wrangler pages deploy dist --project-name=disability-law

        echo ""
        echo -e "${GREEN}✅ Deployed successfully!${NC}"
        echo -e "${GREEN}🌐 Your website should be live at: https://disability-law.pages.dev${NC}"
        ;;

    3)
        echo -e "${BLUE}📦 Building application...${NC}"
        npm run build

        echo ""
        echo -e "${GREEN}✅ Build complete!${NC}"
        echo "Built files are in the 'dist' directory"
        echo ""
        echo "To preview locally, run:"
        echo "  npx serve dist"
        ;;

    *)
        echo -e "${RED}❌ Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
echo "=============================================="
echo -e "${GREEN}Deployment process complete!${NC}"
echo ""
echo "📋 Next steps:"
echo "  1. Test your live website"
echo "  2. Update contact information (phone, email, address)"
echo "  3. Set up Google Analytics"
echo "  4. Configure email notifications for leads"
echo "  5. See FUTURE_TASKS.md for growth roadmap"
echo ""
