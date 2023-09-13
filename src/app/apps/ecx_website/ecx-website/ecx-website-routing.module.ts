
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECXWebsiteHome } from './ecx-website-home.component';
import { EcxWebsiteComponent } from './ecx-website.component';
import { ServiceComponent } from 'src/app/modules/service/service.component';
import { AboutUsComponent } from 'src/app/modules/about-us/about-us.component';
// import { ServiceDetailComponent } from 'src/app/modules/detailHolder/detailHolder.component';


const routes: Routes = [
    {
        path: '', component: ECXWebsiteHome,
        children: [
            {path: '', component: EcxWebsiteComponent},
            { path: 'about', component: AboutUsComponent },
            // { path: 'service/detail', component: ServiceDetailComponent },
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ECXWebsiteRoutingModule { }