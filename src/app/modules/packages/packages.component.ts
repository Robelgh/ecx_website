import { Component } from '@angular/core';
import {PackagesService} from '../../_service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {

  getResponse:any={};
  packages:any=[];
  title!:any;
  isHome!:boolean;
  params:any;
  data:any={};
  media:any=[];
  parent:any=[];
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service:PackagesService
  ) {
  }

  async ngOnInit () {
 
    this.getResponse = (await this.service.getpackages());
    this.packages=this.getResponse;
  
    this.title="Packages"; 
  }

  async choosePackage() 
  {
   
  }
}


