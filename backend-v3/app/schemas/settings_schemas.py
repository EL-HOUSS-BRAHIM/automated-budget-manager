from marshmallow import Schema, fields

class SettingsSchema(Schema):
    currency = fields.Str()
    language = fields.Str()
    theme = fields.Str()
    notifications = fields.Bool()
    # Add any other settings fields as needed