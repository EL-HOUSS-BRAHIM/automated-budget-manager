from ..models import User
from .. import db, bcrypt

class AuthService:
    def authenticate_user(self, email, password):
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        return None

    def create_user(self, name, email, password):
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(name=name, email=email, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        return user