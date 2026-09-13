import { BrokerBranch, MarketKeyConfig, TradeOrder } from './types/broker';

export const mockConfig: MarketKeyConfig = {
  marketDataApiKey: 'pk_live_market_data_9981273',
  liquidityGatewayKey: 'lq_gate_sec_4492019',
  paymentGatewayPublicKey: 'pk_test_51Nx892010293',
  wsEndpoint: 'wss://stream.broker.example.com/v1/market',
};

export const mockBranches: BrokerBranch[] = [
  {
    branchId: 'br_us_01',
    branchCode: 'NY-DESK',
    name: 'New York Liquidity Hub',
    region: 'US-EAST',
    liquidityProviderId: 'lp_citadel_01',
    baseCurrency: 'USD',
    isActive: true,
    maxLeverage: 100,
  },
  {
    branchId: 'br_eu_01',
    branchCode: 'LDN-DESK',
    name: 'London Prime Branch',
    region: 'EU-WEST',
    liquidityProviderId: 'lp_lmax_02',
    baseCurrency: 'EUR',
    isActive: true,
    maxLeverage: 50,
  },
  {
    branchId: 'br_apac_01',
    branchCode: 'TYO-DESK',
    name: 'Tokyo Exchange Node',
    region: 'APAC',
    liquidityProviderId: 'lp_nomura_01',
    baseCurrency: 'JPY',
    isActive: true,
    maxLeverage: 25,
  },
];

export const mockOrders: TradeOrder[] = [
  {
    orderKey: 'ord_1001',
    branchId: 'br_us_01',
    assetKey: 'BTC-USD',
    side: 'BUY',
    orderType: 'MARKET',
    quantity: 1.5,
    executionPrice: 65420.50,
    timestamp: Date.now() - 3600000,
  },
  {
    orderKey: 'ord_1002',
    branchId: 'br_eu_01',
    assetKey: 'EUR-USD',
    side: 'SELL',
    orderType: 'LIMIT',
    quantity: 10000,
    executionPrice: 1.0850,
    timestamp: Date.now() - 1800000,
  },
];
