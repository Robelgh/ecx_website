import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EcxWebsiteModule } from './apps/ecx_website/ecx-website/ecx-website.module';
import { EcxWebsiteComponent } from './apps/ecx_website/ecx-website/ecx-website.component';
import { SharedModule } from './shared/shared.module';

import { MarketDataComponent } from './modules/market-data/market-data.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent} from './shared/components/footer/footer.component'
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { CommoditiesComponent } from './modules/commodities/commodities.component';
import { ServiceComponent } from './modules/service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MediaCenterComponent } from './modules/media-center/media-center.component';
import { PackagesComponent } from './modules/packages/packages.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerSupportComponent } from './modules/customer-support/customer-support.component';
import { CareerComponent } from './modules/career/career.component';

import { TableComponent } from './shared/components/table/table.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { EcxAcademyComponent } from './modules/ecx-academy/ecx-academy.component';

import { GoogleMapsModule } from '@angular/google-maps';

export function HttpLoaderFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    EcxWebsiteComponent,
    MarketDataComponent,
    AboutUsComponent,
    CommoditiesComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ServiceComponent,
    MediaCenterComponent,
    PackagesComponent,
    CheckoutComponent,
    TableComponent,
    // WarehouseServiceComponent,
    CustomerSupportComponent,
    CareerComponent,
    ContactusComponent,
    EcxAcademyComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EcxWebsiteModule,
    SharedModule,
    NgChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    GoogleMapsModule,

    TranslateModule.forRoot(
      {
          loader:{
            provide:TranslateLoader,
            useFactory:HttpLoaderFactory,
            deps:[HttpClient]
          },
      }
    ),

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
    HttpClient,
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
  bootstrap: [AppComponent],
  exports: [
    CommoditiesComponent,
    ServiceComponent,
    MediaCenterComponent,
    PackagesComponent,
    CheckoutComponent,
    CareerComponent,
    ContactusComponent,
    EcxAcademyComponent,
    // WarehouseServiceComponent,

  ],
})
export class AppModule {}
