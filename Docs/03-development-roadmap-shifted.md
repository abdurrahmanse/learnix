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
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

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
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 1.7 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
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

## Phase 3: User Profile

### ✅ Phase 3.0 — User Profile Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 3: User Profile.

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

### ✅ Phase 3.1 — Database
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

### ✅ Phase 3.2 — Profile Service
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

### ✅ Phase 3.3 — Get Profile API
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

### ✅ Phase 3.4 — Update Profile API
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

### ✅ Phase 3.5 — Avatar Upload API
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

### ✅ Phase 3.6 — Change Password API
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

### ✅ Phase 3.7 — Frontend UI
Follow all project documents.

Implement ONLY the frontend Frontend UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### ✅ Phase 3.8 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### ✅ Phase 3.9 — Browser Testing
Follow all project documents.

Review the User Profile module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### ✅ Phase 3.10 — Final Review
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

## Phase 4: Course Management

### Phase 4.0 — Course Management Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 4: Course Management.

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

### Phase 4.1 — Database
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

### Phase 4.2 — Course Service
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

### Phase 4.3 — Course CRUD APIs
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

### Phase 4.4 — Frontend Admin UI
Follow all project documents.

Implement ONLY the frontend Frontend Admin UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 4.5 — Frontend Public UI
Follow all project documents.

Implement ONLY the frontend Frontend Public UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 4.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 4.7 — Browser Testing
Follow all project documents.

Review the Course Management module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 4.8 — Final Review
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

## Phase 5: Lesson Management

### Phase 5.0 — Lesson Management Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 5: Lesson Management.

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

### Phase 5.1 — Database
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

### Phase 5.2 — Lesson Service
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

### Phase 5.3 — Lesson CRUD APIs
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

### Phase 5.4 — Frontend Curriculum Builder UI
Follow all project documents.

Implement ONLY the frontend Frontend Curriculum Builder UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 5.5 — Frontend Syllabus UI
Follow all project documents.

Implement ONLY the frontend Frontend Syllabus UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 5.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 5.7 — Browser Testing
Follow all project documents.

Review the Lesson Management module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 5.8 — Final Review
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

## Phase 6: Classroom

### Phase 6.0 — Classroom Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 6: Classroom.

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

### Phase 6.1 — Database
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

### Phase 6.2 — Progress Service
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

### Phase 6.3 — Classroom APIs
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

### Phase 6.4 — Frontend Video Player UI
Follow all project documents.

Implement ONLY the frontend Frontend Video Player UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 6.5 — Frontend Progress UI
Follow all project documents.

Implement ONLY the frontend Frontend Progress UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 6.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 6.7 — Browser Testing
Follow all project documents.

Review the Classroom module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 6.8 — Final Review
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

## Phase 7: Subscription

### Phase 7.0 — Subscription Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 7: Subscription.

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

### Phase 7.1 — Database
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

### Phase 7.2 — Subscription Service
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

### Phase 7.3 — Subscription APIs
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

### Phase 7.4 — Frontend Pricing UI
Follow all project documents.

Implement ONLY the frontend Frontend Pricing UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 7.5 — Frontend Paywall UI
Follow all project documents.

Implement ONLY the frontend Frontend Paywall UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 7.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 7.7 — Browser Testing
Follow all project documents.

Review the Subscription module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 7.8 — Final Review
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

## Phase 8: Payment

### Phase 8.0 — Payment Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 8: Payment.

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

### Phase 8.1 — Database
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

### Phase 8.2 — Stripe Service
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

### Phase 8.3 — Checkout API
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

### Phase 8.4 — Webhook API
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

### Phase 8.5 — Frontend Checkout UI
Follow all project documents.

Implement ONLY the frontend Frontend Checkout UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 8.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 8.7 — Browser Testing
Follow all project documents.

Review the Payment module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 8.8 — Final Review
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

## Phase 9: Student Dashboard

### Phase 9.0 — Student Dashboard Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 9: Student Dashboard.

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

### Phase 9.1 — Database Queries
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

### Phase 9.2 — Dashboard Service
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

### Phase 9.3 — Dashboard API
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

### Phase 9.4 — Frontend Dashboard UI
Follow all project documents.

Implement ONLY the frontend Frontend Dashboard UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 9.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 9.6 — Browser Testing
Follow all project documents.

Review the Student Dashboard module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 9.7 — Final Review
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

## Phase 10: Assignment

### Phase 10.0 — Assignment Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 10: Assignment.

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

### Phase 10.1 — Database
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

### Phase 10.2 — Assignment Service
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

### Phase 10.3 — Assignment APIs
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

### Phase 10.4 — Submission APIs
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

### Phase 10.5 — Frontend Assignment UI
Follow all project documents.

