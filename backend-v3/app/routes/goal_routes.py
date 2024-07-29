from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..services.goal_service import GoalService
from ..schemas.goal_schemas import GoalSchema
from ..utils.responses import success_response, error_response

bp = Blueprint('goals', __name__, url_prefix='/api/goals')
goal_service = GoalService()

@bp.route('', methods=['GET'])
@jwt_required()
def get_goals():
    user_id = get_jwt_identity()
    goals = goal_service.get_user_goals(user_id)
    return success_response({'goals': GoalSchema(many=True).dump(goals)})

@bp.route('', methods=['POST'])
@jwt_required()
def create_goal():
    user_id = get_jwt_identity()
    data = GoalSchema().load(request.json)
    goal = goal_service.create_goal(user_id, data)
    return success_response({'message': 'Goal created successfully', 'goal': GoalSchema().dump(goal)}, 201)