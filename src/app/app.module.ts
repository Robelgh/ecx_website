import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EcxWebsiteModule } from './apps/ecx_website/ecx-website/ecx-website.module';
import { EcxWebsiteComponent } from './apps/ecx_website/ecx-website/ecx-website.component';
import { SharedModule } from './shared/shared.module';
import { MarketDataComponent } from './modules/market-data/market-data.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { CommoditiesComponent } from './modules/commodities/commodities.component';
import { EcxBlogComponent } from './apps/ecx-blog/ecx-blog.component';
import { BlogContentComponent } from './modules/blog-content/blog-content.component';
import { BlogDetailComponent } from './modules/blog-detail/blog-detail.component';
import { ServiceComponent } from './modules/service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [
    AppComponent,
    EcxWebsiteComponent,
    MarketDataComponent,
    AboutUsComponent,
    CommoditiesComponent,
    EcxBlogComponent,
    BlogContentComponent,
    BlogDetailComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    AppRoutingModule,
    EcxWebsiteModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
        CommoditiesComponent,
        BlogContentComponent,
        BlogDetailComponent,
        ServiceComponent
  ]
})
export class AppModule { }
