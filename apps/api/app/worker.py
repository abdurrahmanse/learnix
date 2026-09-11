import logging
from arq.connections import RedisSettings
from app.core.config import settings

# This worker handles background jobs (like sending emails) using ARQ
# Run with: arq app.worker.WorkerSettings

async def startup(ctx):
    logging.info("Starting ARQ Background Worker")
    pass

async def shutdown(ctx):
    logging.info("Shutting down ARQ Background Worker")
    pass

async def send_welcome_email(ctx, email: str, name: str):
    """
    Background task to send an email asynchronously using Resend.
    """
    logging.info(f"Background Job: Sending welcome email to {email}")
    # Integration with resend goes here
    # Example:
    # resend.Emails.send(...)
    return True

class WorkerSettings:
    functions = [send_welcome_email]
    redis_settings = RedisSettings.from_dsn(settings.REDIS_URL)
    on_startup = startup
    on_shutdown = shutdown
