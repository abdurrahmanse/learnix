"""
app/models/enrollment.py — Enrollment ORM Model

Table: enrollments
Columns: id, user_id (FK→users), course_id (FK→courses),
         enrollment_type (enum: purchase|subscription),
         payment_id (FK→payments, nullable), enrolled_at

Unique Constraint: (user_id, course_id)

Relationships:
  user    → User
  course  → Course
  payment → Payment
"""
