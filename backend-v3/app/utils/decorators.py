from functools import wraps
from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity
from .responses import error_response

def admin_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        user_id = get_jwt_identity()
        # Here you would check if the user is an admin
        # For demonstration, let's assume user with id 1 is admin
        if user_id != 1:
            return error_response("Admin access required", 403)
        return fn(*args, **kwargs)
    return wrapper