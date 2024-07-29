from marshmallow import Schema, fields
from ..utils.validators import validate_amount

class ExpenseSchema(Schema):
    id = fields.Int(dump_only=True)
    amount = fields.Float(required=True, validate=validate_amount)
    description = fields.Str(required=True)
    date = fields.Date(required=True)