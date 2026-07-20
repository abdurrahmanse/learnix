"""
app/services/blog_service.py — Blog Business Logic

Functions:
  get_published_posts(db, tag, page, limit) → paginated posts
  get_post_by_slug(db, slug)               → single post or 404
  create_post(db, data, author)            → new BlogPost
  update_post(db, id, data)                → updated BlogPost
  delete_post(db, id)                      → delete post
  publish_post(db, id)                     → set is_published=True
  upload_cover_image(file)                 → upload to R2, return URL
"""
