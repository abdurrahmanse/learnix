"""
app/routes/__init__.py — Route package init

Exports: router (APIRouter combining all sub-routes)
Import in main.py: from app.routes import router

Registered routes:
  /auth          → auth.py
  /users         → users.py
  /courses       → courses.py
  /sections      → sections.py
  /lessons       → lessons.py
  /resources     → resources.py
  /enrollments   → enrollments.py
  /progress      → progress.py
  /subscriptions → subscriptions.py
  /payments      → payments.py
  /admin         → admin.py
"""
