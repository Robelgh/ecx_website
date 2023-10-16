import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { AboutService } from '../../_service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service:AboutService
    ){}

  isHome!:boolean;
  isAbout!:boolean;
  isDetail!:boolean;
  getResponse:any={};
  params:any;
  data:any={};
  aboutus:any=[];
  parent:any=[];
  imagePath = this.service.getImagePath();
  aboutBanner:any=[]

  orderObj!: {};

  async ngOnInit () {

 
    
   
 

    this.route.params.subscribe(async params => {

     

      this.isHome=this.router.url == '/'
      this.isAbout=this.router.url === '/about'


      this.getResponse = (await this.service.getAll());
      this.aboutus=this.getResponse.data;

      this.getResponse=(await this.service.getParent());
      this.parent=this.getResponse.data;
      this.aboutBanner.push(this.parent);

      this.route.queryParamMap
      .subscribe(async (params) => {
        if(params.get('detail') != null ||  params.get('detail') != undefined) {
          this.data= await this.aboutus.filter((a:any)=> a.title === params.get('detail'))[0];
        }
        else
        {
          this.data=this.parent
        }        
      }
    );
    
 
    })   
 }

  menuExpanded = -1;
  //collpaseExpanded = false;
 
   toggleMenu(index:number) {
     setTimeout(() => {    
       if(index === this.menuExpanded) this.menuExpanded = -1;
       else this.menuExpanded = index;
 
       console.log("index" + index)
       console.log("menuexpanded" + this.menuExpanded)
     }, 0);
   }

   detailChange(){
    console.log("Detail Change")
   }
 
}




