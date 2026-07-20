"""
app/models/lesson.py — Lesson ORM Model

Table: lessons
Columns: id, section_id (FK→sections), course_id (FK→courses),
         title, description, video_url, video_duration,
         order_index, is_preview, is_published, created_at

Relationships:
  section   → Section
  course    → Course
  resources → Resource (cascade delete)
  progress  → Progress
"""
