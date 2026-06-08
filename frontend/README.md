# EasyAgentOps Frontend

A Next.js-based web application for the EasyAgentOps blog platform.

## Features

- ⚡ Built with Next.js 14 (latest version)
- 📱 Fully responsive design
- 🎨 Minimalistic UI with sidebar navigation
- 🔍 SEO optimized
- 📦 Static site generation for GitHub Pages
- 🎯 TypeScript support

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Home page
│   ├── about/
│   ├── blog/
│   ├── projects/
│   ├── learn/
│   ├── tutorials/
│   ├── contact/
│   └── globals.css        # Global styles
├── components/
│   └── Sidebar.tsx        # Navigation sidebar
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── Dockerfile
```

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

```bash
npm run build
npm start
```

### Static Build (for GitHub Pages)

```bash
npm run build
```

The static files are generated using `output: 'export'` in `next.config.js` and should be available in the export output directory.

## Pages

- **Home** (`/`) - Landing page with introduction
- **About** (`/about`) - About the platform
- **Blog** (`/blog`) - Blog articles listing
- **Projects** (`/projects`) - Featured projects
- **Learn** (`/learn`) - Learning resources
- **Tutorials** (`/tutorials`) - Step-by-step tutorials
- **Contact** (`/contact`) - Contact information

## Styling

The application uses plain CSS for styling with a focus on simplicity and performance. No CSS-in-JS or heavy CSS frameworks are used.

- Global styles: `app/globals.css`
- Component styles: Inline or scoped as needed

## Navigation

The sidebar component (`components/Sidebar.tsx`) provides the main navigation:
- Active route highlighting
- Responsive menu on mobile
- Easy to extend with new routes

## Configuration

### Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=https://easyagentops.in
```

### Next.js Config

The `next.config.js` is configured for static export:
- `output: 'export'` - Enables static site generation
- `images.unoptimized: true` - For GitHub Pages compatibility

## Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the main branch.

**Setup:**
1. Go to repository Settings > Pages
2. Set source to "GitHub Actions"
3. Configure custom domain (if applicable)

### Docker

Build and run with Docker:

```bash
docker build -t easyagentops-web .
docker run -p 3000:3000 easyagentops-web
```

### Docker Compose

Run with Docker Compose:

```bash
docker-compose up frontend
```

## Performance

- ⚡ Fast initial page load
- 🎯 Optimized Core Web Vitals
- 📊 Static site generation
- 🚀 Zero JavaScript runtime (for static pages)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub or contact hello@easyagentops.in
