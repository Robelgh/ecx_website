import {Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

interface Marker {
  lat: number;
  lng: number;
  title?: string; // Optional title for the marker
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translateService:TranslateService
    ){}

  
}
