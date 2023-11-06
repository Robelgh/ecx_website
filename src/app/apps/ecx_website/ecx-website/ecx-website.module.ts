import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ECXWebsiteHome } from './ecx-website-home.component';
import { ECXWebsiteRoutingModule } from './ecx-website-routing.module';

import { MatTableModule } from "@angular/material/table"
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ECXWebsiteHome
  ],
  imports: [
    CommonModule,
    SharedModule,
    ECXWebsiteRoutingModule,
    MatTableModule,
    MatCardModule
    
  ]
})
export class EcxWebsiteModule { }
