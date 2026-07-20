"""
app/models/user.py — User ORM Model

Table: users
Columns: id, email, username, full_name, password_hash,
         role (enum: student|admin), avatar_url,
         is_active, is_verified, created_at, updated_at

Relationships:
  courses_created  → Course (back_populates="creator")
  enrollments      → Enrollment (back_populates="user")
  progress         → Progress (back_populates="user")
  subscriptions    → Subscription (back_populates="user")
  payments         → Payment (back_populates="user")
  blog_posts       → BlogPost (back_populates="author")
"""
