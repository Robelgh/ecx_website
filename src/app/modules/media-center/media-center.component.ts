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
  tempData:any=[]
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
  detail: any=[]
  parentTitle: any = localStorage.getItem('lang')== "አማ"? 'ሚድያ': 'media';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MediaCenterService,
    private galleryService: BannerCarousel,
    private http: HttpClient,
    private el: ElementRef,
  ) {}

  async ngOnInit() {
    const lang= localStorage.getItem('langId')
    this.route.params.subscribe(async (params) => {
      
      this.getResponse = await this.service.getAllPublication();
      this.getResponse= await this.getResponse.data.filter(
        (a: any) => a.langId === lang
      )
      this.publications = this.getResponse;

      this.getResponse = await this.service.getAllTrainingDocument();
      this.getResponse= await this.getResponse.data.filter(
        (a: any) => a.langId === lang
      )
      this.trainingDocument = this.getResponse;

      this.getResponse = await this.service.getAllBrouchure();
      this.getResponse= await this.getResponse.data.filter(
        (a: any) => a.langId === lang
      )
      this.brouchure = this.getResponse;
      
      this.getResponse = await this.service.getAllResearch();
      this.getResponse= await this.getResponse.data.filter(
        (a: any) => a.langId === lang
      )
      this.research = this.getResponse;

      this.getResponse = await this.service.getAllAnnouncements();
      this.getResponse= await this.getResponse.data.filter(
        (a: any) => a.langId === lang
      )
      this.announcements = this.getResponse;


      this.getResponse = (await this.galleryService.getAll());
      this.getResponse.data = this.getResponse.data.filter((x:any)=> x.isCarousel
      == false);
      this.galleryData=this.getResponse.data;
      this.galleryData.length > 0 ?  this.selectedImage= this.galleryData[0].imgName:null

      this.getResponse = await this.service.getAllNews();
      this.getResponse= await this.getResponse.data.filter(
        (a: any) => a.langId === lang
      )
      this.news=this.getResponse;

      this.route.queryParamMap.subscribe(async (params) => {
        if (
          params.get('pages') != null ||
          params.get('pages') != undefined
        ) {
          this.getResponse = await this.service.getAllNews();
          this.pages = this.getResponse.data;
          var detailData = await this.getResponse.data.filter(
            (a: any) => a.title === params.get('pages')
          )[0];
          this.data = await this.getResponse.data.filter(
            (a: any) => a.type === detailData.type
          );
          this.detail.push(detailData)
          console.log(this.detail)
          this.loading = false;
        }
        else
        {
          this.detail=[]
        }
      });
    });
  }

  DownloadFile(filenameorginal:string ,filenamenew:string):void{

    this.downloadroute=this.service.downloadFile(filenameorginal,filenamenew) 
  }

  ShowImage(imageName:string ,):void{
       this.selectedImage = imageName;
  }

}
