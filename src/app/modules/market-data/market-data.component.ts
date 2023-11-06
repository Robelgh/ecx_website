import { Component,OnDestroy,OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {NgFor} from '@angular/common';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Observable,Observer, firstValueFrom, Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AboutService } from '../../_service';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

export interface ExampleTab {
  label: string;
  content: string;
}


export interface PeriodicElement {
  contrat: string;
  tradeDate: string;
  warehouse: string;
  productionYear: number;
  previousClosingPrize:number;
  closingPrize:number;
  maxPrice:number;
  minPrice:number;
  TradeVolume: number;
  Links:string

}




@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css'],
})

export class MarketDataComponent {

  isHome!:boolean;
  isMarket!:boolean;
  title!:any;

  a!:number;
  b!:number;
  c!:number;
  d!:number;
  e!:number;
  f!:number;

  switcher!:any;

  generatedNumber!: number;

  asyncTabs: Observable<ExampleTab[]>;
  dataSource: any;

  selectedValue!: string;
  selectedCar!: string;

  foods: Food[] = [
    {value: 'Weakly', viewValue: 'Weakly'},
    {value: 'Monthly', viewValue: 'Monthly'},
    {value: '6-month', viewValue: '6-month'},
    {value: 'Anually', viewValue: 'Anually'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

  dataOne :PeriodicElement[] = [
    {contrat: 'LWBP4', tradeDate: '9/26/2023', warehouse: 'SC', productionYear: 2015 , previousClosingPrize:12700 ,closingPrize:3559 ,maxPrice:3915 ,minPrice:3385,TradeVolume:2120,Links:"link"},
    {contrat: 'LWBP3', tradeDate: '9/26/2023', warehouse: 'TP', productionYear: 2015 , previousClosingPrize:4600 ,closingPrize:4333 ,maxPrice:4321 ,minPrice:4157,TradeVolume:799,Links:"link"},
    {contrat: 'LUSH5', tradeDate: '9/26/2023', warehouse: 'TP', productionYear: 2015, previousClosingPrize:4329 ,closingPrize:1500 ,maxPrice:2000 ,minPrice:2000,TradeVolume:1050,Links:"link"},
    {contrat: 'LUGD2', tradeDate: '9/26/2023', warehouse: 'TP', productionYear: 2015, previousClosingPrize:4305 ,closingPrize:3000 ,maxPrice:2601 ,minPrice:2601,TradeVolume:1433,Links:"link"},
    {contrat: 'LUSH5', tradeDate: '9/26/2023', warehouse: 'SC', productionYear: 2015, previousClosingPrize:2650 ,closingPrize:3630 ,maxPrice:3551 ,minPrice:3551,TradeVolume:600,Links:"link"},
    {contrat: 'LUGD2', tradeDate: '9/26/2023', warehouse: 'SC', productionYear: 2015, previousClosingPrize:3039 ,closingPrize:2470 ,maxPrice:2409 ,minPrice:2360,TradeVolume:1650,Links:"link"},
  ]

  dataTwo :PeriodicElement[] = [
    {contrat: 'WHGS2', tradeDate: '9/26/2023', warehouse: 'DS', productionYear: 2015 , previousClosingPrize:12700 ,closingPrize:11500 ,maxPrice:11500 ,minPrice:11500,TradeVolume:317,Links:"link"},
    {contrat: 'RWPALG', tradeDate: '9/26/2023', warehouse: 'NZ', productionYear: 2015 , previousClosingPrize:4600 ,closingPrize:4600 ,maxPrice:4600 ,minPrice:4600,TradeVolume:59,Links:"link"},
    {contrat: 'RWPALG', tradeDate: '9/26/2023', warehouse: 'KM', productionYear: 2015, previousClosingPrize:4329 ,closingPrize:4300 ,maxPrice:4300 ,minPrice:4300,TradeVolume:82,Links:"link"},
    {contrat: 'LWSD2', tradeDate: '9/26/2023', warehouse: 'HW', productionYear: 2015, previousClosingPrize:4305 ,closingPrize:3700 ,maxPrice:3700 ,minPrice:3700,TradeVolume:169,Links:"link"},
    {contrat: 'LWJM2', tradeDate: '9/26/2023', warehouse: 'JW', productionYear: 2015, previousClosingPrize:2650 ,closingPrize:2700 ,maxPrice:2700 ,minPrice:2700,TradeVolume:450,Links:"link"},
    {contrat: 'LWBP4', tradeDate: '9/26/2023', warehouse: 'SC', productionYear: 2015, previousClosingPrize:3039 ,closingPrize:3155 ,maxPrice:3155 ,minPrice:3155,TradeVolume:176,Links:"link"},
  ]

  dataHolder! : PeriodicElement [];


  displayedColumns: string[] = [ "contrat", "tradeDate","warehouse","productionYear","previousClosingPrize","closingPrize",
  "maxPrice","minPrice","TradeVolume","Links"];

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
    private service:AboutService,
    // yourSubscription: Subscription
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

    interval(1000).subscribe(x => {
      this.generateNumber();

    });

    

  

    this.isHome=this.router.url == '/'
    this.isMarket=this.router.url === '/market'
    this.title="Market data";



    this.route.params.subscribe(async params => {

       

      this.isHome=this.router.url == '/'

      this.route.queryParamMap
      .subscribe(async (params) => {
        if(params.get('detail') != null ||  params.get('detail') != undefined) {
         console.log(params.get('detail'))
         this.switcher=params.get('detail')
        }
        else
        {
         
        }        
      }
    );
    
 
    }) 

  }

  generateNumber(): void {
    this.a = Math.round(Math.random()) * 2 - 1;


    if(this.a < 0)
    {
      this.dataHolder=this.dataOne
      const ELEMENT_DATA: PeriodicElement[] = this.dataOne
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    }
    else
    {
      this.dataHolder=this.dataTwo
      const ELEMENT_DATA: PeriodicElement[] =this.dataTwo
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    }
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
   }

}
