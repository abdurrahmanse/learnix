// store/player.store.ts
// ─────────────────────────────────────────────────────
// Zustand Video Player Store
//
// State:
//   currentLessonId: string | null  — active lesson being watched
//   playbackPosition: number        — current time in seconds
//   isCompleted: boolean            — lesson marked as complete
//   autoPlay: boolean               — auto-play next lesson
//
// Actions:
//   setLesson(lessonId)             — switch to a new lesson
//   updatePosition(seconds)         — update watch position
//   markComplete()                  — mark lesson complete + sync to API
//   setAutoPlay(value)              — toggle auto-play preference

