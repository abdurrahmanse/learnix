"""
app/models/progress.py — Lesson Progress ORM Model

Table: progress
Columns: id, user_id (FK→users), lesson_id (FK→lessons),
         course_id (FK→courses, denormalized),
         is_completed, watch_position (seconds),
         completed_at (nullable), updated_at

Unique Constraint: (user_id, lesson_id)

Relationships:
  user   → User
  lesson → Lesson
  course → Course
"""
