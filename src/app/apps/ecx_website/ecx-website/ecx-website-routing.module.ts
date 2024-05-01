import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECXWebsiteHome } from './ecx-website-home.component';
import { EcxWebsiteComponent } from './ecx-website.component';
import { ServiceComponent } from 'src/app/modules/service/service.component';
import { AboutUsComponent } from 'src/app/modules/about-us/about-us.component';
import { MarketDataComponent } from 'src/app/modules/market-data/market-data.component';
import { MediaCenterComponent } from 'src/app/modules/media-center/media-center.component';
import { CustomerSupportComponent } from 'src/app/modules/customer-support/customer-support.component';
import { PackagesComponent } from 'src/app/modules/packages/packages.component';
import { CheckoutComponent } from 'src/app/modules/checkout/checkout.component';
import { CareerComponent } from 'src/app/modules/career/career.component';
import { EcxAcademyComponent } from 'src/app/modules/ecx-academy/ecx-academy.component';
import {ContactusComponent} from 'src/app/modules/contactus/contactus.component';

import { LoginComponent } from './../../../shared/components/login/login.component';
import { SignupComponent } from 'src/app/shared/components/signup/signup.component';

import { CommoditiesComponent } from './../../../modules/commodities/commodities.component';

const routes: Routes = [
  {
    path: '',
    component: ECXWebsiteHome,
    children: [
      { path: '', component: EcxWebsiteComponent },

      { path: 'about', component: AboutUsComponent },
      { path: 'about/:detail', component: AboutUsComponent },
      { path: 'about/:pages', component: AboutUsComponent },

      { path: 'service', component: ServiceComponent },
      { path: 'service/:detail', component: ServiceComponent },
      { path: 'service/:pages', component: ServiceComponent },

      { path: 'media', component: MediaCenterComponent },
      { path: 'media/:detail', component: MediaCenterComponent },
      { path: 'media/:pages', component: MediaCenterComponent },

      


      { path: 'marketdata', component: MarketDataComponent },
      { path: 'marketdata/:detail', component: MarketDataComponent },
      { path: 'marketdata/:pages', component: MarketDataComponent },
      { path: 'marketdata/:data', component: MarketDataComponent },
      { path: 'marketdata/:histograph', component: MarketDataComponent },
      

      { path: 'ecx-academy', component: EcxAcademyComponent },
      { path: 'ecx-academy/:detail', component: EcxAcademyComponent },
      { path: 'ecx-academy/:pages', component: EcxAcademyComponent },


      { path: 'career', component: CareerComponent },
      { path: 'career/:detail', component: CareerComponent },
      { path: 'career/:pages', component: CareerComponent },

      { path: 'contactus', component: ContactusComponent },
      { path: 'contactus/:detail', component: ContactusComponent },
      { path: 'contactus/:pages', component: ContactusComponent },

      { path: 'commodity', component: CommoditiesComponent },
      { path: 'commodity/:contract', component: CommoditiesComponent },

      { path: 'support', component: CustomerSupportComponent },
      { path: 'support/:detail', component: CustomerSupportComponent },
      { path: 'support/:pages', component: CustomerSupportComponent },


      { path: 'packages', component: PackagesComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECXWebsiteRoutingModule {}
