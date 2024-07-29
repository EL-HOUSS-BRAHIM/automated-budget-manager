from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services.report_service import ReportService
from ..schemas.report_schemas import ReportSchema
from ..utils.responses import success_response, error_response

bp = Blueprint('reports', __name__, url_prefix='/api/reports')
report_service = ReportService()

@bp.route('', methods=['GET'])
@jwt_required()
def get_reports():
    user_id = get_jwt_identity()
    reports = report_service.generate_reports(user_id)
    return success_response({'reports': ReportSchema(many=True).dump(reports)})