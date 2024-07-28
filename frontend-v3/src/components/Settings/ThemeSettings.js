import React from 'react';
import { useSettings } from '../../hooks/useSettings';

function ThemeSettings() {
  const { theme, updateTheme } = useSettings();

  return (
    <div className="theme-settings">
      <h3>Theme Settings</h3>
      <select value={theme} onChange={(e) => updateTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System Default</option>
      </select>
    </div>
  );
}

export default ThemeSettings;