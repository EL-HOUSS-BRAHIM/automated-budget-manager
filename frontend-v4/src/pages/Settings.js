import React, { useState, useEffect } from 'react';
import { fetchUserSettings, updateUserSettings } from '../utils/api';

function Settings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchUserSettings().then(setSettings);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserSettings(settings);
      alert('Settings updated successfully');
    } catch (error) {
      console.error('Settings update failed:', error);
    }
  };

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  if (!settings) return <div>Loading...</div>;

  return (
    <div className="settings">
      <h1>User Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Currency:
          <select name="currency" value={settings.currency} onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
        <label>
          Notification Frequency:
          <select name="notificationFrequency" value={settings.notificationFrequency} onChange={handleChange}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
}

export default Settings;