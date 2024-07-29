from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services import goal_service
from ..utils.responses import success_response, error_response

bp = Blueprint('goals', __name__, url_prefix='/api/goals')

@bp.route('', methods=['GET'])
@jwt_required()
def get_goals():
    user_id = get_jwt_identity()
    goals = goal_service.get_user_goals(user_id)
    return success_response({'goals': goals})

@bp.route('', methods=['POST'])
@jwt_required()
def add_goal():
    user_id = get_jwt_identity()
    data = request.get_json()
    name = data.get('name')
    target = data.get('target')
    
    goal = goal_service.add_goal(user_id, name, target)
    if goal:
        return success_response({'message': 'Goal added', 'goal': goal}, 201)
    return error_response('Failed to add goal', 400)