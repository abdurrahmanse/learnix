"""
app/repositories/payment_repository.py

Extends BaseRepository[Payment]

Additional methods:
  get_user_history(db, user_id, page, limit)  → paginated list
  get_by_stripe_session(db, session_id)        → Payment | None
  get_revenue_stats(db)                        → { total, monthly, by_type }
"""
