// store/ui.store.ts
// ─────────────────────────────────────────────────────
// Zustand Global UI Store
//
// State:
//   sidebarOpen: boolean            — dashboard sidebar collapsed state
//   activeModal: string | null      — id of currently open modal
//   theme: "light" | "dark"         — color scheme preference
//
// Actions:
//   toggleSidebar()                 — toggle sidebar open/close
//   openModal(id: string)           — open specific modal by id
//   closeModal()                    — close any open modal
//   setTheme(theme)                 — update theme preference

