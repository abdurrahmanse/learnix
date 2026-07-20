// DashboardPage.tsx — /dashboard
// Layout:    <DashboardLayout>
// Composes:
//   <SubscriptionBanner>      ← common/SubscriptionBanner (active | expiring | upsell)
//   <StatsCard> ×3            ← common/StatsCard (enrolled, completed, streak)
//   <ContinueLearning>        ← common/ContinueLearning
//     └── <CourseCard>        ← common/CourseCard (variant="compact")
//     └── <Progress>          ← ui/Progress
//   <RecentActivity>          ← common/RecentActivity
//   <PageHeader>              ← ui/PageHeader
// Hooks:     useAuth, useProgress, useSubscription
