// types/broker.ts

export type BranchRegion = 'US-EAST' | 'EU-WEST' | 'APAC' | 'LATAM';

export interface BrokerBranch {
  branchId: string;
  branchCode: string;
  name: string;
  region: BranchRegion;
  liquidityProviderId: string;
  baseCurrency: string;
  isActive: boolean;
  maxLeverage: number;
}

export interface MarketKeyConfig {
  marketDataApiKey: string;
  liquidityGatewayKey: string;
  paymentGatewayPublicKey: string;
  wsEndpoint: string;
}

export interface TradeOrder {
  orderKey: string;
  branchId: string;
  assetKey: string; // e.g., 'BTC-USD'
  side: 'BUY' | 'SELL';
  orderType: 'MARKET' | 'LIMIT' | 'STOP';
  quantity: number;
  executionPrice?: number;
  timestamp: number;
}
