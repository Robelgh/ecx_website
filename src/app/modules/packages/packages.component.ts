import { Component } from '@angular/core';



@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {

  constructor(
   
  ){}

  title!:any;

  async ngOnInit () {
    this.title="Packages";
  }

  async choosePackage() 
  {
   
  }
}


