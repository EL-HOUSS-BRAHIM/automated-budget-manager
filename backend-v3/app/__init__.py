from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from .config import Config

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    from .routes import auth_routes, expense_routes, budget_routes, goal_routes, report_routes, profile_routes, settings_routes, investment_routes, networth_routes
    app.register_blueprint(auth_routes.bp)
    app.register_blueprint(expense_routes.bp)
    app.register_blueprint(budget_routes.bp)
    app.register_blueprint(goal_routes.bp)
    app.register_blueprint(report_routes.bp)
    app.register_blueprint(profile_routes.bp)
    app.register_blueprint(settings_routes.bp)
    app.register_blueprint(investment_routes.bp)
    app.register_blueprint(networth_routes.bp)

    return app