Implement ONLY the frontend Frontend Assignment UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 10.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 10.7 — Browser Testing
Follow all project documents.

Review the Assignment module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 10.8 — Final Review
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

## Phase 11: Certificate

### Phase 11.0 — Certificate Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 11: Certificate.

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

### Phase 11.1 — Database
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

### Phase 11.2 — PDF Generation Service
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

### Phase 11.3 — Certificate APIs
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

### Phase 11.4 — Frontend Certificate UI
Follow all project documents.

Implement ONLY the frontend Frontend Certificate UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 11.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 11.6 — Browser Testing
Follow all project documents.

Review the Certificate module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 11.7 — Final Review
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

## Phase 12: Reviews

### Phase 12.0 — Reviews Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 12: Reviews.

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

### Phase 12.1 — Database
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

### Phase 12.2 — Review Service
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

### Phase 12.3 — Review APIs
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

### Phase 12.4 — Frontend Review UI
Follow all project documents.

Implement ONLY the frontend Frontend Review UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 12.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 12.6 — Browser Testing
Follow all project documents.

Review the Reviews module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 12.7 — Final Review
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

## Phase 13: Coupon

### Phase 13.0 — Coupon Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 13: Coupon.

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

### Phase 13.1 — Database
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

### Phase 13.2 — Coupon Service
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

### Phase 13.3 — Validation API
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

### Phase 13.4 — Frontend Coupon UI
Follow all project documents.

Implement ONLY the frontend Frontend Coupon UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 13.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 13.6 — Browser Testing
Follow all project documents.

Review the Coupon module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 13.7 — Final Review
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

## Phase 14: Notifications

### Phase 14.0 — Notifications Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 14: Notifications.

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

### Phase 14.1 — Database
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

### Phase 14.2 — Email Service
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

### Phase 14.3 — Notification APIs
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

### Phase 14.4 — Frontend Notification Bell UI
Follow all project documents.

Implement ONLY the frontend Frontend Notification Bell UI.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 14.5 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 14.6 — Browser Testing
Follow all project documents.

Review the Notifications module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 14.7 — Final Review
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

## Phase 15: Admin Panel

### Phase 15.0 — Admin Panel Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 15: Admin Panel.

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

### Phase 15.1 — Database Aggregations
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

### Phase 15.2 — Analytics Service
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

### Phase 15.3 — Admin APIs
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

### Phase 15.4 — Frontend Admin Layout
Follow all project documents.

Implement ONLY the frontend Frontend Admin Layout.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 15.5 — Frontend Data Tables
Follow all project documents.

Implement ONLY the frontend Frontend Data Tables.

Requirements:
- React components.
- Tailwind styling.
- Loading state.
- Error state.
- Success state.
- Responsive UI.
- Adhere to Phase X Folder Structure and Shared Components standards.
- Enforce strict TypeScript, ESLint compliance, and Code Optimization.
- Apply Phase X Forms & Validation standardization.

Do not connect APIs.
Stop after frontend UI.

### Phase 15.6 — API Integration
Follow all project documents.

Implement ONLY the API Integration.

Requirements:
- Connect frontend UI to backend APIs.
- Apply Phase X TanStack Query and Axios API layer standardization.
- Integrate Zustand State Management for data flow.
- Handle loading, success, and error states globally.

Implement frontend API connection logic.
Stop after API integration is verified.
Generate API testing checklist.

### Phase 15.7 — Browser Testing
Follow all project documents.

Review the Admin Panel module.

Generate a complete browser testing checklist.

Include all happy paths and error states.

Wait for my confirmation before continuing.

### Phase 15.8 — Final Review
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

## Phase 16: Testing & Deployment

### Phase 16.0 — Testing & Deployment Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase 16: Testing & Deployment.

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

### Phase 16.1 — Backend Pytest
Follow all project documents.

Execute the Backend Pytest tasks.

Stop after completion.

### Phase 16.2 — Frontend Vitest
Follow all project documents.

Execute the Frontend Vitest tasks.

Stop after completion.

### Phase 16.3 — E2E Playwright
Follow all project documents.

Execute the E2E Playwright tasks.

Stop after completion.

### Phase 16.4 — Production DB Provisioning
Follow all project documents.

Execute the Production DB Provisioning tasks.

Stop after completion.

### Phase 16.5 — Backend Deployment
Follow all project documents.

Execute the Backend Deployment tasks.

Stop after completion.

### Phase 16.6 — Frontend Deployment
Follow all project documents.

Execute the Frontend Deployment tasks.

Stop after completion.

---------------------------------

## Phase X: Frontend Refactoring & Standardization

### Phase X.0 — Frontend Refactoring Planning
Follow the Project Constitution.
Follow the AI Development Rules.
Follow the Development Roadmap.

