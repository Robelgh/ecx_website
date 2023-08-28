import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {CommoditiesService} from '../../_service';


@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent{

  getResponse:any={};
  commodities:any=[];
  imagePath = this.service.getImagePath();

  constructor(private service:CommoditiesService,private router: Router) {}
  
  async ngOnInit() {

    this.getResponse = (await this.service.getAll());
     this.commodities=this.getResponse.data;
    console.log(this.commodities)
  
}
}

