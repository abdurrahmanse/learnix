"""
app/models/blog.py — Blog Post ORM Model

Table: blog_posts
Columns: id, title, slug, content (text/markdown),
         cover_image_url, excerpt,
         tags (PostgreSQL TEXT[] array),
         is_published, author_id (FK→users),
         published_at (nullable), created_at, updated_at

Relationships:
  author → User
"""
