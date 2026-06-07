# EasyAgentOps

A comprehensive blogging platform and resource hub for agent operations, built with modern web technologies.

**Live Site**: https://easyagentops.in

## Project Structure

```
easyagentops/
├── frontend/          # Next.js web application
├── backend/           # FastAPI backend service
├── database/          # Database schemas (for future use)
└── .github/          # GitHub Actions workflows and configurations
```

## Features

- **Minimalistic Sidebar Navigation**: Easy navigation between sections
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Multiple Content Sections**:
  - 📖 Blog - Articles on agent operations
  - 📚 Learn - Structured learning resources
  - 🎓 Tutorials - Step-by-step guides
  - 💼 Projects - Showcase of projects
  - 👤 About - About the platform
  - 📞 Contact - Get in touch
  - 🏠 Home - Landing page

## Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules (included)
- **Deployment**: GitHub Pages

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.11
- **Server**: Uvicorn
- **Deployment**: Docker containers

## Getting Started

### Prerequisites
- Node.js 18+ (for frontend)
- Python 3.11+ (for backend)
- npm or yarn (for frontend package management)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000 to see the frontend in action.

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

The backend API will be available at http://localhost:8000

### Backend API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/articles` - Fetch articles
- `GET /api/projects` - Fetch projects

## Development

### Building the Frontend

```bash
cd frontend
npm run build
```

### Running Backend Tests

```bash
cd backend
pip install pytest
pytest
```

## Deployment

### GitHub Pages Deployment

The project is configured with GitHub Actions for automatic deployment:

1. Push to `main` or `master` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. Site is available at https://easyagentops.in

**Configuration Steps**:
1. Go to Settings > Pages > Build and deployment
2. Set source to "GitHub Actions"
3. Configure custom domain to "easyagentops.in"

### Backend Deployment

The backend can be deployed as a Docker container:

```bash
cd backend
docker build -t easyagentops-api .
docker run -p 8000:8000 easyagentops-api
```

## Environment Variables

### Backend (.env)

Copy `.env.example` to `.env` and update:
- `API_HOST` - Host address
- `API_PORT` - Port number
- `DEBUG` - Debug mode
- `CORS_ORIGINS` - Allowed CORS origins

## Project Roadmap

- [ ] Blog management system
- [ ] User authentication
- [ ] Comments and discussions
- [ ] Search functionality
- [ ] Database integration
- [ ] Admin panel
- [ ] Advanced analytics
- [ ] API rate limiting
- [ ] Caching strategies

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: hello@easyagentops.in
- Website: https://easyagentops.in
- GitHub: [Your GitHub Profile]
- Twitter: [Your Twitter Handle]

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Powered by [FastAPI](https://fastapi.tiangolo.com)
- Deployed on [GitHub Pages](https://pages.github.com)

---

**Note**: This is a static site hosted on GitHub Pages. The backend API is optional and can be deployed separately as needed.
