from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services import budget_service
from ..utils.responses import success_response, error_response

bp = Blueprint('budget', __name__, url_prefix='/api/budget')

@bp.route('', methods=['GET'])
@jwt_required()
def get_budget():
    user_id = get_jwt_identity()
    budget = budget_service.get_user_budget(user_id)
    return success_response({'budget': budget})

@bp.route('', methods=['POST'])
@jwt_required()
def set_budget():
    user_id = get_jwt_identity()
    data = request.get_json()
    total = data.get('total')
    
    budget = budget_service.set_budget(user_id, total)
    if budget:
        return success_response({'message': 'Budget set', 'budget': budget}, 201)
    return error_response('Failed to set budget', 400)