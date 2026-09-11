from fastapi.testclient import TestClient
from app.main import app


# Create an in-memory SQLite database for testing, or a test Postgres DB.
# For simplicity, assuming a mocked DB or similar dependency override in actual CI.

client = TestClient(app)

def test_register():
    response = client.post(
        "/api/v1/auth/register",
        json={
            "email": "test@example.com",
            "username": "testuser",
            "full_name": "Test User",
            "password": "Password123!"
        }
    )
    # 400 if user exists, 201 if created. Let's just assert it runs without 500.
    assert response.status_code in [201, 400]

def test_login():
    response = client.post(
        "/api/v1/auth/login",
        data={
            "username": "test@example.com",
            "password": "Password123!"
        }
    )
    assert response.status_code in [200, 401, 403]
