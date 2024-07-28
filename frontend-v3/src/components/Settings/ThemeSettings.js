import React from 'react';
import { useSettings } from '../../hooks/useSettings';

const ThemeSettings = () => {
  const { settings, updateSettings } = useSettings();

  const handleThemeChange = (e) => {
    updateSettings({ theme: e.target.value });
  };

  return (
    <div className="theme-settings">
      <h3>Theme Settings</h3>
      <select value={settings.theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeSettings;