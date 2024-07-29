from ..models import Expense, Budget
from datetime import datetime, timedelta

class ReportService:
    def generate_reports(self, user_id):
        end_date = datetime.utcnow()
        start_date = end_date - timedelta(days=30)
        
        expenses = Expense.query.filter(Expense.user_id == user_id, 
                                        Expense.date >= start_date, 
                                        Expense.date <= end_date).all()
        
        budget = Budget.query.filter_by(user_id=user_id, month=start_date.replace(day=1)).first()
        
        total_expenses = sum(expense.amount for expense in expenses)
        budget_total = budget.total if budget else 0
        
        return [
            {
                'id': 'monthly_summary',
                'title': 'Monthly Summary',
                'data': {
                    'total_expenses': total_expenses,
                    'budget': budget_total,
                    'remaining': budget_total - total_expenses if budget_total > 0 else 0
                }
            }
        ]