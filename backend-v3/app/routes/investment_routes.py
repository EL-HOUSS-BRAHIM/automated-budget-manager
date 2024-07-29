from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services import investment_service
from ..utils.responses import success_response, error_response

bp = Blueprint('investments', __name__, url_prefix='/api/investments')

@bp.route('', methods=['GET'])
@jwt_required()
def get_investments():
    user_id = get_jwt_identity()
    investments = investment_service.get_user_investments(user_id)
    return success_response({'investments': investments})