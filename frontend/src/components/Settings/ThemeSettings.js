import React, { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';

function ThemeSettings() {
  const { theme, updateTheme } = useSettings();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setSelectedTheme(newTheme);
    updateTheme(newTheme);
  };

  return (
    <div className="theme-settings">
      <h3>Theme Settings</h3>
      <select value={selectedTheme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
}

export default ThemeSettings;