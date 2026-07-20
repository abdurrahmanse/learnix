"""
app/core/exceptions.py
────────────────────────────────────────────────────────
Custom Exceptions & Global Exception Handlers

Custom Exception Classes:
  AuthenticationError     (401) — Invalid credentials or expired token
  AuthorizationError      (403) — Insufficient role or permissions
  NotFoundError           (404) — Resource does not exist in DB
  ConflictError           (409) — Duplicate resource (email, slug)
  PaymentError            (402) — Stripe payment processing failure
  SubscriptionError       (403) — No active subscription / no enrollment

Global Exception Handlers (registered on FastAPI app):
  handle_http_exception       → { detail, status_code }
  handle_validation_error     → { errors: [{ field, message }] }
  handle_unhandled_exception  → 500 + structured logging
"""
