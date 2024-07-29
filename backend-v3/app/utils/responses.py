from flask import jsonify

def success_response(data, status_code=200):
    response = {
        "success": True,
        "data": data
    }
    return jsonify(response), status_code

def error_response(message, status_code):
    response = {
        "success": False,
        "error": {
            "message": message
        }
    }
    return jsonify(response), status_code