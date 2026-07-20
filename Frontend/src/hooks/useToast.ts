// useToast.ts — Toast notification helper hook
// Reused across all user actions (login, purchase, error handling)
// Returns:  { success, error, info, warning } shorthand functions
// Used by:  Every mutation (login, enroll, cancel subscription, admin CRUD)
// Rule:     Toast calls are standardized through this hook
