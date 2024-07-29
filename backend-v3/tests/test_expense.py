import json
from datetime import date

def test_get_expenses(test_client, init_database, login_default_user):
    response = test_client.get('/api/expenses')
    assert response.status_code == 200
    assert 'expenses' in json.loads(response.data)['data']

def test_create_expense(test_client, init_database, login_default_user):
    expense_data = {
        'amount': 100.00,
        'description': 'Test Expense',
        'date': str(date.today())
    }
    response = test_client.post('/api/expenses',
                                data=json.dumps(expense_data),
                                content_type='application/json')
    assert response.status_code == 201
    assert 'expense' in json.loads(response.data)['data']