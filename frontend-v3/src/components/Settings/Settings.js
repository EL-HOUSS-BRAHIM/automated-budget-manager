import React from 'react';
import ThemeSettings from './ThemeSettings';
import NotificationSettings from './NotificationSettings';
import PrivacySettings from './PrivacySettings';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <ThemeSettings />
      <NotificationSettings />
      <PrivacySettings />
    </div>
  );
};

export default Settings;