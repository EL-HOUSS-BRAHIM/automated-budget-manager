import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { fetchProfile, updateProfile } from '../../services/profileService';
import './Profile.css';

function Profile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const data = await fetchProfile(user.id);
    setProfile(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(user.id, profile);
    setIsEditing(false);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2>User Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Profile;