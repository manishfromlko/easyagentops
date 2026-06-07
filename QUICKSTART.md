# EasyAgentOps - Quick Start

Welcome to EasyAgentOps! This is your minimalistic blogging platform for agent operations.

## 📋 Project Overview

```
📁 easyagentops/
├── 📂 frontend/          → Next.js webapp
├── 📂 backend/           → FastAPI API server
├── 📂 database/          → Database schemas (empty, for future use)
└── 📂 .github/           → Deployment configs
```

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Start all services
docker-compose up

# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Option 2: Manual Setup

#### Frontend

```bash
cd frontend
npm install
npm run dev
# Visit http://localhost:3000
```

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
# Visit http://localhost:8000/docs
```

## 📖 Documentation

- **[README.md](./README.md)** - Full project documentation
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development setup guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment to GitHub Pages
- **[.github/CONTRIBUTING.md](./.github/CONTRIBUTING.md)** - Contributing guidelines

## 🎯 Key Features

✅ Minimalistic sidebar navigation
✅ Responsive design (desktop & mobile)
✅ Pre-built pages: Home, About, Blog, Projects, Learn, Tutorials, Contact
✅ GitHub Pages deployment ready
✅ FastAPI backend structure
✅ Docker & Docker Compose setup
✅ GitHub Actions CI/CD
✅ TypeScript + React best practices
✅ SEO-friendly structure

## 📂 Project Structure Details

### Frontend Structure
```
frontend/
├── app/                 # Pages and layouts
│   ├── layout.tsx      # Root layout with sidebar
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── blog/           # Blog listing
│   ├── projects/       # Projects showcase
│   ├── learn/          # Learning resources
│   ├── tutorials/      # Tutorials
│   ├── contact/        # Contact page
│   └── globals.css     # Global styles
├── components/
│   └── Sidebar.tsx     # Navigation component
├── package.json
├── tsconfig.json
├── next.config.js
└── Dockerfile
```

### Backend Structure
```
backend/
├── main.py             # FastAPI application
├── requirements.txt    # Python dependencies
├── .env.example        # Environment template
├── Dockerfile          # Docker configuration
└── README.md
```

## 🔧 Available Commands

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run export   # Export as static site
```

### Backend

```bash
python main.py                    # Run server
uvicorn main:app --reload         # Run with auto-reload
pip install -r requirements.txt   # Install dependencies
```

### Docker

```bash
docker-compose up                 # Start all services
docker-compose up -d              # Start in background
docker-compose down               # Stop all services
docker-compose logs -f            # View logs
```

## 🌐 Deployment

### GitHub Pages

1. Push code to GitHub repository
2. GitHub Actions automatically builds and deploys
3. Site available at https://easyagentops.in

**DNS Configuration (GoDaddy):**
- Add A records pointing to GitHub Pages IP
- Add CNAME record for www subdomain

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed steps.

## 📝 Available Pages

- **/** - Home page with introduction
- **/about** - About the platform
- **/blog** - Blog articles listing
- **/projects** - Featured projects
- **/learn** - Learning resources
- **/tutorials** - Step-by-step tutorials
- **/contact** - Contact information

## 🔌 API Endpoints (Backend)

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/articles` - Fetch articles
- `GET /api/projects` - Fetch projects
- `GET /docs` - Interactive API documentation (Swagger UI)

## 🛠️ Environment Setup

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=https://easyagentops.in
```

### Backend (.env)
```env
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=False
CORS_ORIGINS=http://localhost:3000,https://easyagentops.in
```

## 📋 Development Checklist

- [ ] Clone repository
- [ ] Install Node.js 18+ and Python 3.11+
- [ ] Install dependencies (frontend and backend)
- [ ] Create .env files from .example files
- [ ] Run with Docker Compose or manually
- [ ] Verify frontend at http://localhost:3000
- [ ] Verify backend at http://localhost:8000
- [ ] Make changes and test
- [ ] Commit and push to GitHub

## 🚨 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Kill process on port 8000
lsof -i :8000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

**npm issues?**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Python issues?**
```bash
rm -rf venv
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [GitHub Pages](https://pages.github.com)
- [Docker Docs](https://docs.docker.com)

## 📞 Support

- Issues: Open a GitHub issue
- Questions: hello@easyagentops.in
- Discussions: GitHub Discussions tab

## 📄 License

MIT License - See [LICENSE](./LICENSE) for details

---

**Happy coding!** 🚀

Start exploring the pages and customize them for your content.
