"""
Migration 004 — Create enrollments and progress tables

upgrade():
  CREATE TYPE enrollment_type AS ENUM ('purchase', 'subscription');

  CREATE TABLE enrollments (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id       UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    enrollment_type enrollment_type NOT NULL,
    payment_id      UUID,
    enrolled_at     TIMESTAMP NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, course_id)
  );
  CREATE INDEX idx_enrollments_user   ON enrollments(user_id);
  CREATE INDEX idx_enrollments_course ON enrollments(course_id);

  CREATE TABLE progress (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id      UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    course_id      UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    is_completed   BOOLEAN NOT NULL DEFAULT FALSE,
    watch_position INTEGER NOT NULL DEFAULT 0,
    completed_at   TIMESTAMP,
    updated_at     TIMESTAMP NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, lesson_id)
  );
  CREATE INDEX idx_progress_user   ON progress(user_id);
  CREATE INDEX idx_progress_course ON progress(course_id);
  CREATE INDEX idx_progress_lesson ON progress(lesson_id);

downgrade():
  DROP TABLE progress;
  DROP TABLE enrollments;
  DROP TYPE enrollment_type;
"""
