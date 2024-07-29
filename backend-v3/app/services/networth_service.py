from ..models import Investment, Expense
from sqlalchemy import func

def calculate_networth(user_id):
    total_investments = db.session.query(func.sum(Investment.amount)).filter_by(user_id=user_id).scalar() or 0
    total_expenses = db.session.query(func.sum(Expense.amount)).filter_by(user_id=user_id).scalar() or 0
    
    # This is a simplified calculation. In a real-world scenario, you might need to consider more factors.
    networth = total_investments - total_expenses
    
    return networth