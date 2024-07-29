from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services.profile_service import ProfileService
from ..schemas.profile_schemas import ProfileSchema
from ..utils.responses import success_response, error_response

bp = Blueprint('profile', __name__, url_prefix='/api/profile')
profile_service = ProfileService()

@bp.route('', methods=['GET'])
@jwt_required()
def get_profile():
    user_id = get_jwt_identity()
    profile = profile_service.get_user_profile(user_id)
    return success_response({'user': ProfileSchema().dump(profile)})

@bp.route('', methods=['PUT'])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    data = ProfileSchema().load(request.json)
    updated_profile = profile_service.update_profile(user_id, data)
    return success_response({'message': 'Profile updated successfully', 'user': ProfileSchema().dump(updated_profile)})