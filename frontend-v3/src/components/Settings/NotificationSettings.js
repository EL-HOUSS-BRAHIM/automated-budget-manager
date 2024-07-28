import React from 'react';
import { useSettings } from '../../hooks/useSettings';

const NotificationSettings = () => {
  const { settings, updateSettings } = useSettings();

  const handleNotificationChange = (e) => {
    updateSettings({ notifications: e.target.checked });
  };

  return (
    <div className="notification-settings">
      <h3>Notification Settings</h3>
      <label>
        <input
          type="checkbox"
          checked={settings.notifications}
          onChange={handleNotificationChange}
        />
        Enable notifications
      </label>
    </div>
  );
};

export default NotificationSettings;