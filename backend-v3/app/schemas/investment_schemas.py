from marshmallow import Schema, fields
from ..utils.validators import validate_amount

class InvestmentSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    amount = fields.Float(required=True, validate=validate_amount)
    date = fields.Date(required=True)