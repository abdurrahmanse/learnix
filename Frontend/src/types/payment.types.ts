// payment.types.ts
// ─────────────────────────────────────────────────────
// Types for payments and subscriptions
//
// Payment           — { id, amount, currency, status, payment_type, created_at }
// PaymentStatus     — "pending" | "succeeded" | "failed" | "refunded"
// PaymentType       — "course_purchase" | "subscription"
// Subscription      — { id, plan, status, starts_at, expires_at }
// SubscriptionPlan  — "3_months" | "12_months"
// SubscriptionStatus — "active" | "expired" | "cancelled"
// CheckoutResponse  — { checkout_url: string }

