Project structure overview

- src/
  - app/
    - blocks/             Section components grouped by page
    - components/         Reusable UI components
    - consts/             App constants and static data (aliased as `constants/*`)
    - helpers/            Utilities and browser helpers (aliased as `utils/*`)
    - lib/                Low-level helpers and proxies (aliased as `lib/*`)
    - views/              Page-level views (aliased as `pages/*`)
    - index.js            App bootstrap and router
    - spaHandler.js       404 SPA handler for static hosting
  - assets/
    - images/             Static images (copied to dist/images)
    - locales/            i18n JSON files (copied to dist/locales)
    - styles/             SASS modules (aliased as `styles/*`)

Aliased imports (webpack + jsconfig):
- `@/*` -> `src/app/*`
- `styles/*` -> `src/assets/styles/*`
- `constants/*` -> `src/app/consts/*`
- `utils/*` -> `src/app/helpers/*`
- `pages/*` -> `src/app/views/*`
- `sections/*` -> `src/app/blocks/*`
- `lib/*` -> `src/app/lib/*`

Refactor guidance
- Prefer importing from aliases for clarity and consistency
- Keep data-like modules in `consts/`; framework-agnostic utilities in `helpers/`
- Place code-splittable top-level pages in `views/` (aka `pages/*`)
- Group homepage/about/services subsections in `blocks/` (aka `sections/*`)
- Use `lib/` for internal adapters like proxies (e.g., media proxy)
