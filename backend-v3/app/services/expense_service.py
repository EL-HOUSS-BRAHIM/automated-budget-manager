from ..models import Expense
from .. import db
from datetime import datetime


def get_user_expenses(user_id):
    expenses = Expense.query.filter_by(user_id=user_id).all()
    return [{'id': e.id, 'amount': e.amount, 'description': e.description, 'date': e.date.isoformat()} for e in expenses]


def add_expense(user_id, amount, description, date):
    new_expense = Expense(user_id=user_id, amount=amount, description=description,
                          date=datetime.strptime(date, '%Y-%m-%d').date())
    db.session.add(new_expense)
    db.session.commit()
    return {'id': new_expense.id, 'amount': new_expense.amount, 'description': new_expense.description, 'date': new_expense.date.isoformat()}
