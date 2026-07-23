# Development Roadmap

This document outlines the strict, sub-phased execution plan for the E-Learning Platform. Each sub-phase must be executed exactly as instructed, stopping precisely where told before moving to the next.

## Phase 0: Project Setup

### Phase 0.0 — Project Setup Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 0: Project Setup.

Before writing any code:
1. Analyze the Project Setup requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 0.1 — Infrastructure Setup
Follow all project documents.

Execute the Infrastructure Setup tasks.

Stop after completion.

### Phase 0.2 — Backend Scaffolding
Follow all project documents.

Implement ONLY the frontend Backend Scaffolding.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 0.3 — Frontend Scaffolding
Follow all project documents.

Implement ONLY the frontend Frontend Scaffolding.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

## Phase 1: Authentication

### Phase 1.0 — Authentication Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 1: Authentication.

Before writing any code:
1. Analyze the Authentication requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 1.1 — Database
Follow all project documents.

Implement ONLY the database layer for Authentication.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 1.2 — Authentication Service
Follow all project documents.

Implement ONLY the Authentication Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 1.3 — Register API
Follow all project documents.

Implement ONLY the Register API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 1.4 — Email Verification API
Follow all project documents.

Implement ONLY Email Verification.

Requirements:
- Generate 6-digit OTP
- Store OTP securely
- OTP expiry (5 minutes)
- Send OTP using Resend
- Verify OTP
- Mark account verified
- Prevent OTP reuse
- Rate limiting
- Error handling
- Validation

Endpoints:
POST /auth/send-verification
POST /auth/verify-email
POST /auth/resend-otp

Stop after Email Verification module.
Generate API testing checklist.

### Phase 1.5 — Login API
Follow all project documents.

Implement ONLY the Login API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 1.6 — Frontend Authentication UI
Follow all project documents.

Implement ONLY the frontend Frontend Authentication UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 1.7 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 1.8 — Browser Testing
Follow all project documents.

Review the Authentication module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 1.9 — Final Review
Follow all project documents.

Review the Authentication module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 2: User Profile

### ✅ Phase 2.0 — User Profile Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 2: User Profile.

Before writing any code:
1. Analyze the User Profile requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### ✅ Phase 2.1 — Database
Follow all project documents.

Implement ONLY the database layer for User Profile.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### ✅ Phase 2.2 — Profile Service
Follow all project documents.

Implement ONLY the Profile Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 2.3 — Get Profile API
Follow all project documents.

Implement ONLY the Get Profile API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 2.4 — Update Profile API
Follow all project documents.

Implement ONLY the Update Profile API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 2.5 — Avatar Upload API
Follow all project documents.

Implement ONLY the Avatar Upload API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 2.6 — Change Password API
Follow all project documents.

Implement ONLY the Change Password API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 2.7 — Frontend UI
Follow all project documents.

Implement ONLY the frontend Frontend UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 2.8 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 2.9 — Browser Testing
Follow all project documents.

Review the User Profile module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 2.10 — Final Review
Follow all project documents.

Review the User Profile module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 3: Course Management

### Phase 3.0 — Course Management Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 3: Course Management.

Before writing any code:
1. Analyze the Course Management requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 3.1 — Database
Follow all project documents.

Implement ONLY the database layer for Course Management.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 3.2 — Course Service
Follow all project documents.

Implement ONLY the Course Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 3.3 — Course CRUD APIs
Follow all project documents.

Implement ONLY the Course CRUD APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 3.4 — Frontend Admin UI
Follow all project documents.

Implement ONLY the frontend Frontend Admin UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 3.5 — Frontend Public UI
Follow all project documents.

Implement ONLY the frontend Frontend Public UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 3.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 3.7 — Browser Testing
Follow all project documents.

Review the Course Management module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 3.8 — Final Review
Follow all project documents.

Review the Course Management module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 4: Lesson Management

### Phase 4.0 — Lesson Management Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 4: Lesson Management.

Before writing any code:
1. Analyze the Lesson Management requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 4.1 — Database
Follow all project documents.

Implement ONLY the database layer for Lesson Management.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 4.2 — Lesson Service
Follow all project documents.

Implement ONLY the Lesson Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 4.3 — Lesson CRUD APIs
Follow all project documents.

Implement ONLY the Lesson CRUD APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 4.4 — Frontend Curriculum Builder UI
Follow all project documents.

Implement ONLY the frontend Frontend Curriculum Builder UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 4.5 — Frontend Syllabus UI
Follow all project documents.

Implement ONLY the frontend Frontend Syllabus UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 4.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 4.7 — Browser Testing
Follow all project documents.

Review the Lesson Management module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 4.8 — Final Review
Follow all project documents.

Review the Lesson Management module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 5: Classroom

