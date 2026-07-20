"""
app/main.py
────────────────────────────────────────────────────────
FastAPI Application Entry Point

Responsibilities:
  - Create and configure the FastAPI application instance
  - Register all API routers under /api/v1
  - Mount middleware (CORS, GZip, Rate Limit, Logging)
  - Register custom exception handlers
  - Lifespan events (startup: DB pool, shutdown: cleanup)

Usage:
  uvicorn app.main:app --reload --port 8000
"""
