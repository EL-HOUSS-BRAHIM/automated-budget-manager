import React, { useState, useEffect } from 'react';
import { calculateNetWorth } from '../../utils/financialUtils';
import { fetchAssets, fetchLiabilities } from '../../services/netWorthService';
import './AdvancedFeatures.css';

function NetWorthCalculator() {
  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);
  const [netWorth, setNetWorth] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const assetData = await fetchAssets();
    const liabilityData = await fetchLiabilities();
    setAssets(assetData);
    setLiabilities(liabilityData);
    const calculatedNetWorth = calculateNetWorth(assetData, liabilityData);
    setNetWorth(calculatedNetWorth);
  };

  return (
    <div className="net-worth-calculator">
      <h2>Net Worth Calculator</h2>
      <div>
        <h3>Assets</h3>
        <ul>
          {assets.map((asset) => (
            <li key={asset.id}>{asset.name}: ${asset.value}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Liabilities</h3>
        <ul>
          {liabilities.map((liability) => (
            <li key={liability.id}>{liability.name}: ${liability.value}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Net Worth: ${netWorth}</h3>
      </div>
    </div>
  );
}

export default NetWorthCalculator;