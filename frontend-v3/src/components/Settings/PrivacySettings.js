import React from 'react';
import { useSettings } from '../../hooks/useSettings';

const PrivacySettings = () => {
  const { settings, updateSettings } = useSettings();

  const handlePrivacyChange = (e) => {
    updateSettings({ privacyMode: e.target.checked });
  };

  return (
    <div className="privacy-settings">
      <h3>Privacy Settings</h3>
      <label>
        <input
          type="checkbox"
          checked={settings.privacyMode}
          onChange={handlePrivacyChange}
        />
        Enable privacy mode
      </label>
    </div>
  );
};

export default PrivacySettings;