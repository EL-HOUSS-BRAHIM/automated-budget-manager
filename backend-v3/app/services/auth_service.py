from ..models import User
from .. import db
from flask import current_app
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta

def authenticate_user(email, password):
    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        return user
    return None

def create_user(name, email, password):
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return None
    
    new_user = User(name=name, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()
    return new_user

def send_reset_password_email(email):
    user = User.query.filter_by(email=email).first()
    if not user:
        return False
    
    # Generate a reset token
    reset_token = generate_reset_token(user.id)
    
    # Send email with reset link (implement email sending logic here)
    # For now, we'll just return True
    return True

def generate_reset_token(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.utcnow() + timedelta(hours=1)
    }
    return jwt.encode(payload, current_app.config['SECRET_KEY'], algorithm='HS256')