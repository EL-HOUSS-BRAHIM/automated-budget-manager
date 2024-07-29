from ..models import User
from .. import db

class ProfileService:
    def get_user_profile(self, user_id):
        return User.query.get(user_id)

    def update_profile(self, user_id, profile_data):
        user = User.query.get(user_id)
        for key, value in profile_data.items():
            setattr(user, key, value)
        db.session.commit()
        return user