# EasyAgentOps Backend

A FastAPI-based backend service for the EasyAgentOps platform.

## Features

- 🚀 Built with FastAPI
- 📚 Automatic API documentation (Swagger UI)
- 🔄 CORS support for cross-origin requests
- 🐳 Docker-ready
- 📝 Type-safe with Pydantic
- 🔌 RESTful API design

## Project Structure

```
backend/
├── main.py               # Main application file
├── requirements.txt      # Python dependencies
├── Dockerfile           # Docker configuration
├── .env.example         # Environment variables template
└── README.md
```

## Getting Started

### Prerequisites
- Python 3.11 or higher
- pip or poetry for package management

### Installation

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env
```

### Development

```bash
# Run the server
python main.py
```

The API will be available at `http://localhost:8000`

**API Documentation:**
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## API Endpoints

### Health Check
- `GET /` - Welcome message
- `GET /health` - Health check status

### Articles
- `GET /api/articles` - Get list of articles

### Projects
- `GET /api/projects` - Get list of projects

## Environment Variables

```env
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=False
CORS_ORIGINS=http://localhost:3000,https://easyagentops.in
```

## Development

### Running with Auto-Reload

```bash
uvicorn main:app --reload
```

### Code Quality

```bash
# Install linting tools
pip install flake8 black pylint

# Format code
black .

# Check code quality
flake8 .
pylint main.py
```

### Testing

```bash
pip install pytest pytest-asyncio

# Run tests
pytest
```

## Deployment

### Docker

Build and run with Docker:

```bash
docker build -t easyagentops-api .
docker run -p 8000:8000 easyagentops-api
```

### Docker Compose

Run with Docker Compose:

```bash
docker-compose up backend
```

### Environment Setup

For production deployment, ensure these environment variables are set:

```env
DEBUG=False
CORS_ORIGINS=https://easyagentops.in
API_HOST=0.0.0.0
```

## API Request Examples

### Get Articles

```bash
curl http://localhost:8000/api/articles
```

### Get Projects

```bash
curl http://localhost:8000/api/projects
```

### Health Check

```bash
curl http://localhost:8000/health
```

## Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- Authentication and authorization
- User management
- Article management API
- Search functionality
- Analytics tracking
- WebSocket support for real-time updates
- GraphQL API layer

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub or contact hello@easyagentops.in

## Related Repositories

- [Frontend](../frontend) - Next.js web application
- [Main Repository](../) - EasyAgentOps monorepo
