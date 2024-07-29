from ..models import Goal
from .. import db

def get_user_goals(user_id):
    goals = Goal.query.filter_by(user_id=user_id).all()
    return [{'id': g.id, 'name': g.name, 'target': g.target, 'progress': g.progress} for g in goals]

def add_goal(user_id, name, target):
    new_goal = Goal(user_id=user_id, name=name, target=target, progress=0)
    db.session.add(new_goal)
    db.session.commit()
    return {'id': new_goal.id, 'name': new_goal.name, 'target': new_goal.target, 'progress': new_goal.progress}