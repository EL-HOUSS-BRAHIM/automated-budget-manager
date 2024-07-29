import json

def test_login_success(test_client, init_database):
    response = test_client.post('/api/auth/login',
                                data=json.dumps(dict(email='john@test.com', password='password123')),
                                content_type='application/json')
    assert response.status_code == 200
    assert 'token' in json.loads(response.data)['data']

def test_login_failure(test_client, init_database):
    response = test_client.post('/api/auth/login',
                                data=json.dumps(dict(email='john@test.com', password='wrongpassword')),
                                content_type='application/json')
    assert response.status_code == 401

def test_signup_success(test_client, init_database):
    response = test_client.post('/api/auth/signup',
                                data=json.dumps(dict(name='Test User', email='test@test.com', password='testpassword')),
                                content_type='application/json')
    assert response.status_code == 201
    assert 'user' in json.loads(response.data)['data']

def test_signup_duplicate_email(test_client, init_database):
    response = test_client.post('/api/auth/signup',
                                data=json.dumps(dict(name='John Doe', email='john@test.com', password='password123')),
                                content_type='application/json')
    assert response.status_code == 400