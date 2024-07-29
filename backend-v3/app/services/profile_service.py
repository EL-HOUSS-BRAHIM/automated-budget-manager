from ..models import User
from .. import db

def get_user_profile(user_id):
    user = User.query.get(user_id)
    if user:
        return {'id': user.id, 'name': user.name, 'email': user.email, 'preferences': {}}  # Add preferences if implemented
    return None

def update_profile(user_id, name, email, preferences):
    user = User.query.get(user_id)
    if user:
        user.name = name
        user.email = email
        # Update preferences if implemented
        db.session.commit()
        return {'id': user.id, 'name': user.name, 'email': user.email, 'preferences': {}}  # Add preferences if implemented
    return None