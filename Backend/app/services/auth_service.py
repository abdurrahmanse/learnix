"""
app/services/auth_service.py — Authentication Business Logic

Functions:
  register_user(db, data)
    → Validate email uniqueness
    → Hash password (bcrypt)
    → Create user record
    → Return created user

  login_user(db, email, password)
    → Fetch user by email
    → Verify password hash
    → Generate access_token + refresh_token
    → Return token pair + user

  refresh_access_token(db, refresh_token)
    → Decode and validate refresh_token
    → Fetch user from DB
    → Generate new access_token
    → Return new token

  logout_user(refresh_token)
    → Blacklist refresh_token in Redis (TTL = remaining expiry)
"""
