"""
app/routes/payments.py  Payment Routes
POST /payments/checkout/course         (Bearer) - Stripe checkout for course
POST /payments/checkout/subscription   (Bearer) - Stripe checkout for subscription
POST /payments/webhook                 (None)   - Stripe webhook, verified by signature
GET  /payments/history                 (Bearer) - user payment history
GET  /payments                         (Admin)  - all payments
GET  /payments/stats                   (Admin)  - revenue statistics
"""
