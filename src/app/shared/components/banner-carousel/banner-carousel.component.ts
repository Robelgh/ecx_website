import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {BannerCarousel} from '../../../_service'


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

  @Input() images:carouselImage[] = []
  @Input() indicators=true;
  @Input() control= true;

  selectedIndex=0;

  ngOnInit(): void {

    console.log(this.images)
    
  }

  selectImage(index:number): void 
  {
    this.selectedIndex=index;
  }



//   getResponse:any={};
//   bannerCarousel:any=[];
//   imagePath = this.service.getImagePath();

//   constructor(private service:BannerCarousel,private router: Router) {}
  
//   async ngOnInit() {

//     this.getResponse = (await this.service.getAll());
//      this.bannerCarousel=this.getResponse.data;
//     console.log(this.bannerCarousel)
  
// }

}
