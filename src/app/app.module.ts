import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EcxWebsiteModule } from './apps/ecx_website/ecx-website/ecx-website.module';
import { EcxWebsiteComponent } from './apps/ecx_website/ecx-website/ecx-website.component';
import { SharedModule } from './shared/shared.module';
import { MarketComponentsModule } from './modules/market-components/market-components.module';

import { HistogramComponent } from './modules/market-components/histogram/histogram.component';
import { MarketDataComponent } from './modules/market-data/market-data.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { CommoditiesComponent } from './modules/commodities/commodities.component';
import { ServiceComponent } from './modules/service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MediaCenterComponent } from './modules/media-center/media-center.component';
import { ResourcesComponent } from './modules/resources/resources.component';
import { PackagesComponent } from './modules/packages/packages.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
// import { WarehouseServiceComponent } from './modules/warehouse/warehouse-service/warehouse-service.component';

import { RegistrationComponent } from './modules/registration/registration.component';
import { CustomerSupportComponent } from './modules/customer-support/customer-support.component';

@NgModule({
  declarations: [
    AppComponent,
    EcxWebsiteComponent,
    MarketDataComponent,
    AboutUsComponent,
    CommoditiesComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ServiceComponent,
    MediaCenterComponent,
    ResourcesComponent,
    PackagesComponent,
    CheckoutComponent,
    // WarehouseServiceComponent,

    RegistrationComponent,
    CustomerSupportComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EcxWebsiteModule,
    SharedModule,
    MarketComponentsModule,
    NgChartsModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    
    CarouselModule
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
  bootstrap: [AppComponent],
  exports: [
    CommoditiesComponent,
    ServiceComponent,
    MediaCenterComponent,
    ResourcesComponent,
    PackagesComponent,
    CheckoutComponent,
    // WarehouseServiceComponent,
  
    RegistrationComponent,
  ],
})
export class AppModule {}
