import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcxWebsiteComponent } from './apps/ecx_website/ecx-website/ecx-website.component';



const routes: Routes = [
  {path:'',component:EcxWebsiteComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
