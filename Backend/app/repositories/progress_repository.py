"""
app/repositories/progress_repository.py

Extends BaseRepository[Progress]

Additional methods:
  get_by_user_and_lesson(db, user_id, lesson_id)  → Progress | None
  get_course_progress(db, user_id, course_id)      → list[Progress]
  get_completion_percentage(db, user_id, course_id) → float (0.0–100.0)
  get_last_watched(db, user_id)                    → Progress | None
"""
