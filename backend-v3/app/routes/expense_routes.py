from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services import expense_service
from ..utils.responses import success_response, error_response

bp = Blueprint('expenses', __name__, url_prefix='/api/expenses')

@bp.route('', methods=['GET'])
@jwt_required()
def get_expenses():
    user_id = get_jwt_identity()
    expenses = expense_service.get_user_expenses(user_id)
    return success_response({'expenses': expenses})

@bp.route('', methods=['POST'])
@jwt_required()
def add_expense():
    user_id = get_jwt_identity()
    data = request.get_json()
    amount = data.get('amount')
    description = data.get('description')
    date = data.get('date')
    
    expense = expense_service.add_expense(user_id, amount, description, date)
    if expense:
        return success_response({'message': 'Expense added', 'expense': expense}, 201)
    return error_response('Failed to add expense', 400)