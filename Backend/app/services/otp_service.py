import random
import string
import resend
from datetime import datetime, timedelta, timezone
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.otp import OTPCode
from app.models.user import User
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

class OTPService:
    def __init__(self, db: AsyncSession):
        self.db = db
        if settings.RESEND_API_KEY:
            resend.api_key = settings.RESEND_API_KEY

    def _generate_otp(self, length: int = 6) -> str:
        return ''.join(random.choices(string.digits, k=length))

    async def create_otp(self, user: User, purpose: str, expires_in_minutes: int = 15) -> OTPCode:
        # Invalidate existing OTPs for this user and purpose
        result = await self.db.execute(
            select(OTPCode).where(
                OTPCode.user_id == user.id,
                OTPCode.purpose == purpose,
                OTPCode.is_used == False
            )
        )
        existing_otps = result.scalars().all()
        for otp in existing_otps:
            otp.is_used = True
        
        # Create new OTP
        otp_code_str = self._generate_otp()
        new_otp = OTPCode(
            user_id=user.id,
            otp_code=otp_code_str,
            purpose=purpose,
            expires_at=datetime.now(timezone.utc) + timedelta(minutes=expires_in_minutes)
        )
        self.db.add(new_otp)
        await self.db.commit()
        await self.db.refresh(new_otp)
        
        return new_otp

    async def send_otp_email(self, user: User, otp: str, purpose: str):
        if purpose == "registration":
            subject = "Your Learnix Verification Code"
            html_content = f"<p>Welcome to Learnix! Your verification code is: <strong>{otp}</strong></p><p>This code expires in 15 minutes.</p>"
        else:
            subject = "Reset Your Learnix Password"
            html_content = f"<p>Your password reset code is: <strong>{otp}</strong></p><p>This code expires in 15 minutes.</p>"

        if not settings.RESEND_API_KEY:
            logger.warning(f"RESEND_API_KEY not set. Simulated email to {user.email}: {otp}")
            return True

        try:
            r = resend.Emails.send({
                "from": settings.EMAIL_FROM,
                "to": user.email,
                "subject": subject,
                "html": html_content
            })
            return True
        except Exception as e:
            logger.error(f"Failed to send email via Resend: {str(e)}")
            return False

    async def verify_otp(self, user: User, purpose: str, otp_code: str) -> bool:
        result = await self.db.execute(
            select(OTPCode).where(
                OTPCode.user_id == user.id,
                OTPCode.purpose == purpose,
                OTPCode.otp_code == otp_code,
                OTPCode.is_used == False,
                OTPCode.expires_at > datetime.now(timezone.utc)
            )
        )
        otp = result.scalars().first()
        
        if not otp:
            return False
            
        # Mark as used
        otp.is_used = True
        await self.db.commit()
        return True
