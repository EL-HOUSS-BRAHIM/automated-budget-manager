import json

def test_get_reports(test_client, init_database, login_default_user):
    response = test_client.get('/api/reports')
    assert response.status_code == 200
    assert 'reports' in json.loads(response.data)['data']