"""
Migration 002 — Create courses, sections, lessons tables

upgrade():
  CREATE TYPE course_level AS ENUM ('beginner', 'intermediate', 'advanced');

  CREATE TABLE courses (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title          VARCHAR(255) NOT NULL,
    slug           VARCHAR(255) UNIQUE NOT NULL,
    description    TEXT NOT NULL,
    short_desc     VARCHAR(500) NOT NULL,
    thumbnail_url  TEXT,
    price          DECIMAL(10,2) NOT NULL DEFAULT 0,
    level          course_level NOT NULL,
    category       VARCHAR(100) NOT NULL,
    is_published   BOOLEAN NOT NULL DEFAULT FALSE,
    is_free        BOOLEAN NOT NULL DEFAULT FALSE,
    total_lessons  INTEGER NOT NULL DEFAULT 0,
    total_duration INTEGER NOT NULL DEFAULT 0,
    created_by     UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
    created_at     TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at     TIMESTAMP NOT NULL DEFAULT NOW()
  );
  CREATE INDEX idx_courses_slug      ON courses(slug);
  CREATE INDEX idx_courses_published ON courses(is_published);
  CREATE INDEX idx_courses_category  ON courses(category);

  CREATE TABLE sections (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id   UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    title       VARCHAR(255) NOT NULL,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
  );
  CREATE INDEX idx_sections_course ON sections(course_id);

  CREATE TABLE lessons (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_id     UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
    course_id      UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    title          VARCHAR(255) NOT NULL,
    description    TEXT,
    video_url      TEXT,
    video_duration INTEGER,
    order_index    INTEGER NOT NULL DEFAULT 0,
    is_preview     BOOLEAN NOT NULL DEFAULT FALSE,
    is_published   BOOLEAN NOT NULL DEFAULT FALSE,
    created_at     TIMESTAMP NOT NULL DEFAULT NOW()
  );
  CREATE INDEX idx_lessons_section ON lessons(section_id);
  CREATE INDEX idx_lessons_course  ON lessons(course_id);

downgrade():
  DROP TABLE lessons;
  DROP TABLE sections;
  DROP TABLE courses;
  DROP TYPE course_level;
"""
