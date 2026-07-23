# Development Roadmap

This document outlines the logical, phased execution plan for the E-Learning Platform, from initial setup to production deployment. Each phase is constructed to ensure dependencies are met before moving to subsequent features, adhering to the Project Constitution and AI Development Rules.

---

## Phase 0: Project Setup

**Objective:** Initialize the monorepo or dual-repo structure, configure environments, and establish the foundational CI/CD pipelines.
**Why this phase is placed here:** Foundational scaffolding is required before any feature development can occur.
**What must be completed before starting:** Project Constitution and Architecture specifications approved.
**What cannot start before this phase:** All subsequent development phases.

### Tasks Breakdown
- **Modules:** Infrastructure, Configuration.
- **Database Tasks:** Provision Neon PostgreSQL instance, configure Alembic for migrations, create base `Base` declarative model.
- **Backend Tasks:** Initialize FastAPI project, configure CORS, setup dependency injection for DB sessions, setup `pydantic-settings`.
- **API Tasks:** Create health-check (`/api/health`) endpoint.
- **Frontend Tasks:** Initialize Next.js (App Router) project, install Tailwind CSS and shadcn/ui, configure standard layouts.
- **Testing Tasks:** Setup Pytest (backend) and Vitest (frontend) environments. Ensure dummy tests pass.
- **Dependencies:** None.

### Success & Completion
- **Success Criteria:** Both backend and frontend servers run locally. Health endpoint returns 200 OK. Database connects successfully.
- **Definition of Done:** Repositories initialized, CI/CD basic linting pipelines running, environment variable templates (`.env.example`) documented.

---

## Phase 1: Authentication

**Objective:** Implement secure user registration, login, and session management using JWTs and HTTP-only cookies.
**Why this phase is placed here:** Identity is the core requirement for personalization, purchasing, and roles.
**What must be completed before starting:** Phase 0.
**What cannot start before this phase:** Any user-specific or protected modules (Profiles, Subscriptions, Courses).

### Tasks Breakdown
- **Modules:** Auth, User Identity.
- **Database Tasks:** Create `users` table with email, hashed password, and role columns. Generate initial Alembic migration.
- **Backend Tasks:** Implement Passlib for password hashing, configure PyJWT for token generation, create authentication services.
- **API Tasks:** Build `/auth/register`, `/auth/login`, `/auth/refresh`, and `/auth/logout` endpoints.
- **Frontend Tasks:** Build Login and Registration forms using React Hook Form and Zod. Create Auth context/store to manage global user state. Implement Protected Route wrappers.
- **Testing Tasks:** Unit test JWT generation, hash validation. Integration test registration and login APIs. E2E test the login flow.
- **Dependencies:** Phase 0.

### Success & Completion
- **Success Criteria:** Users can securely register, log in, maintain a session across page reloads via refresh tokens, and log out.
- **Definition of Done:** `users` table exists. APIs return correct JWTs. Frontend properly restricts access to protected routes based on Auth state.

---

## Phase 2: User Profile

**Objective:** Allow users to manage their personal information, update passwords, and upload avatars.
**Why this phase is placed here:** Extends the Auth module to provide a complete identity management suite before complex user interactions occur.
**What must be completed before starting:** Phase 1 (Authentication).
**What cannot start before this phase:** Student Dashboard personalization, Review attribution.

### Tasks Breakdown
- **Modules:** Profile Management.
- **Database Tasks:** Expand `users` table or create `profiles` table (if 1:1 mapped) for avatars and bios.
- **Backend Tasks:** Integrate AWS S3 / Cloudflare R2 SDK for avatar uploads via pre-signed URLs.
- **API Tasks:** Build `/users/me` (GET/PATCH), `/users/me/avatar`, and password update endpoints.
- **Frontend Tasks:** Create Profile settings page, avatar upload component, and password change forms.
- **Testing Tasks:** Test pre-signed URL generation. Test profile data validation rules.
- **Dependencies:** Phase 1, S3/R2 Bucket provisioning.

