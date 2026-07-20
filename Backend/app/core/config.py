"""
app/core/config.py
────────────────────────────────────────────────────────
Application Configuration

Uses pydantic-settings to load and validate all environment
variables from .env file at startup.

Settings Groups:
  - App (name, env, debug)
  - Database (DATABASE_URL)
  - JWT (secret, algorithm, expiry)
  - Redis (REDIS_URL)
  - Stripe (secret key, webhook secret, price IDs)
  - Storage (S3/R2 bucket, credentials, public URL)
  - Email (provider, API key, from address)
  - CORS (allowed origins list)
"""
