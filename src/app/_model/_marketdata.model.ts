export class MarketDataModel {
    id!: string;
    createdBy!: string;
    createdDate!: Date;
    updatedDate!: Date;
    updatedBy!: string;
    customerName!: string;
    driverName!: string;
    license!: string;
    truckPlate!: string;
    trailer!: string;
    truckType!: string;
    weighingItem!: string;
    grossWeight!: Number;
    warehouse!: string;
    bankSlip!: string;
    weighbridgeServiceFee!: Number;
    isDeleting: boolean = false;
}