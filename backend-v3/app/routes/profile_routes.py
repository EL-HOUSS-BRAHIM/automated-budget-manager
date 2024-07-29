from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services import profile_service
from ..utils.responses import success_response, error_response

bp = Blueprint('profile', __name__, url_prefix='/api/profile')

@bp.route('', methods=['GET'])
@jwt_required()
def get_profile():
    user_id = get_jwt_identity()
    profile = profile_service.get_user_profile(user_id)
    return success_response({'user': profile})

@bp.route('', methods=['PUT'])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    preferences = data.get('preferences')
    
    updated_profile = profile_service.update_profile(user_id, name, email, preferences)
    if updated_profile:
        return success_response({'message': 'Profile updated', 'user': updated_profile})
    return error_response('Failed to update profile', 400)