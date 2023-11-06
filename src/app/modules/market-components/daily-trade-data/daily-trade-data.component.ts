import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable,Observer, firstValueFrom, Subscription, interval } from 'rxjs';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

export interface PeriodicElement {
  CommodityType: string;
  Symbol: string;
  Warehouse: string;
  productionYear: number;
  previousClosingPrize:number;
  closingPrize:number;
  Difference:number;
  DayHigh:number;
  DayLow: number;
  Volume:number

}

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-daily-trade-data',
  templateUrl: './daily-trade-data.component.html',
  styleUrls: ['./daily-trade-data.component.css']
})



export class DailyTradeDataComponent {

  asyncTabs: Observable<ExampleTab[]>;
  dataSource: any;

  displayedColumns: string[] = [ "CommodityType", "Symbol","Warehouse","productionYear","previousClosingPrize","closingPrize",
  "Difference","DayHigh","DayLow","Volume"];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {



    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Washed', content: 'Content 1'},
          {label: 'Unwashed', content: 'Content 1'},
          {label: 'Sesame', content: 'Content 2'},
          {label: 'Mungbean', content: 'Content 3'},
          {label: 'Haricotbeen', content: 'Content 1'},
          {label: 'Chickpeas', content: 'Content 2'},
          {label: 'Soyabeans', content: 'Content 3'},
          {label: 'SpeckledBeans', content: 'Content 2'},
          {label: 'WhitePigeonPeas', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }


  async ngOnInit () {

    
    

    const ELEMENT_DATA: PeriodicElement[] = [
      {CommodityType: 'LWBP4', Symbol: 'Hydrogen', Warehouse: 'AddisAbaba', productionYear: 2023 , previousClosingPrize:68.69 ,closingPrize:68.58 ,Difference:10000 ,DayHigh:9500,DayLow:700,Volume:45},
      {CommodityType: 'LWBP3', Symbol: 'Hydrogen', Warehouse: 'AddisAbaba', productionYear: 68.90 , previousClosingPrize:68.69 ,closingPrize:68.58 ,Difference:10000 ,DayHigh:9500,DayLow:700,Volume:70},
      {CommodityType: 'LUSH5', Symbol: 'Hydrogen', Warehouse: 'AddisAbaba', productionYear: 68.90 , previousClosingPrize:68.69 ,closingPrize:68.58 ,Difference:10000 ,DayHigh:9500,DayLow:700,Volume:5},
      {CommodityType: 'LUGD2', Symbol: 'Hydrogen', Warehouse: 'AddisAbaba', productionYear: 68.90 , previousClosingPrize:68.69 ,closingPrize:68.58 ,Difference:10000 ,DayHigh:9500,DayLow:700,Volume:88},
      {CommodityType: 'LUSH5', Symbol: 'Hydrogen', Warehouse: 'AddisAbaba', productionYear: 68.90 , previousClosingPrize:68.69 ,closingPrize:68.58 ,Difference:10000 ,DayHigh:9500,DayLow:700,Volume:10},
      {CommodityType: 'LUGD2', Symbol: 'Hydrogen', Warehouse: 'AddisAbaba', productionYear: 68.90 , previousClosingPrize:68.69 ,closingPrize:68.58 ,Difference:10000 ,DayHigh:9500,DayLow:700,Volume:30},
    
    ];

    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);



    } 

  

}
