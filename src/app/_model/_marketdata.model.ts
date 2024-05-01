export interface MarketDataModel {
  Symbol: string;
  WarehouseCode: string;
  ProductionYear: string;
  PreviousClosing: number;
  ClosingPrice: number;
  DayHigh: number;
  DayLow: number;
  VolumeInLot: number;
}

export const TabularMarketData:MarketDataModel={
    Symbol: "string",
    WarehouseCode: "string",
    ProductionYear: "string",
    PreviousClosing: 1,
    ClosingPrice: 1,
    DayHigh: 1,
    DayLow: 1,
    VolumeInLot: 1
  }
