"""
app/core/database.py
────────────────────────────────────────────────────────
Database Configuration

Responsibilities:
  - Create async SQLAlchemy engine from DATABASE_URL
  - Configure async session factory (AsyncSession)
  - Provide Base declarative class for all ORM models
  - Expose get_db() async generator for dependency injection

Connection Pool Settings:
  - pool_size: 10
  - max_overflow: 20
  - pool_pre_ping: True (checks connection health)
  - echo: False in production, True in development
"""
