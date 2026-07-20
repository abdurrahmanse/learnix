"""
app/models/subscription.py — Subscription ORM Model

Table: subscriptions
Columns: id, user_id (FK→users),
         plan (enum: 3_months|12_months),
         status (enum: active|expired|cancelled),
         stripe_sub_id (nullable),
         starts_at, expires_at, created_at

Relationships:
  user     → User
  payments → Payment

Access Logic:
  is_active() → status == "active" AND expires_at > now()
"""