### Success & Completion
- **Success Criteria:** Users can view and modify their profile details and upload a profile picture.
- **Definition of Done:** Avatar URLs correctly save to the DB, frontend reflects updated state immediately via TanStack Query cache invalidation.

---

## Phase 3: Course Management

**Objective:** Enable Admins/Instructors to create, edit, and publish course metadata.
**Why this phase is placed here:** Core domain entity. Lessons, subscriptions, and payments all hinge on the existence of Courses.
**What must be completed before starting:** Phase 1.
**What cannot start before this phase:** Lesson Management, Classroom, Payments.

### Tasks Breakdown
- **Modules:** Course CRUD.
- **Database Tasks:** Create `courses` table (title, slug, description, price, published status).
- **Backend Tasks:** Create Course services and repositories. Implement slug generation and uniqueness validation.
- **API Tasks:** Build `/courses` (GET - public), `/courses` (POST - admin), `/courses/{id}` (PATCH, DELETE - admin).
- **Frontend Tasks:** Create Public Course Catalog page, Course Details page, and Admin Course creation forms.
- **Testing Tasks:** Unit test slug uniqueness logic. Integration test Admin-only RBAC protection on POST/PATCH endpoints.
- **Dependencies:** Phase 1.

### Success & Completion
- **Success Criteria:** Admins can draft and publish courses. Guests can view published courses in the catalog.
- **Definition of Done:** `courses` table migrated. Frontend accurately lists courses. RBAC correctly blocks non-admins from creating courses.

---

## Phase 4: Lesson Management

**Objective:** Allow Instructors to attach sections, lessons, and resources to Courses.
**Why this phase is placed here:** Courses are empty shells without structured content.
**What must be completed before starting:** Phase 3 (Course Management).
**What cannot start before this phase:** Classroom, Assignment, Student Progress Tracking.

### Tasks Breakdown
- **Modules:** Curriculum Builder.
- **Database Tasks:** Create `sections`, `lessons`, and `resources` tables with foreign keys cascading from `courses`.
- **Backend Tasks:** Implement hierarchical data retrieval logic (Course -> Sections -> Lessons). Integrate video streaming CDN webhooks if applicable.
- **API Tasks:** Build `/courses/{id}/sections` and `/sections/{id}/lessons` CRUD endpoints. 
- **Frontend Tasks:** Build Admin curriculum builder (drag-and-drop ordering). Build public-facing course syllabus accordion.
- **Testing Tasks:** Test cascading deletes (deleting a section deletes its lessons).
- **Dependencies:** Phase 3.

### Success & Completion
- **Success Criteria:** A course can be populated with an ordered list of sections and lessons containing video URLs.
- **Definition of Done:** Curriculum hierarchal structure is cleanly retrievable via API and successfully rendered on the Course Details page.

---

## Phase 5: Classroom

**Objective:** The core learning environment where students consume lesson content (video/text) and track progress.
**Why this phase is placed here:** Requires Courses and Lessons to exist. Needs to exist before Subscriptions so we know what is being unlocked.
**What must be completed before starting:** Phase 4.
**What cannot start before this phase:** Student Dashboard (Continue Learning).

### Tasks Breakdown
- **Modules:** Video Player, Progress Tracking.
- **Database Tasks:** Create `progress` table to track completed lessons and watch positions.
- **Backend Tasks:** Create progress update services. Logic to determine if a user has access to a lesson (Preview vs Locked).
- **API Tasks:** Build `/lessons/{id}` (fetching content), `/progress/{lesson_id}` (POST/PATCH).
- **Frontend Tasks:** Build the Classroom Layout (Sidebar with curriculum, main area with Video Player). Implement progress checkboxes.
- **Testing Tasks:** Test access control (unauthorized users cannot fetch locked lesson content).
- **Dependencies:** Phase 4.

### Success & Completion
- **Success Criteria:** Authorized users can watch videos and mark them as complete.
- **Definition of Done:** Progress is saved to the database. The frontend correctly updates completion badges in the sidebar.

