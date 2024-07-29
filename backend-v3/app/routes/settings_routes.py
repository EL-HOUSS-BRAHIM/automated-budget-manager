from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services import settings_service
from ..utils.responses import success_response, error_response

bp = Blueprint('settings', __name__, url_prefix='/api/settings')

@bp.route('', methods=['GET'])
@jwt_required()
def get_settings():
    user_id = get_jwt_identity()
    settings = settings_service.get_user_settings(user_id)
    return success_response({'settings': settings})

@bp.route('', methods=['PUT'])
@jwt_required()
def update_settings():
    user_id = get_jwt_identity()
    data = request.get_json()
    theme = data.get('theme')
    notifications = data.get('notifications')
    privacy = data.get('privacy')
    
    updated_settings = settings_service.update_settings(user_id, theme, notifications, privacy)
    if updated_settings:
        return success_response({'message': 'Settings updated', 'settings': updated_settings})
    return error_response('Failed to update settings', 400)