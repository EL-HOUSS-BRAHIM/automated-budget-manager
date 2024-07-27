from ..models import Profile
from .. import db

def get_profile(user_id):
    profile = Profile.query.filter_by(user_id=user_id).first()
    if not profile:
        return None
    return {
        'first_name': profile.first_name,
        'last_name': profile.last_name,
        'currency': profile.currency
    }

def update_profile(user_id, data):
    profile = Profile.query.filter_by(user_id=user_id).first()
    if not profile:
        profile = Profile(user_id=user_id)
        db.session.add(profile)

    profile.first_name = data['first_name']
    profile.last_name = data['last_name']
    profile.currency = data['currency']

    db.session.commit()
    return {'success': True, 'message': 'Profile updated successfully'}