---

## Phase 6: Subscription

**Objective:** Implement subscription plans (Monthly/Annual) to grant access to the entire platform or specific tiers.
**Why this phase is placed here:** Access control mechanisms must be in place before we integrate the actual payment gateway.
**What must be completed before starting:** Phase 1, Phase 5.
**What cannot start before this phase:** Payment gateway integration.

### Tasks Breakdown
- **Modules:** Subscription Logic.
- **Database Tasks:** Create `subscriptions` table (plan type, status, expiry date).
- **Backend Tasks:** Implement logic to bypass course-level locks if a user has an active subscription.
- **API Tasks:** Build endpoints to check active subscription status.
- **Frontend Tasks:** Build Pricing page comparing plans. Update Classroom to check for global subscription state before locking content.
- **Testing Tasks:** Unit test subscription expiration logic. Test content access based on active vs expired states.
- **Dependencies:** Phase 1.

### Success & Completion
- **Success Criteria:** The system accurately identifies who is a subscriber and conditionally grants access to premium content.
- **Definition of Done:** `subscriptions` table is active; RBAC/Middleware checks subscription status during lesson data retrieval.

---

## Phase 7: Payment

**Objective:** Integrate Stripe/Paddle to process actual transactions for Subscriptions or single Course Purchases.
**Why this phase is placed here:** Monetization requires the database structures for Subscriptions and Courses to already be stable.
**What must be completed before starting:** Phase 3, Phase 6.
**What cannot start before this phase:** Checkout flows, Coupons.

### Tasks Breakdown
- **Modules:** Stripe Integration, Webhooks.
- **Database Tasks:** Create `payments` and `enrollments` tables.
- **Backend Tasks:** Integrate Stripe Python SDK. Build secure webhook handlers to listen for `checkout.session.completed`.
- **API Tasks:** Build `/payments/create-checkout-session` and `/payments/webhook`.
- **Frontend Tasks:** Implement Stripe Checkout redirect. Build Success and Cancel pages.
- **Testing Tasks:** Stripe CLI webhook testing. E2E test successful and failed payment flows.
- **Dependencies:** Phase 6, Stripe Account.

### Success & Completion
- **Success Criteria:** Users can pay for a course or subscription, and their account is automatically provisioned upon successful payment.
- **Definition of Done:** Webhooks successfully parse Stripe events and insert records into `enrollments` and `subscriptions` tables without manual intervention.

---

## Phase 8: Student Dashboard

**Objective:** Provide a personalized hub for students to view their enrolled courses, progress, and active subscriptions.
**Why this phase is placed here:** Depends entirely on Enrollments, Progress, and Subscriptions being operational.
**What must be completed before starting:** Phase 5, Phase 7.
**What cannot start before this phase:** Certificates.

