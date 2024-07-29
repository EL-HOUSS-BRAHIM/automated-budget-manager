from ..models import Expense
from .. import db

class ExpenseService:
    def get_user_expenses(self, user_id):
        return Expense.query.filter_by(user_id=user_id).all()

    def create_expense(self, user_id, expense_data):
        expense = Expense(user_id=user_id, **expense_data)
        db.session.add(expense)
        db.session.commit()
        return expense