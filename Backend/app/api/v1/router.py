"""
app/api/v1/router.py
────────────────────────────────────────────────────────
Central API Router — v1

Aggregates all sub-routers and mounts them under /api/v1:

  prefix=/auth          tags=["Auth"]          → auth.py
  prefix=/users         tags=["Users"]         → users.py
  prefix=/courses       tags=["Courses"]       → courses.py
  prefix=/sections      tags=["Sections"]      → sections.py
  prefix=/lessons       tags=["Lessons"]       → lessons.py
  prefix=/resources     tags=["Resources"]     → resources.py
  prefix=/enrollments   tags=["Enrollments"]   → enrollments.py
  prefix=/progress      tags=["Progress"]      → progress.py
  prefix=/subscriptions tags=["Subscriptions"] → subscriptions.py
  prefix=/payments      tags=["Payments"]      → payments.py
  prefix=/blog          tags=["Blog"]          → blog.py
  prefix=/admin         tags=["Admin"]         → admin.py
"""
