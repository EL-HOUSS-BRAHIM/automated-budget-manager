from marshmallow import Schema, fields
from ..utils.validators import validate_email

class ProfileSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    email = fields.Email(required=True, validate=validate_email)
    preferences = fields.Dict()