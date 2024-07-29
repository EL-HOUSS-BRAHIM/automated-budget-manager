from ..models import User
from .. import db

class SettingsService:
    def get_user_settings(self, user_id):
        user = User.query.get(user_id)
        return user.settings if user else None

    def update_settings(self, user_id, settings_data):
        user = User.query.get(user_id)
        if user:
            if not user.settings:
                user.settings = {}
            user.settings.update(settings_data)
            db.session.commit()
        return user.settings if user else None