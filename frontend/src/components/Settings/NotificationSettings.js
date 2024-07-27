import React, { useState, useEffect } from 'react';
import { fetchNotificationSettings, updateNotificationSettings } from '../../services/settingsService';

function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: false,
    pushNotifications: false,
    budgetAlerts: false,
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const data = await fetchNotificationSettings();
    setSettings(data);
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNotificationSettings(settings);
  };

  return (
    <div className="notification-settings">
      <h3>Notification Settings</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="pushNotifications"
            checked={settings.pushNotifications}
            onChange={handleChange}
          />
          Push Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="budgetAlerts"
            checked={settings.budgetAlerts}
            onChange={handleChange}
          />
          Budget Alerts
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default NotificationSettings;