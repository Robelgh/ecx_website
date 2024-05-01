import {Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Branches } from '../../../_service';

interface Marker {
  lat: number;
  lng: number;
  title?: string;
  type?: string;
  description?: string;
}


@Component({
  selector: 'app-branches-map',
  templateUrl: './branches-map.component.html',
  styleUrls: ['./branches-map.component.css']
})
export class BranchesMapComponent implements OnInit {

  constructor(
    private service: Branches
  ){}

  @ViewChild(MapInfoWindow) infoWindow:MapInfoWindow |  undefined;
  zoom = 8; // Adjust zoom level as needed
  center = { lat: -34.397, lng: 150.644 };
  branchData: Marker[]=[];
  response:any=[];

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };


  markers: Marker[] = [
    { lat: -34.397, lng: 150.644, title: "Marker 1" },
    { lat: -33.868, lng: 151.209, title: "Marker 2" },
    // ... Add more markers here
  ];

 
 
  async ngOnInit() {
        this.response= await this.service.getAllBranches();
        console.log(this.response)
        this.branchData=this.response.data.map((result:any) => ({ 
        lat: Number(result.latitude), lng: Number(result.longitude), title:result.description}));

        console.log(this.branchData)
        console.log(this.markers)
       
        navigator.geolocation.getCurrentPosition((position) => {
  
    });
  }


  openInfoWindow(marker: MapMarker)
  {
    if(this.infoWindow != undefined)
      this.infoWindow.open(marker);
  }
 
  zoomIn() {
    if (this.zoom < 15) this.zoom++;
  }
 
  zoomOut() {
    if (this.zoom > 8) this.zoom--;
  }

 


}
