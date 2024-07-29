from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services.investment_service import InvestmentService
from ..schemas.investment_schemas import InvestmentSchema
from ..utils.responses import success_response, error_response

bp = Blueprint('investments', __name__, url_prefix='/api/investments')
investment_service = InvestmentService()

@bp.route('', methods=['GET'])
@jwt_required()
def get_investments():
    user_id = get_jwt_identity()
    investments = investment_service.get_user_investments(user_id)
    return success_response({'investments': InvestmentSchema(many=True).dump(investments)})