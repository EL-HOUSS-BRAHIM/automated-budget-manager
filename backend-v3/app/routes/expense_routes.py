from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services.expense_service import ExpenseService
from ..schemas.expense_schemas import ExpenseSchema
from ..utils.responses import success_response, error_response

bp = Blueprint('expenses', __name__, url_prefix='/api/expenses')
expense_service = ExpenseService()

@bp.route('', methods=['GET'])
@jwt_required()
def get_expenses():
    user_id = get_jwt_identity()
    expenses = expense_service.get_user_expenses(user_id)
    return success_response({'expenses': ExpenseSchema(many=True).dump(expenses)})

@bp.route('', methods=['POST'])
@jwt_required()
def create_expense():
    user_id = get_jwt_identity()
    data = ExpenseSchema().load(request.json)
    expense = expense_service.create_expense(user_id, data)
    return success_response({'message': 'Expense created successfully', 'expense': ExpenseSchema().dump(expense)}, 201)