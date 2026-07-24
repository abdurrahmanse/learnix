with open("Docs/03-development-roadmap-shifted.md", "r") as f:
    lines = f.readlines()

new_phase = """## Phase 2: Role Management (RBAC)

**Objective:** Establish a complete Role-Based Access Control (RBAC) system that defines authentication, authorization, permissions, route protection, and feature access for the entire platform.

**Why this phase is placed here:** Authentication identifies who the user is. Role Management determines what each user is allowed to access and perform. Every subsequent module depends on this permission model.

**What must be completed before starting:** Phase 1: Authentication.

**What cannot start before this phase:** User Profile, Course Management, Lesson Management, Classroom, Payments, Admin Panel, and all other protected modules.

---

### Phase 2.1 — Role Architecture Design

### Phase 2.2 — User Roles & Permission Matrix

### Phase 2.3 — Authentication vs Authorization Strategy

### Phase 2.4 — Backend Authorization & Route Protection

### Phase 2.5 — Frontend Route Guards & Access Control

### Phase 2.6 — Admin Dashboard Access & Layout

### Phase 2.7 — Student Website Access & Feature Permissions

### Phase 2.8 — Public, Protected & Admin-Only Routes

### Phase 2.9 — Role-Based Navigation & UI Visibility

### Phase 2.10 — API Authorization & Permission Validation

### Phase 2.11 — Database Role & Permission Design

### Phase 2.12 — JWT & Session Role Strategy

### Phase 2.13 — Security, Middleware & Guards

### Phase 2.14 — Future Role Scalability & Final Verification

---

### Success Criteria

* Admin users are automatically redirected to the dedicated **Admin Dashboard** after login.
* Students are **not** given a separate dashboard. After login, they remain on the main website and can access only their permitted features (Profile, My Courses, Classroom, Certificates, Assignments, Reviews, etc.).
* All pages, APIs, and UI elements are protected according to the defined RBAC policy.
* The permission model is reusable, maintainable, and consistent across the entire platform.

### Definition of Done

* A complete RBAC architecture has been established.
* Frontend and backend use the same permission model.
* Admin Dashboard is fully isolated from the public website.
* Student access is integrated into the main website without a separate dashboard.
* All future modules can directly inherit and use this centralized role management system.

"""

# find index of Phase 3
idx = 0
for i, line in enumerate(lines):
    if line.startswith("## Phase 3: User Profile"):
        idx = i
        break

lines.insert(idx, new_phase)

with open("Docs/03-development-roadmap.md", "w") as f:
    f.writelines(lines)
print("Done")
