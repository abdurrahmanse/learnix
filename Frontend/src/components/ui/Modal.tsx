// Modal.tsx — Reused for confirmations, video previews, edit forms, alerts
// Props:    isOpen, onClose, title, size (sm|md|lg|xl|full), children
// Behavior: Focus trap, ESC closes, backdrop click closes, createPortal to body
// Sub:      ModalHeader, ModalBody, ModalFooter
// Rule:     ALL overlays/dialogs use this — never custom z-index div stacks
