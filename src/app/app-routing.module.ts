import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandpageComponent } from './landpage/landpage/landpage.component';
import { BlogLandComponent } from './blog/blog-land/blog-land.component';

const routes: Routes = [
  {path:'',component:LandpageComponent },
  {path:'blog',component:BlogLandComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
