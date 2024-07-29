import json

def test_get_profile(test_client, init_database, login_default_user):
    response = test_client.get('/api/profile')
    assert response.status_code == 200
    assert 'user' in json.loads(response.data)['data']

def test_update_profile(test_client, init_database, login_default_user):
    profile_data = {
        'name': 'Updated Name',
        'email': 'updated@test.com'
    }
    response = test_client.put('/api/profile',
                               data=json.dumps(profile_data),
                               content_type='application/json')
    assert response.status_code == 200
    assert json.loads(response.data)['data']['user']['name'] == 'Updated Name'