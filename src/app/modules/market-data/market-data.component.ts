import { Component, ViewChild, OnDestroy, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  CommoditiesService,
  GenericService,
  MasterIdGetter,
  MarketDatatService,
} from '../../_service';
import { ChangeDetectorRef } from '@angular/core';

export interface PeriodicElement {
  symbol: string;
  warehouseCode: string;
  productionYear: number;
  dayHigh: number;
  dayLow: number;
  previousClosing: number;
  closingPrice: number;
  change: number;
}

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css'],
})
export class MarketDataComponent {
  isHome!: boolean;
  loading!: boolean;
  showdailyhighandlow: boolean = false;
  showtabulardata: boolean = false;
  showgrapgh: boolean = false;
  showstatic: boolean = false;
  title!: any;
  dataSource: any;
  commodity: any = [];
  commodityMarketData: any = {};
  symbolMarketData: any = [];
  filteredsymbolData: any = [];
  commodityFirst: any = null;
  data: any = {};
  splitStrings: any = [];
  PageCatagories: any = [];
  pages: any = [];
  getResponse: any = {};
  parent: any = [];
  parentTitle: any =localStorage.getItem('lang') == 'አማ' ? 'የግብይት መረጃ' : 'market data';
  imagePath = this.commodityService.getImagePath();

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Symbol',
    'WCODE',
    'ProductionYear',
    'DayHigh',
    'DayLow',
    'PreviousClosing',
    'ClosingPrice',
    'Change',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MarketDatatService,
    private commodityService: CommoditiesService,
    private cdr: ChangeDetectorRef,
    private genericservice: GenericService,
    private masterIdGetter: MasterIdGetter
  ) {}

  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  async ngOnInit() {
    this.isHome = this.router.url == '/';

    this.commodity = await this.commodityService.getAll();
    this.commodity.data.length > 0
      ? (this.commodityFirst =
          this.commodity.data[this.commodity.data.length - 1].name)
      : (this.commodityFirst = null);

    this.route.params.subscribe(async (params) => {
      // this.loading = true;
      this.isHome = this.router.url == '/';

      switch (localStorage.getItem('lang')) {
        case 'eng':
          this.getResponse = await this.masterIdGetter.getParent('ecx-academy');
          break;
        case 'አማ':
          this.getResponse = await this.masterIdGetter.getParent('የግብይት መረጃ');
          break;
        default:
      }
      this.parent = this.getResponse[0];

      this.getResponse = await this.genericservice.getAllPageCatagories(
        this.parent.id
      );
      this.PageCatagories = this.getResponse.data;

      this.route.queryParamMap.subscribe(async (params) => {
        if(params.get('histograph') != null || params.get('histograph') != undefined) {
          this.showgrapgh=true;
        } 
        if (
          params.get('data') != undefined ||
          params.get('data') != null
        ) {
          this.showstatic = true;
          if (params.get('data') === 'Dailyhighandlow') {
            this.showtabulardata = false;
            this.showdailyhighandlow = true;
            this.showgrapgh = false;
            this.title =this.title = localStorage.getItem('lang') == 'አማ' ? 'የቀኑ ከፍተኛና ዝቅተኛ' : 'Daily high and low';
          }
          if (params.get('data') === 'Tableau') {
            this.showdailyhighandlow = false;
            this.showtabulardata = true;
            this.showgrapgh = false;
            this.title = localStorage.getItem('lang') == 'አማ' ? 'ታብሉ' : 'Tableau';
          }
        }
        if (params.get('detail') != null || params.get('detail') != undefined) {
          this.showtabulardata = false;
          this.showdailyhighandlow = false;
          this.showgrapgh = false;
          this.showstatic = false;
          this.data = await this.PageCatagories.filter(
            (a: any) => a.title === params.get('detail')
          )[0];
          this.getResponse = await this.genericservice.getAllPage(this.data.id);
          this.pages = this.getResponse.data;
          this.loading = false;
        } else if (
          params.get('pages') != null ||
          params.get('pages') != undefined
        ) {
          this.showtabulardata = false;
          this.showdailyhighandlow = false;
          this.showgrapgh = false;
          this.showstatic = false;
          this.splitStrings = params.get('pages')?.split(',');
          this.getResponse = await this.genericservice.getAllPage(
            this.splitStrings[1]
          );
          this.pages = this.getResponse.data;
          this.data = await this.pages.filter(
            (a: any) => a.title === this.splitStrings[0]
          )[0];
        } else {
          this.data = this.parent;
          this.loading = false;
        }
      });
    });
  }

  assignCommodity(commodity: string) {
    this.commodityFirst = commodity;

    console.log(this.commodityFirst);
  }
}
