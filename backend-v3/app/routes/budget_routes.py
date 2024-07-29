from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services.budget_service import BudgetService
from ..schemas.budget_schemas import BudgetSchema
from ..utils.responses import success_response, error_response

bp = Blueprint('budget', __name__, url_prefix='/api/budget')
budget_service = BudgetService()

@bp.route('', methods=['GET'])
@jwt_required()
def get_budget():
    user_id = get_jwt_identity()
    budget = budget_service.get_user_budget(user_id)
    return success_response({'budget': BudgetSchema().dump(budget)})

@bp.route('', methods=['POST'])
@jwt_required()
def set_budget():
    user_id = get_jwt_identity()
    data = BudgetSchema().load(request.json)
    budget = budget_service.set_budget(user_id, data['total'])
    return success_response({'message': 'Budget set successfully', 'budget': BudgetSchema().dump(budget)}, 201)