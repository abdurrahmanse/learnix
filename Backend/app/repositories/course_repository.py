"""
app/repositories/course_repository.py

Extends BaseRepository[Course]

Additional methods:
  get_by_slug(db, slug)                      → Course | None
  get_published(db, category, level, page)   → paginated list
  get_with_curriculum(db, course_id)         → Course + sections + lessons
  update_stats(db, course_id)                → recalculate total_lessons, total_duration
"""
