"""
app/models/base.py
────────────────────────────────────────────────────────
SQLAlchemy Base Declarative Model

Provides:
  Base              — All ORM models inherit from this
  TimestampMixin    — Adds created_at, updated_at columns
  UUIDMixin         — Adds id column (UUID, auto-generated)

All models should inherit from: Base + TimestampMixin
"""
