// SubscriptionPage.tsx — /dashboard/subscription
// Layout:    <DashboardLayout>
// Composes:
//   <PageHeader>              ← ui/PageHeader
//   <SubscriptionBanner>      ← common/SubscriptionBanner (status display)
//                               SAME component as DashboardPage — no duplication
//   <PricingCard> ×2          ← common/PricingCard (upgrade options)
//                               SAME component as PricingPage and CourseDetailPage
//   <ConfirmModal>            ← ui/ConfirmModal (cancel subscription confirmation)
// Hooks:     useSubscription
