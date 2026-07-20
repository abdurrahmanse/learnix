"""
app/repositories/blog_repository.py

Extends BaseRepository[BlogPost]

Additional methods:
  get_published(db, tag, page, limit)  → paginated list
  get_by_slug(db, slug)                → BlogPost | None
  get_all_tags(db)                     → list[str]
"""
