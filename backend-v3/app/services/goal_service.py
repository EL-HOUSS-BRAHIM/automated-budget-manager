from ..models import Goal
from .. import db

class GoalService:
    def get_user_goals(self, user_id):
        return Goal.query.filter_by(user_id=user_id).all()

    def create_goal(self, user_id, goal_data):
        goal = Goal(user_id=user_id, **goal_data)
        db.session.add(goal)
        db.session.commit()
        return goal