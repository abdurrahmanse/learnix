# Design System

Follow the Project Constitution, AI Development Rules, Development Roadmap, and Project Context.

This project must follow a single, consistent design system across the entire application.

## Design Philosophy

The UI should be:

* Modern
* Premium
* Minimal
* Clean
* Professional
* Simple
* Elegant
* Responsive
* Accessible
* Consistent

## Visual Style

* Use a clean layout with generous whitespace.
* Avoid visual clutter.
* Use soft borders and subtle shadows.
* Keep the interface calm and easy to read.
* Maintain a professional educational platform aesthetic.

## Components

* Build reusable UI components.
* Use consistent spacing, typography, colors, and border radius.
* Use shadcn/ui components whenever possible.
* Follow a component-first architecture.

## Layout

* Keep layouts simple and well-structured.
* Use responsive containers.
* Maintain consistent padding and spacing.
* Ensure all pages have a unified look and feel.

## User Experience

* Navigation should be simple and intuitive.
* Forms should be clean and easy to use.
* Loading, empty, and error states should always be handled.
* Prioritize clarity over decoration.

## Code Quality

* Build reusable components.
* Avoid duplicate UI code.
* Keep components modular and maintainable.
* Follow clean architecture principles.

## Constraints

* Do not over-design.
* Do not use unnecessary animations.
* Do not use excessive colors or effects.
* Do not introduce inconsistent component styles.
* Every new page and component must match the existing design system.

Before implementing any UI, verify that it follows this design system.

Maintain this design language consistently throughout the entire project.


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
