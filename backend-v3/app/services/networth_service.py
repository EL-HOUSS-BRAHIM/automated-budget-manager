from ..models import Investment, Expense

class NetworthService:
    def calculate_networth(self, user_id):
        investments = Investment.query.filter_by(user_id=user_id).all()
        expenses = Expense.query.filter_by(user_id=user_id).all()
        
        total_investments = sum(investment.amount for investment in investments)
        total_expenses = sum(expense.amount for expense in expenses)
        
        return total_investments - total_expenses