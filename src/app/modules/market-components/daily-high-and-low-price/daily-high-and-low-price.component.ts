import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  Symbol: string;
  PY: number;
  WH: string;
  Mode: string;
  High:number;
  Low:number;
  Market:string;
  Ch:number;

}

@Component({
  selector: 'app-daily-high-and-low-price',
  templateUrl: './daily-high-and-low-price.component.html',
  styleUrls: ['./daily-high-and-low-price.component.css']
})
export class DailyHighAndLowPriceComponent {


  dataSource: any;

  displayedColumns: string[] = [ "Symbol","PY","WH","Mode","High","Low","Market","Ch"];

  async ngOnInit () {

    const ELEMENT_DATA: PeriodicElement[] = [
      {Symbol: 'LWBP4',PY: 2015, WH: 'AddisAbaba',Mode: 'Closed', High:68.69, Low:68.58,Market:'Closed',Ch:1000},
      {Symbol: 'LUGD2', PY: 2022, WH: 'AddisAbaba', Mode: 'Closed' , High:68.69 ,Low:68.58 ,Market:'Closed' ,Ch:9500},
      {Symbol: 'LWBP3', PY: 2015, WH: 'AddisAbaba', Mode: 'Online' , High:68.69 ,Low:68.58 ,Market:'Closed' ,Ch:9500},
      {Symbol: 'LWBP5', PY: 2020, WH: 'AddisAbaba', Mode: 'Online' , High:68.69 ,Low:68.58 ,Market:'Closed' ,Ch:9500},
      {Symbol: 'LUGD2', PY: 2017, WH: 'AddisAbaba', Mode: 'Online' , High:68.69 ,Low:68.58 ,Market:'Closed' ,Ch:9500},
      {Symbol: 'LUSH5', PY: 2023, WH: 'AddisAbaba', Mode: 'Closed' , High:68.69 ,Low:68.58 ,Market:'Closed' ,Ch:9500},
    
    ];

    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }

}
