export interface MarketDataModel {
    TradeDate: Date,
    Symbol: string,
    WarehouseCode: string,
    ProductionYear: number,
    OpeningPrice: number,
    ClosingPrice: number,
    DayHigh: number,
    DayLow: number,
    Difference: number,
    VolumeInLot: number,
    VolumeInQuintal: number,
    PercentageChange: number,
    PreviousClosing: number,
    DateKey: number,
    tday: number,
    tmonth: number,
    tyear: number
    
}