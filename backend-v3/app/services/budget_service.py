from ..models import Budget
from .. import db
from datetime import datetime

class BudgetService:
    def get_user_budget(self, user_id):
        current_month = datetime.utcnow().replace(day=1, hour=0, minute=0, second=0, microsecond=0)
        return Budget.query.filter_by(user_id=user_id, month=current_month).first()

    def set_budget(self, user_id, total):
        current_month = datetime.utcnow().replace(day=1, hour=0, minute=0, second=0, microsecond=0)
        budget = Budget.query.filter_by(user_id=user_id, month=current_month).first()
        if budget:
            budget.total = total
        else:
            budget = Budget(user_id=user_id, total=total, month=current_month)
            db.session.add(budget)
        db.session.commit()
        return budget