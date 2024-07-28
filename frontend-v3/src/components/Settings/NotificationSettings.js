import React, { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';

function NotificationSettings() {
  const { notifications, updateNotifications } = useSettings();
  const [emailNotifications, setEmailNotifications] = useState(notifications.email);
  const [pushNotifications, setPushNotifications] = useState(notifications.push);

  const handleSave = () => {
    updateNotifications({ email: emailNotifications, push: pushNotifications });
  };

  return (
    <div className="notification-settings">
      <h3>Notification Settings</h3>
      <div>
        <label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
          Email Notifications
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={pushNotifications}
            onChange={(e) => setPushNotifications(e.target.checked)}
          />
          Push Notifications
        </label>
      </div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default NotificationSettings;