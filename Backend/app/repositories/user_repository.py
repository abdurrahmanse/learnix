"""
app/repositories/user_repository.py

Extends BaseRepository[User]

Additional methods:
  get_by_email(db, email)          → User | None
  get_by_username(db, username)    → User | None
  get_all_paginated(db, page, limit) → (list[User], total)
  search(db, query)               → list[User]
"""
