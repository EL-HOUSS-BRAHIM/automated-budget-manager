import React, { useState, useEffect } from 'react';
import { fetchUserSettings, updateUserSettings } from '../utils/api';
import '../css/SettingsPage.css';

function Settings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchUserSettings().then(setSettings);
  }, []);

  const handleToggle = (setting) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [setting]: !prevSettings[setting]
    }));
  };

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserSettings(settings);
      alert('Settings updated successfully');
    } catch (error) {
      console.error('Settings update failed:', error);
    }
  };


  return (
    <main className="main" role="main">
      <section className="settings">
        <h2 id="account-settings" className="settings__title">Account Settings</h2>

        <div className="settings__item">
          <label htmlFor="notifications" className="toggle-label">
            Enable notifications
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={() => handleToggle('notifications')}
              className="toggle-input"
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="settings__item">
          <label htmlFor="darkMode" className="toggle-label">
            Dark mode
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
              className="toggle-input"
            />
            <span className="slider"></span>
          </label>
        </div>

        <form onSubmit={handleSubmit} className="settings__form">
          <div className="settings__item">
            <label htmlFor="currency">Preferred Currency:</label>
            <select
              id="currency"
              name="currency"
              value={settings.currency}
              onChange={handleChange}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>

          <div className="settings__item">
            <label htmlFor="notificationFrequency">Notification Frequency:</label>
            <select
              id="notificationFrequency"
              name="notificationFrequency"
              value={settings.notificationFrequency}
              onChange={handleChange}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <button type="submit" className="save-button">Update Settings</button>
        </form>
      </section>
    </main>
  );
}

export default Settings;