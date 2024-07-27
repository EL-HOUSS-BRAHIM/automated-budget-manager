from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from . import profile_bp
from ..services.profile_service import get_profile, update_profile
from ..utils.validation_utils import validate_json

@profile_bp.route('', methods=['GET'])
@jwt_required()
def get_user_profile():
    user_id = get_jwt_identity()
    profile = get_profile(user_id)
    return jsonify(profile), 200

@profile_bp.route('', methods=['PUT'])
@jwt_required()
@validate_json('first_name', 'last_name', 'currency')
def update_user_profile():
    user_id = get_jwt_identity()
    data = request.get_json()
    result = update_profile(user_id, data)
    return jsonify(result), 200 if result['success'] else 400