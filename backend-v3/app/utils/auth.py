from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity
from functools import wraps
from flask import jsonify

def admin_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()
            current_user_id = get_jwt_identity()
            # Check if the user is an admin (implement your own logic here)
            if not is_admin(current_user_id):
                return jsonify(message="Admin access required"), 403
            return fn(*args, **kwargs)
        return decorator
    return wrapper

def is_admin(user_id):
    # Implement your admin check logic here
    # For example, you could have an 'is_admin' field in your User model
    from ..models import User
    user = User.query.get(user_id)
    return user and getattr(user, 'is_admin', False)