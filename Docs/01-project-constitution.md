# Project Constitution

This document serves as the permanent source of truth for the project. Every future design and development decision must align with the standards defined here.

## 1. Project Vision
To become the premier subscription-based E-learning platform that seamlessly bridges the gap between expert instructors and eager learners, offering an intuitive, high-performance, and secure educational experience globally.

## 2. Project Goals
- Deliver a robust, scalable, and responsive E-learning platform.
- Provide a frictionless subscription and payment experience.
- Ensure high-quality video and course material delivery.
- Maintain rigorous security and data privacy standards.
- Establish a highly maintainable, type-safe, and well-documented codebase to accelerate future iterations.

## 3. Target Users
- **Students/Learners:** Individuals seeking to acquire new skills through structured courses.
- **Instructors/Content Creators:** Subject matter experts managing courses, lessons, and monitoring student progress.
- **Platform Administrators:** Super-users overseeing platform health, financial metrics, content moderation, and user management.

## 4. MVP Scope
- User Registration, Authentication, and Profile Management.
- Course browsing, detailed course pages, and module/lesson structures.
- Video playback and text-based lesson rendering.
- Subscription management and payment processing integration.
- Admin dashboard for CRUD operations on courses, lessons, and users.

## 5. Future Scope
- Interactive coding environments or assignments.
- Real-time chat, discussion forums, and community features.
- Advanced analytics and AI-driven course recommendations.
- Dedicated mobile applications (iOS/Android).
- Gamification (badges, leaderboards, certificates).

## 6. Functional Requirements
- **Auth:** Login, Signup, Password Reset, session management via JWT.
- **Courses:** Categorization, search, structured progress tracking per user.
- **Subscriptions:** Monthly/Annual billing, cancellation, role-based access to premium content.
- **Admin:** Content creation workflow (draft, publish), user role assignment, transaction monitoring.

## 7. Non-functional Requirements
- **Performance:** Sub-second page load times; API responses under 200ms.
- **Scalability:** Stateless backend design to support horizontal scaling.
- **Availability:** Target 99.9% uptime.
- **Security:** Protection against XSS, CSRF, SQLi; secure password hashing; robust authorization.
- **Responsiveness:** Mobile-first responsive UI.

## 8. Technology Stack
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** FastAPI, SQLAlchemy, Alembic, Python
- **Database:** PostgreSQL (Neon)
- **Authentication:** JWT (Access Token), HttpOnly Cookies (Refresh Token)
- **Email:** Resend
- **Infrastructure:** Dockerized architecture (Deployment target TBD)

## 9. System Architecture
Client-server model with a decoupled frontend (Next.js) communicating with a RESTful backend (FastAPI) via HTTP/JSON. The backend acts as the sole orchestrator, interfacing with the PostgreSQL database and external APIs (Resend, Payment Gateway).

## 10. Frontend Architecture
- **Framework:** Next.js (App Router).
- **Paradigm:** Server-Side Rendering (SSR) and Static Site Generation (SSG) for SEO-critical public pages. Client-Side Rendering (CSR) for interactive, authenticated dashboards.
- **Styling:** Tailwind CSS with shadcn/ui for consistent, accessible, and customizable components.

## 11. Backend Architecture
- **Framework:** FastAPI.
- **Pattern:** Layered Clean Architecture (Routers -> Services -> Repositories).
- **Concurrency:** Fully asynchronous endpoints (`async def`) for optimal I/O bound operation performance.

## 12. Database Standards
- **Engine:** PostgreSQL (hosted on Neon).
- **ORM:** SQLAlchemy (Async Session).
- **Migrations:** Alembic.
- **Rules:** All tables must include `id` (UUID), `created_at`, and `updated_at` timestamps. Employ soft deletes (`deleted_at`) for critical entities to prevent accidental data loss.

## 13. API Standards
- **Paradigm:** RESTful architecture.
- **Format:** JSON payloads natively serialized via Pydantic.
- **Versioning:** Explicit URL versioning (e.g., `/api/v1/...`).
- **Response Shape:** Standardized JSON wrapper for success (data) and error (message, code) responses.