### Phase 5.0 — Classroom Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 5: Classroom.

Before writing any code:
1. Analyze the Classroom requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 5.1 — Database
Follow all project documents.

Implement ONLY the database layer for Classroom.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 5.2 — Progress Service
Follow all project documents.

Implement ONLY the Progress Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 5.3 — Classroom APIs
Follow all project documents.

Implement ONLY the Classroom APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 5.4 — Frontend Video Player UI
Follow all project documents.

Implement ONLY the frontend Frontend Video Player UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 5.5 — Frontend Progress UI
Follow all project documents.

Implement ONLY the frontend Frontend Progress UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 5.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 5.7 — Browser Testing
Follow all project documents.

Review the Classroom module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 5.8 — Final Review
Follow all project documents.

Review the Classroom module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 6: Subscription

### Phase 6.0 — Subscription Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 6: Subscription.

Before writing any code:
1. Analyze the Subscription requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 6.1 — Database
Follow all project documents.

Implement ONLY the database layer for Subscription.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 6.2 — Subscription Service
Follow all project documents.

Implement ONLY the Subscription Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 6.3 — Subscription APIs
Follow all project documents.

Implement ONLY the Subscription APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 6.4 — Frontend Pricing UI
Follow all project documents.

Implement ONLY the frontend Frontend Pricing UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 6.5 — Frontend Paywall UI
Follow all project documents.

Implement ONLY the frontend Frontend Paywall UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 6.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 6.7 — Browser Testing
Follow all project documents.

Review the Subscription module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 6.8 — Final Review
Follow all project documents.

Review the Subscription module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 7: Payment

### Phase 7.0 — Payment Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 7: Payment.

Before writing any code:
1. Analyze the Payment requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 7.1 — Database
Follow all project documents.

Implement ONLY the database layer for Payment.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 7.2 — Stripe Service
Follow all project documents.

Implement ONLY the Stripe Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 7.3 — Checkout API
Follow all project documents.

Implement ONLY the Checkout API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 7.4 — Webhook API
Follow all project documents.

Implement ONLY the Webhook API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 7.5 — Frontend Checkout UI
Follow all project documents.

Implement ONLY the frontend Frontend Checkout UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 7.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 7.7 — Browser Testing
Follow all project documents.

Review the Payment module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 7.8 — Final Review
Follow all project documents.

Review the Payment module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 8: Student Dashboard

### Phase 8.0 — Student Dashboard Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 8: Student Dashboard.

Before writing any code:
1. Analyze the Student Dashboard requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 8.1 — Database Queries
Follow all project documents.

Implement ONLY the database layer for Student Dashboard.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 8.2 — Dashboard Service
Follow all project documents.

Implement ONLY the Dashboard Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 8.3 — Dashboard API
Follow all project documents.

Implement ONLY the Dashboard API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 8.4 — Frontend Dashboard UI
Follow all project documents.

Implement ONLY the frontend Frontend Dashboard UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 8.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 8.6 — Browser Testing
Follow all project documents.

Review the Student Dashboard module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 8.7 — Final Review
Follow all project documents.

Review the Student Dashboard module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 9: Assignment

### Phase 9.0 — Assignment Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 9: Assignment.

Before writing any code:
1. Analyze the Assignment requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 9.1 — Database
Follow all project documents.

Implement ONLY the database layer for Assignment.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 9.2 — Assignment Service
Follow all project documents.

Implement ONLY the Assignment Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 9.3 — Assignment APIs
Follow all project documents.

Implement ONLY the Assignment APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 9.4 — Submission APIs
Follow all project documents.

Implement ONLY the Submission APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 9.5 — Frontend Assignment UI
Follow all project documents.

Implement ONLY the frontend Frontend Assignment UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 9.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 9.7 — Browser Testing
Follow all project documents.

Review the Assignment module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 9.8 — Final Review
Follow all project documents.

Review the Assignment module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 10: Certificate

### Phase 10.0 — Certificate Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 10: Certificate.

Before writing any code:
1. Analyze the Certificate requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 10.1 — Database
Follow all project documents.

Implement ONLY the database layer for Certificate.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 10.2 — PDF Generation Service
Follow all project documents.

Implement ONLY the PDF Generation Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 10.3 — Certificate APIs
Follow all project documents.

Implement ONLY the Certificate APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 10.4 — Frontend Certificate UI
Follow all project documents.

Implement ONLY the frontend Frontend Certificate UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 10.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 10.6 — Browser Testing
Follow all project documents.

Review the Certificate module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 10.7 — Final Review
Follow all project documents.

Review the Certificate module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 11: Reviews

### Phase 11.0 — Reviews Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 11: Reviews.

Before writing any code:
1. Analyze the Reviews requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 11.1 — Database
Follow all project documents.

