// Toast.tsx — Notification system reused across the entire app
// Variants: success | error | warning | info
// API:      toast.success("Enrolled!") | toast.error("Failed") | toast.info("...")
// Used by:  Login, Register, course purchase, subscription cancel, admin actions
// Rule:     All notifications use this — never alert() or custom notification divs
