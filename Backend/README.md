# DataSci Academy — Backend

FastAPI backend for the DataSci Academy e-learning platform.

## Stack
- **FastAPI** — async web framework
- **PostgreSQL** — relational database
- **SQLAlchemy 2.0** — async ORM
- **Alembic** — database migrations
- **Redis** — caching & task queue
- **Celery** — async background tasks
- **Stripe** — payments & subscriptions

## Project Structure

```
app/
├── api/v1/          # Route handlers (controllers)
├── core/            # Config, DB, security, exceptions
├── models/          # SQLAlchemy ORM models
├── schemas/         # Pydantic request/response schemas
├── services/        # Business logic
├── repositories/    # Database query layer (CRUD)
├── tasks/           # Celery async tasks
├── utils/           # Helpers (email, storage, slugify)
└── main.py          # FastAPI app entry point
```

## Getting Started

```bash
# 1. Clone and enter directory
cd Backend

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate      # macOS/Linux
# venv\Scripts\activate       # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure environment
cp .env.example .env
# Edit .env with your values

# 5. Run migrations
alembic upgrade head

# 6. Start development server
uvicorn app.main:app --reload --port 8000
```

## API Documentation

Once running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Running Tests

```bash
pytest tests/ -v --cov=app
```
