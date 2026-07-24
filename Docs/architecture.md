# Project Architecture

```text
learnix/
├── Backend/                     # FastAPI Backend Application
│   ├── alembic/                 # Database migrations (Alembic)
│   ├── app/
│   │   ├── api/                 # FastAPI Route Handlers (Controllers)
│   │   │   ├── routers/
│   │   │   │   ├── auth.py      # Phase 1: Authentication
│   │   │   │   ├── users.py     # Phase 3: User Profile
│   │   │   │   ├── courses.py   # Phase 4: Course Management
│   │   │   │   ├── lessons.py   # Phase 5: Lesson Management
│   │   │   │   ├── progress.py  # Phase 6: Classroom Progress
│   │   │   │   ├── payments.py  # Phase 7: Subscriptions & Payments
│   │   │   │   └── admin.py     # Phase 8: Admin Analytics
│   │   │   └── deps.py          # Dependency injection (Auth, DB session)
│   │   ├── core/                # Core Configuration (Env, Security, JWT)
│   │   ├── db/                  # Database initialization and Models
│   │   │   ├── base.py
│   │   │   ├── session.py
│   │   │   └── models/          # SQLAlchemy ORM Models
│   │   │       ├── user.py
│   │   │       ├── otp.py
│   │   │       ├── course.py
│   │   │       ├── lesson.py
│   │   │       ├── progress.py
│   │   │       └── subscription.py
│   │   ├── repositories/        # Database access layer (CRUD operations)
│   │   ├── schemas/             # Pydantic validation schemas (Request/Response)
│   │   └── services/            # Core business logic
│   ├── main.py                  # FastAPI application entry point
│   └── requirements.txt
├── frontend/                    # Next.js Frontend Application
│   ├── app/                     # Next.js App Router (Pages & Layouts)
│   │   ├── (auth)/              # Phase 1: Login, Register, Verify
│   │   ├── (public)/            # Phase 4: Landing Page, Course Catalog
│   │   ├── (student)/           # Phase 3 & 5: Dashboard, Profile, Classroom
│   │   └── (admin)/             # Phase 8: Admin Dashboard, Curriculum Builder
│   ├── components/              # React Components
│   │   ├── auth/                # Auth forms and guards
│   │   ├── courses/             # Course cards and catalog components
│   │   ├── layout/              # Header, Footer, Sidebars
│   │   ├── profile/             # Profile forms and avatar management
│   │   ├── classroom/           # Video player, lesson navigation
│   │   └── ui/                  # shadcn/ui generic primitive components
│   ├── hooks/                   # Custom React hooks (e.g. useMediaQuery)
│   ├── lib/                     # Utilities (API clients, Axios, utils)
│   ├── store/                   # Zustand Global State (e.g. useAuthStore)
│   ├── styles/                  # Global CSS (globals.css) and Tailwind setup
│   └── types/                   # Global TypeScript definitions
├── Docs/                        # Project Documentation Hub
│   ├── 01-project-constitution.md
│   ├── 02-ai-development-rules.md
│   ├── 03-development-roadmap.md
│   ├── 04-project-context.md
│   ├── 05-decisions.md
│   ├── 06-design-system.md
│   └── modules/                 # Specific requirements for each phase
└── docker-compose.yml           # Infrastructure orchestration (Database, App)
```

### Media Upload Flow

- **Direct to Cloudinary:** The frontend handles file selection, resizing (using browser-image-compression for images to max 1920px), and uploading directly to Cloudinary.
- **Secure Signatures:** The backend generates secure Cloudinary upload signatures via the `/api/v1/media/signature` endpoint using the `cloudinary` Python SDK, ensuring API secrets never reach the client.
- **Database Tracking:** The `User` and `Course` models store the `avatar_public_id` and `thumbnail_public_id` along with the URLs to allow the backend to clean up old media when updated or deleted.
