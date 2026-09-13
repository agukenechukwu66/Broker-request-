import React, { useState } from 'react';
import { mockOrders } from '../types/mockData';
import { TradeOrder } from '../types/broker';

export const MarketDesk: React.FC = () => {
  const [orders, setOrders] = useState<TradeOrder[]>(mockOrders);
  const [selectedAsset, setSelectedAsset] = useState<string>('BTC-USD');
  const [amount, setAmount] = useState<number>(1);
  const [orderType, setOrderType] = useState<'MARKET' | 'LIMIT'>('MARKET');

  const handlePlaceOrder = (side: 'BUY' | 'SELL') => {
    const newOrder: TradeOrder = {
      orderKey: `ord_${Date.now()}`,
      branchId: 'br_us_01',
      assetKey: selectedAsset,
      side,
      orderType,
      quantity: amount,
      executionPrice: selectedAsset === 'BTC-USD' ? 65000 : 1.08,
      timestamp: Date.now(),
    };

    setOrders([newOrder, ...orders]);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <h1>Market Order Desk</h1>

      {/* Trading Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        
        {/* Order Form */}
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h2>Place Execution Order</h2>
          
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Trading Asset:
            <select 
              value={selectedAsset} 
              onChange={(e) => setSelectedAsset(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '4px', background: '#334155', color: '#fff', border: 'none', borderRadius: '4px' }}
            >
              <option value="BTC-USD">BTC/USD (Crypto)</option>
              <option value="EUR-USD">EUR/USD (Forex)</option>
              <option value="XAU-USD">XAU/USD (Gold)</option>
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '10px' }}>
            Order Type:
            <select 
              value={orderType} 
              onChange={(e) => setOrderType(e.target.value as 'MARKET' | 'LIMIT')}
              style={{ width: '100%', padding: '8px', marginTop: '4px', background: '#334155', color: '#fff', border: 'none', borderRadius: '4px' }}
            >
              <option value="MARKET">Market Order</option>
              <option value="LIMIT">Limit Order</option>
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '20px' }}>
            Volume / Quantity:
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ width: '100%', padding: '8px', marginTop: '4px', background: '#334155', color: '#fff', border: 'none', borderRadius: '4px' }}
            />
          </label>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={() => handlePlaceOrder('BUY')}
              style={{ flex: 1, backgroundColor: '#22c55e', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              BUY / LONG
            </button>
            <button 
              onClick={() => handlePlaceOrder('SELL')}
              style={{ flex: 1, backgroundColor: '#ef4444', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              SELL / SHORT
            </button>
          </div>
        </div>

        {/* Live Execution Ledger */}
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h2>Order History Log</h2>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {orders.map((o) => (
              <div key={o.orderKey} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #334155' }}>
                <span style={{ color: o.side === 'BUY' ? '#22c55e' : '#ef4444', fontWeight: 'bold' }}>{o.side}</span>
                <span>{o.quantity} {o.assetKey}</span>
                <span>@{o.executionPrice}</span>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>{o.orderType}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
