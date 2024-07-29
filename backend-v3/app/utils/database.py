from .. import db
from sqlalchemy.exc import SQLAlchemyError

def commit_changes():
    try:
        db.session.commit()
        return True
    except SQLAlchemyError:
        db.session.rollback()
        return False

def add_to_db(item):
    db.session.add(item)
    return commit_changes()

def delete_from_db(item):
    db.session.delete(item)
    return commit_changes()