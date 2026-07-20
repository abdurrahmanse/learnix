"""
app/api/deps.py
────────────────────────────────────────────────────────
Shared FastAPI Dependency Functions

  get_db()
    → Yields async SQLAlchemy session per request
    → Session is committed on success, rolled back on error

  get_current_user(token)
    → Decodes Bearer JWT from Authorization header
    → Fetches User from DB by subject claim (user_id)
    → Raises 401 if token invalid, expired, or user not found

  get_current_active_user(user)
    → Wraps get_current_user
    → Validates user.is_active == True
    → Raises 403 if account is deactivated

  get_current_admin(user)
    → Wraps get_current_active_user
    → Validates user.role == 'admin'
    → Raises 403 if not an admin

  check_course_access(user, course_id, db)
    → Checks: active subscription OR direct enrollment
    → Also allows free lessons and preview lessons
    → Raises 403 if student has no access
"""
