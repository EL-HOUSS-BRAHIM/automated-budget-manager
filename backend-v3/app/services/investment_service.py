from ..models import Investment
from .. import db

def get_user_investments(user_id):
    investments = Investment.query.filter_by(user_id=user_id).all()
    return [{'id': i.id, 'name': i.name, 'amount': i.amount, 'date': i.date.isoformat()} for i in investments]