import { Component,OnDestroy,OnInit,Input } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Observable,Observer, firstValueFrom } from 'rxjs';
import { AboutService } from '../../_service';


export interface ExampleTab {
  label: string;
  content: string;
}


export interface PeriodicElement {
  Symbol: string;
  Month: string;
  Open: number;
  High: number;
  Low:number;
  Last:number;
  Changes:number;
  Time:number;
  Links: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {Symbol: 'cotton23', Month: 'Hydrogen', Open: 1.0079, High: 68.90 , Low:68.69 ,Last:68.58 ,Changes:0.23 ,Time:23.20,Links:"link"},
  {Symbol: 'cotton23', Month: 'Hydrogen', Open: 1.0079, High: 68.90 , Low:68.69 ,Last:68.58 ,Changes:0 ,Time:23.20,Links:"link"},
  {Symbol: 'cotton23', Month: 'Hydrogen', Open: 1.0079, High: 68.90 , Low:68.69 ,Last:68.58 ,Changes:0.23 ,Time:23.20,Links:"link"},
  {Symbol: 'cotton23', Month: 'Hydrogen', Open: 1.0079, High: 68.90 , Low:68.69 ,Last:68.58 ,Changes:-2 ,Time:23.20,Links:"link"},
  {Symbol: 'cotton23', Month: 'Hydrogen', Open: 1.0079, High: 68.90 , Low:68.69 ,Last:68.58 ,Changes:3 ,Time:23.20,Links:"link"},
];


@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css'],
})

export class MarketDataComponent {

  isHome!:boolean;
  isMarket!:boolean;
  title!:any;

  asyncTabs: Observable<ExampleTab[]>;
  dataSource: any;
  displayedColumns: string[] = [ "Symbol", "Month","Open","High","Low","Last",
  "Changes","Time","Links"];

  lineChart ={
    labels : [ "day1", "day2","day3","day4","day5","day6","day7", "day8", "day9","day10",
               "day11", "day12","day13","day14","day15","day16","day17", "day18", "day19","day20",
               "day21", "day22","day23","day24","day25","day26","day27", "day28", "day29","day30",],
    datasets : [
      {
        data :[10,20,30,40,50,5,80,4,56,7,4,8,9,10,3,10,20,30,40,50,5,80,4,56,7,4,8,9,10,3],
        label :"Closing price for Coffee"
      }
    ]
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service:AboutService
  ) {



    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Coffee', content: 'Content 1'},
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


    this.isHome=this.router.url == '/'
    this.isMarket=this.router.url === '/market'
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.title="Market data"


  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
   }

}
