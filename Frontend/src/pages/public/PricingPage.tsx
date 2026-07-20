// PricingPage.tsx — /pricing
// Layout:    <PublicLayout>
// Composes:
//   <PricingCard> ×3          ← common/PricingCard (SAME component as CourseDetailPage sidebar)
//   <Tabs>                    ← ui/Tabs (Individual / Subscription toggle)
//   <ConfirmModal>            ← ui/ConfirmModal (before checkout redirect)
// Hooks:     useSubscription (highlight active plan if logged in)
