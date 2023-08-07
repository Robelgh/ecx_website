import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { TickerComponent } from './components/ticker/ticker.component';



@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    HeaderComponent,
    BannerCarouselComponent,
    TickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    TopbarComponent,
    HeaderComponent,
    BannerCarouselComponent,
    TickerComponent
  ]
})
export class SharedModule { }
