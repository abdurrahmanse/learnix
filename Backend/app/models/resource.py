"""
app/models/resource.py — Downloadable Resource ORM Model

Table: resources
Columns: id, lesson_id (FK→lessons), title,
         file_url (signed S3/R2 URL stored),
         file_type (enum: pdf|notebook|dataset),
         file_size_kb, created_at

Relationships:
  lesson → Lesson
"""
