"""
app/routes/resources.py  Resource Routes
GET    /resources/{lesson_id}        (Bearer)
POST   /resources                    (Admin)
DELETE /resources/{id}               (Admin)
GET    /resources/{id}/download      (Bearer + Access) - returns signed S3/R2 URL
"""
