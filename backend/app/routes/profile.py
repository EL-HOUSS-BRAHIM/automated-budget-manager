from flask import Blueprint, render_template, url_for, flash, redirect, request
from flask_login import current_user, login_required
from ..models import Profile, db
from ..forms import ProfileForm

profile = Blueprint('profile', __name__)

@profile.route("/profile", methods=['GET', 'POST'])
@login_required
def user_profile():
    form = ProfileForm()
    if form.validate_on_submit():
        profile = Profile(first_name=form.first_name.data, last_name=form.last_name.data, bio=form.bio.data, user_id=current_user.id)
        db.session.add(profile)
        db.session.commit()
        flash('Your profile has been updated!', 'success')
        return redirect(url_for('profile.user_profile'))
    return render_template('profile.html', title='Profile', form=form)

