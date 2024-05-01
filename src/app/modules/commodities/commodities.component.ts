import { Component,OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {CommoditiesService} from '../../_service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { MediaCenterService,BannerCarousel } from '../../_service';

import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent{

  getResponse:any={};
  commodities:any=[];
  parentTitle!:any;
  isHome!: boolean;
  isDetail!: boolean;
  loading!: boolean;
  params:any;
  data:any=[];
  contract:any=[];
  parent:any=[];
  downloadroute: string="";
  imagePath = this.service.getImagePath();
  

  mydata:any=['0','1','2','3','4']

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
    private service:CommoditiesService,
    private fileService: MediaCenterService
  ) {
  }

      
  DownloadFile(filenameorginal:string ,filenamenew:string):void{
    this.downloadroute=this.fileService.downloadFile(filenameorginal,filenamenew) 
  }

  async ngOnInit () {

 
    this.route.params.subscribe(async params => {

      this.isHome = this.router.url == '/';
      this.isDetail = this.router.url === '/commodity';
      this.parentTitle="Commodity"
      this.getResponse = (await this.service.getAll());
      this.commodities=this.getResponse.data;
      this.data=this.getResponse.data;

      this.route.queryParamMap
      .subscribe(async (params) => {
        if(params.get('contract') != null ||  params.get('contract') != undefined) {
          this.data= await this.commodities.filter((a:any)=> a.name === params.get('contract'))[0]
          this.contract= await this.service.getContract(this.data.id)

          console.log(this.contract.data[0])
        }
        else
        {
          this.data=this.commodities
        }        
      }
    );
    
 
    })   
 }

}