We are starting Phase X: Frontend Refactoring & Standardization.

Before writing any code:
1. Analyze the Frontend Refactoring requirements.
2. List all refactoring objectives.
3. List all affected frontend architectures and files.
4. Design the state management architecture.
5. Explain the data flow.
6. Explain the folder structure.
7. List every file that will be modified or created.
8. Explain dependencies between files.
9. Create an implementation plan.

Do NOT write any code.
Stop after the planning document.

### Phase X.1 — Frontend Code Audit
Follow all project documents.

Implement ONLY the Frontend Code Audit.

Tasks:
- Analyze existing components, hooks, and utilities.
- Identify code duplication and anti-patterns.
- Identify inconsistent API client usage.
- Document state management inconsistencies.
- Review current folder structure against standards.

Do NOT write any code.
Stop after the audit.
Generate an audit report and checklist.

### Phase X.2 — API Layer Standardization
Follow all project documents.

Implement ONLY the API Layer Standardization.

Requirements:
- Centralized Axios instance.
- Request/Response interceptors.
- Consistent error handling logic.
- Type-safe API services.

Do not modify UI components.
Stop after API layer refactoring.
Generate a testing checklist.

### Phase X.3 — TanStack Query Standardization
Follow all project documents.

Implement ONLY the TanStack Query Standardization.

Requirements:
- Centralized QueryClient configuration.
- Consistent query key factories.
- Standardized useQuery and useMutation hooks.
- Global error and success handlers.

Do not modify UI components.
Stop after TanStack Query refactoring.
Generate a testing checklist.

### Phase X.4 — Zustand State Management
Follow all project documents.

Implement ONLY the Zustand State Management.

Requirements:
- Standardized store slices.
- Consistent state persistence.
- Type-safe state and actions.
- Consolidate local state into global where appropriate.

Do not modify UI components.
Stop after Zustand refactoring.
Generate a testing checklist.

### Phase X.5 — Custom Hooks Standardization
Follow all project documents.

Implement ONLY the Custom Hooks Standardization.

Requirements:
- Extract duplicated logic into shared hooks.
- Standardize hook signatures and return types.
- Ensure proper dependency arrays and memoization.
- Add comprehensive documentation.

Do not modify UI components.
Stop after custom hooks refactoring.
Generate a testing checklist.

### Phase X.6 — Forms & Validation Standardization
Follow all project documents.

Implement ONLY the Forms & Validation Standardization.

Requirements:
- Centralized Zod schemas.
- Consistent React Hook Form integration.
- Standardized form error displays.
- Shared form wrapper components.

Do not modify main UI layouts.
Stop after forms refactoring.
Generate a testing checklist.

### Phase X.7 — Shared Components Refactoring
Follow all project documents.

Implement ONLY the Shared Components Refactoring.

Requirements:
- React components.
- Tailwind styling.
- Standardize UI primitives (Buttons, Cards, Inputs).
- Remove duplicate component implementations.
- Ensure strict accessibility standards.
- Responsive UI.

Do not connect APIs.
Stop after component refactoring.
Generate a testing checklist.

### Phase X.8 — Utilities, Helpers & Shared Resources
Follow all project documents.

Implement ONLY the Utilities, Helpers & Shared Resources.

Requirements:
- Centralize formatting functions (dates, currency).
- Standardize constants and configuration files.
- Consolidate shared Types and Interfaces.
- Remove unused utility functions.

Do not modify UI components.
Stop after utilities refactoring.
Generate a testing checklist.

### Phase X.9 — Folder Structure & Architecture Standardization
Follow all project documents.

Implement ONLY the Folder Structure & Architecture Standardization.

Requirements:
- Organize files by feature or domain strictly.
- Standardize naming conventions (PascalCase, camelCase).
- Fix broken imports across the codebase.
- Enforce strict separation of concerns.

Do not add new features.
Stop after folder restructuring.
Generate a structural verification checklist.

### Phase X.10 — Code Optimization & Cleanup
Follow all project documents.

Implement ONLY the Code Optimization & Cleanup.

Requirements:
- Remove all dead code and unused files.
- Optimize React renders (memo, useMemo, useCallback).
- Implement code splitting where appropriate.
- Remove console logs and debug statements.

Do not add new features.
Stop after code optimization.
Generate a testing checklist.

### Phase X.11 — TypeScript, ESLint & Build Verification
Follow all project documents.

Review the Frontend Refactoring module.

Generate a complete browser testing and build verification checklist.

Include all happy paths, error states, linting verification, strict type checks, and production build validation.

Wait for my confirmation before continuing.

### Phase X.12 — Final Refactoring Report
Follow all project documents.

Review the Frontend Refactoring module.

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
