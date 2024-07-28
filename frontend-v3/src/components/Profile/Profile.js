import React, { useState, useEffect } from 'react';
import { getProfile } from '../../services/profileService';
import EditProfile from './EditProfile';
import './Profile.css';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data.user);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {isEditing ? (
        <EditProfile profile={profile} onSave={() => {
          setIsEditing(false);
          fetchProfile();
        }} />
      ) : (
        <div className="profile-info">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default Profile;