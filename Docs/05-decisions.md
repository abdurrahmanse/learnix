# Architectural Decisions (ADR)

This document serves as an Architecture Decision Record (ADR) for the project. It tracks the major technical decisions made for the platform, the alternatives considered, and the rationale behind *why* these decisions were finalized.

## 1. Decoupled Architecture (Next.js + FastAPI)
**Decision:** Separate the frontend and backend into two distinct applications communicating via a RESTful JSON API, rather than utilizing a monolith (e.g., Next.js full-stack with Server Actions, or Django with server-rendered templates).
**Rationale:**
- **Scalability:** The backend and frontend can be scaled independently based on load.
- **Domain Strengths:** Python (FastAPI) is ideal for complex backend logic and data processing, while Next.js provides unmatched React features and SEO capabilities.
- **Future-proofing:** An independent REST API guarantees that building dedicated mobile apps (iOS/Android) in the future will not require a backend rewrite.

## 2. Database Engine (PostgreSQL via Neon)
**Decision:** Use PostgreSQL as the primary database, hosted on Neon.
**Rationale:**
- **Relational Integrity:** E-learning platforms inherently possess highly relational data models (Users -> Enrollments -> Courses -> Sections -> Lessons -> Progress). SQL provides necessary ACID guarantees.
- **Modern Capabilities:** Neon provides serverless scaling and database branching, which integrates seamlessly into modern CI/CD testing workflows.

## 3. Asynchronous ORM (SQLAlchemy 2.0)
**Decision:** Utilize the asynchronous execution capabilities of SQLAlchemy (`asyncpg`).
**Rationale:**
- **Performance:** Non-blocking I/O is critical for FastAPI to achieve high concurrency. This prevents the event loop from being blocked during heavy database queries (e.g., compiling complex student dashboards or progress analytics).

## 4. Stateless Authentication (JWT + HttpOnly Cookies)
**Decision:** Implement authentication using short-lived Access Tokens (JWT) passed via headers, paired with long-lived Refresh Tokens stored in secure, `HttpOnly` cookies.
**Rationale:**
- **Security:** `HttpOnly` cookies prevent XSS attacks from stealing the long-lived refresh token.
- **Scalability:** Stateless JWTs eliminate the immediate need for centralized session storage (like Redis) during the MVP phase, drastically reducing infrastructure complexity.

## 5. Media Handling (S3 / R2 with Pre-signed URLs)
**Decision:** Store all binary media (user avatars, course PDFs, and video files) in a scalable cloud object store like AWS S3 or Cloudflare R2. Uploads will be handled via Pre-signed URLs.
**Rationale:**
- **Backend Relief:** Uploading large video files directly through the FastAPI backend would block workers and consume massive bandwidth. Pre-signed URLs allow the client to upload directly to the storage bucket securely.

## 6. Frontend UI Framework (Tailwind CSS + shadcn/ui)
**Decision:** Utilize Tailwind CSS paired with the shadcn/ui component ecosystem.
**Rationale:**
- **Development Velocity:** Provides a highly customizable, strictly accessible, and unopinionated baseline of UI components without the bloat of traditional libraries (e.g., Material UI or Bootstrap).
- **Consistency:** Enforces a cohesive design system across both the marketing pages and the complex, data-heavy dashboards.

## 7. Frontend State Management (React Query + Zustand)
**Decision:** Use TanStack React Query for all server-state (API fetching/caching) and Zustand for global client-state.
**Rationale:**
- **Separation of State Types:** React Query perfectly handles API caching, background updates, and cache invalidation automatically.
- **Simplicity:** Zustand provides a minimalist, boilerplate-free API for the very small amount of purely global UI state needed (e.g., Theme toggling, Mobile sidebar state), avoiding the heavy overhead of Redux.

## 8. Transactional Emails (Resend)
**Decision:** Utilize Resend for all transactional emails (Welcome emails, Password Resets, Purchase Receipts).
**Rationale:**
- **Developer Experience:** Resend integrates perfectly with React Email, allowing developers to build type-safe, component-driven email templates using standard React and Tailwind paradigms rather than archaic HTML table structures.
