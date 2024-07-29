from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from ..services import auth_service
from ..utils.responses import success_response, error_response

bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    user = auth_service.authenticate_user(email, password)
    if user:
        access_token = create_access_token(identity=user.id)
        return success_response({'token': access_token, 'user': {'id': user.id, 'email': user.email, 'name': user.name}})
    return error_response('Invalid credentials', 401)

@bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    user = auth_service.create_user(name, email, password)
    if user:
        return success_response({'message': 'User created', 'user': {'id': user.id, 'email': user.email, 'name': user.name}}, 201)
    return error_response('Email already exists', 400)

@bp.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.get_json()
    email = data.get('email')
    
    if auth_service.send_reset_password_email(email):
        return success_response({'message': 'Password reset email sent'})
    return error_response('Failed to send reset email', 400)

@bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    # In a stateless JWT system, we don't need to do anything server-side for logout
    # The client should discard the token
    return success_response({'message': 'User logged out successfully'})