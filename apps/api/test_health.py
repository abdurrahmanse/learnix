from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    print("Health Check Response:", response.json())
    print("HEALTH_API_WORKING")

if __name__ == "__main__":
    test_health_check()
