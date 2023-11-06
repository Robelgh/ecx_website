import { Component } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { MediaCenterService } from '../../_service';

@Component({
  selector: 'app-media-center',
  templateUrl: './media-center.component.html',
  styleUrls: ['./media-center.component.css']
})
export class MediaCenterComponent {

  title!:any;
  isHome!:boolean;
  isService!:boolean;
  isDetail!:boolean;
  isSeemore!:boolean;
  getResponse:any={};
  params:any;
  data:any={};
  media:any=[];
  parent:any=[];
  imagePath = this.service.getImagePath();
  aboutBanner:any=[];
  headData:any=[];

  orderObj!: {};



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service:MediaCenterService
  ) {
  }

  async ngOnInit () {

 
    this.route.params.subscribe(async params => {

   

      this.getResponse = (await this.service.getAll());
      this.media=this.getResponse.data;
      this.title="Media"

      console.log(this.media)


      this.route.queryParamMap
      .subscribe(async (params) => {
        if(params.get('detail') != null ||  params.get('detail') != undefined) {
          this.data= await this.media.filter((a:any)=> a.title === params.get('detail'))[0];
          console.log(params.get('detail'))
          // this.headData= await this.data[0];
          // console.log(this.data[0])
          console.log("hello")
          console.log(this.data)
        }
        else
        {
          this.data=this.parent
          console.log("hello parent")
        }        
      }
    );
    
 
    })   
 }

}
