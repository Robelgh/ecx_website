import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { TopbarComponent } from './components/topbar/topbar.component';

import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { ShortBannerComponent } from './components/short-banner/short-banner.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './components/table/table.component';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { StockChartComponent } from './components/stock-chart/stock-chart.component';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import { BranchesMapComponent } from './components/branches-map/branches-map.component';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}

@NgModule({
  declarations: [

    TopbarComponent,
    BannerCarouselComponent,
    TickerComponent,
    ShortBannerComponent,
    LoginComponent,
    SignupComponent,
    StockChartComponent,
    BranchesMapComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    ChartModule,
    RouterModule,
    GoogleMapsModule,

    
  ],
  exports: [
    TopbarComponent,
    BannerCarouselComponent,
    TickerComponent,
    ShortBannerComponent,
    LoginComponent,
    SignupComponent,
    StockChartComponent,
    BranchesMapComponent,
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }, // add as factory to your providers
  ],
})
export class SharedModule {}
