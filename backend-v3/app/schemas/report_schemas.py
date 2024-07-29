from marshmallow import Schema, fields

class ReportSchema(Schema):
    id = fields.Str(required=True)
    title = fields.Str(required=True)
    data = fields.Dict(required=True)