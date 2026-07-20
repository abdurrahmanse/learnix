// useModal.ts — Generic modal state management
// Reused wherever any modal open/close state is needed
// Returns: { isOpen, open, close, toggle }
// Used by: ConfirmModal usage, admin edit modals, preview modals
// Rule:    Never duplicate isOpen useState + handlers per component
