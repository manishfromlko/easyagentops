from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI(
    title="EasyAgentOps API",
    description="Backend API for EasyAgentOps webapp",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "EasyAgentOps API is running"}

@app.get("/health")
async def health_check():
    return JSONResponse(
        status_code=200,
        content={"status": "healthy", "service": "easyagentops-api"}
    )

@app.get("/api/articles")
async def get_articles():
    """Get list of articles"""
    return {
        "articles": [
            {"id": 1, "title": "Getting Started with Agent Operations", "date": "2024-06-01"},
            {"id": 2, "title": "Building Your First Autonomous Agent", "date": "2024-05-28"},
        ]
    }

@app.get("/api/projects")
async def get_projects():
    """Get list of projects"""
    return {
        "projects": [
            {"id": 1, "name": "AI Workflow Orchestrator", "status": "In Development"},
            {"id": 2, "name": "Agent Monitoring Dashboard", "status": "Planning"},
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
