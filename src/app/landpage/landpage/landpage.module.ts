import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageComponent } from './landpage.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LandpageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LandpageModule { }
