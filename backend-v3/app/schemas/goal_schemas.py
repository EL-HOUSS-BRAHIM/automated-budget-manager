from marshmallow import Schema, fields
from ..utils.validators import validate_amount

class GoalSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    target = fields.Float(required=True, validate=validate_amount)
    progress = fields.Float(dump_only=True)