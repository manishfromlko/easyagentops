# Development Setup Guide

Complete guide to set up your local development environment for EasyAgentOps.

## Table of Contents

1. [System Requirements](#system-requirements)
2. [Project Setup](#project-setup)
3. [Frontend Development](#frontend-development)
4. [Backend Development](#backend-development)
5. [Docker Development](#docker-development)
6. [Common Tasks](#common-tasks)
7. [Troubleshooting](#troubleshooting)

## System Requirements

### Minimum Requirements

- **OS**: macOS, Linux, or Windows
- **RAM**: 4 GB (8 GB recommended)
- **Disk Space**: 2 GB free space

### Software

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (comes with Node.js)
- **Python**: v3.11 or higher
- **uv**: Latest version (Python package manager)
- **Git**: v2.0.0 or higher

### Optional

- **Docker**: v20.10.0 or higher (for containerized development)
- **Docker Compose**: v1.29.0 or higher
- **VS Code**: Latest version (recommended editor)

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/easyagentops.git
cd easyagentops
```

### 2. Install Global Dependencies

#### macOS

```bash
# Install Node.js with Homebrew
brew install node

# Install Python with Homebrew
brew install python@3.11
```

#### Linux (Ubuntu/Debian)

```bash
# Update package list
sudo apt-get update

# Install Node.js
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Python
sudo apt-get install -y python3.11

# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### Windows

- Download Node.js from https://nodejs.org
- Download Python from https://www.python.org
- Add both to PATH during installation

## Frontend Development

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Create Environment File

```bash
cp .env.example .env.local
```

Edit `.env.local` if needed:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Start Development Server

```bash
npm run dev
```

The frontend will be available at **http://localhost:3000**

### 4. Useful Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Export as static site
npm run export

# Clean build cache
rm -rf .next
```

## Backend Development

### 1. Install uv

#### macOS

```bash
brew install uv
```

#### Linux

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### Windows

```bash
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### 2. Install Dependencies

```bash
cd backend
uv sync
```

### 3. Create Environment File

```bash
cp .env.example .env
```

Edit `.env` if needed:

```env
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=True
CORS_ORIGINS=http://localhost:3000
```

### 4. Start Development Server

```bash
python main.py
```

Or with auto-reload:

```bash
uvicorn main:app --reload
```

Backend API available at **http://localhost:8000**
API docs available at **http://localhost:8000/docs**

### 5. Useful Commands

```bash
# Install dependencies (creates .venv automatically)
uv sync

# Run the server with uv
uv run python main.py

# Install linting tools
uv pip install flake8 black pylint

# Format code
uv run black .

# Check code quality
uv run flake8 .

# Run tests
uv run pytest

# Update dependencies
uv sync --upgrade
```

## Docker Development

### Using Docker Compose

The easiest way to run both services:

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Services will be available at:
- Frontend: **http://localhost:3000**
- Backend: **http://localhost:8000**

### Individual Docker Containers

#### Frontend

```bash
cd frontend
docker build -t easyagentops-web .
docker run -p 3000:3000 easyagentops-web
```

#### Backend

```bash
cd backend
docker build -t easyagentops-api .
docker run -p 8000:8000 easyagentops-api
```

## Common Tasks

### Adding a New Page

1. Create directory in `frontend/app/`:
```bash
mkdir frontend/app/mynewpage
```

2. Create `page.tsx`:
```bash
touch frontend/app/mynewpage/page.tsx
```

3. Add content to the page
4. Page is automatically accessible at `/mynewpage`
5. Update `frontend/components/Sidebar.tsx` to add navigation link

### Adding a New API Endpoint

1. Edit `backend/main.py`
2. Add new route:
```python
@app.get("/api/mynewroute")
async def get_my_data():
    return {"data": "value"}
```
3. Restart backend server

### Running Tests

#### Frontend

```bash
cd frontend
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm test
```

#### Backend

```bash
cd backend
pip install pytest pytest-asyncio
pytest
```

### Building for Production

#### Frontend

```bash
cd frontend
npm run build
npm start
```

#### Backend

```bash
cd backend
# Use production settings in .env
# Deploy Docker container or run with Gunicorn:
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 main:app
```

### Deploying to GitHub Pages

```bash
git add .
git commit -m "Your commit message"
git push origin main

# GitHub Actions will automatically build and deploy
```

Check progress in GitHub Actions tab.

## Troubleshooting

### Node.js/npm Issues

```bash
# Clear npm cache
npm cache clean --force

# Update npm
npm install -g npm@latest

# Check versions
node --version
npm --version
```

### Python Virtual Environment Issues

```bash
# Resync and recreate virtual environment
rm -rf .venv
uv sync
```

### Port Already in Use

```bash
# Find process using port
lsof -i :3000   # Frontend
lsof -i :8000   # Backend

# Kill process (macOS/Linux)
kill -9 PID

# For Windows, use Task Manager or:
netstat -ano | findstr :3000
taskkill /PID PID /F
```

### Docker Issues

```bash
# Remove dangling images
docker image prune -a

# Clear docker compose
docker-compose down -v

# Rebuild images
docker-compose up --build
```

### Git Issues

```bash
# Update submodules (if any)
git submodule update --init --recursive

# Reset to remote
git fetch origin
git reset --hard origin/main

# View commit history
git log --oneline
```

### Slow Performance

- Increase Docker memory allocation
- Clear npm cache: `npm cache clean --force`
- Delete `.next` and `node_modules`: `npm ci`
- Restart Docker daemon

## VS Code Setup

### Recommended Extensions

1. **ES7+ React/Redux/React-Native snippets** by dsznajder.es7-react-js-snippets
2. **Prettier** by esbenp.prettier-vscode
3. **ESLint** by dbaeumer.vscode-eslint
4. **Python** by ms-python.python
5. **Pylance** by ms-python.vscode-pylance
6. **Docker** by ms-vscode.docker

### Workspace Settings

Create `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "[python]": {
    "editor.defaultFormatter": "ms-python.python",
    "editor.formatOnSave": true
  }
}
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html)
- [Docker Documentation](https://docs.docker.com)
- [Git Documentation](https://git-scm.com/doc)

## Getting Help

1. Check project README files
2. Review GitHub Issues
3. Check troubleshooting section
4. Ask in discussions
5. Contact: hello@easyagentops.in

## Next Steps

After setup:
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally
4. Commit and push
5. Create a Pull Request

Happy coding! 🚀
