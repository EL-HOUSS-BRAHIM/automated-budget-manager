from ..models import Budget
from .. import db

def get_user_budget(user_id):
    budget = Budget.query.filter_by(user_id=user_id).first()
    if budget:
        return {'id': budget.id, 'total': budget.total, 'spent': budget.spent, 'remaining': budget.remaining}
    return None

def set_budget(user_id, total):
    budget = Budget.query.filter_by(user_id=user_id).first()
    if budget:
        budget.total = total
        budget.remaining = total - budget.spent
    else:
        budget = Budget(user_id=user_id, total=total, spent=0, remaining=total)
        db.session.add(budget)
    db.session.commit()
    return {'id': budget.id, 'total': budget.total, 'spent': budget.spent, 'remaining': budget.remaining}