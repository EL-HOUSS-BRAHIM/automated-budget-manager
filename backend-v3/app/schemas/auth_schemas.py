from marshmallow import Schema, fields, validate
from ..utils.validators import validate_email, validate_password

class LoginSchema(Schema):
    email = fields.Email(required=True, validate=validate_email)
    password = fields.Str(required=True, validate=validate_password)

class SignupSchema(Schema):
    name = fields.Str(required=True, validate=validate.Length(min=1))
    email = fields.Email(required=True, validate=validate_email)
    password = fields.Str(required=True, validate=validate_password)