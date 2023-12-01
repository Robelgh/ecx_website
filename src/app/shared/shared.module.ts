import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { ShortBannerComponent } from './components/short-banner/short-banner.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    BannerCarouselComponent,
    TickerComponent,
    ShortBannerComponent,
    BreadcrumbsComponent,
    LoginComponent,
    SignupComponent
  
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    TopbarComponent,
    BannerCarouselComponent,
    TickerComponent,
    ShortBannerComponent,
    BreadcrumbsComponent,
    LoginComponent,
    SignupComponent
    
  ]
})
export class SharedModule { }
