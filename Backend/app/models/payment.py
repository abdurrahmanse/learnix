"""
app/models/payment.py — Payment ORM Model

Table: payments
Columns: id, user_id (FK→users),
         payment_type (enum: course_purchase|subscription),
         course_id (FK→courses, nullable),
         subscription_id (FK→subscriptions, nullable),
         amount, currency (default USD),
         status (enum: pending|succeeded|failed|refunded),
         stripe_payment_id (nullable),
         stripe_session_id (nullable), created_at

Relationships:
  user         → User
  course       → Course
  subscription → Subscription
"""
