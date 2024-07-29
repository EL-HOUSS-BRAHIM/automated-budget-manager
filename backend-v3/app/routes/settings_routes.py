from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services.settings_service import SettingsService
from ..schemas.settings_schemas import SettingsSchema
from ..utils.responses import success_response, error_response

bp = Blueprint('settings', __name__, url_prefix='/api/settings')
settings_service = SettingsService()

@bp.route('', methods=['GET'])
@jwt_required()
def get_settings():
    user_id = get_jwt_identity()
    settings = settings_service.get_user_settings(user_id)
    return success_response({'settings': SettingsSchema().dump(settings)})

@bp.route('', methods=['PUT'])
@jwt_required()
def update_settings():
    user_id = get_jwt_identity()
    data = SettingsSchema().load(request.json)
    updated_settings = settings_service.update_settings(user_id, data)
    return success_response({'message': 'Settings updated successfully', 'settings': SettingsSchema().dump(updated_settings)})