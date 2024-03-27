import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  @Input() title: any;
  @Input() parent:any;
  @Input() image: any;
  

  imageName:any;


  imagePath = 'https://localhost:7284/image/';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ){}

  async ngOnInit ()
  {
     this.imageName=  this.imagePath + this.image
  }

  onNavigate(navigateto : string) {
    this.router.navigate([navigateto]);
  } 
  

  

}
