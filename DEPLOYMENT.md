# Deployment Guide

## Overview

EasyAgentOps uses a microservices architecture with:
- **Frontend**: Deployed on GitHub Pages
- **Backend**: Docker container (optional, for future expansion)
- **Database**: PostgreSQL (placeholder, for future use)

## GitHub Pages Deployment

### Prerequisites

1. GitHub repository created and initialized
2. GoDaddy domain (easyagentops.in) purchased
3. GitHub Actions enabled

### Step 1: Configure GitHub Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/easyagentops.git
cd easyagentops

# Push to GitHub
git remote add origin https://github.com/yourusername/easyagentops.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Set the source to **GitHub Actions**
4. Click **Save**

### Step 3: Configure Custom Domain

#### In GitHub

1. Go to **Settings** > **Pages**
2. Add custom domain: `easyagentops.in`
3. Check "Enforce HTTPS"
4. Click **Save**

#### In GoDaddy

1. Login to your GoDaddy account
2. Go to **My Products** > **Domain Manager**
3. Select your domain (easyagentops.in)
4. Click **DNS** next to your domain
5. Update or add these records:

**For GitHub Pages:**

```
Type     | Name    | Value
---------|---------|----------------------------
A        | @       | 185.199.108.153
A        | @       | 185.199.109.153
A        | @       | 185.199.110.153
A        | @       | 185.199.111.153
CNAME    | www     | yourusername.github.io
```

6. Save changes (may take up to 24-48 hours to propagate)

### Step 4: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. **Trigger on**: Push to `main` or `master` branch
2. **Build**: Next.js frontend
3. **Deploy**: To GitHub Pages
4. **Result**: Site available at https://easyagentops.in

### Verify Deployment

```bash
# Check if site is live
curl -I https://easyagentops.in

# Verify DNS records
nslookup easyagentops.in
dig easyagentops.in
```

## Backend Deployment (Docker)

### Option 1: Docker Hub

```bash
# Build image
cd backend
docker build -t yourusername/easyagentops-api:latest .

# Login to Docker Hub
docker login

# Push image
docker push yourusername/easyagentops-api:latest
```

### Option 2: Deploy to Cloud Provider

#### Heroku

```bash
# Install Heroku CLI
brew install heroku/brew/heroku

# Login
heroku login

# Create app
heroku create easyagentops-api

# Set environment variables
heroku config:set DEBUG=False --app easyagentops-api

# Deploy
git push heroku main
```

#### AWS (ECS)

```bash
# Create ECR repository
aws ecr create-repository --repository-name easyagentops-api

# Build and push
docker build -t easyagentops-api:latest .
docker tag easyagentops-api:latest YOUR_ECR_URI:latest
docker push YOUR_ECR_URI:latest
```

#### Google Cloud Run

```bash
# Build and deploy
gcloud run deploy easyagentops-api \
  --source ./backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Local Development with Docker Compose

```bash
# Start all services
docker-compose up

# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# Backend Docs: http://localhost:8000/docs
```

## Environment Configuration

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=https://api.easyagentops.in
NEXT_PUBLIC_SITE_URL=https://easyagentops.in
```

### Backend (.env)

```env
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=False
CORS_ORIGINS=https://easyagentops.in
DATABASE_URL=postgresql://user:password@db:5432/easyagentops
```

## Monitoring & Maintenance

### GitHub Actions

Monitor deployments:
1. Go to **Actions** tab in GitHub
2. View workflow runs and logs
3. Check for build failures

### SSL/HTTPS

- GitHub Pages automatically provides HTTPS
- Certificate is renewed automatically
- Check status in **Settings** > **Pages**

### Domain Renewal

- GoDaddy: Set auto-renewal in account settings
- GitHub Pages: No expiration on custom domain setup

## Troubleshooting

### Site not loading

```bash
# Verify DNS is pointing to GitHub Pages
nslookup easyagentops.in

# Check GitHub Pages status
curl -I https://yourusername.github.io
```

### Build failing

1. Check GitHub Actions logs
2. Run locally: `npm run build` in frontend directory
3. Check for TypeScript errors: `npm run lint`

### Custom domain not working

1. Wait for DNS propagation (up to 48 hours)
2. Verify CNAME file exists in `frontend/public/CNAME`
3. Clear browser cache
4. Check GitHub Pages settings

### Backend API connection issues

1. Verify CORS_ORIGINS environment variable
2. Check API is running and accessible
3. Test with curl: `curl https://api.easyagentops.in/health`

## Scaling Considerations

### Frontend

- GitHub Pages can handle high traffic
- Use CDN for assets if needed
- Monitor page load performance

### Backend

- If traffic increases, scale Docker containers
- Consider load balancing
- Implement caching strategies
- Use database connection pooling

## Security Best Practices

1. **Secrets Management**
   - Never commit `.env` files
   - Use GitHub Secrets for sensitive data
   - Rotate API keys regularly

2. **HTTPS**
   - Always enforce HTTPS
   - Keep SSL certificates updated

3. **API Security**
   - Implement rate limiting
   - Use API keys for backend endpoints
   - Validate all input

4. **Dependencies**
   - Keep packages updated
   - Run security audits regularly
   - Use dependabot for automated updates

## CI/CD Pipeline

The project includes GitHub Actions workflows:

- **deploy.yml**: Automatic deployment on push to main
- **ci-cd.yml**: Linting and build testing

### Workflow Trigger

Workflows trigger on:
- Push to `main` or `master` branch
- Pull requests to `main`, `master`, or `develop`

## Rollback

To rollback a deployment:

```bash
# In GitHub, go to Settings > Pages > Custom domain
# GitHub Pages will automatically serve the previous build

# Or manually re-deploy by pushing a previous commit:
git revert HEAD
git push origin main
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [FastAPI Deployment](https://fastapi.tiangolo.com/deployment/)
- [Docker Documentation](https://docs.docker.com/)

## Contact & Support

For deployment issues:
- Check GitHub Actions logs
- Review environment variables
- Contact: hello@easyagentops.in
