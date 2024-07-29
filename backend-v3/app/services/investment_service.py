from ..models import Investment
from .. import db

class InvestmentService:
    def get_user_investments(self, user_id):
        return Investment.query.filter_by(user_id=user_id).all()

    def create_investment(self, user_id, investment_data):
        investment = Investment(user_id=user_id, **investment_data)
        db.session.add(investment)
        db.session.commit()
        return investment