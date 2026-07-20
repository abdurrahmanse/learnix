"""
app/services/upload_service.py — File Upload Business Logic

Handles all file uploads to Cloudflare R2 / AWS S3:

Functions:
  upload_course_thumbnail(file, course_id)
    → Validate: image only (jpg, png, webp), max 5MB
    → Upload to R2: courses/{course_id}/thumbnail.webp
    → Return public CDN URL

  upload_lesson_video(file, lesson_id)
    → Validate: video only (mp4), max 2GB
    → Upload to BunnyNet Stream via API
    → Return BunnyNet CDN playback URL

  upload_resource_file(file, lesson_id)
    → Validate: pdf|ipynb|csv|zip, max 100MB
    → Upload to R2: lessons/{lesson_id}/resources/{filename}
    → Return signed URL (15 min expiry for download)

  upload_blog_cover(file, post_id)
    → Validate: image only, max 5MB
    → Upload to R2: blog/{post_id}/cover.webp
    → Return public CDN URL
"""
