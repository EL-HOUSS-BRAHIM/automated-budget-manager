import pytest
from app import create_app, db
from app.models import User

@pytest.fixture(scope='module')
def test_client():
    flask_app = create_app('testing')

    # Create a test client using the Flask application configured for testing
    with flask_app.test_client() as testing_client:
        # Establish an application context
        with flask_app.app_context():
            yield testing_client  # this is where the testing happens!

@pytest.fixture(scope='module')
def init_database(test_client):
    # Create the database and the database table
    db.create_all()

    # Insert user data
    user1 = User(name='John Doe', email='john@test.com', password='password123')
    user2 = User(name='Jane Doe', email='jane@test.com', password='password456')
    db.session.add(user1)
    db.session.add(user2)

    # Commit the changes for the users
    db.session.commit()

    yield  # this is where the testing happens!

    db.drop_all()

@pytest.fixture(scope='module')
def login_default_user(test_client):
    test_client.post('/api/auth/login',
                     data=dict(email='john@test.com', password='password123'),
                     follow_redirects=True)

    yield  # this is where the testing happens!

    # log out the user
    test_client.get('/logout', follow_redirects=True)