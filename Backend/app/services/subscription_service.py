"""
app/services/subscription_service.py — Subscription Business Logic

Functions:
  get_active_subscription(db, user_id)
    → Return subscription where status=active AND expires_at > now()
    → Return None if no active subscription

  create_subscription(db, user_id, plan, stripe_sub_id)
    → Calculate expires_at based on plan (3 or 12 months)
    → Create Subscription record with status=active

  cancel_subscription(db, user_id)
    → Update status to cancelled
    → Cancel in Stripe (stripe.Subscription.cancel)

  handle_subscription_expired(db, stripe_sub_id)
    → Find subscription by stripe_sub_id
    → Update status to expired
    → Called by webhook handler
"""
