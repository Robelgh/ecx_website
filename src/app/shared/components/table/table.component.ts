import { Component,ViewChild,OnDestroy, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommoditiesService, MarketDatatService } from '../../../_service';
import { ChangeDetectorRef } from '@angular/core';


export interface PeriodicElement {
  symbol: string;
  warehouseCode: string;
  productionYear:number;
  dayHigh:number;
  dayLow:number;
  previousClosing:number;
  closingPrice:number;
  change:number;
  graph:number;
}

export interface PeriodicElementforDailyHighLow {
  symbol: string;
  warehouseCode: string;
  productionYear:number;
  mode:string;
  dayHigh:number;
  dayLow:number;
  market:string;
  change:number;

}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {

  @Input() commodityChoosed: any;
  @Input() isTabular: boolean=false;
  @Input() isDailyHighLow: boolean=false;


  isHome!: boolean;
  loading!: boolean;
  title!: any;
  dataSource: any;
  commodity: any=[];
  commodityMarketData: any={}; 
  commodityFirst:any=null;
  imagePath = this.commodityService.getImagePath();

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

 displayedColumns: string[] = [
    'Symbol',
    'TradeDate',
    'WCODE',
    'ProductionYear',
    'DayHigh',
    'DayLow',
    'PreviousClosing',
    'ClosingPrice',
    'Change',
    'Graph'
  ];
  displayedColumns2: string[] = [
    'Symbol',
    'TradeDate',
    'WCODE',
    'ProductionYear',
    'DayHigh',
    'DayLow',
    'market',
    'Change',
      ];
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MarketDatatService,
    private commodityService: CommoditiesService,
    private cdr: ChangeDetectorRef,
  ) {
   
  }

  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  async ngOnChanges () {

    // this.dataSource.paginator = this.paginator;
    
    if(this.isTabular && !this.isDailyHighLow)
      {
        this.commodity= await this.commodityService.getAll()
        var  filteredNamesAndAges=[]
        this.dataSource=[];
        this.loading= true;
        // console.log(this.commodityChoosed)
        this.commodityMarketData= await this.service.GetCommodityMarketData(this.commodityChoosed)
        this.loading= false;
    
       filteredNamesAndAges = this.commodityMarketData.map((commodity:any) => ({ 
        symbol: commodity.symbol, warehouseCode: commodity.warehouseCode,
        productionYear:commodity.productionYear,dayHigh:commodity.dayHigh,
        dayLow:commodity.dayLow,previousClosing:commodity.previousClosing,
        closingPrice:commodity.closingPrice,change:commodity.change}));
    
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.commodityMarketData);
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
      }
    else if(!this.isTabular && this.isDailyHighLow)
      {
        this.commodity= await this.commodityService.getAll()
        var  filteredNamesAndAges=[]
        this.dataSource=[];
        this.loading= true;
        // console.log(this.commodityChoosed)
        this.commodityMarketData= await this.service.GetRealtimeData()
        this.loading= false;
    
       filteredNamesAndAges = this.commodityMarketData.map((commodity:any) => ({ 
        symbol: commodity.symbol, warehouseCode: commodity.warehouseCode,
        productionYear:commodity.productionYear,dayHigh:commodity.dayHigh,
        dayLow:commodity.dayLow,change:commodity.change}));
        
        this.dataSource = new MatTableDataSource<PeriodicElementforDailyHighLow>(this.commodityMarketData);
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
      }
     
 
  }



}