## 14. Authentication & Authorization Standards
- **Authentication:** Stateless JWT. Short-lived access tokens delivered to the client, long-lived refresh tokens stored securely in HTTP-only, secure cookies.
- **Authorization:** Role-Based Access Control (RBAC). Endpoints must explicitly declare and validate required user roles via FastAPI dependencies.

## 15. Folder Structure Standards
**Frontend:**
- `src/app`: Next.js App Router definitions and page layouts.
- `src/components`: Reusable UI elements grouped by domain or shadcn/ui generic.
- `src/hooks`: Custom React hooks.
- `src/lib`: Utility functions, API clients.
- `src/types`: Global TypeScript definitions.

**Backend:**
- `app/api`: FastAPI route handlers (controllers).
- `app/core`: Configuration, security utilities, and shared dependencies.
- `app/models`: SQLAlchemy ORM declarative models.
- `app/schemas`: Pydantic validation schemas.
- `app/services`: Core business logic.
- `app/db`: Database connection initialization and repository layer.

## 16. Coding Standards
- **General:** DRY (Don't Repeat Yourself), SOLID principles.
- **Types:** Strict typing enforced in TypeScript and Python (Type Hints). The use of `any` in TS is strictly forbidden.
- **Linting & Formatting:** ESLint + Prettier (Frontend), Ruff + Black + mypy (Backend).

## 17. Naming Conventions
- **Files/Folders:** `kebab-case` for frontend files/folders. `snake_case` for Python files/packages.
- **Classes/Interfaces:** `PascalCase`.
- **Variables/Functions:** `camelCase` (TypeScript), `snake_case` (Python).
- **Database Tables:** Plural `snake_case` (e.g., `users`, `course_modules`).

## 18. Error Handling Standards
- **Backend:** Centralized exception handlers. Never expose raw stack traces to the client. Return consistent HTTP status codes (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Error).
- **Frontend:** Global error boundaries, toast notifications for API interaction errors, graceful UI degradation.

## 19. Validation Standards
- **Backend:** Pydantic schemas enforce strict typing and bounds checking for all incoming request bodies and query parameters.
- **Frontend:** Zod schemas paired with React Hook Form for comprehensive client-side validation prior to network requests.

## 20. Logging Standards
- Structural JSON logging in production environments.
- **Log levels:** DEBUG (dev workflows), INFO (state changes, request tracing), WARNING (recoverable issues), ERROR (unrecoverable exceptions).
- Avoid logging sensitive data (PII, passwords, auth tokens) unconditionally.

## 21. Security Standards
- Passwords hashed via bcrypt or Argon2 (via Passlib).
- CORS configured to strictly allow only the specified frontend origin(s).
- Rate limiting on sensitive endpoints (login, password reset).
- Input sanitization to prevent XSS attacks.
- Parameterized queries exclusively (via SQLAlchemy) to prevent SQLi.

## 22. UI/UX Standards
- Consistent typography and color palette mapped precisely to the Tailwind configuration.
- High accessibility standards (ARIA attributes, keyboard navigation, color contrast validation).
- Explicit loading states (skeletons, spinners) and intuitive empty states for all dynamic views.

## 23. Component Design Principles
- **Single Responsibility Principle:** A component should do one thing well.
- Prefer functional components and custom hooks over monolithic files.
- Strictly separate presentational components (dumb) from container/logical components (smart).
- Maximize component reusability leveraging the shadcn/ui baseline.

## 24. State Management Strategy
- **Server State:** React Query (TanStack Query) for fetching, caching, invalidating, and synchronizing asynchronous API data.
- **Client State:** Zustand (or React Context) for global UI state (e.g., theme toggle, sidebar state). Local state (`useState`) for isolated component logic.

## 25. File Storage Strategy
- Secure cloud storage (e.g., AWS S3, Cloudflare R2) for handling media (avatars, course videos, downloadable attachments).
- Utilize pre-signed URLs to enable secure, direct-to-cloud file uploads, removing bottlenecks from the backend application servers.

## 26. Email Strategy
- **Provider:** Resend API.
- **Templating:** React Email for crafting type-safe, responsive, and cross-client compatible email templates.
- **Queueing:** Offload email dispatch to background tasks (FastAPI `BackgroundTasks` or a dedicated queue) to avoid blocking HTTP request cycles.

## 27. Notification Strategy
- Dedicated database-backed in-app notification system tracking read/unread status.
- Designed with extensibility for future Push Notification and Webhook integrations.

## 28. Testing Strategy
- **Unit Testing:** Pytest for backend logic. Vitest for frontend utilities and isolated components.
- **Integration Testing:** API route testing against an isolated, ephemeral test database instance.
- **E2E Testing:** Playwright or Cypress covering critical user journeys (login, checkout, course consumption).

## 29. Git Strategy
- `main` branch reflects the current production-ready state.
- `dev` or `staging` branch acts as the primary integration branch.
- Feature work occurs on isolated branches branching off `dev`.

## 30. Branching Strategy
- **Format:** `type/issue-id-short-description` (e.g., `feature/auth-login`, `bugfix/video-playback-error`).
- **Valid Types:** `feature`, `bugfix`, `hotfix`, `chore`, `docs`, `refactor`.

## 31. Commit Convention
- Adhere strictly to Conventional Commits: `type(scope): subject`
  - *Example:* `feat(auth): implement JWT refresh token flow`
  - *Example:* `fix(ui): resolve padding issue on mobile navbar`

## 32. Documentation Standards
- **Codebase:** Docstrings for core Python functions/classes. JSDoc for complex TypeScript utilities.
- **API Interfaces:** OpenAPI (Swagger) specifications auto-generated by FastAPI.
- **Project Wiki:** This `docs/` folder manages architectural decisions, onboarding guides, and individual module specifications.

## 33. Environment Variable Standards
- Strict separation of environments (Development, Staging, Production).
- Backend utilizes `pydantic-settings` to validate the presence and exact types of environment variables upon startup.
- The `.env.example` file must remain perfectly up-to-date. Secrets are NEVER committed to version control.

## 34. Deployment Strategy
- Robust CI/CD pipelines (e.g., GitHub Actions) handling automated testing, linting, and deployment hooks.
- Immutable, artifact-based deployments utilizing Docker containers.
- Database migrations (`alembic upgrade head`) execute safely and automatically during the deployment pipeline prior to app rollout.

## 35. Performance Standards
- **Database:** Ensure proper indexing on foreign keys and frequently filtered columns. Proactively address N+1 query problems utilizing SQLAlchemy's `joinedload` and `selectinload`.
- **Frontend:** Implement code splitting, route-based lazy loading, and heavy component lazy loading (e.g., video players). Utilize `next/image` for image optimization.

## 36. Scalability Guidelines
- Completely stateless application design (auth state stored in DB/JWT).
- Architecture must support trivial horizontal scaling (adding more API pods).
- Establish clear separation of repositories to facilitate future read-replica configuration for database reads vs. writes.

## 37. Maintainability Guidelines
- Code reviews are mandatory (minimum of 1 peer approval required prior to merge).
- Maintain small, highly focused functions.
- Favor extreme readability over clever, overly succinct code.
- Avoid "magic numbers" and hardcoded strings by extracting them into configuration constants or Enums.

## 38. Clean Architecture Guidelines
- **Dependency Inversion:** Inner layers (Business Logic / Services) must not depend on outer layers (Framework / HTTP / DB).
- FastAPI Routers handle HTTP parsing and immediately pass Pydantic models to Services. Services dictate logic and invoke Repositories. Repositories exclusively handle SQLAlchemy complexities.

## 39. Project Development Workflow
1. Select task from Kanban board.
2. Checkout new feature branch from `dev`.
3. Write associated tests and functional implementation.
4. Open Pull Request targeting `dev`.
5. Ensure CI pipeline checks successfully pass (lint, test, build).
6. Resolve peer review feedback and receive approval.
7. Squash and merge into `dev`.

## 40. Definition of Done
- Code fulfills all documented acceptance criteria.
- Unit and Integration tests are written and passing.
- Linter and type-checker execution returns zero warnings/errors.
- Code has been reviewed and explicitly approved by a peer.
- The feature functions as intended in the staging environment.
- Relevant documentation (API specs, README, Module Docs) is fully updated.
