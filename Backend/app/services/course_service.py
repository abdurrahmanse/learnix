"""
app/services/course_service.py — Course Business Logic

Functions:
  get_published_courses(db, filters)   → paginated list
  get_course_by_slug(db, slug)         → single course or 404
  create_course(db, data, admin_user)  → new Course record
  update_course(db, id, data)          → updated Course
  delete_course(db, id)                → cascade delete sections/lessons
  publish_course(db, id)               → set is_published=True
  unpublish_course(db, id)             → set is_published=False
  get_course_with_curriculum(db, slug) → course + sections + lessons
"""
