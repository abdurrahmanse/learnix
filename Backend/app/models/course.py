"""
app/models/course.py — Course ORM Model

Table: courses
Columns: id, title, slug, description, short_desc,
         thumbnail_url, price, level (enum), category,
         is_published, is_free, total_lessons,
         total_duration, created_by (FK→users), timestamps

Relationships:
  creator    → User
  sections   → Section (cascade delete)
  lessons    → Lesson (denormalized backref)
  enrollments → Enrollment
"""
