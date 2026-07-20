"""
app/repositories/base_repository.py — Generic CRUD Repository

BaseRepository(model):
  get_by_id(db, id)              → model | None
  get_all(db, skip, limit)       → list[model]
  create(db, data: dict)         → model
  update(db, instance, data)     → model
  delete(db, id)                 → bool
  exists(db, **filters)          → bool

All concrete repositories extend BaseRepository
and add domain-specific query methods.
"""
