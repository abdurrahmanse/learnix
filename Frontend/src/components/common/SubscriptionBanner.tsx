// SubscriptionBanner.tsx — Subscription state banner. Used in 2 places.
// Pages:    DashboardPage (top of page), SubscriptionPage (status display)
// States:   active (days remaining) | expiring-soon (< 7 days) | expired | none (upsell)
// Props:    subscription (can be null), onUpgrade
// Internals: uses <Badge>, <Button>, <Card>
// Rule:     One component for all subscription state UI — no duplicated status logic.