### Tasks Breakdown
- **Modules:** Student Analytics, Enrolled Courses.
- **Database Tasks:** Optimize queries for joining `enrollments`, `courses`, and `progress`.
- **Backend Tasks:** Aggregate progress percentages per enrolled course.
- **API Tasks:** Build `/users/me/dashboard` data aggregator endpoint.
- **Frontend Tasks:** Build Dashboard UI, "Continue Learning" widget, and active subscription status banner.
- **Testing Tasks:** Test aggregation math (ensure progress % doesn't exceed 100).
- **Dependencies:** Phase 5, Phase 7.

### Success & Completion
- **Success Criteria:** Students see an accurate reflection of what they own and where they left off.
- **Definition of Done:** Dashboard heavily utilizes TanStack Query for fast data fetching and accurately routes users back to their last unwatched lesson.

---

## Phase 9: Assignment

**Objective:** Allow instructors to attach assignments to lessons, and students to submit them for grading.
**Why this phase is placed here:** An extension of the Classroom experience.
**What must be completed before starting:** Phase 5 (Classroom).
**What cannot start before this phase:** Advanced Admin Grading flows.

### Tasks Breakdown
- **Modules:** Assignments, Submissions.
- **Database Tasks:** Create `assignments` and `submissions` tables.
- **Backend Tasks:** Handle file uploads for submissions via S3/R2.
- **API Tasks:** Build `/lessons/{id}/assignments` and `/assignments/{id}/submit`.
- **Frontend Tasks:** Build Assignment UI in the Classroom. Build file dropzone for students.
- **Testing Tasks:** Test file type validation (preventing executable uploads).
- **Dependencies:** Phase 5.

### Success & Completion
- **Success Criteria:** Students can upload homework, and instructors can view it.
- **Definition of Done:** Submissions are securely stored and linked to both the user and the lesson.

---

## Phase 10: Certificate

**Objective:** Auto-generate PDF certificates when a student hits 100% completion on a course.
**Why this phase is placed here:** Requires granular progress tracking to exist.
**What must be completed before starting:** Phase 5 (Progress), Phase 8.
**What cannot start before this phase:** None.

### Tasks Breakdown
- **Modules:** PDF Generation.
- **Database Tasks:** Create `certificates` table (verification hash, issue date).
- **Backend Tasks:** Integrate a PDF generation library (e.g., ReportLab or Playwright HTML-to-PDF).
- **API Tasks:** Build `/certificates/generate` (triggered on 100% completion) and `/certificates/{hash}` (public verification).
- **Frontend Tasks:** Build Certificate display page and download buttons in the Student Dashboard.
- **Testing Tasks:** Test completion triggers. Ensure certificates are immutable once generated.
- **Dependencies:** Phase 5, Phase 8.

### Success & Completion
- **Success Criteria:** Students receive a downloadable PDF upon finishing all lessons in an enrolled course.
- **Definition of Done:** Certificate API generates PDFs dynamically based on user and course data.

---

## Phase 11: Reviews

**Objective:** Allow students to leave ratings (1-5 stars) and textual reviews on completed or enrolled courses.
**Why this phase is placed here:** Enhances course catalog trust. Requires Enrollments to prevent spam reviews.
**What must be completed before starting:** Phase 7 (Enrollments).
**What cannot start before this phase:** None.

### Tasks Breakdown
- **Modules:** Rating System.
- **Database Tasks:** Create `reviews` table with `user_id` and `course_id` unique constraints. Add aggregate `average_rating` to `courses` table.
- **Backend Tasks:** Implement review submission logic verifying the user is actually enrolled.
- **API Tasks:** Build `/courses/{id}/reviews` (GET, POST).
- **Frontend Tasks:** Build Star Rating component. Integrate reviews into the Course Details page.
- **Testing Tasks:** Ensure non-enrolled users receive a 403 Forbidden when attempting to review.
- **Dependencies:** Phase 7.

### Success & Completion
- **Success Criteria:** Authentic reviews populate the course pages, influencing average ratings.
- **Definition of Done:** Database triggers or background tasks successfully recalculate course average ratings upon new review insertions.

---

## Phase 12: Coupon

**Objective:** Enable Admins to create discount codes (percentage or fixed amount) for checkout.
**Why this phase is placed here:** Modifies the Payment phase logic.
**What must be completed before starting:** Phase 7 (Payment).
**What cannot start before this phase:** None.

### Tasks Breakdown
- **Modules:** Discounts.
- **Database Tasks:** Create `coupons` table (code, discount_type, value, max_uses, expires_at).
- **Backend Tasks:** Sync coupons with Stripe API or handle logic locally before generating the checkout session.
- **API Tasks:** Build `/coupons/validate` endpoint for the frontend.
- **Frontend Tasks:** Add "Apply Coupon" input on the checkout/pricing page.
- **Testing Tasks:** Test edge cases (expired coupons, over-usage).
- **Dependencies:** Phase 7.

### Success & Completion
- **Success Criteria:** Users can apply valid promo codes to reduce their cart total.
- **Definition of Done:** Stripe Checkout accurately reflects the discounted price utilizing the applied coupon ID.

---

## Phase 13: Notifications

**Objective:** Alert users of system events (payment success, new course published, assignment graded).
**Why this phase is placed here:** Touches almost every other module; acts as the connective communication tissue.
**What must be completed before starting:** Phase 9 (Assignments), Phase 7 (Payments).
**What cannot start before this phase:** None.

### Tasks Breakdown
- **Modules:** In-App Alerts, Emails.
- **Database Tasks:** Create `notifications` table (user_id, type, message, is_read).
- **Backend Tasks:** Implement Resend SDK for transactional emails. Hook into existing services to trigger notifications.
- **API Tasks:** Build `/notifications` (GET, PATCH mark-as-read).
- **Frontend Tasks:** Build Notification Bell and dropdown in the Navbar.
- **Testing Tasks:** Unit test email dispatch logic (mocked).
- **Dependencies:** Resend API Key.

### Success & Completion
- **Success Criteria:** Users receive contextual alerts in-app and via email for critical events.
- **Definition of Done:** Notification state synchronizes accurately (marking as read updates the badge count globally).

---

## Phase 14: Admin Panel

**Objective:** A centralized CMS and reporting dashboard for platform owners.
**Why this phase is placed here:** While CRUD for courses was built early, the *holistic* admin panel requires all data to exist (Payments, Users, Reviews).
**What must be completed before starting:** All previous phases.
**What cannot start before this phase:** Final Deployment.

### Tasks Breakdown
- **Modules:** Admin Dashboard, Reporting.
- **Database Tasks:** Complex aggregations for MRR (Monthly Recurring Revenue) and user growth.
- **Backend Tasks:** Build highly restricted analytics services.
- **API Tasks:** Build `/admin/analytics`, `/admin/transactions`.
- **Frontend Tasks:** Build Admin Layout, Data Tables, and Charts (e.g., Recharts) for financial insights.
- **Testing Tasks:** Strict RBAC verification on all `/admin/*` routes.
- **Dependencies:** Phase 1-13.

### Success & Completion
- **Success Criteria:** Platform owners can view financial health, manage all users, and moderate content from a single interface.
- **Definition of Done:** Admin UI is fully functional, isolated from student views, and strictly secured.

---

## Phase 15: Testing

**Objective:** Comprehensive Quality Assurance, Load Testing, and Security Auditing prior to launch.
**Why this phase is placed here:** Code must be feature-complete before final QA.
**What must be completed before starting:** Phases 1-14.
**What cannot start before this phase:** Deployment.

### Tasks Breakdown
- **Modules:** QA, Security.
- **Backend Tasks:** Run full Pytest suite. Ensure 80%+ coverage. Address any N+1 queries.
- **Frontend Tasks:** Run Lighthouse audits for accessibility and performance.
- **Testing Tasks:** Execute E2E Playwright test suite against a staging database.
- **Dependencies:** Feature freeze.

### Success & Completion
- **Success Criteria:** Zero critical bugs. Application passes OWASP Top 10 basic checks.
- **Definition of Done:** All test suites pass in the staging CI pipeline.

---

## Phase 16: Deployment

**Objective:** Push the E-Learning platform to production infrastructure.
**Why this phase is placed here:** The final step of the SDLC.
**What must be completed before starting:** Phase 15 (Testing).
**What cannot start before this phase:** N/A (Project Complete).

### Tasks Breakdown
- **Modules:** DevOps.
- **Database Tasks:** Provision Production Neon DB. Apply production migrations.
- **Backend Tasks:** Deploy FastAPI container (e.g., to AWS ECS, Render, or Railway).
- **Frontend Tasks:** Deploy Next.js app (e.g., to Vercel).
- **Dependencies:** Production Domain Names, SSL Certificates, Production API Keys (Stripe Live).

### Success & Completion
- **Success Criteria:** End-users can access the platform, register, pay, and consume content on the live domain.
- **Definition of Done:** Application is fully live, monitorable via logs, and accessible globally.
