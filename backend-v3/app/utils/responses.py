from flask import jsonify

def success_response(data, status_code=200):
    response = jsonify(data)
    response.status_code = status_code
    return response

def error_response(message, status_code):
    response = jsonify({'error': message})
    response.status_code = status_code
    return response