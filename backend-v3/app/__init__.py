import pymysql
pymysql.install_as_MySQLdb()
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from .config import Config

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)

    from .routes import auth, expenses, budget, goals, reports, profile, settings, investments, networth
    app.register_blueprint(auth.bp)
    app.register_blueprint(expenses.bp)
    app.register_blueprint(budget.bp)
    app.register_blueprint(goals.bp)
    app.register_blueprint(reports.bp)
    app.register_blueprint(profile.bp)
    app.register_blueprint(settings.bp)
    app.register_blueprint(investments.bp)
    app.register_blueprint(networth.bp)

    return app