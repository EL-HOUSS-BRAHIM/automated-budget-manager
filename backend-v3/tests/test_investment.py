import json
from datetime import date

def test_get_investments(test_client, init_database, login_default_user):
    response = test_client.get('/api/investments')
    assert response.status_code == 200
    assert 'investments' in json.loads(response.data)['data']

def test_create_investment(test_client, init_database, login_default_user):
    investment_data = {
        'name': 'Test Investment',
        'amount': 1000.00,
        'date': str(date.today())
    }
    response = test_client.post('/api/investments',
                                data=json.dumps(investment_data),
                                content_type='application/json')
    assert response.status_code == 201
    assert 'investment' in json.loads(response.data)['data']