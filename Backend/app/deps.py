"""
app/deps.py  Shared FastAPI Dependencies
------------------------------------------------
get_db()                    -> async session generator
get_current_user()          -> decode Bearer JWT, return User or 401
get_current_active_user()   -> wraps above, checks is_active or 403
get_current_admin()         -> wraps above, checks role==admin or 403
check_course_access()       -> active sub OR enrollment OR free course, else 403
"""
