# Learnix Enterprise Production Setup Guide

This document outlines the infrastructure, environment configuration, and deployment strategies for the Learnix Monorepo.

## 1. Architecture Overview

Learnix uses a **Modular Monolith** pattern on the frontend and a robust **FastAPI backend** tailored for enterprise scale.

### Components
- **API (`apps/api`)**: Python/FastAPI backend handling core business logic, database ORM (SQLAlchemy), and background jobs (ARQ).
- **Web App (`apps/web`)**: Next.js public-facing platform.
- **Admin App (`apps/admin`)**: Next.js dashboard for administrators.
- **Student App (`apps/student`)**: Next.js portal for enrolled students.
- **Packages (`packages/*`)**: Shared UI components, core logic, and authentication schemas.

## 2. Infrastructure Requirements

To run Learnix in production, you will need the following foundational services:

1. **PostgreSQL 15+**: Primary relational database.
2. **Redis 7+**: Used for Rate Limiting (`fastapi-limiter`), caching, and ARQ background job queues.
3. **Sentry**: Application monitoring, error tracking, and performance tracing across frontend and backend.
4. **Resend / SMTP**: For transactional emails (Welcome emails, password resets).
5. **Cloudinary / AWS S3**: For object storage (Course videos, user avatars).

## 3. Environment Mapping & Secrets Management

We employ a strict environment configuration. Do NOT place production secrets in plain text `.env` files committed to Git. Instead, inject them via your CI/CD provider or a Secrets Manager (e.g., AWS Secrets Manager, Hashicorp Vault).

Refer to the `.env.example` in the root of the project to see the domains:
- **[BACKEND] apps/api/.env**
- **[FRONTEND] apps/web/.env.local**
- **[FRONTEND] apps/student/.env.local**
- **[FRONTEND] apps/admin/.env.local**

**Crucial Secrets to Protect**:
- `SECRET_KEY` (FastAPI Token Signing)
- `DATABASE_URL` (PostgreSQL Credentials)
- `REDIS_URL` (Redis Connection)
- `RESEND_API_KEY` (Email Service)
- `CLOUDINARY_API_SECRET` (Storage)

## 4. Security & Hardening

- **CORS & Trusted Hosts**: Configured strictly in `apps/api/app/core/config.py`. Update `BACKEND_CORS_ORIGINS` to match your exact frontend domains.
- **Rate Limiting**: Configured globally in the FastAPI lifespan using `fastapi-limiter` and Redis.
- **Security Headers**: Applied to all Next.js applications via `next.config.ts` (HSTS, X-Frame-Options, etc.).
- **RBAC**: Handled dynamically using `@learnix/auth` guards on the frontend and OAuth2 dependency injection on the backend.

## 5. Deployment Strategies

### Backend (Docker + ARQ)

Use the provided `apps/api/Dockerfile` to build the backend image.
You will need to run *two* separate containers from this image:

1. **API Server Container**:
   `docker run -p 8000:8000 learnix-api:latest`
   (Default CMD is `uvicorn app.main:app --host 0.0.0.0 --port 8000`)

2. **ARQ Worker Container**:
   `docker run learnix-api:latest arq app.worker.WorkerSettings`

### Frontend (Next.js / Vercel / Docker)

The frontends can be easily deployed to Vercel (recommended) or built using Docker.
If using Docker, ensure that `NEXT_PUBLIC_*` environment variables are available at **build time**.

### CI/CD

We provide a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically lints, formats (Ruff/ESLint), type-checks, tests, and builds the monorepo on Push and PRs to `main`/`develop`.

## 6. Observability

- **Structured Logging**: FastAPI is configured to output `structlog` JSON logs in production. Pipe these stdout logs to Datadog, ELK, or CloudWatch.
- **Sentry**: Inject the `SENTRY_DSN` variable to automatically track unhandled exceptions and performance traces.
- **Health Checks**: The backend exposes `/api/v1/health`. Ensure your Load Balancer (ALB / NGINX) points health checks to this route. It verifies both PostgreSQL and Redis connectivity.

## 7. Database Migrations

Always run migrations before deploying a new API version.
`cd apps/api && alembic upgrade head`

## 8. Backup & Recovery

- Set up automated daily snapshots for your PostgreSQL database.
- Redis can run ephemerally or persist to disk (`appendonly yes`) if task queuing durability is critical.
