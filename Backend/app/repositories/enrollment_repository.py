"""
app/repositories/enrollment_repository.py

Extends BaseRepository[Enrollment]

Additional methods:
  get_by_user_and_course(db, user_id, course_id) → Enrollment | None
  get_user_enrollments(db, user_id)              → list[Enrollment + Course]
  count_by_course(db, course_id)                 → int
"""
