from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from ..services.auth_service import AuthService
from ..schemas.auth_schemas import LoginSchema, SignupSchema
from ..utils.responses import success_response, error_response

bp = Blueprint('auth', __name__, url_prefix='/api/auth')
auth_service = AuthService()

@bp.route('/login', methods=['POST'])
def login():
    data = LoginSchema().load(request.json)
    user = auth_service.authenticate_user(data['email'], data['password'])
    if user:
        access_token = create_access_token(identity=user.id)
        return success_response({'token': access_token, 'user': {'id': user.id, 'email': user.email, 'name': user.name}})
    return error_response('Invalid credentials', 401)

@bp.route('/signup', methods=['POST'])
def signup():
    data = SignupSchema().load(request.json)
    user = auth_service.create_user(data['name'], data['email'], data['password'])
    return success_response({'message': 'User created successfully', 'user': {'id': user.id, 'email': user.email, 'name': user.name}}, 201)