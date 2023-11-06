import { Component,OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {CommoditiesService} from '../../_service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';


import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent{

  getResponse:any={};
  commodities:any=[];
  title!:any;
  isHome!:boolean;
  params:any;
  data:any={};
  media:any=[];
  parent:any=[];
  imagePath = this.service.getImagePath();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service:CommoditiesService
  ) {
  }

  async ngOnInit () {

 
    this.route.params.subscribe(async params => {

      this.getResponse = (await this.service.getAll());
      this.commodities=this.getResponse.data;
      this.data=this.getResponse.data;

      this.title="Media"

      console.log(this.data)

      this.route.queryParamMap
      .subscribe(async (params) => {
        if(params.get('detail') != null ||  params.get('detail') != undefined) {
          this.data= await this.media.filter((a:any)=> a.title === params.get('detail'))[0];
          console.log(params.get('detail'))
          // this.headData= await this.data[0];
          // console.log(this.data[0])
          console.log("hello")
          console.log(this.data)
        }
        else
        {
          this.data=this.parent
          console.log("hello parent")
        }        
      }
    );
    
 
    })   
 }

}

