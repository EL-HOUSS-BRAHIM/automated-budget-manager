from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services.networth_service import NetworthService
from ..utils.responses import success_response, error_response

bp = Blueprint('networth', __name__, url_prefix='/api/networth')
networth_service = NetworthService()

@bp.route('', methods=['GET'])
@jwt_required()
def get_networth():
    user_id = get_jwt_identity()
    networth = networth_service.calculate_networth(user_id)
    return success_response({'networth': networth})