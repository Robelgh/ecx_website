import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ECXWebsiteHome } from './ecx-website-home.component';
import { ECXWebsiteRoutingModule } from './ecx-website-routing.module';




@NgModule({
  declarations: [
    ECXWebsiteHome
  ],
  imports: [
    CommonModule,
    SharedModule,
    ECXWebsiteRoutingModule

    
  ]
})
export class EcxWebsiteModule { }
