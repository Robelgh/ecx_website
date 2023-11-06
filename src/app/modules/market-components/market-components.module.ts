import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyHighAndLowPriceComponent } from './daily-high-and-low-price/daily-high-and-low-price.component';
import { DailyTradeDataComponent } from './daily-trade-data/daily-trade-data.component';
import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { ReportsComponent } from './reports/reports.component';
import { HistogramComponent } from './histogram/histogram.component';

import { MatTableModule } from "@angular/material/table"
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';


@NgModule({
  declarations: [
    DailyHighAndLowPriceComponent,
    DailyTradeDataComponent,
    HistoricalDataComponent,
    ReportsComponent,
    HistogramComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    DailyHighAndLowPriceComponent,
    DailyTradeDataComponent,
    HistoricalDataComponent,
    ReportsComponent,
    HistogramComponent
  ]
})
export class MarketComponentsModule { }
