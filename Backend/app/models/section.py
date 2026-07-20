"""
app/models/section.py — Section ORM Model

Table: sections
Columns: id, course_id (FK→courses), title,
         order_index, created_at

Relationships:
  course  → Course
  lessons → Lesson (cascade delete, ordered by order_index)
"""
