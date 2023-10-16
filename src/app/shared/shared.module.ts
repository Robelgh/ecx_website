import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { ShortBannerComponent } from './components/short-banner/short-banner.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    BannerCarouselComponent,
    TickerComponent,
    ShortBannerComponent,
    BreadcrumbsComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    FooterComponent,
    TopbarComponent,
    BannerCarouselComponent,
    TickerComponent,
    ShortBannerComponent,
    BreadcrumbsComponent
    
  ]
})
export class SharedModule { }
