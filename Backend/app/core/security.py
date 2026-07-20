"""
app/core/security.py
────────────────────────────────────────────────────────
Security Utilities

Responsibilities:
  - Password hashing with bcrypt (cost factor 12)
  - Password verification
  - JWT access token generation (15 min expiry, HS256)
  - JWT refresh token generation (7 day expiry)
  - JWT token decoding and validation
  - Token payload extraction (user_id, role, token_type)

Token Payload Structure:
  {
    "sub": "<user_id>",
    "role": "student" | "admin",
    "type": "access" | "refresh",
    "exp": <unix_timestamp>
  }
"""
