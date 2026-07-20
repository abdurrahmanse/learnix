// CourseDetailPage.tsx — /courses/:slug
// Layout:    <PublicLayout>
// Composes:
//   <Badge>                   ← ui/Badge (level, category)
//   <CourseSyllabus>          ← common/CourseSyllabus (isEnrolled=false → locked view)
//   <PricingCard>             ← common/PricingCard (used as enroll CTA card in sidebar)
//   <CourseGrid courses={related} />  ← common/CourseGrid (related courses at bottom)
// Hooks:     useCourses, useSubscription (to show "You have access" if subscribed)
