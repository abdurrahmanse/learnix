"""
Migration 003 — Create resources table

upgrade():
  CREATE TYPE resource_type AS ENUM ('pdf', 'notebook', 'dataset');

  CREATE TABLE resources (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id    UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    title        VARCHAR(255) NOT NULL,
    file_url     TEXT NOT NULL,
    file_type    resource_type NOT NULL,
    file_size_kb INTEGER,
    created_at   TIMESTAMP NOT NULL DEFAULT NOW()
  );
  CREATE INDEX idx_resources_lesson ON resources(lesson_id);

downgrade():
  DROP TABLE resources;
  DROP TYPE resource_type;
"""
