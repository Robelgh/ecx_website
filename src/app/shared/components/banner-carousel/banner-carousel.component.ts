

import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {BannerCarousel} from '../../../_service';

interface carouselImage
{
  imageSrc:string;
  imageAlt:string;
}


interface carouselImage
{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css']
})
export class BannerCarouselComponent implements OnInit {
  
  selectedIndex=0;
  @Input() images:any=[];
  @Input() indicators=true;
  @Input() controls= true;
  @Input() autoSlide= false;
  @Input() slideInterval=10000;

  getResponse:any={};
  bannerCarousel:any=[];
  imagePath = this.service.getImagePath();
  loading!:boolean

  constructor(private service:BannerCarousel,private router: Router) {}
  
  async ngOnInit() {

    this.loading = true;
    this.getResponse = (await this.service.getAll());
    this.bannerCarousel=this.getResponse.data;
    this.getResponse.length ? this.loading=false : this.loading=true;


    if(this.autoSlide)
    {
      this.images=
      this.autoslideImages();
    }
}


   autoslideImages():  void{
      setInterval(()=>
      {
        this.onNextClick();
      },this.slideInterval)
     }

  selectImage(index:number): void 
  {
    this.selectedIndex=index;
  }

  onPrevClick():void{

    console.log("hello")
    if(this.selectedIndex === 0)
    {
      this.selectedIndex = this.bannerCarousel.length - 1
    }
    else
    {
      this.selectedIndex--;
    }
  }

  onNextClick():void {

    if(this.selectedIndex === this.bannerCarousel.length - 1)
    {
      this.selectedIndex = 0
    }
    else
    {
      this.selectedIndex++;
    }

  }

}
