import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcxWebsiteComponent } from './apps/ecx_website/ecx-website/ecx-website.component';
import { EcxBlogComponent } from './apps/ecx-blog/ecx-blog.component';



const routes: Routes = [
  {path:'',component:EcxWebsiteComponent },
  {path:'news',component:EcxBlogComponent}

 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
