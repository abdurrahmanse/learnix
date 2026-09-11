# Learnix — Data Science Learning Platform

A production-ready monorepo built with **Turborepo**, containing a **Next.js** frontend and a **FastAPI** backend.

## Monorepo Structure

```
learnix/
├── apps/
│   ├── web/          # Next.js 16 frontend (@learnix/web)
│   └── api/          # FastAPI + SQLAlchemy backend
├── packages/
│   ├── tsconfig/     # Shared TypeScript configs (@learnix/tsconfig)
│   └── eslint-config/# Shared ESLint configs (@learnix/eslint-config)
├── Docs/             # Project documentation
├── Phase/            # Development phase notes
├── turbo.json        # Turborepo pipeline
└── package.json      # Root workspace config
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 10
- Python >= 3.11
- PostgreSQL database

### 1. Clone & Install

```bash
git clone https://github.com/abdurrahmanse/learnix.git
cd learnix
npm install
```

### 2. Configure Environment Variables

```bash
# Backend
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your database URL and API keys

# Frontend
cp apps/web/.env.local.example apps/web/.env.local  # (optional, has defaults)
```

### 3. Set Up the Python Backend

```bash
cd apps/api
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
alembic upgrade head             # Run database migrations
cd ../..
```

### 4. Run Development Servers

```bash
# Run everything (frontend only via Turborepo; start API separately)
npm run dev:api   # Terminal 1: FastAPI on http://localhost:8000
npm run dev:web   # Terminal 2: Next.js on http://localhost:3000

# Or run all JS/TS tasks via turbo
npm run dev
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run all apps via Turborepo |
| `npm run dev:web` | Run Next.js frontend only |
| `npm run dev:api` | Run FastAPI backend only |
| `npm run build` | Production build (Next.js) |
| `npm run lint` | Lint all workspaces |
| `npm run typecheck` | TypeScript check all workspaces |
| `npm run clean` | Clean all build artifacts |

## Apps

### `apps/web` — Next.js Frontend

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **State**: Zustand + React Query
- **Auth**: JWT (localStorage) + HTTP-only refresh cookie
- **UI**: shadcn/ui + Radix UI

Key features:
- Public course catalog and landing page
- Admin dashboard (courses, users, enrollments, payments, analytics)
- JWT authentication with OTP verification
- Cloudinary media uploads

### `apps/api` — FastAPI Backend

- **Framework**: FastAPI 0.139
- **Database**: PostgreSQL + SQLAlchemy 2.0 async + Alembic
- **Auth**: JWT access tokens + HTTP-only refresh tokens
- **Email**: Resend (OTP delivery)
- **Media**: Cloudinary (signed uploads)

Endpoints: `/api/v1/auth`, `/api/v1/users`, `/api/v1/courses`, `/api/v1/media`

## API Documentation

When the backend is running, visit:
- Swagger UI: [http://localhost:8000/api/v1/docs](http://localhost:8000/api/v1/docs)
- ReDoc: [http://localhost:8000/api/v1/redoc](http://localhost:8000/api/v1/redoc)

## Shared Packages

| Package | Description |
|---|---|
| `@learnix/tsconfig` | Shared TypeScript configs (`base.json`, `nextjs.json`) |
| `@learnix/eslint-config` | Shared ESLint config for Next.js apps |
