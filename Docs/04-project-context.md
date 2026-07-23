# Project Context

This document provides the high-level business and functional context for the **DataSci Academy** E-Learning Platform MVP. It serves as a primer for all developers and stakeholders to understand *what* we are building, *who* we are building it for, and the core mechanics of the platform.

## 1. Project Background
DataSci Academy is designed to be a premium educational platform specializing in delivering high-quality video courses and resources. The platform aims to bridge the gap between expert instructors and eager learners by offering a seamless, high-performance environment for content discovery, purchase, and consumption.

## 2. Core Value Proposition
The platform monetizes educational content through a dual-model approach:
1. **A La Carte Purchases:** Users can purchase lifetime access to individual courses.
2. **Subscription Plans:** Users can pay a recurring fee (Monthly/Annually) for unrestricted access to the entire premium catalog (or specific tiers of content).

## 3. High-Level User Journeys

### For Guests (Unauthenticated)
- Browse the public landing page, pricing page, and course catalog.
- Read public-facing blog posts (driven by SEO and marketing efforts).
- View course syllabuses and watch designated "Free Preview" lessons.
- Register for a new account.

### For Students (Authenticated)
- Manage their user profile, avatar, and account settings.
- Purchase individual courses or subscribe to membership plans via Stripe checkout.
- Access their personalized **Student Dashboard** to view active enrollments and resume learning instantly.
- Consume content in the **Classroom interface**, which supports video streaming, formatted text content, and downloadable resources.
- Track their granular progress through course sections and lessons.
- Submit assignments for grading.
- Leave star ratings and textual reviews for completed courses.
- Receive automated PDF **Certificates** upon 100% course completion.

### For Administrators (Authenticated)
- Access a strictly secured **Admin Panel**.
- Create, organize, and publish courses, sections, and lessons.
- Upload video content and supplementary resources to cloud storage.
- Manage platform users, view financial transactions, and monitor high-level analytics.
- Author and publish marketing blog posts.
- Generate promotional coupons to drive sales.

## 4. Key Domain Entities
- **Users:** The individuals interacting with the platform, categorized by Role (Student, Admin).
- **Courses:** The primary educational container. Contains metadata like title, description, price, level, and publication status.
- **Sections & Lessons:** The hierarchical building blocks of a course curriculum. Lessons contain the actual educational media (videos, text, resources).
- **Enrollments:** The transactional bridge between a User and a Course, dictated by either a direct purchase or an active, overarching subscription.
- **Progress:** A tracked record of a user's completion status and watch position for a specific lesson.
- **Subscriptions & Payments:** Financial records tracking the flow of money via Stripe and the resulting access grants.

## 5. Strategic Technical Goals
- **Minimal Friction:** The checkout and onboarding flows must be exceptionally smooth to maximize conversion rates.
- **Content Security:** Premium video content and resources must be reasonably protected from unauthorized access by non-paying users.
- **Extensibility:** The MVP must be cleanly architected so that future features (like community forums, AI-driven recommendations, and mobile apps) can be integrated seamlessly without rewriting the core domain logic.
