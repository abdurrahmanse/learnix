// VideoPlayer.tsx — BunnyNet embedded player.
// Used on:  LessonPlayerPage
// Props:    videoUrl, lessonId, startPosition, onProgress, onComplete
// Behavior: Syncs position to API every 10s, marks complete at 90%
// Internals: uses useLesson hook for progress mutation
