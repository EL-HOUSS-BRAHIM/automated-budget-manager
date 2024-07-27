import React, { useState, useEffect } from 'react';
import { fetchPrivacySettings, updatePrivacySettings } from '../../services/settingsService';

function PrivacySettings() {
  const [settings, setSettings] = useState({
    shareData: false,
    anonymizeReports: true,
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const data = await fetchPrivacySettings();
    setSettings(data);
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePrivacySettings(settings);
  };

  return (
    <div className="privacy-settings">
      <h3>Privacy Settings</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="shareData"
            checked={settings.shareData}
            onChange={handleChange}
          />
          Share anonymous data for improving the service
        </label>
        <label>
          <input
            type="checkbox"
            name="anonymizeReports"
            checked={settings.anonymizeReports}
            onChange={handleChange}
          />
          Anonymize data in reports
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default PrivacySettings;