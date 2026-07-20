// CourseCard.tsx — THE single course card. Used in 4+ places.
// Pages that use it:
//   HomePage          → featured courses section (showProgress=false)
//   CourseCatalogPage → full course listing
//   MyCoursesPage     → enrolled courses (showProgress=true)
//   AdminCoursesPage  → management table variant (compact=true)
// Props:    course, variant ("card"|"compact"), showProgress, onEdit?, onDelete?
// Internals: uses <Card>, <Badge>, <Progress>, <Button> from ui/
// Rule:     ONE card component. Variant prop controls appearance per context.
