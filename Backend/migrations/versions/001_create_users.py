"""
Migration 001 — Create users table

upgrade():
  CREATE TYPE user_role AS ENUM ('student', 'admin');
  CREATE TABLE users (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email         VARCHAR(255) UNIQUE NOT NULL,
    username      VARCHAR(100) UNIQUE NOT NULL,
    full_name     VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role          user_role NOT NULL DEFAULT 'student',
    avatar_url    TEXT,
    is_active     BOOLEAN NOT NULL DEFAULT TRUE,
    is_verified   BOOLEAN NOT NULL DEFAULT FALSE,
    created_at    TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMP NOT NULL DEFAULT NOW()
  );
  CREATE INDEX idx_users_email    ON users(email);
  CREATE INDEX idx_users_username ON users(username);
  CREATE INDEX idx_users_role     ON users(role);

downgrade():
  DROP TABLE users;
  DROP TYPE user_role;
"""
