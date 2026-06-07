<!-- Workspace-specific custom instructions for EasyAgentOps webapp -->

# EasyAgentOps Webapp - Development Guidelines

## Project Overview
A Next.js blogging webapp about agent ops deployed on easyagentops.in via GitHub Pages with FastAPI backend microservice support.

## Architecture
- **Frontend**: Next.js app with minimalistic sidebar navigation
- **Backend**: FastAPI (optional, when needed)
- **Database**: Empty directory for future use
- **Deployment**: GitHub Pages + GoDaddy custom domain

## Key Pages
- `/` - Home
- `/about` - About page
- `/blog` - Blog listing
- `/projects` - Projects showcase
- `/learn` - Learning resources
- `/tutorials` - Tutorial collection
- `/contact` - Contact page

## Development Standards
- Use TypeScript for frontend code
- Follow React best practices with functional components
- Keep components minimal and reusable
- Use CSS modules for styling
- Maintain SEO-friendly structure for blog content

## Build & Deploy
- Production build: `npm run build` (frontend)
- Deploy to GitHub Pages: Push to `gh-pages` branch (automatic via CI/CD)
- Backend deployment: Docker containers (when needed)

## Navigation
All pages accessible via sidebar navigation component in the main layout.
