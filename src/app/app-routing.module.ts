import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const EcxWebsiteModule = () => import('./apps/ecx_website/ecx-website/ecx-website.module').then(x => x.EcxWebsiteModule);




const routes: Routes = [
  
  {path:'',loadChildren:EcxWebsiteModule },
  // {path:'news',loadChildren:EcxBlogModule},
  {path: '**', redirectTo: '' }
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
