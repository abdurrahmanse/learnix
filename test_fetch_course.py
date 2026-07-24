import requests

API_URL = "http://localhost:8000/api/v1"

def main():
    r = requests.get(f"{API_URL}/courses/")
    if r.status_code != 200:
        print(f"Failed to fetch courses: {r.text}")
        return
    courses = r.json()
    if not courses:
        print("No published courses found.")
        return
    
    course_id = courses[0]["id"]
    print(f"Fetching course {course_id}...")
    
    r = requests.get(f"{API_URL}/courses/{course_id}")
    print(f"Status: {r.status_code}")
    print(f"Response: {r.text[:200]}")

if __name__ == "__main__":
    main()
