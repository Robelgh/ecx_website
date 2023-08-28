import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { ShortBannerComponent } from './components/short-banner/short-banner.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    HeaderComponent,
    BannerCarouselComponent,
    TickerComponent,
    ShortBannerComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    FooterComponent,
    TopbarComponent,
    HeaderComponent,
    BannerCarouselComponent,
    TickerComponent,
    ShortBannerComponent
    
  ]
})
export class SharedModule { }
