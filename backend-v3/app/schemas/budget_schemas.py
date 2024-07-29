from marshmallow import Schema, fields
from ..utils.validators import validate_amount

class BudgetSchema(Schema):
    id = fields.Int(dump_only=True)
    total = fields.Float(required=True, validate=validate_amount)
    spent = fields.Float(dump_only=True)
    remaining = fields.Float(dump_only=True)