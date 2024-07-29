import json

def test_get_networth(test_client, init_database, login_default_user):
    response = test_client.get('/api/networth')
    assert response.status_code == 200
    assert 'networth' in json.loads(response.data)['data']