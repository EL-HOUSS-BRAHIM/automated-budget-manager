import json

def test_get_goals(test_client, init_database, login_default_user):
    response = test_client.get('/api/goals')
    assert response.status_code == 200
    assert 'goals' in json.loads(response.data)['data']

def test_create_goal(test_client, init_database, login_default_user):
    goal_data = {
        'name': 'Test Goal',
        'target': 5000.00
    }
    response = test_client.post('/api/goals',
                                data=json.dumps(goal_data),
                                content_type='application/json')
    assert response.status_code == 201
    assert 'goal' in json.loads(response.data)['data']