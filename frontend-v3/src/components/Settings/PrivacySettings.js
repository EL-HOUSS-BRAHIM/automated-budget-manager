import React, { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';

function PrivacySettings() {
  const { privacy, updatePrivacy } = useSettings();
  const [dataSharing, setDataSharing] = useState(privacy.dataSharing);

  const handleSave = () => {
    updatePrivacy({ dataSharing });
  };

  return (
    <div className="privacy-settings">
      <h3>Privacy Settings</h3>
      <div>
        <label>
          <input
            type="checkbox"
            checked={dataSharing}
            onChange={(e) => setDataSharing(e.target.checked)}
          />
          Allow anonymous data sharing for service improvement
        </label>
      </div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default PrivacySettings;