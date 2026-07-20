// LessonPlayerPage.tsx — /dashboard/courses/:id/learn
// Layout:    <LessonLayout>   ← unique full-screen layout for the player
// Composes:
//   <VideoPlayer>             ← common/VideoPlayer
//   <CourseSyllabus>          ← common/CourseSyllabus (isEnrolled=true → navigable)
//                               SAME component as CourseDetailPage but interactive mode
//   <ResourceItem> ×n         ← common/ResourceItem (downloads list)
//   <Button>                  ← ui/Button (Prev / Next lesson)
//   <Progress>                ← ui/Progress (course completion %)
// Hooks:     useLesson, useProgress, useCourses
