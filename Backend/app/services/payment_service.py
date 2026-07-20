"""
app/services/payment_service.py — Payment & Stripe Logic

Functions:
  create_course_checkout(db, user, course_id)
    → Validate course exists and user not already enrolled
    → Create Stripe Checkout Session (mode=payment)
    → Store pending Payment record
    → Return checkout URL

  create_subscription_checkout(db, user, plan)
    → Map plan to Stripe Price ID from config
    → Create Stripe Checkout Session (mode=subscription)
    → Return checkout URL

  handle_stripe_webhook(payload, signature)
    → Verify Stripe signature header
    → Route event type:
        checkout.session.completed      → fulfill_purchase()
        customer.subscription.created   → activate_subscription()
        customer.subscription.deleted   → expire_subscription()
        invoice.payment_failed          → handle_payment_failure()

  get_payment_history(db, user_id) → list of payments
"""
