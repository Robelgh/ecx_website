import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const EcxWebsiteModule = () => import('./apps/ecx_website/ecx-website/ecx-website.module').then(x => x.EcxWebsiteModule);
const EcxBlogModule = () => import('./apps/ecx-blog/ecx-blog.module').then(x => x.EcxBlogModule);



const routes: Routes = [
  {path:'',loadChildren:EcxWebsiteModule },
  {path:'news',loadChildren:EcxBlogModule},
  {path: '**', redirectTo: '' }
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
