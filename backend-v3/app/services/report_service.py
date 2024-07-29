from ..models import Expense, Budget, Goal
from sqlalchemy import func
from datetime import datetime, timedelta

def generate_reports(user_id):
    reports = []
    
    # Expense summary
    start_of_month = datetime.utcnow().replace(day=1, hour=0, minute=0, second=0, microsecond=0)
    expenses = Expense.query.filter(Expense.user_id == user_id, Expense.date >= start_of_month).all()
    total_expenses = sum(e.amount for e in expenses)
    
    reports.append({
        'id': 'expense_summary',
        'title': 'Monthly Expense Summary',
        'data': {
            'total_expenses': total_expenses,
            'expense_count': len(expenses)
        }
    })
    
    # Budget progress
    budget = Budget.query.filter_by(user_id=user_id).first()
    if budget:
        budget_progress = (budget.spent / budget.total) * 100 if budget.total > 0 else 0
        reports.append({
            'id': 'budget_progress',
            'title': 'Budget Progress',
            'data': {
                'total_budget': budget.total,
                'spent': budget.spent,
                'remaining': budget.remaining,
                'progress_percentage': budget_progress
            }
        })
    
    # Goal progress
    goals = Goal.query.filter_by(user_id=user_id).all()
    goal_progress = [{'name': g.name, 'progress': (g.progress / g.target) * 100} for g in goals]
    reports.append({
        'id': 'goal_progress',
        'title': 'Goal Progress',
        'data': goal_progress
    })
    
    return reports