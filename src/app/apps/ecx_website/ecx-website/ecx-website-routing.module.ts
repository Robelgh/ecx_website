import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECXWebsiteHome } from './ecx-website-home.component';
import { EcxWebsiteComponent } from './ecx-website.component';
import { ServiceComponent } from 'src/app/modules/service/service.component';
import { AboutUsComponent } from 'src/app/modules/about-us/about-us.component';
import { MarketDataComponent } from 'src/app/modules/market-data/market-data.component';
import { MediaCenterComponent } from 'src/app/modules/media-center/media-center.component';
import { AnnouncementsComponent } from './../../../modules/announcements/announcements.component';
import { ResourcesComponent } from 'src/app/modules/resources/resources.component';
import { PackagesComponent } from 'src/app/modules/packages/packages.component';
import { CheckoutComponent } from 'src/app/modules/checkout/checkout.component';
// import { WarehouseServiceComponent } from 'src/app/modules/warehouse/warehouse-service/warehouse-service.component';
import { MembershipComponent } from '../../../modules/customer-support/membership/membership.component';
import { CommodityDeliveryComponent } from 'src/app/modules/customer-support/commodity-delivery/commodity-delivery.component';
import { CommodityDepositComponent } from 'src/app/modules/customer-support/commodity-deposit/commodity-deposit.component';
import { DesciplineAndEnforcementComponent } from 'src/app/modules/customer-support/descipline-and-enforcement/descipline-and-enforcement.component';
import { SaleAndBuyOrderComponent } from 'src/app/modules/customer-support/sale-and-buy-order/sale-and-buy-order.component';
import { GradingComponent } from 'src/app/modules/customer-support/grading/grading.component';
import { TradeEthicsComponent } from 'src/app/modules/customer-support/trade-ethics/trade-ethics.component';
import { TradeSettlementComponent } from 'src/app/modules/customer-support/trade-settlement/trade-settlement.component';
import { TrainingAndCertificationComponent } from 'src/app/modules/customer-support/training-and-certification/training-and-certification.component';
import { WhrFinancingComponent } from 'src/app/modules/customer-support/whr-financing/whr-financing.component';
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

      { path: 'commodity', component: CommoditiesComponent },
      { path: 'commodity/:contract', component: CommoditiesComponent },


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
