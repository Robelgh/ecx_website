//app.component.ts
import { Component ,OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { CommoditiesService, MarketDatatService } from '../../../_service';
import { StockChart } from 'angular-highcharts';


@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private service: GenericService,
    private marketDataService: MarketDatatService,
  ) {}

  stock!: StockChart;
  symbolMarketData: any=[];
  stockData:any=[];
  symbol!: string;

 async ngOnInit() {

    this.route.queryParamMap.subscribe(async (params) => {
      if (params.get('histograph') != null || params.get('histograph') != undefined)
        {
          this.symbol=params.get('histograph') as string;
          const symbol=(params.get('histograph')) as string
           this.symbolMarketData=await this.marketDataService.GetSymbolMarketData(symbol)
           this.stockData = this.symbolMarketData.map((item: any) => {
            const date = Date.parse(item.tradeDate);
            return [date, item.closingPrice];
          });

     
 
    this.stock = new StockChart({
      rangeSelector: {
        selected: 1
      },
      title: {
        text: this.symbol +'  Stock Price'
      },
      series: [{
        type: 'line', 
        tooltip: {
          valueDecimals: 2
        },
        name: this.symbol,
        data:  this.stockData
      }]
    });
             
  }
});

  }
  }


