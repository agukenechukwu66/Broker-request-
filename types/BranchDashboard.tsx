import React, { useState } from 'react';
import { mockBranches, mockConfig } from '../mockData';
import { BrokerBranch } from '../types/broker';

export const BranchDashboard: React.FC = () => {
  const [branches, setBranches] = useState<BrokerBranch[]>(mockBranches);
  const [selectedBranch, setSelectedBranch] = useState<BrokerBranch>(mockBranches[0]);

  const toggleBranchStatus = (branchId: string) => {
    setBranches((prev) =>
      prev.map((b) =>
        b.branchId === branchId ? { ...b, isActive: !b.isActive } : b
      )
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <h1>Broker Node & Key Management</h1>
      
      {/* Key & Endpoint Configuration */}
      <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
        <h2>System Credentials</h2>
        <p><strong>Market Data API Key:</strong> {mockConfig.marketDataApiKey}</p>
        <p><strong>Liquidity Gateway Key:</strong> {mockConfig.liquidityGatewayKey}</p>
        <p><strong>WebSocket Stream:</strong> {mockConfig.wsEndpoint}</p>
      </div>

      {/* Regional Branch Nodes */}
      <h2>Active Regional Branches</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {branches.map((branch) => (
          <div
            key={branch.branchId}
            style={{
              background: selectedBranch.branchId === branch.branchId ? '#334155' : '#1e293b',
              border: '1px solid #475569',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedBranch(branch)}
          >
            <h3>{branch.name} ({branch.branchCode})</h3>
            <p><strong>Region:</strong> {branch.region}</p>
            <p><strong>Base Currency:</strong> {branch.baseCurrency}</p>
            <p><strong>Max Leverage:</strong> 1:{branch.maxLeverage}</p>
            <button
              style={{
                backgroundColor: branch.isActive ? '#22c55e' : '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '8px',
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleBranchStatus(branch.branchId);
              }}
            >
              {branch.isActive ? 'Active Node' : 'Disabled Node'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
