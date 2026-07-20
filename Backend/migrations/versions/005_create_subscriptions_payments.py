"""
Migration 005 — Create subscriptions and payments tables

upgrade():
  CREATE TYPE subscription_plan   AS ENUM ('3_months', '12_months');
  CREATE TYPE subscription_status AS ENUM ('active', 'expired', 'cancelled');
  CREATE TYPE payment_type        AS ENUM ('course_purchase', 'subscription');
  CREATE TYPE payment_status      AS ENUM ('pending', 'succeeded', 'failed', 'refunded');

  CREATE TABLE subscriptions (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    plan          subscription_plan NOT NULL,
    status        subscription_status NOT NULL DEFAULT 'active',
    stripe_sub_id VARCHAR(255),
    starts_at     TIMESTAMP NOT NULL,
    expires_at    TIMESTAMP NOT NULL,
    created_at    TIMESTAMP NOT NULL DEFAULT NOW()
  );
  CREATE INDEX idx_subscriptions_user   ON subscriptions(user_id);
  CREATE INDEX idx_subscriptions_status ON subscriptions(status);
  CREATE INDEX idx_subscriptions_stripe ON subscriptions(stripe_sub_id);

  CREATE TABLE payments (
    id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id           UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
    payment_type      payment_type NOT NULL,
    course_id         UUID REFERENCES courses(id) ON DELETE SET NULL,
    subscription_id   UUID REFERENCES subscriptions(id) ON DELETE SET NULL,
    amount            DECIMAL(10,2) NOT NULL,
    currency          VARCHAR(3) NOT NULL DEFAULT 'USD',
    status            payment_status NOT NULL DEFAULT 'pending',
    stripe_payment_id VARCHAR(255),
    stripe_session_id VARCHAR(255),
    created_at        TIMESTAMP NOT NULL DEFAULT NOW()
  );
  CREATE INDEX idx_payments_user    ON payments(user_id);
  CREATE INDEX idx_payments_status  ON payments(status);
  CREATE INDEX idx_payments_session ON payments(stripe_session_id);

  -- Add FK from enrollments to payments (deferred until payments table exists)
  ALTER TABLE enrollments ADD CONSTRAINT fk_enrollment_payment
    FOREIGN KEY (payment_id) REFERENCES payments(id) ON DELETE SET NULL;

downgrade():
  ALTER TABLE enrollments DROP CONSTRAINT fk_enrollment_payment;
  DROP TABLE payments;
  DROP TABLE subscriptions;
  DROP TYPE payment_status;
  DROP TYPE payment_type;
  DROP TYPE subscription_status;
  DROP TYPE subscription_plan;
"""
