import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {BannerCarousel} from '../../../_service'

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css']
})
export class BannerCarouselComponent {

  getResponse:any={};
  bannerCarousel:any=[];
  imagePath = this.service.getImagePath();

  constructor(private service:BannerCarousel,private router: Router) {}
  
  async ngOnInit() {

    this.getResponse = (await this.service.getAll());
     this.bannerCarousel=this.getResponse.data;
    console.log(this.bannerCarousel)
  
}

}
