// CourseSyllabus.tsx — Course curriculum accordion. Used in 2 places.
// Pages:    CourseDetailPage (public preview, locked lessons)
//           LessonPlayerPage (sidebar navigation, interactive)
// Props:    sections, currentLessonId?, progress?, onLessonClick?, isEnrolled
// Internals: uses <Tabs>-like accordion, LessonRow (see below)
// Rule:     ONE syllabus component — mode prop controls locked vs navigable behavior.
