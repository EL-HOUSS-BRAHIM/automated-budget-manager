from marshmallow import Schema, fields

class NetworthSchema(Schema):
    networth = fields.Float(required=True)