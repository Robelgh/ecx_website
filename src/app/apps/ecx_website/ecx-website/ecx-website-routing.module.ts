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
import { LoginComponent } from './../../../shared/components/login/login.component';
import { SignupComponent } from 'src/app/shared/components/signup/signup.component';

const routes: Routes = [
    {
        path: '', component: ECXWebsiteHome,
        children: [
            {path: '', component: EcxWebsiteComponent},
            { path: 'about', component: AboutUsComponent },
            { path: 'service', component: ServiceComponent },
            { path: 'about/:detail', component: AboutUsComponent },
            { path: 'service/:detail', component: ServiceComponent },
            { path: 'marketdata', component: MarketDataComponent },
            { path: 'marketdata/histogram', component: MarketDataComponent },
            { path: 'Media',component:MediaCenterComponent},
            { path: 'Announcements',component:AnnouncementsComponent},
            { path: 'Resources',component:ResourcesComponent},
            { path: 'packages' ,component:PackagesComponent},
            { path: 'checkout' ,component:CheckoutComponent},
            { path: 'login',component:LoginComponent},
            { path: 'signup',component:SignupComponent}
            
            
            // { path: 'service/detail', component: ServiceDetailComponent },
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
         ],
    exports: [RouterModule]
})
export class ECXWebsiteRoutingModule { }