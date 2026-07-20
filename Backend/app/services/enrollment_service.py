"""
app/services/enrollment_service.py — Enrollment Business Logic

Functions:
  enroll_user(db, user_id, course_id, enrollment_type, payment_id)
    → Check for existing enrollment (prevent duplicate)
    → Create Enrollment record
    → Return enrollment

  get_user_enrollments(db, user_id)
    → Return list of courses user is enrolled in

  check_user_access(db, user_id, course_id)
    → Check active subscription (expires_at > now())
    → OR check direct enrollment exists
    → OR check course.is_free
    → Return True/False
"""
