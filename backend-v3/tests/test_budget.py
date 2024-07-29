import json

def test_get_budget(test_client, init_database, login_default_user):
    response = test_client.get('/api/budget')
    assert response.status_code == 200
    assert 'budget' in json.loads(response.data)['data']

def test_set_budget(test_client, init_database, login_default_user):
    budget_data = {
        'total': 1000.00
    }
    response = test_client.post('/api/budget',
                                data=json.dumps(budget_data),
                                content_type='application/json')
    assert response.status_code == 201
    assert 'budget' in json.loads(response.data)['data']