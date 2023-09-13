import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { AboutService } from '../../_service';


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

  isDetail!:boolean;
  getResponse:any={};
  aboutus:any=[];
  parent:any=[];
  imagePath = this.service.getImagePath();
  aboutBanner:any=[]

  async ngOnInit () {

  
   
    this.isDetail=this.router.url === '/about'
    this.getResponse = (await this.service.getAll());
    this.aboutus=this.getResponse.data;
    this.getResponse=(await this.service.getParent());
    this.parent=this.getResponse.data;
    this.aboutBanner.push(this.parent)
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
 
}




