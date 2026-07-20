"""
app/repositories/subscription_repository.py

Extends BaseRepository[Subscription]

Additional methods:
  get_active_by_user(db, user_id)              → Subscription | None
  get_by_stripe_id(db, stripe_sub_id)          → Subscription | None
  get_all_paginated(db, status, page, limit)   → paginated list
"""
