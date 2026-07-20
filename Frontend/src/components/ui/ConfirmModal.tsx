// ConfirmModal.tsx — Reused for every delete/destructive action in admin panel
// Wraps Modal with a preset danger layout
// Props:    isOpen, onClose, onConfirm, title, message, confirmLabel, isLoading
// Used by:  Delete Course, Delete Lesson, Delete User, Delete Blog Post
// Rule:     No page/component re-implements a confirmation dialog — use this
