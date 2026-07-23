import csv
import io
import logging
from typing import Dict, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.db.models.user import User
from app.core.security import get_password_hash
import re

logger = logging.getLogger(__name__)

class ImportService:
    def __init__(self, db: AsyncSession):
        self.db = db

    def validate_email(self, email: str) -> bool:
        regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        return re.match(regex, email) is not None

    async def user_exists(self, email: str, username: str) -> bool:
        result = await self.db.execute(
            select(User).where((User.email == email) | (User.username == username))
        )
        return result.scalars().first() is not None

    async def import_users_from_csv(self, file_content: bytes) -> Dict[str, int]:
        decoded_content = file_content.decode('utf-8')
        csv_reader = csv.DictReader(io.StringIO(decoded_content))
        
        success_count = 0
        skipped_count = 0
        
        for row in csv_reader:
            email = row.get("email", "").strip()
            username = row.get("username", "").strip()
            full_name = row.get("full_name", "").strip()
            password = row.get("password", "").strip()
            role = row.get("role", "student").strip()
            
            # Validation
            if not email or not username or not full_name or not password:
                logger.warning(f"Skipping row with missing required fields: {row}")
                skipped_count += 1
                continue
                
            if not self.validate_email(email):
                logger.warning(f"Skipping row with invalid email: {email}")
                skipped_count += 1
                continue

            if await self.user_exists(email, username):
                logger.warning(f"Skipping duplicate user: {email} / {username}")
                skipped_count += 1
                continue
            
            # Create user
            new_user = User(
                email=email,
                username=username,
                full_name=full_name,
                hashed_password=get_password_hash(password),
                role=role,
                is_active=True,
                is_verified=True
            )
            self.db.add(new_user)
            success_count += 1
            
        await self.db.commit()
        return {
            "success_count": success_count,
            "skipped_count": skipped_count
        }
