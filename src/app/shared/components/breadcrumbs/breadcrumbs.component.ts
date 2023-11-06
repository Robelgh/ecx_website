import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  @Input() title: any;
  @Input() image: any;

  imageName:any;


  imagePath = 'https://localhost:7284/image/';

  constructor() {
  }

  async ngOnInit ()
  {
     this.imageName=  this.imagePath + this.image

     console.log(this.imageName)
  }
  

  

}