Implement ONLY the database layer for Reviews.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 11.2 — Review Service
Follow all project documents.

Implement ONLY the Review Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 11.3 — Review APIs
Follow all project documents.

Implement ONLY the Review APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 11.4 — Frontend Review UI
Follow all project documents.

Implement ONLY the frontend Frontend Review UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 11.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 11.6 — Browser Testing
Follow all project documents.

Review the Reviews module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 11.7 — Final Review
Follow all project documents.

Review the Reviews module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 12: Coupon

### Phase 12.0 — Coupon Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 12: Coupon.

Before writing any code:
1. Analyze the Coupon requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 12.1 — Database
Follow all project documents.

Implement ONLY the database layer for Coupon.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 12.2 — Coupon Service
Follow all project documents.

Implement ONLY the Coupon Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 12.3 — Validation API
Follow all project documents.

Implement ONLY the Validation API.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 12.4 — Frontend Coupon UI
Follow all project documents.

Implement ONLY the frontend Frontend Coupon UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 12.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 12.6 — Browser Testing
Follow all project documents.

Review the Coupon module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 12.7 — Final Review
Follow all project documents.

Review the Coupon module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 13: Notifications

### Phase 13.0 — Notifications Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 13: Notifications.

Before writing any code:
1. Analyze the Notifications requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 13.1 — Database
Follow all project documents.

Implement ONLY the database layer for Notifications.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 13.2 — Email Service
Follow all project documents.

Implement ONLY the Email Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 13.3 — Notification APIs
Follow all project documents.

Implement ONLY the Notification APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 13.4 — Frontend Notification Bell UI
Follow all project documents.

Implement ONLY the frontend Frontend Notification Bell UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 13.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 13.6 — Browser Testing
Follow all project documents.

Review the Notifications module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 13.7 — Final Review
Follow all project documents.

Review the Notifications module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 14: Admin Panel

### Phase 14.0 — Admin Panel Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 14: Admin Panel.

Before writing any code:
1. Analyze the Admin Panel requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 14.1 — Database Aggregations
Follow all project documents.

Implement ONLY the database layer for Admin Panel.

Tasks:
- Configure SQLAlchemy models.
- Create Alembic migration.
- Add database indexes.
- Add constraints.
- Create timestamps.
- Verify migration works.

Do NOT implement APIs.
Stop after the database layer.
Generate a testing checklist.

### Phase 14.2 — Analytics Service
Follow all project documents.

Implement ONLY the Analytics Service.

Requirements:
- Core business logic.
- Validation.
- Error handling.

Do NOT create API routes.
Do NOT create frontend.
Stop after the service layer.
Generate unit testing checklist.

### Phase 14.3 — Admin APIs
Follow all project documents.

Implement ONLY the Admin APIs.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 14.4 — Frontend Admin Layout
Follow all project documents.

Implement ONLY the frontend Frontend Admin Layout.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 14.5 — Frontend Data Tables
Follow all project documents.

Implement ONLY the frontend Frontend Data Tables.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.

Do not connect APIs.
Stop after frontend UI.

### Phase 14.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Request Schema.
- Response Schema.
- Validation.
- Connect to Service layer.
- Proper HTTP status codes.
- Error handling.

Do not implement frontend.
Stop after API implementation.
Generate API testing checklist.

### Phase 14.7 — Browser Testing
Follow all project documents.

Review the Admin Panel module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 14.8 — Final Review
Follow all project documents.

Review the Admin Panel module.

Check:
- Architecture
- Folder Structure
- Security
- Validation
- Performance
- Clean Code
- SOLID
- DRY
- API Design
- Error Handling

Fix every issue found.
Generate a final report.
If everything is correct, mark Phase complete.

## Phase 15: Testing & Deployment

### Phase 15.0 — Testing & Deployment Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 15: Testing & Deployment.

Before writing any code:
1. Analyze the Testing & Deployment requirements.
2. List all functional requirements.
3. List all API endpoints.
4. Design the database schema.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase 15.1 — Backend Pytest
Follow all project documents.

Execute the Backend Pytest tasks.

Stop after completion.

### Phase 15.2 — Frontend Vitest
Follow all project documents.

Execute the Frontend Vitest tasks.

Stop after completion.

### Phase 15.3 — E2E Playwright
Follow all project documents.

Execute the E2E Playwright tasks.

Stop after completion.

### Phase 15.4 — Production DB Provisioning
Follow all project documents.

Execute the Production DB Provisioning tasks.

Stop after completion.

### Phase 15.5 — Backend Deployment
Follow all project documents.

Execute the Backend Deployment tasks.

Stop after completion.

### Phase 15.6 — Frontend Deployment
Follow all project documents.

Execute the Frontend Deployment tasks.

Stop after completion.

