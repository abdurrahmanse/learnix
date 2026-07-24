import requests
import json

API_URL = "http://localhost:8000/api/v1"

def main():
    # Login as admin
    login_data = {
        "username": "admin@example.com",
        "password": "password123"
    }
    r = requests.post(f"{API_URL}/auth/login", data=login_data)
    if r.status_code != 200:
        print(f"Login failed: {r.text}")
        return
    token = r.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Get admin courses
    r = requests.get(f"{API_URL}/courses/admin", headers=headers)
    if r.status_code != 200:
        print(f"Fetch failed: {r.text}")
        return
    courses = r.json()
    if not courses:
        print("No courses found.")
        return
    
    course_id = courses[0]["id"]
    print(f"Found course {course_id}")

    # Update course - exactly how the frontend might send it
    update_data = {
      "title": "Next.js Pro Course",
      "short_summary": "Learn Next.js like a pro.",
      "description": "Full description here",
      "thumbnail_url": "",
      "thumbnail_public_id": "",
      "price": 49.99,
      "level": "intermediate",
      "status": "published"
    }
    r = requests.put(f"{API_URL}/courses/{course_id}", json=update_data, headers=headers)
    print(f"Update status: {r.status_code}")
    print(f"Update response: {r.text}")

if __name__ == "__main__":
    main()
