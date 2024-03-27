import { Component, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaCenterService,BannerCarousel } from '../../_service';
import { HttpClient } from '@angular/common/http';


// @Directive({
//   selector: '[media-center]'
// })

@Component({
  selector: 'app-media-center',
  templateUrl: './media-center.component.html',
  styleUrls: ['./media-center.component.css'],
})


export class MediaCenterComponent {
  
  isHome!: boolean;
  isService!: boolean;
  isDetail!: boolean;
  loading!: boolean;

  pdfsrc!:string;
  title!:string;
  selectedImage!: string; // Initial selected image
  getResponse: any = {};
  galleryData: any = [];
  params: any;
  data: any = {};
  PageCatagories: any = [1,2,3,4];
  pages:any =[];
  publications: any = [];
  trainingDocument:any=[];
  brouchure:any=[];
  research:any=[];
  announcements:any=[];
  news:any=[];
  imagePath = this.service.getImagePath();
  downloadroute: string="";
  media: any = [];
  orderObj!: {};


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MediaCenterService,
    private galleryService: BannerCarousel,
    private http: HttpClient,
    private el: ElementRef,
  ) {}

  async ngOnInit() {

    this.route.params.subscribe(async (params) => {
      
      this.title = "media"
      this.getResponse = await this.service.getAllPublication();
      this.publications = this.getResponse.data;

      this.getResponse = await this.service.getAllTrainingDocument();
      this.trainingDocument = this.getResponse.data;

      this.getResponse = await this.service.getAllBrouchure();
      this.brouchure = this.getResponse.data;
      
      this.getResponse = await this.service.getAllResearch();
      this.research = this.getResponse.data;

      this.getResponse = await this.service.getAllAnnouncements();
      this.announcements = this.getResponse.data;

      this.getResponse = await this.service.getAllNews();
      this.news = this.getResponse.data;

      this.getResponse = (await this.galleryService.getAll());
      this.getResponse.data = this.getResponse.data.filter((x:any)=> x.isCarousel
      == false);
      this.galleryData=this.getResponse.data;
      this.galleryData.length > 0 ?  this.selectedImage= this.galleryData[0].imgName:null
    });
  }

  DownloadFile(filenameorginal:string ,filenamenew:string):void{

    // this.downloadroute=this.service.downloadFile(filenameorginal,filenamenew) 
    console.log("hello")
  }

  ShowImage(imageName:string ,):void{
       this.selectedImage = imageName;
  }

}
