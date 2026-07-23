import asyncio
import asyncpg

async def main():
    conn = await asyncpg.connect('postgresql://postgres:45683968@localhost:5432/learnix')
    await conn.execute('DROP TABLE IF EXISTS alembic_version CASCADE;')
    await conn.execute('DROP TABLE IF EXISTS otp_codes CASCADE;')
    await conn.execute('DROP TABLE IF EXISTS users CASCADE;')
    await conn.close()

asyncio.run(main())
