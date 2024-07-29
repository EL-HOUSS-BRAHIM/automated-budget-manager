import json

def test_get_settings(test_client, init_database, login_default_user):
    response = test_client.get('/api/settings')
    assert response.status_code == 200
    assert 'settings' in json.loads(response.data)['data']

def test_update_settings(test_client, init_database, login_default_user):
    settings_data = {
        'currency': 'EUR',
        'language': 'fr',
        'theme': 'dark',
        'notifications': True
    }
    response = test_client.put('/api/settings',
                               data=json.dumps(settings_data),
                               content_type='application/json')
    assert response.status_code == 200
    assert json.loads(response.data)['data']['settings']['currency'] == 'EUR'
    assert json.loads(response.data)['data']['settings']['language'] == 'fr'
    assert json.loads(response.data)['data']['settings']['theme'] == 'dark'
    assert json.loads(response.data)['data']['settings']['notifications'] == True