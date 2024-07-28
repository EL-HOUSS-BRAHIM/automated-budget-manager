import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../../services/profileService';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data.user);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Preferences:</strong> {JSON.stringify(profile.preferences)}</p>
      </div>
      <Link to="/profile/edit" className="edit-profile-link">Edit Profile</Link>
    </div>
  );
};

export default Profile;